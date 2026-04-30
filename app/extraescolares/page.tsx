"use client"
import PageHero from "@/components/PageHero"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function ExtraescolaresPage() {
  const { lang } = useLanguage()

  const categories = [
    { icon: "⚽", title: t("extra.sports.title", lang), desc: t("extra.sports.desc", lang) },
    { icon: "🎭", title: t("extra.arts.title", lang), desc: t("extra.arts.desc", lang) },
    { icon: "🤖", title: t("extra.tech.title", lang), desc: t("extra.tech.desc", lang) },
  ]

  return (
    <>
      <PageHero
        tag={t("extra.tag", lang)}
        title={t("extra.title", lang)}
        subtitle={t("extra.subtitle", lang)}
        breadcrumbs={[{ label: t("extra.title", lang) }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {categories.map((c) => (
            <div key={c.title} className="flex flex-col items-start p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all">
              <span className="text-3xl mb-4">{c.icon}</span>
              <h3 className="font-semibold text-[var(--text)] mb-2">{c.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Escuelas de Verano CTA */}
        <div className="bg-[var(--accent)] rounded-2xl p-8 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold text-blue-200 uppercase tracking-wider mb-2">{t("summer.tag", lang)}</p>
            <h2 className="text-xl font-bold text-white mb-2">{t("extra.summer.link", lang)}</h2>
            <p className="text-blue-200 text-sm max-w-md">{t("summer.subtitle", lang)}</p>
          </div>
          <Link
            href="/extraescolares/verano"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-[var(--accent)] rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-[var(--accent-light)] transition-colors"
          >
            {t("ui.moreInfo", lang)}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <Link href="/contacto" className="inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-4 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
          {t("ui.contact", lang)}
        </Link>
      </div>
    </>
  )
}
