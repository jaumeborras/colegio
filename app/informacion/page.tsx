"use client"
import PageHero from "@/components/PageHero"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function InformacionPage() {
  const { lang } = useLanguage()

  const sections = [
    {
      title: t("info.block.calendar.title", lang),
      items: t("info.block.calendar.items", lang).split(" · "),
      highlight: false,
    },
    {
      title: t("info.block.services.title", lang),
      items: t("info.block.services.items", lang).split(" · "),
      highlight: false,
    },
    {
      title: t("info.block.financial.title", lang),
      items: t("info.block.financial.items", lang).split(" · "),
      highlight: false,
    },
    {
      title: t("info.block.academic.title", lang),
      items: t("info.block.academic.items", lang).split(" · "),
      highlight: false,
    },
    {
      title: t("info.block.admin.title", lang),
      items: t("info.block.admin.items", lang).split(" · "),
      highlight: false,
    },
    {
      title: t("info.block.next.title", lang),
      items: t("info.block.next.items", lang).split(" · "),
      highlight: true,
    },
  ]

  return (
    <>
      <PageHero
        tag={t("info.tag", lang)}
        title={t("info.title", lang)}
        subtitle={t("info.subtitle", lang)}
        breadcrumbs={[{ label: t("info.title", lang) }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl border p-6 ${s.highlight ? "border-[var(--accent)] bg-[var(--accent-light)]" : "border-[var(--border)] bg-white"}`}
            >
              {s.highlight && (
                <span className="inline-block text-xs font-semibold text-[var(--accent)] bg-white px-2 py-0.5 rounded-full mb-3">
                  {lang === "ca" ? "Nou" : lang === "en" ? "New" : lang === "de" ? "Neu" : "Nuevo"}
                </span>
              )}
              <h3 className="font-semibold text-[var(--text)] mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <svg className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-[var(--border)] rounded-2xl p-6">
          <p className="font-semibold text-[var(--text)] mb-2">{t("info.portal.label", lang)}</p>
          <p className="text-sm text-[var(--text-secondary)] mb-4">{t("info.portal.desc", lang)}</p>
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-informacionyadmisione/informaci%C3%B3n-general"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            {t("info.portal.label", lang)} ↗
          </a>
        </div>
      </div>
    </>
  )
}
