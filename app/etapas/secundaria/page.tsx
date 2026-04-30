"use client"
import PageHero from "@/components/PageHero"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function SecundariaPage() {
  const { lang } = useLanguage()

  const features = [
    { title: t("secundaria.projects.title", lang), desc: t("secundaria.projects.desc", lang) },
    { title: t("secundaria.language.title", lang), desc: t("secundaria.language.desc", lang) },
    { title: t("secundaria.guidance.title", lang), desc: t("secundaria.guidance.desc", lang) },
  ]

  return (
    <>
      <PageHero
        tag={t("stage.tag", lang)}
        title={t("secundaria.title", lang)}
        subtitle={t("secundaria.subtitle", lang)}
        breadcrumbs={[{ label: t("secundaria.title", lang) }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {features.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-secundaria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            {t("stage.portal", lang)} ↗
          </a>
          <a
            href="https://biblioteca.colegiosancayetano.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            {t("stage.library", lang)} ↗
          </a>
          <Link href="/admisiones" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
            {t("stage.admissions", lang)}
          </Link>
        </div>
      </div>
    </>
  )
}
