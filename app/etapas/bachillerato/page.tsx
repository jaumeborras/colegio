"use client"
import PageHero from "@/components/PageHero"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function BachilleratoPage() {
  const { lang } = useLanguage()

  const features = [
    { title: t("bach.english.title", lang), desc: t("bach.english.desc", lang) },
    { title: t("bach.research.title", lang), desc: t("bach.research.desc", lang) },
    { title: t("bach.guidance.title", lang), desc: t("bach.guidance.desc", lang) },
  ]

  const ibPrompt = lang === "ca"
    ? "Sabies que també oferim l'IB?"
    : lang === "en"
    ? "Did you know we also offer the IB?"
    : lang === "de"
    ? "Wussten Sie, dass wir auch das IB anbieten?"
    : "¿Sabías que también ofrecemos el IB?"

  const ibDesc = lang === "ca"
    ? "El Batxillerat Internacional (Diploma IB) és una alternativa de prestigi reconeguda mundialment."
    : lang === "en"
    ? "The International Baccalaureate (IB Diploma) is a prestigious, world-recognised alternative."
    : lang === "de"
    ? "Das Internationale Abitur (IB-Diplom) ist eine angesehene, weltweit anerkannte Alternative."
    : "El Bachillerato Internacional (Diploma IB) es una alternativa de prestigio reconocida mundialmente."

  const ibLink = lang === "ca"
    ? "Coneix el programa IB →"
    : lang === "en"
    ? "Learn about the IB programme →"
    : lang === "de"
    ? "Erfahren Sie mehr über das IB-Programm →"
    : "Conoce el programa IB →"

  return (
    <>
      <PageHero
        tag={t("stage.tag", lang)}
        title={t("bach.title", lang)}
        subtitle={t("bach.subtitle", lang)}
        breadcrumbs={[{ label: t("bach.title", lang) }]}
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

        <div className="bg-[var(--accent-light)] border border-[var(--accent)] rounded-2xl p-6 mb-10">
          <p className="text-sm font-semibold text-[var(--accent)] mb-1">{ibPrompt}</p>
          <p className="text-sm text-[var(--text-secondary)] mb-4">{ibDesc}</p>
          <Link href="/etapas/ib" className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-medium hover:underline">
            {ibLink}
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-bachillerato"
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
