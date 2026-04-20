import PageHero from "@/components/PageHero"
import Link from "next/link"

const classes = [
  {
    group: "1 Año",
    items: [
      { label: "1 Año A", href: "https://sites.google.com/csc.edu.es/001a2025-25?usp=sharing" },
      { label: "1 Año B", href: "https://sites.google.com/csc.edu.es/001b-2025-26?usp=sharing" },
    ],
  },
  {
    group: "2 Años",
    items: [
      { label: "2 Años A", href: "https://sites.google.com/csc.edu.es/escoleta-2-aos?usp=sharing" },
      { label: "2 Años B", href: "https://sites.google.com/csc.edu.es/escoleta2aos?usp=sharing" },
      { label: "2 Años C", href: "https://sites.google.com/csc.edu.es/002c-2025-26?usp=sharing" },
    ],
  },
]

export default function EscoletaPage() {
  return (
    <>
      <PageHero
        tag="Etapa"
        title="Escoleta"
        subtitle="La primera etapa educativa para los más pequeños, de 1 a 2 años. Un espacio de descubrimiento, afecto y desarrollo en un entorno seguro y estimulante."
        breadcrumbs={[{ label: "Escoleta" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {[
            { title: "Ambiente seguro", desc: "Espacios diseñados para el bienestar y la exploración libre de los bebés." },
            { title: "Atención personalizada", desc: "Ratios reducidas para garantizar la atención individual de cada niño." },
            { title: "Desarrollo integral", desc: "Estimulamos el desarrollo motor, cognitivo, emocional y social desde el principio." },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">Clases y aulas virtuales</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {classes.map((g) => (
              <div key={g.group} className="border border-[var(--border)] rounded-2xl overflow-hidden">
                <div className="bg-[var(--accent)] px-5 py-3">
                  <h3 className="text-white font-semibold text-sm">{g.group}</h3>
                </div>
                <ul className="divide-y divide-[var(--border)]">
                  {g.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-5 py-3.5 text-sm text-[var(--text)] hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
                      >
                        {item.label}
                        <svg className="w-3.5 h-3.5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/escoletasancayetano/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            Instagram Escoleta ↗
          </a>
          <Link href="/admisiones" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
            Solicitar admisión
          </Link>
        </div>
      </div>
    </>
  )
}
