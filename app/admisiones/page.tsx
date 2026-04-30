"use client"
import PageHero from "@/components/PageHero"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function AdmisionesPage() {
  const { lang } = useLanguage()

  const steps = [
    { step: "01", title: t("adm.step1.title", lang), desc: t("adm.step1.desc", lang) },
    { step: "02", title: t("adm.step2.title", lang), desc: t("adm.step2.desc", lang) },
    { step: "03", title: t("adm.step3.title", lang), desc: t("adm.step3.desc", lang) },
    { step: "04", title: t("adm.step4.title", lang), desc: t("adm.step4.desc", lang) },
  ]

  const stageKeys = ["stage.escoleta", "stage.infantil", "stage.primaria", "stage.secundaria", "stage.bachillerato", "stage.ib"]
  const stageHrefs = ["/etapas/escoleta", "/etapas/infantil", "/etapas/primaria", "/etapas/secundaria", "/etapas/bachillerato", "/etapas/ib"]

  return (
    <>
      <PageHero
        tag={t("adm.tag", lang)}
        title={t("adm.title", lang)}
        subtitle={t("adm.subtitle", lang)}
        breadcrumbs={[{ label: t("adm.title", lang) }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        {/* Pasos */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-8">{t("adm.process.title", lang)}</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="relative p-6 rounded-2xl border border-[var(--border)] bg-white">
                <span className="text-4xl font-bold text-[var(--accent-light)] absolute top-4 right-5 select-none">{s.step}</span>
                <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">{t("adm.step", lang)} {s.step}</p>
                <p className="font-semibold text-[var(--text)] mb-2">{s.title}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Etapas */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-6">{t("adm.stages.title", lang)}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {stageKeys.map((key, i) => (
              <Link
                key={key}
                href={stageHrefs[i]}
                className="flex flex-col items-center text-center p-4 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all"
              >
                <p className="text-sm font-semibold text-[var(--text)]">{t(key, lang)}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Accesos */}
        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-informacionyadmisione/admisi%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--text)] mb-1">{t("adm.forms.title", lang)}</p>
              <p className="text-sm text-[var(--text-secondary)]">{t("adm.forms.desc", lang)}</p>
            </div>
          </a>
          <a
            href="https://sites.google.com/csc.edu.es/csc22esp-oficinavirtual"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-[var(--text)] mb-1">{t("adm.virtual.title", lang)}</p>
              <p className="text-sm text-[var(--text-secondary)]">{t("adm.virtual.desc", lang)}</p>
            </div>
          </a>
        </div>

        <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[var(--text)] mb-1">{t("adm.help.title", lang)}</p>
            <p className="text-sm text-[var(--text-secondary)]">{t("adm.help.desc", lang)}</p>
          </div>
          <Link href="/contacto" className="shrink-0 inline-flex items-center gap-2 bg-[var(--accent)] text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors">
            {t("ui.contact", lang)}
          </Link>
        </div>
      </div>
    </>
  )
}
