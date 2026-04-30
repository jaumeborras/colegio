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
        tag={t("who.tag", lang)}
        title={t("who.title", lang)}
        subtitle={t("who.subtitle", lang)}
        breadcrumbs={[{ label: t("who.title", lang) }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        {/* Director */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-12">
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

        {/* Redes */}
        <div className="border border-[var(--border)] rounded-2xl p-6 mb-10">
          <h2 className="text-sm font-semibold text-[var(--text)] mb-4">{t("who.follow", lang)}</h2>
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
          {t("who.contactUs", lang)}
        </Link>
      </div>
    </>
  )
}
