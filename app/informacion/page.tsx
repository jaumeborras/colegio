import PageHero from "@/components/PageHero"

const sections = [
  {
    title: "Calendario y horarios",
    items: ["Horario lectivo", "Calendario escolar 2025–2026", "Calendario académico"],
  },
  {
    title: "Servicios",
    items: ["Transporte escolar", "Comedor", "Libros y material escolar"],
  },
  {
    title: "Financiero",
    items: ["Costes de enseñanza", "Bonificaciones y ayudas"],
  },
  {
    title: "Académico y tecnológico",
    items: ["Modelo One to One", "Inglés en el colegio", "Bachillerato Internacional (IB)"],
  },
  {
    title: "Administrativo",
    items: ["Uniformidad", "Plataforma Alexia", "Renovación de matrícula", "Grupos y clases"],
  },
  {
    title: "Próximo curso 2026–2027",
    items: ["Información para el próximo curso", "Proceso de admisión"],
    highlight: true,
  },
]

export default function InformacionPage() {
  return (
    <>
      <PageHero
        tag="General"
        title="Información"
        subtitle="Todo lo que necesitas saber sobre el funcionamiento del colegio: horarios, servicios, normativa y recursos para el curso 2025–2026."
        breadcrumbs={[{ label: "Información" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl border p-6 ${s.highlight ? "border-[var(--accent)] bg-[var(--accent-light)]" : "border-[var(--border)] bg-white"}`}
            >
              {s.highlight && (
                <span className="inline-block text-xs font-semibold text-[var(--accent)] bg-white px-2 py-0.5 rounded-full mb-3">Nuevo</span>
              )}
              <h3 className="font-semibold text-[var(--text)] mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <svg className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-[var(--border)] rounded-2xl p-6">
          <p className="font-semibold text-[var(--text)] mb-2">Acceso completo a información general</p>
          <p className="text-sm text-[var(--text-secondary)] mb-4">Consulta todos los documentos, circulares y recursos en el portal oficial del colegio.</p>
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-informacionyadmisione/informaci%C3%B3n-general"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Ir al portal de información ↗
          </a>
        </div>
      </div>
    </>
  )
}
