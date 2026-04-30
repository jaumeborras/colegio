"use client"
import PageHero from "@/components/PageHero"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function ComedorPage() {
  const { lang } = useLanguage()

  const features = [
    { icon: "🥗", title: t("cafeteria.balanced.title", lang), desc: t("cafeteria.balanced.desc", lang) },
    { icon: "🌿", title: t("cafeteria.fresh.title", lang), desc: t("cafeteria.fresh.desc", lang) },
    { icon: "♿", title: t("cafeteria.special.title", lang), desc: t("cafeteria.special.desc", lang) },
  ]

  return (
    <>
      <PageHero
        tag={t("cafeteria.tag", lang)}
        title={t("cafeteria.title", lang)}
        subtitle={t("cafeteria.subtitle", lang)}
        breadcrumbs={[{ label: t("cafeteria.title", lang) }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {features.map((c) => (
            <div key={c.title} className="flex flex-col items-start p-6 rounded-2xl border border-[var(--border)]">
              <span className="text-3xl mb-4">{c.icon}</span>
              <h3 className="font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="https://sites.google.com/csc.edu.es/csc22esp-comedor"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all group mb-10 max-w-xl"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-[var(--text)] mb-1">{t("cafeteria.portal.label", lang)} ↗</p>
            <p className="text-sm text-[var(--text-secondary)]">{t("cafeteria.portal.desc", lang)}</p>
          </div>
        </a>

        <Link href="/contacto" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
          {t("ui.contact", lang)}
        </Link>
      </div>
    </>
  )
}
