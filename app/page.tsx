"use client"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { t, type Lang } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"
import FloatingContact from "@/components/FloatingContact"

// ── Typewriter hero ──────────────────────────────────────
const Cursor = () => <span className="blink-cursor" style={{ fontStyle: "normal" }}>|</span>

function TypewriterHero({ line1a, line1b, line2 }: { line1a: string; line1b: string; line2: string }) {
  const [l1a, setL1a] = useState("")
  const [l1b, setL1b] = useState("")
  const [l2, setL2] = useState("")
  const [phase, setPhase] = useState<"idle" | "l1a" | "l1b" | "l2" | "dot" | "static">("idle")

  const isFirstMount = useRef(true)

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false
      return
    }
    setL1a(line1a)
    setL1b(line1b)
    setL2(line2)
    setPhase("static")
  }, [line1a, line1b, line2])

  useEffect(() => {
    const alreadyDone = !!sessionStorage.getItem("intro_complete")
    const delay = alreadyDone ? 700 : 1800
    const t = setTimeout(() => setPhase("l1a"), delay)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (phase === "l1a") {
      if (l1a.length < line1a.length) {
        const timer = setTimeout(() => setL1a(line1a.slice(0, l1a.length + 1)), 55)
        return () => clearTimeout(timer)
      } else { setPhase("l1b") }
    }
    if (phase === "l1b") {
      if (l1b.length < line1b.length) {
        const timer = setTimeout(() => setL1b(line1b.slice(0, l1b.length + 1)), 55)
        return () => clearTimeout(timer)
      } else { setPhase("l2") }
    }
    if (phase === "l2") {
      if (l2.length < line2.length) {
        const timer = setTimeout(() => setL2(line2.slice(0, l2.length + 1)), 65)
        return () => clearTimeout(timer)
      } else { setPhase("dot") }
    }
    if (phase === "dot") {
      const timer = setTimeout(() => setPhase("static"), 4000)
      return () => clearTimeout(timer)
    }
  }, [phase, l1a, l1b, l2, line1a, line1b, line2])

  const dot = (
    <span className={phase === "dot" ? "blink-fast" : ""} style={{ fontStyle: "normal", fontSize: "0.7em", verticalAlign: "0em" }}>.</span>
  )
  const cls = "font-bold text-2xl sm:text-4xl md:text-6xl lg:text-[4.5rem] text-white leading-tight drop-shadow-lg"

  return (
    <h1 style={{ fontFamily: "var(--font-serif)", opacity: phase === "idle" ? 0 : 1, transition: "opacity 0.3s ease" }}>
      {/* Desktop: línea 1a + 1b en el mismo bloque */}
      <span className={`hidden sm:block ${cls}`}>
        {l1a}{phase === "l1a" && <Cursor />}{l1b.length > 0 && " "}{l1b}{phase === "l1b" && <Cursor />}
      </span>
      {/* Móvil: línea 1a */}
      <span className={`block sm:hidden ${cls}`}>
        {l1a}{phase === "l1a" && <Cursor />}
      </span>
      {/* Móvil: línea 1b */}
      <span className={`block sm:hidden ${cls}`}>
        {l1b}{phase === "l1b" && <Cursor />}
      </span>
      {/* Línea 2: igual en ambos */}
      <span className={`block italic ${cls}`} style={{ minHeight: "1.2em" }}>
        {l2}
        {phase === "l2" && <Cursor />}
        {(phase === "dot" || phase === "static") && dot}
      </span>
    </h1>
  )
}

// ── Animaciones de scroll ────────────────────────────────
function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

function useCounter(end: number, duration: number, enabled: boolean) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!enabled || end === 0) return
    const t0 = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * end))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, enabled])
  return val
}

