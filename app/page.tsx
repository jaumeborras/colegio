import Image from "next/image"
import Link from "next/link"

const LOGO_URL = "https://www.colegiosancayetano.com/wp-content/uploads/2021/12/Colegio-San-Cayetano-sombreado.png"
const HERO_BG = "https://www.colegiosancayetano.com/wp-content/uploads/2021/11/Foto-Claustro-1920x1080-1.jpg"

const stages = [
  { name: "Escoleta", ages: "1–2 años", href: "/etapas/escoleta", icon: "🌱" },
  { name: "Infantil", ages: "3–5 años", href: "/etapas/infantil", icon: "🎨" },
  { name: "Primaria", ages: "6–11 años", href: "/etapas/primaria", icon: "📚" },
  { name: "Secundaria", ages: "12–15 años", href: "/etapas/secundaria", icon: "🔬" },
  { name: "Bachillerato", ages: "16–17 años", href: "/etapas/bachillerato", icon: "🎓" },
  { name: "IB", ages: "Diploma Internacional", href: "/etapas/ib", icon: "🌍" },
]

const quickLinks = [
  { label: "Alexia (familias)", href: "https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d", external: true },
  { label: "ManageBac (IB)", href: "https://colegiosancayetano.managebac.com/", external: true },
  { label: "Biblioteca", href: "https://biblioteca.colegiosancayetano.com/", external: true },
  { label: "Admisiones", href: "/admisiones", external: false },
  { label: "Comedor", href: "/comedor", external: false },
  { label: "Extraescolares", href: "/extraescolares", external: false },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Imagen de fondo */}
        <Image
          src={HERO_BG}
          alt="Colegio San Cayetano"
          fill
          className="object-cover object-center"
          unoptimized
          priority
        />
        {/* Overlay oscuro uniforme */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Contenido centrado: logo grande + nombre */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          {/* Logo blanco grande */}
          <div className="mb-6 md:mb-8">
            <Image
              src={LOGO_URL}
              alt="Escudo Colegio San Cayetano"
              width={180}
              height={180}
              className="object-contain brightness-0 invert drop-shadow-lg w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px]"
              unoptimized
              priority
            />
          </div>

          {/* Nombre del colegio */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-widest uppercase drop-shadow-md mb-2 md:mb-3">
            Colegio San Cayetano
          </h1>
          <p className="text-base sm:text-lg text-white/80 tracking-[0.25em] uppercase font-light mb-8 md:mb-10">
            Palma de Mallorca
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/admisiones"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[var(--accent)] text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
            >
              Proceso de admisión
            </Link>
            <Link
              href="/quienes-somos"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-white/15 backdrop-blur-sm border border-white/40 text-white text-sm font-medium rounded-xl hover:bg-white/25 transition-colors"
            >
              Quiénes somos
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
          <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── INTRO con logo y texto ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Logo color grande */}
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
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">Nuestra misión</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text)] tracking-tight leading-snug mb-5">
              Educamos con valores, excelencia y compromiso
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Somos un colegio concertado con más de 50 años de historia en Palma de Mallorca, vinculados a la Orden Teatina. Formamos personas con sentido crítico y excelencia académica.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-7">
              Educación trilingüe (castellano, catalán, inglés), Bachillerato Internacional y 1.740 alumnos que confían en nosotros cada día.
            </p>
            <Link href="/quienes-somos" className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:underline">
              Conoce el colegio
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[var(--accent)] text-white">
        <div className="max-w-screen-xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "1.740", label: "Alumnos" },
            { value: "+50", label: "Años de historia" },
            { value: "3", label: "Idiomas" },
            { value: "IB", label: "Bachillerato Internacional" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-bold">{s.value}</p>
              <p className="text-sm text-blue-200 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ETAPAS ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">Etapas educativas</h2>
            <p className="text-[var(--text-secondary)] mt-2 text-sm sm:text-base">Un proyecto educativo completo, desde los primeros meses hasta la universidad.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {stages.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all"
              >
                <span className="text-2xl sm:text-3xl mb-2 sm:mb-3">{s.icon}</span>
                <p className="text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">{s.name}</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1 hidden sm:block">{s.ages}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCESOS RÁPIDOS ── */}
      <section className="bg-[var(--bg-secondary)] py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-5">Accesos rápidos</h2>
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
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text)] tracking-tight">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Compromiso", desc: "Educación cristiana con respeto y valores humanos." },
              { title: "Calidad", desc: "Excelencia académica y proyectos de investigación." },
              { title: "Idiomas", desc: "Trilingüe: castellano, catalán e inglés." },
              { title: "Comunidad", desc: "Voluntariado y responsabilidad social activa." },
            ].map((v) => (
              <div key={v.title} className="p-5 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--text)] mb-1.5">{v.title}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ADMISIONES ── */}
      <section className="bg-[var(--accent-light)] py-14 md:py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-3">¿Quieres formar parte de nuestra comunidad?</h2>
          <p className="text-[var(--text-secondary)] mb-7 max-w-xl mx-auto text-sm sm:text-base">
            Descubre el proceso de admisión para el curso 2026–2027 y da el primer paso.
          </p>
          <Link
            href="/admisiones"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--accent)] text-white text-sm font-medium rounded-xl hover:bg-[var(--accent-hover)] transition-colors"
          >
            Ver admisiones
          </Link>
        </div>
      </section>

      {/* ── CONTACTO RÁPIDO ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-[var(--text)] mb-1">Colegio San Cayetano</p>
            <p className="text-sm text-[var(--text-secondary)]">Av. Picasso, 21 · 07014 Palma de Mallorca</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:971220575" className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              971 22 05 75
            </a>
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
