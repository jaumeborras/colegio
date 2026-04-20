import PageHero from "@/components/PageHero"
import Link from "next/link"

export default function IBPage() {
  return (
    <>
      <PageHero
        tag="Programa Internacional"
        title="Bachillerato Internacional (IB)"
        subtitle="El Programa Diploma del IB es un currículo internacional de dos años reconocido por las mejores universidades del mundo. Rigor académico, pensamiento crítico y perspectiva global."
        breadcrumbs={[{ label: "IB" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">¿Qué es el Programa Diploma IB?</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              El Bachillerato Internacional (IB) es un programa educativo de reconocimiento mundial para alumnos de 16 a 19 años. Combina asignaturas académicas, investigación independiente y formación ética.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Los alumnos estudian seis asignaturas en dos niveles (Normal y Superior), junto con los tres componentes centrales del IB: Teoría del Conocimiento (TOK), Monografía y CAS (Creatividad, Actividad, Servicio).
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              El Diploma IB es reconocido por universidades en más de 75 países, facilitando el acceso a instituciones de prestigio internacional.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Reconocimiento global", desc: "Aceptado por más de 2.000 universidades en 75 países." },
              { title: "Monografía", desc: "Investigación independiente de 4.000 palabras en profundidad." },
              { title: "TOK", desc: "Teoría del Conocimiento: pensamiento crítico y filosófico." },
              { title: "CAS", desc: "Creatividad, Actividad y Servicio: formación integral." },
            ].map((v) => (
              <div key={v.title} className="p-5 rounded-2xl bg-[var(--accent-light)] border border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--accent)] mb-1">{v.title}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-ibprograma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Portal IB ↗
          </a>
          <a
            href="https://colegiosancayetano.managebac.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            IB-ManageBac ↗
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
