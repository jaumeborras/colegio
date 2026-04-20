import PageHero from "@/components/PageHero"
import Link from "next/link"

export default function AdmisionesPage() {
  return (
    <>
      <PageHero
        tag="Proceso"
        title="Admisiones"
        subtitle="Te acompañamos en el proceso de incorporación al Colegio San Cayetano. Aquí encontrarás toda la información para el curso 2026–2027."
        breadcrumbs={[{ label: "Admisiones" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        {/* Pasos */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-8">Proceso de admisión</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Solicitud", desc: "Rellena el formulario de preinscripción antes del plazo establecido." },
              { step: "02", title: "Documentación", desc: "Entrega la documentación requerida en secretaría o por Oficina Virtual." },
              { step: "03", title: "Resolución", desc: "La comisión de admisiones evalúa las solicitudes según los criterios oficiales." },
              { step: "04", title: "Matrícula", desc: "Una vez admitido, formaliza la matrícula en el plazo indicado." },
            ].map((s) => (
              <div key={s.step} className="relative p-6 rounded-2xl border border-[var(--border)] bg-white">
                <span className="text-4xl font-bold text-[var(--accent-light)] absolute top-4 right-5 select-none">{s.step}</span>
                <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">Paso {s.step}</p>
                <p className="font-semibold text-[var(--text)] mb-2">{s.title}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Etapas disponibles */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">Plazas disponibles por etapa</h2>
          <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Escoleta", "Infantil", "Primaria", "Secundaria", "Bachillerato", "IB"].map((e) => (
              <Link
                key={e}
                href={`/etapas/${e.toLowerCase()}`}
                className="flex flex-col items-center text-center p-4 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all"
              >
                <p className="text-sm font-semibold text-[var(--text)]">{e}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Accesos */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-informacionyadmisione/admisi%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--text)] mb-1">Información y formularios</p>
              <p className="text-sm text-[var(--text-secondary)]">Accede a los formularios oficiales de admisión y documentación necesaria.</p>
            </div>
          </a>
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-oficinavirtual"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--text)] mb-1">Oficina Virtual</p>
              <p className="text-sm text-[var(--text-secondary)]">Realiza trámites administrativos online desde cualquier lugar.</p>
            </div>
          </a>
        </div>

        <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[var(--text)] mb-1">¿Tienes dudas?</p>
            <p className="text-sm text-[var(--text-secondary)]">Contacta con secretaría y te orientamos en todo el proceso.</p>
          </div>
          <Link href="/contacto" className="shrink-0 inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
            Contactar
          </Link>
        </div>
      </div>
    </>
  )
}
