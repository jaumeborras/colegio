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
}: {
  tag?: string
  title: string
  subtitle?: string
  breadcrumbs?: Crumb[]
}) {
  const { lang } = useLanguage()

  return (
    <section className="bg-[var(--bg-secondary)] border-b border-[var(--border)] py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] mb-5">
            <Link href="/" className="hover:text-[var(--accent)] transition-colors">{t("ui.home", lang)}</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                {b.href ? (
                  <Link href={b.href} className="hover:text-[var(--accent)] transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-[var(--text)]">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {tag && (
          <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-3">{tag}</p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
