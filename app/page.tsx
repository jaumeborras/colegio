"use client"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

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
  const display = !isNum ? value
    : num >= 1000 ? count.toLocaleString("es-ES")
    : isPlus ? `+${count}`
    : String(count)
  return <>{display}</>
}
// ────────────────────────────────────────────────────────

const LOGO_URL = "https://www.colegiosancayetano.com/wp-content/uploads/2021/12/Colegio-San-Cayetano-sombreado.png"
const HERO_IMAGES = ["/fotos/header.jpg", "/fotos/dron.jpg", "/fotos/futbol.jpg", "/fotos/estatua.jpg", "/fotos/actos.jpg", "/fotos/campo.jpg", "/fotos/piscina.jpg"]

export default function HomePage() {
  const { lang } = useLanguage()

  const [heroIndex, setHeroIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setHeroIndex(i => (i + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(id)
  }, [])

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

  const quickLinks = [
    { label: "Alexia (familias)", href: "https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d", external: true },
    { label: "ManageBac (IB)", href: "https://colegiosancayetano.managebac.com/", external: true },
    { label: t("stage.library", lang), href: "https://biblioteca.colegiosancayetano.com/", external: true },
    { label: t("nav.admissions", lang), href: "/admisiones", external: false },
    { label: t("cafeteria.title", lang), href: "/comedor", external: false },
    { label: t("extra.title", lang), href: "/extraescolares", external: false },
  ]

  const values = [
    { title: t("home.values.commitment.title", lang), desc: t("home.values.commitment.desc", lang) },
    { title: t("home.values.quality.title", lang), desc: t("home.values.quality.desc", lang) },
    { title: t("home.values.languages.title", lang), desc: t("home.values.languages.desc", lang) },
    { title: t("home.values.community.title", lang), desc: t("home.values.community.desc", lang) },
  ]

  const stats = [
    { value: "1.740", label: t("stats.students", lang) },
    { value: "+50", label: t("stats.years", lang) },
    { value: "3", label: t("stats.languages", lang) },
    { value: "IB", label: t("stats.ib", lang) },
  ]

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[100svh] min-h-[600px] overflow-hidden -mt-[72px]">
        {/* Overlay discreto para legibilidad del header */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: "rgba(0,0,0,0.22)" }} />

        {HERO_IMAGES.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Colegio San Cayetano"
            fill
            className="object-cover object-center"
            priority={i === 0}
            style={{
              opacity: heroIndex === i ? 1 : 0,
              transition: "opacity 1.2s ease-in-out",
              zIndex: heroIndex === i ? 1 : 0,
            }}
          />
        ))}

        {/* Pills admisiones / información */}
        <div className="absolute top-[80px] right-6 lg:right-10 z-10 hidden lg:flex gap-2">
          <Link
            href="/informacion"
            className="text-xs font-medium text-white/75 border border-white/30 rounded-full px-4 py-1.5 hover:bg-white/15 hover:text-white hover:border-white/55 transition-all"
          >
            {t("home.hero.info", lang)}
          </Link>
          <Link
            href="/admisiones"
            className="text-xs font-medium text-white border border-white/55 rounded-full px-4 py-1.5 hover:bg-white/15 hover:border-white/90 transition-all"
          >
            {t("home.hero.adm", lang)}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40">
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── LEMA ── */}
      <div className="bg-white py-10 md:py-12 px-6 text-center">
        <p style={{ fontFamily: "var(--font-serif)", lineHeight: 1.2 }}>
          <span className="font-bold text-2xl sm:text-3xl md:text-4xl" style={{ color: "var(--accent)" }}>
            {t("home.hero.line1", lang)}
          </span>
          <span className="mx-3 hidden sm:inline font-light" style={{ color: "var(--accent)", opacity: 0.3 }}>·</span>
          <span className="block sm:inline font-bold italic text-2xl sm:text-3xl md:text-4xl" style={{ color: "var(--accent)" }}>
            {t("home.hero.line2", lang)}
          </span>
        </p>
      </div>

      {/* ── INTRO ── */}
      <section className="bg-white pb-16 md:pb-20">
        <FadeIn className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="shrink-0 flex items-center justify-center w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-3xl bg-[var(--accent-light)] border border-[var(--border)]">
            <Image
              src={LOGO_URL}
              alt="Escudo Colegio San Cayetano"
              width={160}
              height={160}
              className="object-contain p-4 w-full h-full"
              unoptimized
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">{t("home.mission.tag", lang)}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text)] tracking-tight leading-snug mb-5">
              {t("home.mission.title", lang)}
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              {t("home.mission.p1", lang)}
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-7">
              {t("home.mission.p2", lang)}
            </p>
            <Link href="/quienes-somos" className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:underline">
              {t("ui.learnMore", lang)}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ── STATS ── */}
      <section ref={statsRef} className="bg-[var(--accent)] text-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 relative
                  ${i % 2 === 0 && i < 3 ? "after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-px after:bg-white/15" : ""}
                  ${i < 2 ? "border-b border-white/10 md:border-b-0" : ""}
                  ${i === 1 ? "md:after:absolute md:after:right-0 md:after:top-1/4 md:after:h-1/2 md:after:w-px md:after:bg-white/15" : ""}
                `}
              >
                <div className="w-8 h-[2px] rounded-full mb-5" style={{ background: "var(--gold, #c9a84c)" }} />
                <p className="text-[2.6rem] sm:text-5xl md:text-6xl font-black tracking-tight leading-none tabular-nums">
                  <StatCounter value={s.value} enabled={statsInView} />
                </p>
                <p className="text-[10px] sm:text-xs text-white/50 mt-4 uppercase tracking-[0.18em] font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ETAPAS ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <FadeIn className="mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text)] tracking-tight mb-6">{t("home.stages.title", lang)}</h2>
            <div className="w-full h-px bg-[var(--border)] mb-8" />
            <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-xl leading-relaxed">{t("home.stages.subtitle", lang)}</p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { key: "stage.escoleta",    img: "/fotos/escoleta.jpg",    href: "/etapas/escoleta" },
              { key: "stage.infantil",    img: "/fotos/infantil.jpg",    href: "/etapas/infantil" },
              { key: "stage.primaria",    img: "/fotos/primaria.png",    href: "/etapas/primaria" },
              { key: "stage.secundaria",  img: "/fotos/secundaria.jpg",  href: "/etapas/secundaria" },
              { key: "stage.bachillerato",img: "/fotos/bachillerato.jpg",href: "/etapas/bachillerato" },
            ].map((s, i) => (
              <FadeIn key={s.key} delay={i * 80}>
                <Link href={s.href} className="group relative block overflow-hidden rounded-2xl aspect-[3/4]">
                  {/* Foto de fondo */}
                  <img
                    src={s.img}
                    alt={t(s.key, lang)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradiente permanente abajo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  {/* Overlay hover azul */}
                  <div className="absolute inset-0 bg-[var(--accent)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold uppercase tracking-widest border border-white/60 px-4 py-2 rounded-full">
                      {t("ui.more", lang)}
                    </span>
                  </div>
                  {/* Texto abajo */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                    <p className="text-white font-semibold text-sm sm:text-base leading-tight">{t(s.key, lang)}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6">
          <FadeIn className="mb-12 md:mb-16">
            <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">{t("who.tag", lang)}</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text)] tracking-tight">{t("home.values.title", lang)}</h2>
          </FadeIn>
          <div className="divide-y divide-[var(--border)]">
            {values.map((v, i) => (
              <FadeIn
                key={v.title}
                delay={i * 90}
                className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-10 md:gap-16 py-8 md:py-10 group cursor-default"
              >
                <span className="text-xs font-bold text-[var(--accent)] tracking-widest tabular-nums shrink-0 pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg md:text-xl font-semibold text-[var(--text)] shrink-0 sm:w-56 group-hover:text-[var(--accent)] transition-colors duration-200">
                  {v.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm md:text-base flex-1">
                  {v.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ADMISIONES ── */}
      <section className="bg-[var(--accent-light)] py-14 md:py-16">
        <FadeIn className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-3">{t("home.cta.title", lang)}</h2>
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

      {/* ── CONTACTO RÁPIDO ── */}
      <section className="bg-white py-12 md:py-16">
        <FadeIn className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-[var(--text)] mb-1">{t("home.contact.name", lang)}</p>
            <p className="text-sm text-[var(--text-secondary)]">{t("home.contact.address", lang)}</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:971220575" className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              971 22 05 75
            </a>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
              {t("ui.contact", lang)}
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
