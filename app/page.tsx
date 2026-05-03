"use client"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"
import FloatingContact from "@/components/FloatingContact"

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
  const [statsInView, setStatsInView] = useState(false)
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

  const news = [
    {
      title: "Colegio San Cayetano: la educación integral que empieza en la Escoleta y culmina en el Bachillerato Internacional",
      img: "/fotos/noticias1.png",
      href: "https://www.diariodemallorca.es/mallorca/2026/04/28/colegios-privados-mallorca-bachillerato-internacional-bc-129564438.html",
      source: "Diario de Mallorca",
      date: "28 abril 2026",
    },
    {
      title: "San Cayetano: una ventana al mundo a través del Bachillerato Internacional",
      img: "/fotos/noticias2.jpg",
      href: "https://www.ultimahora.es/monograficos/centros-privados-concertados/2026/04/22/14773/san-cayetano-ventana-mundo-traves-del-bachillerato-internacional.html",
      source: "Ultima Hora",
      date: "22 abril 2026",
    },
    {
      title: "Un colegio de Palma, líder mundial en lectura en inglés entre más de 9.000 escuelas",
      img: "/fotos/noticias3.png",
      href: "https://www.diariodemallorca.es/mallorca/2026/02/25/colegio-palma-lider-mundial-lectura-dvl-127248507.html",
      source: "Diario de Mallorca",
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

        <Image
          src="/fotos/dron.jpg"
          alt="Colegio San Cayetano"
          fill
          className="object-cover object-center"
          priority
        />


        {/* Titular central */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <p className="hero-tag text-[10px] sm:text-xs font-semibold text-white/60 uppercase tracking-[0.35em] mb-6 leading-relaxed">
            <span className="block">Colegio San Cayetano</span>
            <span className="block">Palma de Mallorca</span>
          </p>
          <h1 className="hero-title" style={{ fontFamily: "var(--font-serif)" }}>
            <span className="block font-bold text-2xl sm:text-4xl md:text-6xl lg:text-[4.5rem] text-white leading-tight drop-shadow-lg">
              {t("home.hero.line1a", lang)}
              <span className="hidden sm:inline"> </span>
              <br className="sm:hidden" />
              {t("home.hero.line1b", lang)}
            </span>
            <span className="block font-bold italic text-2xl sm:text-4xl md:text-6xl lg:text-[4.5rem] text-white leading-tight drop-shadow-lg">
              {t("home.hero.line2", lang)}
            </span>
          </h1>
          <p className="hero-cta mt-7 sm:mt-10 text-[10px] sm:text-xs text-white/50 uppercase tracking-[0.3em]">
            {t("home.hero.since", lang)}
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--accent)] tracking-tight leading-snug mb-5">
                {t("home.mission.title", lang)}
              </h2>
            </FadeIn>
            <FadeIn delay={240}>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                {t("home.mission.p1", lang)}
              </p>
            </FadeIn>
            <FadeIn delay={320}>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                {t("home.mission.p2", lang)}
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-7">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--accent)] tracking-tight">
              {t("home.whyus.title", lang)}
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { titleKey: "home.whyus.multilingual.title",  descKey: "home.whyus.multilingual.desc",  img: "/fotos/multi.jpg" },
              { titleKey: "home.whyus.excellence.title",    descKey: "home.whyus.excellence.desc",    img: "/fotos/excelencia.jpg" },
              { titleKey: "home.whyus.personalized.title",  descKey: "home.whyus.personalized.desc",  img: "/fotos/bachillerato.jpg" },
              { titleKey: "home.whyus.values.title",        descKey: "home.whyus.values.desc",        img: "/fotos/edu.jpeg" },
            ].map((item, i) => (
              <FadeIn key={item.titleKey} delay={i * 80} className="h-full">
                <div className="h-full bg-white border border-[var(--border)] rounded-2xl overflow-hidden hover:border-[var(--accent)] hover:shadow-md transition-all duration-300">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={item.img} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-lg font-bold text-[var(--accent)] mb-2 tracking-tight">{t(item.titleKey, lang)}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{t(item.descKey, lang)}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="relative bg-[var(--accent)] text-white overflow-hidden">
        {/* Imagen de fondo con opacidad baja */}
        <img
          src="/fotos/header.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          style={{ opacity: 0.08, mixBlendMode: "luminosity" }}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--accent)] tracking-tight mb-4">{t("home.stages.title", lang)}</h2>
            <div className="flex items-center gap-4">
              <div className="h-px bg-[var(--border)] hidden sm:block" style={{ width: "2rem", flexShrink: 0 }} />
              <p className="text-[var(--text-secondary)] text-sm sm:text-base">{t("home.stages.subtitle", lang)}</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { key: "stage.escoleta",    agesKey: "stage.ages.escoleta",    img: "/fotos/escoleta.jpg",    href: "/etapas/escoleta" },
              { key: "stage.infantil",    agesKey: "stage.ages.infantil",    img: "/fotos/infantil.jpg",    href: "/etapas/infantil" },
              { key: "stage.primaria",    agesKey: "stage.ages.primaria",    img: "/fotos/primaria.png",    href: "/etapas/primaria" },
              { key: "stage.secundaria",  agesKey: "stage.ages.secundaria",  img: "/fotos/secundaria.jpg",  href: "/etapas/secundaria" },
              { key: "stage.bachillerato",agesKey: "stage.ages.bachillerato",img: "/fotos/bachillerato.jpg",href: "/etapas/bachillerato" },
              { key: "stage.ib",          agesKey: "stage.ages.ib",          img: "/fotos/IB.jpg",          href: "/etapas/ib" },
            ].map((s, i) => (
              <FadeIn key={s.key} delay={i * 80}>
                <Link href={s.href} className="group relative block overflow-hidden rounded-2xl aspect-[3/4]">
                  <img
                    src={s.img}
                    alt={t(s.key, lang)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-[var(--accent)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold uppercase tracking-widest border border-white/60 px-4 py-2 rounded-full">
                      {t("ui.more", lang)}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-white/60 text-[10px] font-medium uppercase tracking-widest mb-1">{t(s.agesKey, lang)}</p>
                    <p className="text-white font-semibold text-sm sm:text-base leading-tight">{t(s.key, lang)}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BACHILLERATO INTERNACIONAL ── */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#0a1628" }}>
        {/* Foto de fondo con opacidad muy baja */}
        <img
          src="/fotos/IB.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.12, mixBlendMode: "luminosity" }}
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
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-serif)", color: "#ffffff" }}
              >
                {t("home.ib.title", lang)}<br />
                <span className="italic" style={{ color: "var(--gold)" }}>Diploma IB</span>
              </h2>
              <p className="leading-relaxed text-sm sm:text-base mb-10" style={{ color: "rgba(255,255,255,0.65)" }}>
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
                  href="https://sites.google.com/csc.edu.es/csc22esp-ibprograma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <span className="w-8 h-px transition-all duration-300 group-hover:w-12" style={{ background: "var(--gold)" }} />
                  <span className="text-sm font-medium group-hover:underline" style={{ color: "var(--gold)" }}>{t("nav.ib.diploma", lang)} ↗</span>
                </a>
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--accent)] tracking-tight">{t("home.news.title", lang)}</h2>
          </FadeIn>
          {/* Noticia destacada */}
          <FadeIn className="mb-6">
            <a
              href={news[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
            >
              <div className="sm:w-1/2 aspect-[16/9] sm:aspect-auto overflow-hidden">
                <img
                  src={news[0].img}
                  alt={news[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 sm:p-8 justify-center">
                <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-2">{news[0].source}</p>
                <p className="text-xs text-[var(--text-secondary)] mb-4">{news[0].date}</p>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--accent)] leading-snug">
                  {news[0].title}
                </h3>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                  {t("home.news.read", lang)}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </a>
          </FadeIn>

          {/* Noticias secundarias */}
          <div className="grid sm:grid-cols-2 gap-6">
            {news.slice(1).map((item, i) => (
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
                    <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-1">{item.source}</p>
                    <p className="text-xs text-[var(--text-secondary)] mb-3">{item.date}</p>
                    <h3 className="text-sm sm:text-base font-semibold text-[var(--accent)] leading-snug flex-1">
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
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--accent)] mb-3">{t("home.cta.title", lang)}</h2>
          <p className="text-[var(--text-secondary)] mb-7 max-w-xl mx-auto text-sm sm:text-base">
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
