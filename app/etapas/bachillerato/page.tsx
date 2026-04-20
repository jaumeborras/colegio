import PageHero from "@/components/PageHero"
import Link from "next/link"

export default function BachilleratoPage() {
  return (
    <>
      <PageHero
        tag="Etapa"
        title="Bachillerato"
        subtitle="16–17 años. Preparación universitaria de excelencia con fuerte componente en inglés, investigación y orientación vocacional."
        breadcrumbs={[{ label: "Bachillerato" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { title: "Inglés en Bachillerato", desc: "Asignaturas impartidas en inglés para una formación internacional sólida." },
            { title: "Proyectos de Investigación", desc: "Asignatura específica para desarrollar metodología científica y pensamiento crítico." },
            { title: "Orientación universitaria", desc: "Apoyo y asesoramiento para el acceso a la universidad en España y el extranjero." },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--accent-light)] border border-[var(--accent)] rounded-2xl p-6 mb-10">
          <p className="text-sm font-semibold text-[var(--accent)] mb-1">¿Sabías que también ofrecemos el IB?</p>
          <p className="text-sm text-[var(--text-secondary)] mb-4">El Bachillerato Internacional (Diploma IB) es una alternativa de prestigio reconocida mundialmente.</p>
          <Link href="/etapas/ib" className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:underline">
            Conoce el programa IB →
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-bachillerato"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Portal Bachillerato ↗
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
