"use client"
import PageHero from "@/components/PageHero"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function OficinaVirtualPage() {
  const { lang } = useLanguage()

  const accessLabel = lang === "ca" ? "Accedir" : lang === "en" ? "Access" : lang === "de" ? "Zugriff" : "Acceder"

  const tools = [
    {
      title: t("virtual.online.title", lang),
      desc: t("virtual.online.desc", lang),
      href: "https://sites.google.com/csc.edu.es/csc22esp-oficinavirtual",
      icon: "📋",
    },
    {
      title: t("virtual.alexia.title", lang),
      desc: t("virtual.alexia.desc", lang),
      href: "https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d",
      icon: "👨‍👩‍👧",
    },
    {
      title: t("virtual.managebac.title", lang),
      desc: t("virtual.managebac.desc", lang),
      href: "https://colegiosancayetano.managebac.com/",
      icon: "🌍",
    },
    {
      title: t("virtual.complaints.title", lang),
      desc: t("virtual.complaints.desc", lang),
      href: "https://whistleblowersoftware.com/secure/csc",
      icon: "🔒",
    },
    {
      title: t("virtual.jobs.title", lang),
      desc: t("virtual.jobs.desc", lang),
      href: "https://forms.gle/WXyGe2xq6AtCfqBf8",
      icon: "💼",
    },
    {
      title: t("virtual.iaqse.title", lang),
      desc: t("virtual.iaqse.desc", lang),
      href: "https://intranet.caib.es/xesavafront-pub/",
      icon: "🏛️",
    },
  ]

  return (
    <>
      <PageHero
        tag={t("virtual.tag", lang)}
        title={t("virtual.title", lang)}
        subtitle={t("virtual.subtitle", lang)}
        breadcrumbs={[{ label: t("virtual.title", lang) }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <a
              key={tool.title}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all"
            >
              <span className="text-3xl mb-4">{tool.icon}</span>
              <p className="font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-2">{tool.title}</p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed flex-1">{tool.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs text-[var(--accent)] font-medium">
                {accessLabel}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
