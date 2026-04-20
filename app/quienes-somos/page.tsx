import PageHero from "@/components/PageHero"
import Link from "next/link"

export default function QuienesSomosPage() {
  return (
    <>
      <PageHero
        tag="El colegio"
        title="Quiénes somos"
        subtitle="Más de 50 años al servicio de la sociedad mallorquina, bajo los principios de la Orden Teatina."
        breadcrumbs={[{ label: "Quiénes somos" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        {/* Director */}
        <div className="flex items-start gap-6 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] mb-12">
          <div className="w-14 h-14 rounded-full bg-[var(--accent-light)] flex items-center justify-center text-2xl shrink-0">👤</div>
          <div>
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-1">Director</p>
            <p className="font-semibold text-[var(--text)]">Pablo Guerrero Pacheco, C.R.</p>
            <p className="text-sm text-[var(--text-secondary)] mt-1">Orden Teatina (Clérigos Regulares)</p>
          </div>
        </div>

        {/* Misión y visión */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">Misión</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Nos comprometemos a formar personas con dimensión trascendente, integrando instrucción, fe, sentido cristiano de la vida y valores humanos, dentro de un marco de respeto máximo a cada persona.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Tenemos el futuro de <strong className="text-[var(--text)]">1.740 alumnos</strong> en nuestras manos, y eso nos exige rigor, vocación y compromiso cada día.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">Visión</h2>
            <blockquote className="border-l-4 border-[var(--accent)] pl-5 italic text-[var(--text-secondary)] leading-relaxed">
              "El futuro de una sociedad se forja en la educación de las nuevas generaciones."
            </blockquote>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
              Somos un colegio con más de 50 años de historia, vinculado a la Orden Teatina y al servicio de la sociedad mallorquina desde nuestros inicios.
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">Nuestros valores</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Compromiso cristiano", desc: "Educación fundamentada en el Evangelio y los valores de la Orden Teatina." },
              { title: "Respeto", desc: "Respeto a las personas, las ideas y el medio ambiente como base de la convivencia." },
              { title: "Calidad educativa", desc: "Excelencia académica con metodologías actualizadas y atención a la diversidad." },
              { title: "Voluntariado", desc: "Asociación de Voluntarios San Cayetano: responsabilidad y compromiso social." },
              { title: "Excelencia lingüística", desc: "Trilingüismo real: castellano, catalán e inglés en todos los niveles." },
              { title: "Comunidad", desc: "Una comunidad educativa unida: familias, docentes y alumnos comprometidos." },
            ].map((v) => (
              <div key={v.title} className="p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all">
                <p className="font-semibold text-[var(--text)] mb-1.5">{v.title}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Redes y Sanca TV */}
        <div className="border border-[var(--border)] rounded-2xl p-6 mb-10">
          <h2 className="text-sm font-semibold text-[var(--text)] mb-4">Síguenos</h2>
          <div className="flex flex-wrap gap-3">
            <a href="http://www.sanca.tv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
              Sanca TV ↗
            </a>
            <a href="https://www.instagram.com/sancayetanopalma/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
              Instagram ↗
            </a>
            <a href="https://www.facebook.com/Colegio-San-Cayetano-Palma-de-Mallorca-100322058504103" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
              Facebook ↗
            </a>
          </div>
        </div>

        <Link href="/contacto" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
          Contactar con el colegio
        </Link>
      </div>
    </>
  )
}
