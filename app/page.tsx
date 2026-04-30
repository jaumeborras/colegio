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

  const stages = [
    { key: "stage.escoleta", ages: lang === "ca" ? "1–2 anys" : lang === "en" ? "1–2 years" : lang === "de" ? "1–2 Jahre" : "1–2 años", href: "/etapas/escoleta", icon: "🌱" },
    { key: "stage.infantil", ages: lang === "ca" ? "3–5 anys" : lang === "en" ? "3–5 years" : lang === "de" ? "3–5 Jahre" : "3–5 años", href: "/etapas/infantil", icon: "🎨" },
    { key: "stage.primaria", ages: lang === "ca" ? "6–11 anys" : lang === "en" ? "6–11 years" : lang === "de" ? "6–11 Jahre" : "6–11 años", href: "/etapas/primaria", icon: "📚" },
    { key: "stage.secundaria", ages: lang === "ca" ? "12–15 anys" : lang === "en" ? "12–15 years" : lang === "de" ? "12–15 Jahre" : "12–15 años", href: "/etapas/secundaria", icon: "🔬" },
    { key: "stage.bachillerato", ages: lang === "ca" ? "16–17 anys" : lang === "en" ? "16–17 years" : lang === "de" ? "16–17 Jahre" : "16–17 años", href: "/etapas/bachillerato", icon: "🎓" },
    { key: "stage.ib", ages: lang === "ca" ? "Diploma Internacional" : lang === "en" ? "International Diploma" : lang === "de" ? "Internationales Diplom" : "Diploma Internacional", href: "/etapas/ib", icon: "🌍" },
  ]

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
        <Image
          src="/header.jpg"
          alt="Colegio San Cayetano"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.18)" }} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent 30%, rgba(0,0,0,0.42) 65%, rgba(0,0,0,0.56) 100%)" }}
        />

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
      <div className="bg-white py-6 px-6 text-center">
        <p style={{ fontFamily: "var(--font-serif)", lineHeight: 1.2 }}>
          <span className="font-bold text-xl sm:text-2xl md:text-3xl" style={{ color: "var(--accent)" }}>
            {t("home.hero.line1", lang)}
          </span>
          <span className="mx-3 hidden sm:inline font-light" style={{ color: "var(--accent)", opacity: 0.3 }}>·</span>
          <span className="block sm:inline font-bold italic text-xl sm:text-2xl md:text-3xl" style={{ color: "var(--accent)" }}>
            {t("home.hero.line2", lang)}
          </span>
        </p>
      </div>

      {/* ── INTRO ── */}
      <section className="bg-white py-16 md:py-20">
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
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">{t("home.stages.title", lang)}</h2>
            <p className="text-[var(--text-secondary)] mt-2 text-sm sm:text-base">{t("home.stages.subtitle", lang)}</p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {stages.map((s, i) => (
              <FadeIn key={s.key} delay={i * 70}>
                <Link
                  href={s.href}
                  className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all h-full"
                >
                  <span className="text-2xl sm:text-3xl mb-2 sm:mb-3">{s.icon}</span>
                  <p className="text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{t(s.key, lang)}</p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 hidden sm:block">{s.ages}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCESOS RÁPIDOS ── */}
      <section className="bg-[var(--bg-secondary)] py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <FadeIn>
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-5">{t("home.quickLinks.title", lang)}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
              {quickLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between gap-2 bg-white border border-[var(--border)] rounded-xl px-4 py-3 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all group"
                >
                  {l.label}
                  <svg className="w-3.5 h-3.5 opacity-30 group-hover:opacity-100 shrink-0 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={l.external ? "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" : "M9 5l7 7-7 7"} />
                  </svg>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <FadeIn className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">{t("home.values.title", lang)}</h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 80} className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--text)] mb-1.5">{v.title}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
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
