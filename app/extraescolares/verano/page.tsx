"use client"
import PageHero from "@/components/PageHero"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function VeranoPage() {
  const { lang } = useLanguage()

  const programs = [
    { program: t("summer.1.program", lang), ages: t("summer.1.ages", lang), desc: t("summer.1.desc", lang) },
    { program: t("summer.2.program", lang), ages: t("summer.2.ages", lang), desc: t("summer.2.desc", lang) },
    { program: t("summer.3.program", lang), ages: t("summer.3.ages", lang), desc: t("summer.3.desc", lang) },
  ]

  return (
    <>
      <PageHero
        tag={t("summer.tag", lang)}
        title={t("summer.title", lang)}
        subtitle={t("summer.subtitle", lang)}
        breadcrumbs={[
          { label: t("extra.title", lang), href: "/extraescolares" },
          { label: t("summer.title", lang) },
        ]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {programs.map((p) => (
            <div key={p.program} className="border border-[var(--border)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--accent)] px-5 py-4">
                <p className="text-white font-semibold">{p.program}</p>
                <p className="text-blue-200 text-xs mt-0.5">{p.ages}</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[var(--text)] mb-1">{t("adm.help.title", lang)}</p>
            <p className="text-sm text-[var(--text-secondary)]">{t("summer.contact", lang)}</p>
          </div>
          <Link href="/contacto" className="shrink-0 inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
            {t("ui.contact", lang)}
          </Link>
        </div>
      </div>
    </>
  )
}
