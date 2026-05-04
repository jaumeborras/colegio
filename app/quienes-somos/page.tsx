"use client"
import PageHero from "@/components/PageHero"
import Image from "next/image"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function QuienesSomosPage() {
  const { lang } = useLanguage()

  const values = [
    { title: t("who.values.christian.title", lang), desc: t("who.values.christian.desc", lang) },
    { title: t("who.values.respect.title", lang), desc: t("who.values.respect.desc", lang) },
    { title: t("who.values.quality.title", lang), desc: t("who.values.quality.desc", lang) },
    { title: t("who.values.volunteering.title", lang), desc: t("who.values.volunteering.desc", lang) },
    { title: t("who.values.linguistic.title", lang), desc: t("who.values.linguistic.desc", lang) },
    { title: t("who.values.community.title", lang), desc: t("who.values.community.desc", lang) },
  ]

  const valueIconPaths = [
    "M12 3v18M5 10h14",
    "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z",
    "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
    "M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002",
    "M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802",
    "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  ]

  return (
    <>
      <PageHero
        title={t("who.carta.title", lang)}
        subtitle={t("who.subtitle", lang)}
        bgImage="/fotos/fondo.png"
        centered
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        {/* Director */}
        <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-10">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shrink-0">
            <Image
              src="/fotos/pablo.png"
              alt="Pablo Guerrero Pacheco"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">{t("who.director.label", lang)}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--accent)] leading-tight mb-2">Pablo Guerrero<br/>Pacheco, C.R.</h2>
            <p className="text-[var(--text-secondary)]">Orden Teatina (Clérigos Regulares)</p>
          </div>
        </div>

        {/* Carta del director */}
        <div className="mb-14 space-y-5 text-[var(--text-secondary)] leading-relaxed text-justify">
          <p>{t("who.director.p1a", lang)}<strong className="text-[var(--text)] font-semibold">{t("who.director.p1bold", lang)}</strong>{t("who.director.p1b", lang)}</p>
          <p>{t("who.director.p2", lang)}</p>
          <p>{t("who.director.p3", lang)}</p>
          <p>{t("who.director.p4", lang)}</p>
          <p>{t("who.director.p5", lang)}</p>
          <p>{t("who.director.p6", lang)}</p>
          <div className="pt-4">
            <p className="text-[var(--accent)] font-semibold">Pablo Guerrero Pacheco, C.R.</p>
            <p className="text-sm">{t("who.director.label", lang)}</p>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="bg-[var(--accent)] rounded-3xl p-8 md:p-12 mb-14">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col">
              <span className="text-[10px] font-black text-[var(--accent)] uppercase tracking-[0.25em] mb-5 block">01 — {t("who.mission.title", lang)}</span>
              <h2 className="text-2xl font-bold text-[var(--accent)] mb-5">{t("who.mission.title", lang)}</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed text-justify mb-4 flex-1">{t("who.mission.p1", lang)}</p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-justify">{t("who.mission.p2", lang)}</p>
            </div>
            <div className="rounded-2xl p-8 border border-white/20 bg-white/10 flex flex-col">
              <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.25em] mb-5 block">02 — {t("who.vision.title", lang)}</span>
              <h2 className="text-2xl font-bold text-white mb-4">{t("who.vision.title", lang)}</h2>
              <div className="my-auto">
                <div className="text-7xl text-white/20 font-serif leading-none select-none mb-2">&ldquo;</div>
                <blockquote className="text-white/90 italic leading-relaxed text-base mb-1">{t("who.vision.quote", lang)}</blockquote>
                <div className="text-7xl text-white/20 font-serif leading-none select-none text-right">&rdquo;</div>
              </div>
              <p className="text-white/70 leading-relaxed text-sm border-t border-white/20 pt-4">{t("who.vision.p", lang)}</p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--accent)] mb-8">{t("who.values.title", lang)}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div key={v.title} className="relative overflow-hidden bg-white rounded-2xl p-6 border border-[var(--border)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="absolute -right-3 -bottom-3 text-[var(--accent)] opacity-5 group-hover:opacity-[0.09] transition-opacity pointer-events-none select-none">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1} className="w-28 h-28">
                    <path strokeLinecap="round" strokeLinejoin="round" d={valueIconPaths[i]} />
                  </svg>
                </div>
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--accent-light)] text-[var(--accent)] mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={valueIconPaths[i]} />
                  </svg>
                </span>
                <p className="font-bold text-[var(--text)] mb-2">{v.title}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conócenos */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[var(--accent)] mb-6">Conócenos</h2>
          <div className="aspect-video w-full rounded-2xl overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/B7tV4O1MLXw"
              title="Conócenos — Colegio San Cayetano"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

      </div>
    </>
  )
}
