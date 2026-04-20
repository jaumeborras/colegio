import PageHero from "@/components/PageHero"
import Link from "next/link"

export default function ExtraescolaresPage() {
  return (
    <>
      <PageHero
        tag="Servicios"
        title="Actividades Extraescolares"
        subtitle="Amplia oferta de actividades para el desarrollo de talentos, habilidades y aficiones fuera del horario lectivo."
        breadcrumbs={[{ label: "Extraescolares" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { icon: "⚽", title: "Deportes", desc: "Fútbol, baloncesto, natación, tenis y más actividades deportivas para todos los niveles." },
            { icon: "🎭", title: "Artes", desc: "Teatro, música, danza, pintura y actividades creativas que potencian la expresión." },
            { icon: "🤖", title: "Tecnología", desc: "Robótica, programación y talleres digitales para los más curiosos." },
          ].map((a) => (
            <div key={a.title} className="flex flex-col items-start p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all">
              <span className="text-3xl mb-4">{a.icon}</span>
              <h3 className="font-semibold text-[var(--text)] mb-2">{a.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="font-semibold text-[var(--text)] mb-1">Escuelas de Verano</p>
            <p className="text-sm text-[var(--text-secondary)]">Programa especial de verano para Escoleta, Infantil y Primaria. Actividades, juegos y aprendizaje durante los meses de julio y agosto.</p>
          </div>
          <Link href="/extraescolares/verano" className="shrink-0 inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
            Ver Escuelas de Verano
          </Link>
        </div>

        <div className="border border-[var(--border)] rounded-2xl p-6">
          <p className="font-semibold text-[var(--text)] mb-2">Más información</p>
          <p className="text-sm text-[var(--text-secondary)] mb-4">Para consultar el catálogo completo, horarios y precios de las actividades extraescolares, contacta con secretaría.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:underline">
            Ir a contacto →
          </Link>
        </div>
      </div>
    </>
  )
}
