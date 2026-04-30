"use client"
import PageHero from "@/components/PageHero"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function IBPage() {
  const { lang } = useLanguage()

  const ibTag = lang === "ca" ? "Programa Internacional" : lang === "en" ? "International Programme" : lang === "de" ? "Internationales Programm" : "Programa Internacional"
  const whatTitle = lang === "ca" ? "Què és el Programa Diploma IB?" : lang === "en" ? "What is the IB Diploma Programme?" : lang === "de" ? "Was ist das IB-Diplomprogramm?" : "¿Qué es el Programa Diploma IB?"

  const components = [
    { title: t("ib.recognition.title", lang), desc: t("ib.recognition.desc", lang) },
    { title: t("ib.essay.title", lang), desc: t("ib.essay.desc", lang) },
    { title: t("ib.tok.title", lang), desc: t("ib.tok.desc", lang) },
    { title: t("ib.cas.title", lang), desc: t("ib.cas.desc", lang) },
  ]

  return (
    <>
      <PageHero
        tag={ibTag}
        title={t("ib.title", lang)}
        subtitle={t("ib.subtitle", lang)}
        breadcrumbs={[{ label: "IB" }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h2 className="text-xl font-semibold text-[var(--text)] mb-4">{whatTitle}</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{t("ib.p1", lang)}</p>
            <p className="text-[var(--text-secondary)] leading-relaxed">{t("ib.p2", lang)}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {components.map((v) => (
              <div key={v.title} className="p-5 rounded-2xl bg-[var(--accent-light)] border border-[var(--border)]">
                <p className="text-sm font-semibold text-[var(--accent)] mb-1">{v.title}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-ibprograma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            {t("stage.portal", lang)} ↗
          </a>
          <a
            href="https://colegiosancayetano.managebac.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-4 py-2.5 text-sm font-medium text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
          >
            IB-ManageBac ↗
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
