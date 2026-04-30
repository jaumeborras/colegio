"use client"
import PageHero from "@/components/PageHero"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

const courses = [
  {
    group: "1º Primaria",
    classes: ["A", "B", "C", "D", "E"].map((l) => ({
      label: `1º ${l}`,
      href: `https://sites.google.com/csc.edu.es/1-primaria-${l.toLowerCase()}`,
    })),
  },
  {
    group: "2º Primaria",
    classes: ["A", "B", "C", "D", "E"].map((l) => ({
      label: `2º ${l}`,
      href: `https://sites.google.com/csc.edu.es/2-primaria-${l.toLowerCase()}`,
    })),
  },
]

export default function PrimariaPage() {
  const { lang } = useLanguage()

  const features = [
    { title: t("primaria.onetoone.title", lang), desc: t("primaria.onetoone.desc", lang) },
    { title: t("primaria.language.title", lang), desc: t("primaria.language.desc", lang) },
    { title: t("primaria.excellence.title", lang), desc: t("primaria.excellence.desc", lang) },
    { title: t("primaria.coexistence.title", lang), desc: t("primaria.coexistence.desc", lang) },
  ]

  return (
    <>
      <PageHero
        tag={t("stage.tag", lang)}
        title={t("primaria.title", lang)}
        subtitle={t("primaria.subtitle", lang)}
        breadcrumbs={[{ label: t("primaria.title", lang) }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          {features.map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-primaria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            {t("stage.portal", lang)} ↗
          </a>
        </div>

        <h2 className="text-xl font-semibold text-[var(--text)] mb-6">{t("stage.classes", lang)}</h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {courses.map((y) => (
            <div key={y.group} className="border border-[var(--border)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--accent)] px-5 py-3">
                <h3 className="text-white font-semibold text-sm">{y.group}</h3>
              </div>
              <ul className="divide-y divide-[var(--border)]">
                {y.classes.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-5 py-3.5 text-sm text-[var(--text)] hover:bg-[var(--accent-light)] hover:text-[var(--accent)] transition-colors"
                    >
                      {c.label}
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

        <Link href="/admisiones" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
          {t("stage.admissions", lang)}
        </Link>
      </div>
    </>
  )
}
