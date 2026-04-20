import PageHero from "@/components/PageHero"

const tools = [
  {
    title: "Trámites Online",
    desc: "Accede a todos los trámites administrativos del colegio de forma digital.",
    href: "https://sites.google.com/csc.edu.es/csc22esp-oficinavirtual",
    icon: "📋",
  },
  {
    title: "Alexia (Familias)",
    desc: "Plataforma de comunicación entre familias y el colegio: notas, ausencias, avisos.",
    href: "https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d",
    icon: "👨‍👩‍👧",
  },
  {
    title: "IB-ManageBac",
    desc: "Plataforma de gestión académica para los alumnos del Programa Diploma IB.",
    href: "https://colegiosancayetano.managebac.com/",
    icon: "🌍",
  },
  {
    title: "Canal de denuncias",
    desc: "Canal seguro y confidencial para comunicar irregularidades o incidencias.",
    href: "https://whistleblowersoftware.com/secure/csc",
    icon: "🔒",
  },
  {
    title: "Trabaja con nosotros",
    desc: "Envía tu candidatura para unirte al equipo docente o administrativo del colegio.",
    href: "https://forms.gle/WXyGe2xq6AtCfqBf8",
    icon: "💼",
  },
  {
    title: "IAQSE-GESAVA",
    desc: "Acceso a la intranet de la Conselleria d'Educació de les Illes Balears.",
    href: "https://intranet.caib.es/xesavafront-pub/",
    icon: "🏛️",
  },
]

export default function OficinaVirtualPage() {
  return (
    <>
      <PageHero
        tag="Digital"
        title="Oficina Virtual"
        subtitle="Accede a todos los servicios y plataformas digitales del Colegio San Cayetano desde un solo lugar."
        breadcrumbs={[{ label: "Oficina Virtual" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t) => (
            <a
              key={t.title}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all"
            >
              <span className="text-3xl mb-4">{t.icon}</span>
              <p className="font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2">{t.title}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">{t.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-[var(--accent)] font-medium">
                Acceder
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
