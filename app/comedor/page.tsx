import PageHero from "@/components/PageHero"
import Link from "next/link"

export default function ComedorPage() {
  return (
    <>
      <PageHero
        tag="Servicios"
        title="Comedor"
        subtitle="Servicio de comedor escolar con menús saludables y equilibrados, elaborados con criterios nutricionales y adaptados a las necesidades de cada etapa."
        breadcrumbs={[{ label: "Comedor" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { icon: "🥗", title: "Menús equilibrados", desc: "Dietas variadas y nutritivas adaptadas a cada franja de edad." },
            { icon: "🌿", title: "Alimentos frescos", desc: "Producto fresco de temporada con criterios de calidad y sostenibilidad." },
            { icon: "♿", title: "Necesidades especiales", desc: "Menús adaptados para alergias, intolerancias y necesidades dietéticas específicas." },
          ].map((c) => (
            <div key={c.title} className="flex flex-col items-start p-6 rounded-2xl border border-[var(--border)]">
              <span className="text-3xl mb-4">{c.icon}</span>
              <h3 className="font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-comedor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Portal del Comedor ↗
          </a>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
            Contactar
          </Link>
        </div>
      </div>
    </>
  )
}
