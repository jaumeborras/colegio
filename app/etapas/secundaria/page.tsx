import PageHero from "@/components/PageHero"
import Link from "next/link"

export default function SecundariaPage() {
  return (
    <>
      <PageHero
        tag="Etapa"
        title="Educación Secundaria"
        subtitle="De 12 a 15 años. Una etapa de crecimiento personal y académico donde los alumnos desarrollan pensamiento crítico, autonomía y proyecto de vida."
        breadcrumbs={[{ label: "Secundaria" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { title: "Proyectos de investigación", desc: "Metodología por proyectos para desarrollar competencias del siglo XXI." },
            { title: "Segunda lengua extranjera", desc: "Inglés y una segunda lengua extranjera integradas en el currículo." },
            { title: "Orientación académica", desc: "Acompañamiento personalizado para la elección de futuro académico." },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-secundaria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Portal Secundaria ↗
          </a>
          <a
            href="https://biblioteca.colegiosancayetano.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Biblioteca ↗
          </a>
          <Link href="/admisiones" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
            Solicitar admisión
          </Link>
        </div>
      </div>
    </>
  )
}
