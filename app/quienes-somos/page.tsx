"use client"
import PageHero from "@/components/PageHero"
import Image from "next/image"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function QuienesSomosPage() {
  const { lang } = useLanguage()

  const values = [
    { title: t("who.values.christian.title", lang), desc: t("who.values.christian.desc", lang) },
    { title: t("who.values.respect.title", lang), desc: t("who.values.respect.desc", lang) },
    { title: t("who.values.quality.title", lang), desc: t("who.values.quality.desc", lang) },
    { title: t("who.values.volunteering.title", lang), desc: t("who.values.volunteering.desc", lang) },
    { title: t("who.values.linguistic.title", lang), desc: t("who.values.linguistic.desc", lang) },
    { title: t("who.values.community.title", lang), desc: t("who.values.community.desc", lang) },
  ]

  return (
    <>
      <PageHero
        title={t("who.title", lang)}
        subtitle={t("who.subtitle", lang)}
        bgImage="/fondo.png"
        centered
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        {/* Director */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-10">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/pablo.png"
              alt="Pablo Guerrero Pacheco"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">{t("who.director.label", lang)}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text)] leading-tight mb-2">Pablo Guerrero<br/>Pacheco, C.R.</h2>
            <p className="text-[var(--text-secondary)]">Orden Teatina (Clérigos Regulares)</p>
          </div>
        </div>

        {/* Carta del director */}
        <div className="mb-14 space-y-5 text-[var(--text-secondary)] leading-relaxed text-justify">
          <p>Siempre se ha dicho que el futuro de una sociedad se forja en la educación de las nuevas generaciones. En el Colegio San Cayetano, tenemos claro que tenemos el <strong className="text-[var(--text)] font-semibold">FUTURO EN NUESTRAS MANOS</strong>. No es una frase cualquiera, tampoco es un alarde de grandeza, se trata de una realidad, todos nosotros, los que formamos la comunidad educativa tenemos, año tras año, el futuro de 1740 alumnos en nuestras manos, las de los padres, las de los profesores, las del Equipo Directivo.</p>
          <p>Desde hace más de cincuenta años, nuestro Colegio, desde el compromiso cristiano con la educación de la Orden Teatina, ha estado al servicio de la sociedad mallorquina, con una vocación de formar personas sabiendo que los primeros educadores han de ser los padres, esa es su vocación y su responsabilidad. El Colegio es un colaborador privilegiado en esa tarea, también desde una vocación muy específica definida en nuestra Misión: sabiendo que el hombre tiene una dimensión trascendente y por ello, la formación completa debe incluir la instrucción en la fe, la explicación del sentido cristiano de la vida y la transmisión de una escala coherente de valores humanos, en un marco de máximo respeto a las personas, a las ideas, a las cosas materiales que nos rodean y al medio ambiente.</p>
          <p>Esta web que ahora comienzan a visitar quiere mostrar a todos el esfuerzo de nuestros profesionales por innovar día a día y su dedicación constante a esa Misión, el trabajo de los alumnos por construir desde el esfuerzo, y la responsabilidad de ese futuro lejano para unos, muy cercano para otros, en definitiva la vida de un Colegio vivo.</p>
          <p>Nuestro Colegio ha hecho desde sus orígenes una apuesta por una enseñanza de calidad que incide, de forma especial, en el ámbito lingüístico. Fruto de este esfuerzo es la nueva oferta académica en inglés que afecta al Bachillerato y que de forma progresiva cobrará mayor importancia. Así como el inicio temprano en una segunda lengua extranjera que ya desarrollamos en 5º y 6º de Educación Primaria. Igualmente, fruto de esta búsqueda de calidad, hemos introducido en nuestro Currículo de Bachillerato la asignatura de Proyectos de Investigación que finaliza con la realización y exposición pública del proyecto escogido por los propios alumnos.</p>
          <p>Apostamos también, dentro de la formación de nuestros alumnos por el voluntariado, con la creación hace ya dos años de la Asociación de Voluntarios San Cayetano que busca concienciar de la necesidad de dedicar un poco de nuestro tiempo a los más necesitados y de comprometernos en la mejora de nuestra sociedad mallorquina colaborando con numerosas asociaciones e instituciones, públicas o privadas, para conseguir este objetivo.</p>
          <p>Les invito a realizar un recorrido por nuestra web con la seguridad de que encontrarán en él un presente vivo y un futuro pleno de esperanza.</p>
          <div className="pt-4">
            <p className="text-[var(--text)] font-semibold">Pablo Guerrero Pacheco, C.R.</p>
            <p className="text-sm">{t("who.director.label", lang)}</p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">{t("who.mission.title", lang)}</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              {t("who.mission.p1", lang)}
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {t("who.mission.p2", lang)}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">{t("who.vision.title", lang)}</h2>
            <blockquote className="border-l-4 border-[var(--accent)] pl-5 italic text-[var(--text-secondary)] leading-relaxed">
              {t("who.vision.quote", lang)}
            </blockquote>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
              {t("who.vision.p", lang)}
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">{t("who.values.title", lang)}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-5 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all">
                <p className="font-semibold text-[var(--text)] mb-1.5">{v.title}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conócenos */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">Conócenos</h2>
          <div className="aspect-video w-full rounded-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/B7tV4O1MLXw"
              title="Conócenos — Colegio San Cayetano"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </>
  )
}
