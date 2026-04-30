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
        bgImage="/fotos/fondo.png"
        centered
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        {/* Director */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-10">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/fotos/pablo.png"
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
          <p>{t("who.director.p1a", lang)}<strong className="text-[var(--text)] font-semibold">{t("who.director.p1bold", lang)}</strong>{t("who.director.p1b", lang)}</p>
          <p>{t("who.director.p2", lang)}</p>
          <p>{t("who.director.p3", lang)}</p>
          <p>{t("who.director.p4", lang)}</p>
          <p>{t("who.director.p5", lang)}</p>
          <p>{t("who.director.p6", lang)}</p>
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
