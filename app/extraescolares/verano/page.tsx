import PageHero from "@/components/PageHero"
import Link from "next/link"

export default function VeranoPage() {
  return (
    <>
      <PageHero
        tag="Verano"
        title="Escuelas de Verano"
        subtitle="Programa de verano para que los más pequeños disfruten, aprendan y se relacionen durante los meses de julio y agosto."
        breadcrumbs={[{ label: "Extraescolares", href: "/extraescolares" }, { label: "Escuelas de Verano" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {[
            { title: "Summer Escoleta", desc: "Para niños de 1 y 2 años. Un verano lleno de juego, afecto y exploración sensorial.", ages: "1–2 años" },
            { title: "Summer Infantil", desc: "Actividades lúdicas y educativas para los alumnos de Educación Infantil.", ages: "3–5 años" },
            { title: "Summer Primaria", desc: "Talleres, deporte y aventura para los alumnos de Primaria.", ages: "6–11 años" },
          ].map((p) => (
            <div key={p.title} className="border border-[var(--border)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--accent)] px-5 py-4">
                <p className="text-white font-semibold">{p.title}</p>
                <p className="text-blue-200 text-xs mt-0.5">{p.ages}</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[var(--bg-secondary)] rounded-2xl p-6">
          <p className="font-semibold text-[var(--text)] mb-2">¿Quieres más información?</p>
          <p className="text-sm text-[var(--text-secondary)] mb-4">Horarios, fechas y precios disponibles en secretaría o contactando con el colegio.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:underline">
            Contactar →
          </Link>
        </div>
      </div>
    </>
  )
}
