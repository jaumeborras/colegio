"use client"
import Link from "next/link"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

type Crumb = { label: string; href?: string }

export default function PageHero({
  tag,
  title,
  subtitle,
  breadcrumbs,
  bgImage,
  centered,
}: {
  tag?: string
  title: string
  subtitle?: string
  breadcrumbs?: Crumb[]
  bgImage?: string
  centered?: boolean
}) {
  const { lang } = useLanguage()

  const hasBg = !!bgImage
  const sectionStyle = hasBg
    ? { backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }
    : undefined

  return (
    <section
      className={hasBg ? "relative border-b border-[var(--border)] py-12 md:py-16" : "bg-[var(--bg-secondary)] border-b border-[var(--border)] py-12 md:py-16"}
      style={sectionStyle}
    >
      {hasBg && <div className="absolute inset-0 bg-black/45" />}
      <div className={`relative max-w-screen-xl mx-auto px-6 ${centered ? "text-center" : ""}`}>
        {breadcrumbs && (
          <nav className={`flex items-center gap-1.5 text-xs mb-5 ${centered ? "justify-center" : ""} ${hasBg ? "text-white/70" : "text-[var(--text-secondary)]"}`}>
            <Link href="/" className={`transition-colors ${hasBg ? "hover:text-white" : "hover:text-[var(--accent)]"}`}>{t("ui.home", lang)}</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {b.href ? (
                  <Link href={b.href} className={`transition-colors ${hasBg ? "hover:text-white" : "hover:text-[var(--accent)]"}`}>{b.label}</Link>
                ) : (
                  <span className={hasBg ? "text-white" : "text-[var(--text)]"}>{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {tag && (
          <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${hasBg ? "text-white/80" : "text-[var(--accent)]"}`}>{tag}</p>
        )}
        <h1 className={`font-bold tracking-tight ${centered ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"} ${hasBg ? "text-white" : "text-[var(--text)]"}`}>{title}</h1>
        {subtitle && (
          <p className={`mt-3 leading-relaxed italic ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"} ${hasBg ? "text-white/80" : "text-[var(--text-secondary)]"}`}>{subtitle}</p>
        )}
      </div>
    </section>
  )
}