function FadeIn({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  const { ref, inView } = useInView()
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : "translateY(22px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

function WhyUsCarousel({ lang }: { lang: Lang }) {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState<"next" | "prev">("next")
  const [animating, setAnimating] = useState(false)

  const cards = [
    { img: "/fotos/multi.jpg",        titleKey: "home.whyus.multilingual.title", descKey: "home.whyus.multilingual.desc",  objectPos: "center" },
    { img: "/fotos/excelencia.jpg",   titleKey: "home.whyus.excellence.title",   descKey: "home.whyus.excellence.desc",    objectPos: "center" },
    { img: "/fotos/debate.png",       titleKey: "home.whyus.personalized.title", descKey: "home.whyus.personalized.desc",  objectPos: "center" },
    { img: "/fotos/edu.jpeg",         titleKey: "home.whyus.values.title",       descKey: "home.whyus.values.desc",        objectPos: "center 33%" },
  ]

  function go(idx: number, direction: "next" | "prev") {
    if (animating) return
    setDir(direction)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, 350)
  }

  const prev = () => go((current - 1 + cards.length) % cards.length, "prev")
  const next = () => go((current + 1) % cards.length, "next")

  const slideIn  = dir === "next" ? "translateX(40px)"  : "translateX(-40px)"
  const slideOut = dir === "next" ? "translateX(-40px)" : "translateX(40px)"

  return (
    <>
      {/* ── Móvil: scroll horizontal con tarjetas estilo noticias ── */}
      <div
        className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-6 pb-5"
        style={{ scrollbarWidth: "none", scrollPaddingInline: "10vw" }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="snap-center shrink-0 bg-white rounded-2xl overflow-hidden border border-[var(--border)]"
            style={{
              width: "78vw",
              marginLeft:  i === 0 ? "10vw" : 0,
              marginRight: i === cards.length - 1 ? "10vw" : 0,
            }}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={card.img}
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: card.objectPos }}
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-[var(--accent)] text-base leading-snug mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                {t(card.titleKey, lang)}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t(card.descKey, lang)}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Dots móvil */}
      <div className="md:hidden flex justify-center gap-2 mt-1">
        {cards.map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full" style={{ background: i === 0 ? "var(--accent)" : "var(--border)" }} />
        ))}
      </div>

      {/* ── Desktop: grid de 4 tarjetas ── */}
      <div className="hidden md:flex md:flex-col gap-4">
        {cards.map((card, i) => {
          const leftMargin = i % 2 === 0
          return (
            <div
              key={i}
              className="group flex rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{ width: "78%", marginLeft: leftMargin ? "22%" : "0" }}
            >
              <div className="w-[42%] shrink-0 overflow-hidden">
                <img
                  src={card.img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: card.objectPos }}
                />
              </div>
              <div className="flex-1 flex flex-col justify-center p-7" style={{ background: "var(--accent)" }}>
                <h3
                  className="text-xl font-semibold text-white leading-snug mb-3"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {t(card.titleKey, lang)}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {t(card.descKey, lang)}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

function StatCounter({ value, enabled }: { value: string; enabled: boolean }) {
  const isPlus = value.startsWith("+")
  const cleaned = value.replace(/[^0-9]/g, "")
  const num = parseInt(cleaned, 10)
  const isNum = !isNaN(num) && cleaned.length > 0
  const count = useCounter(isNum ? num : 0, 2200, enabled && isNum)
  const formatted = num >= 1000 ? count.toLocaleString("es-ES") : String(count)
  const display = !isNum ? value : isPlus ? `+${formatted}` : formatted
  return <>{display}</>
}
// ────────────────────────────────────────────────────────

const LOGO_URL = "https://www.colegiosancayetano.com/wp-content/uploads/2021/12/Colegio-San-Cayetano-sombreado.png"

export default function HomePage() {
  const { lang } = useLanguage()

  const statsRef = useRef<HTMLElement>(null)
  const ibSectionRef = useRef<HTMLElement>(null)
  const [statsInView, setStatsInView] = useState(false)
  const [heroParallax, setHeroParallax] = useState(0)
  const [ibParallax, setIbParallax] = useState(0)
  const [statsParallax, setStatsParallax] = useState(0)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsInView(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setHeroParallax(window.scrollY * 0.25)
          if (ibSectionRef.current) {
            const rect = ibSectionRef.current.getBoundingClientRect()
            const center = rect.top + rect.height / 2
            setIbParallax((window.innerHeight / 2 - center) * 0.18)
          }
          if (statsRef.current) {
            const rect = statsRef.current.getBoundingClientRect()
            const center = rect.top + rect.height / 2
            setStatsParallax((window.innerHeight / 2 - center) * 0.18)
          }
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const news = [
    {
      title: "Colegio San Cayetano: la educación integral que empieza en la Escoleta y culmina en el Bachillerato Internacional",
      img: "/fotos/noticias1.png",
      href: "https://www.diariodemallorca.es/mallorca/2026/04/28/colegios-privados-mallorca-bachillerato-internacional-bc-129564438.html",
      source: "Diario de Mallorca",
      logo: "https://www.google.com/s2/favicons?domain=diariodemallorca.es&sz=32",
      date: "28 abril 2026",
    },
    {
      title: "San Cayetano: una ventana al mundo a través del Bachillerato Internacional",
      img: "/fotos/noticias2.jpg",
      href: "https://www.ultimahora.es/monograficos/centros-privados-concertados/2026/04/22/14773/san-cayetano-ventana-mundo-traves-del-bachillerato-internacional.html",
      source: "Ultima Hora",
      logo: "https://www.google.com/s2/favicons?domain=ultimahora.es&sz=32",
      date: "22 abril 2026",
    },
    {
      title: "Un colegio de Palma, líder mundial en lectura en inglés entre más de 9.000 escuelas",
      img: "/fotos/noticias3.png",
      href: "https://www.diariodemallorca.es/mallorca/2026/02/25/colegio-palma-lider-mundial-lectura-dvl-127248507.html",
      source: "Diario de Mallorca",
      logo: "https://www.google.com/s2/favicons?domain=diariodemallorca.es&sz=32",
      date: "25 febrero 2026",
    },
  ]

  const quickLinks = [
    { label: "Alexia (familias)", href: "https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d", external: true },
    { label: "ManageBac (IB)", href: "https://colegiosancayetano.managebac.com/", external: true },
    { label: t("stage.library", lang), href: "https://biblioteca.colegiosancayetano.com/", external: true },
    { label: t("nav.admissions", lang), href: "/admisiones", external: false },
    { label: t("cafeteria.title", lang), href: "/comedor", external: false },
    { label: t("extra.title", lang), href: "/extraescolares", external: false },
  ]

  const stats = [
    { value: "+1.800", label: t("stats.students", lang) },
    { value: "+60", label: t("stats.years", lang) },
    { value: "4", label: t("stats.languages", lang) },
    { value: "1.800", label: t("stats.facilities", lang) },
  ]

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[88svh] min-h-[520px] overflow-hidden -mt-[72px]">
        {/* Overlay para legibilidad */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "rgba(0,0,0,0.55)" }} />
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 100%)" }} />

        <div
          className="absolute inset-x-0 pointer-events-none"
          style={{
            top: "-25%",
            height: "150%",
            transform: `translateY(${heroParallax}px)`,
            willChange: "transform",
          }}
        >
          <Image
            src="/fotos/dron.jpg"
            alt="Colegio San Cayetano"
            fill
            className="object-cover object-center"
            priority
          />
        </div>


        {/* Titular central */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <p className="hero-tag text-xs sm:text-sm font-semibold text-white/70 uppercase tracking-[0.35em] mb-4">
            Colegio San Cayetano
          </p>
          <TypewriterHero
            line1a={t("home.hero.line1a", lang)}
            line1b={t("home.hero.line1b", lang)}
            line2={t("home.hero.line2", lang)}
          />
          <p className="hero-cta mt-5 sm:mt-7 text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.3em] flex items-center gap-3">
            <span>Palma de Mallorca</span>
            <span className="text-white/30 text-base leading-none">·</span>
            <span>{t("home.hero.since", lang)}</span>
          </p>
        </div>


        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
          <svg className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <FloatingContact />
      </section>


      {/* ── INTRO ── */}
      <section className="bg-white pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <FadeIn className="shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
            <img
              src="https://www.colegiosancayetano.com/wp-content/uploads/2021/11/cropped-logo2-300x300.jpg"
              alt="Escudo Colegio San Cayetano"
              className="w-full h-full object-contain"
            />
          </FadeIn>
          <div className="flex-1 text-center md:text-left">
            <FadeIn delay={80}>
              <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">{t("home.mission.tag", lang)}</p>
            </FadeIn>
            <FadeIn delay={160}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[var(--accent)] leading-tight mb-5" style={{ fontFamily: "var(--font-serif)" }}>
                {t("home.mission.title", lang)}
              </h2>
            </FadeIn>
            <FadeIn delay={240}>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-justify" style={{ fontFamily: "var(--font-serif)" }}>
                {t("home.mission.p1", lang)}
              </p>
            </FadeIn>
            <FadeIn delay={320}>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-justify" style={{ fontFamily: "var(--font-serif)" }}>
                {t("home.mission.p2", lang)}
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-7 text-justify" style={{ fontFamily: "var(--font-serif)" }}>
                {t("home.mission.p3", lang)}
              </p>
            </FadeIn>
            <FadeIn delay={480}>
              <Link href="/quienes-somos" className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:underline">
                {t("ui.learnMore", lang)}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <section className="bg-[var(--bg-secondary)] py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <FadeIn className="text-center mb-12 md:mb-16">
            <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">
              {t("home.whyus.tag", lang)}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[var(--accent)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>
              {t("home.whyus.title", lang)}
            </h2>
          </FadeIn>
          <FadeIn>
            <WhyUsCarousel lang={lang} />
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="relative bg-[var(--accent)] text-white overflow-hidden">
        {/* Imagen de fondo con parallax */}
        <img
          src="/fotos/header.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-x-0 w-full pointer-events-none"
          style={{
            top: "-20%",
            height: "140%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.08,
            mixBlendMode: "luminosity",
            transform: `translateY(${statsParallax}px)`,
            willChange: "transform",
          }}
        />
        {/* Línea dorada superior */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "var(--gold)" }} />

        <div className="relative max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center text-center px-6 py-16 md:py-20 relative
                  ${i % 2 === 0 && i < 3 ? "after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-white/15" : ""}
                  ${i < 2 ? "border-b border-white/10 md:border-b-0" : ""}
                  ${i === 1 ? "md:after:absolute md:after:right-0 md:after:top-1/4 md:after:h-1/2 md:after:w-px md:after:bg-white/15" : ""}
                `}
              >
                <div className="w-10 h-[3px] rounded-full mb-6" style={{ background: "var(--gold)" }} />
                <p className="text-[3.2rem] sm:text-6xl md:text-7xl font-black tracking-tight leading-none tabular-nums">
                  <StatCounter value={s.value} enabled={statsInView} />
                </p>
                <p className="text-[10px] sm:text-xs text-white/50 mt-5 uppercase tracking-[0.22em] font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Línea dorada inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "var(--gold)" }} />
      </section>

      {/* ── ETAPAS ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <FadeIn className="mb-6 md:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[var(--accent)] leading-tight mb-4" style={{ fontFamily: "var(--font-serif)" }}>{t("home.stages.title", lang)}</h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base">{t("home.stages.subtitle", lang)}</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { key: "stage.escoleta",    agesKey: "stage.ages.escoleta",    img: "/fotos/escoleta.jpg",    href: "/etapas/escoleta",    pos: "center" },
              { key: "stage.infantil",    agesKey: "stage.ages.infantil",    img: "/fotos/infantil.jpg",    href: "/etapas/infantil",    pos: "center" },
              { key: "stage.primaria",    agesKey: "stage.ages.primaria",    img: "/fotos/primaria.png",    href: "/etapas/primaria",    pos: "center" },
              { key: "stage.secundaria",  agesKey: "stage.ages.secundaria",  img: "/fotos/secundaria.jpg",  href: "/etapas/secundaria",  pos: "center" },
              { key: "stage.bachillerato",agesKey: "stage.ages.bachillerato",img: "/fotos/bachillerato.jpg",href: "/etapas/bachillerato", pos: "13% center" },
              { key: "stage.ib",          agesKey: "stage.ages.ib",          img: "/fotos/IB.jpg",          href: "/etapas/ib",          pos: "65% center" },
            ].map((s, i) => (
              <FadeIn key={s.key} delay={i * 80}>
                <Link href={s.href} className="group relative block overflow-hidden rounded-2xl aspect-[3/4]">
                  <img
                    src={s.img}
                    alt={t(s.key, lang)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: s.pos }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-[var(--accent)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold uppercase tracking-widest border border-white/60 px-4 py-2 rounded-full">
                      {t("ui.more", lang)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-white/60 text-xs sm:text-base font-medium uppercase tracking-widest mb-1">{t(s.agesKey, lang)}</p>
                    <p className="text-white font-semibold text-lg sm:text-2xl leading-tight">{t(s.key, lang)}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACHILLERATO INTERNACIONAL ── */}
      <section ref={ibSectionRef} className="relative overflow-hidden py-20 md:py-28" style={{ background: "#0a1628" }}>
        {/* Foto de fondo con parallax */}
        <img
          src="/fotos/IB.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-x-0 w-full pointer-events-none"
          style={{
            top: "-20%",
            height: "140%",
            objectFit: "cover",
            opacity: 0.12,
            mixBlendMode: "luminosity",
            transform: `translateY(${ibParallax}px)`,
            willChange: "transform",
          }}
        />
        {/* Línea dorada superior */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "var(--gold)" }} />

        <div className="relative max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--gold)" }}>
                {t("home.ib.tag", lang)}
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6"
                style={{ fontFamily: "var(--font-serif)", color: "#ffffff" }}
              >
                {t("home.ib.title", lang)}<br />
                <span className="italic" style={{ color: "var(--gold)" }}>Diploma IB</span>
              </h2>
              <p className="leading-relaxed text-sm sm:text-base mb-10" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "var(--font-serif)" }}>
                {t("home.ib.desc", lang)}
              </p>
              <div className="space-y-4">
                <Link
                  href="/etapas/ib"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-px transition-all duration-300 group-hover:w-12" style={{ background: "var(--gold)" }} />
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "var(--gold)" }}>{t("home.ib.link", lang)}</span>
                </Link>
                <a
                  href="https://colegiosancayetano.managebac.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-px transition-all duration-300 group-hover:w-12" style={{ background: "var(--gold)" }} />
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "var(--gold)" }}>IB-ManageBac ↗</span>
                </a>
                <a
                  href="https://biblioteca.colegiosancayetano.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-px transition-all duration-300 group-hover:w-12" style={{ background: "var(--gold)" }} />
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "var(--gold)" }}>{t("stage.library", lang)} ↗</span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "0 0 0 1px rgba(201,150,42,0.25), 0 24px 60px rgba(0,0,0,0.5)" }}>
                <img
                  src="/fotos/IB.jpg"
                  alt="Bachillerato Internacional IB"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 60%)" }} />
                {/* Badge dorado */}
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <div className="w-8 h-[2px]" style={{ background: "var(--gold)" }} />
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                    {t("home.ib.badge", lang)}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Línea dorada inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "var(--gold)" }} />
      </section>

      {/* ── ÚLTIMAS NOTICIAS ── */}
      <section className="bg-[var(--bg-secondary)] py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <FadeIn className="mb-10 md:mb-14">
            <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">{t("home.news.tag", lang)}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[var(--accent)] leading-tight" style={{ fontFamily: "var(--font-serif)" }}>{t("home.news.title", lang)}</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80} className="h-full">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <img src={item.logo} alt={item.source} className="w-4 h-4 object-contain rounded-sm" />
                      <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest">{item.source}</p>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mb-3">{item.date}</p>
                    <h3 className="text-sm sm:text-base font-semibold text-[var(--accent)] leading-snug flex-1" style={{ fontFamily: "var(--font-serif)" }}>
                      {item.title}
                    </h3>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ADMISIONES ── */}
      <section className="bg-[var(--accent-light)] overflow-hidden">
        {/* Marquee */}
        <div className="overflow-hidden pt-10">
          <div className="marquee-track flex gap-3" style={{ width: "max-content" }}>
            {[
              "/fotos/actos.jpg", "/fotos/futbol.jpg", "/fotos/campo.jpg",
              "/fotos/piscina.jpg", "/fotos/estatua.jpg", "/fotos/infantil.jpg",
              "/fotos/primaria.png", "/fotos/secundaria.jpg", "/fotos/bachillerato.jpg",
              "/fotos/actos.jpg", "/fotos/futbol.jpg", "/fotos/campo.jpg",
              "/fotos/piscina.jpg", "/fotos/estatua.jpg", "/fotos/infantil.jpg",
              "/fotos/primaria.png", "/fotos/secundaria.jpg", "/fotos/bachillerato.jpg",
            ].map((src, i) => (
              <div key={i} className="shrink-0 w-64 h-44 rounded-2xl overflow-hidden">
                <img src={src} alt="" aria-hidden="true" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
        {/* Texto + CTA */}
        <FadeIn className="max-w-screen-xl mx-auto px-6 py-12 md:py-14 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[var(--accent)] mb-3" style={{ fontFamily: "var(--font-serif)" }}>{t("home.cta.title", lang)}</h2>
          <p className="text-[var(--text-secondary)] mb-7 max-w-xl mx-auto text-sm sm:text-base" style={{ fontFamily: "var(--font-serif)" }}>
            {t("home.cta.desc", lang)}
          </p>
          <Link
            href="/admisiones"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--accent)] text-white text-sm font-medium rounded-xl hover:bg-[var(--accent-hover)] transition-colors"
          >
            {t("ui.admissions", lang)}
          </Link>
        </FadeIn>
      </section>

    </>
  )
}
