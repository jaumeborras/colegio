"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { getMainNav, getSecondaryNav, NavItem } from "./nav-data"
import { useLanguage, setLanguage } from "@/lib/i18n-context"
import { t } from "@/lib/i18n"
import type { Lang } from "@/lib/i18n"

function useHoverDelay(delay = 120) {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const enter = useCallback(() => {
    if (timer.current) clearTimeout(timer.current)
    setOpen(true)
  }, [])

  const leave = useCallback(() => {
    timer.current = setTimeout(() => setOpen(false), delay)
  }, [delay])

  const close = useCallback(() => {
    if (timer.current) clearTimeout(timer.current)
    setOpen(false)
  }, [])

  return { open, enter, leave, close }
}

function DropdownItem({ item, depth = 0 }: { item: NavItem; depth?: number }) {
  const { open, enter, leave } = useHoverDelay()

  const hasChildren = item.children && item.children.length > 0
  const linkProps = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
  const href = item.href || "#"

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={href}
          {...linkProps}
          className="flex items-center gap-1.5 px-4 py-2.5 text-sm text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors whitespace-nowrap"
        >
          {item.label}
          {item.external && (
            <svg className="w-3 h-3 opacity-40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
        </Link>
      </li>
    )
  }

  return (
    <li className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        href={href}
        {...linkProps}
        className="flex items-center justify-between gap-2 px-4 py-2.5 text-sm text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)] transition-colors whitespace-nowrap"
      >
        {item.label}
        <svg className="w-3 h-3 opacity-40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
      {open && (
        <ul className="absolute top-0 left-full bg-white border border-[var(--border)] rounded-xl shadow-xl py-1 min-w-[160px] z-[60]">
          {item.children!.map((child) => (
            <DropdownItem key={child.label} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

function MegaDropdown({ item, description }: { item: NavItem; description: string }) {
  const { open, enter, leave } = useHoverDelay(200)
  const href = item.href || "#"

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/15 transition-colors rounded-md">
        {item.label}
        <svg className={`w-3.5 h-3.5 opacity-50 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div
          className="fixed top-[72px] left-0 right-0 bg-white border-b border-[var(--border)] shadow-2xl z-50 flex h-72"
          onMouseEnter={enter}
          onMouseLeave={leave}
        >
          <div className="w-1/3 bg-[var(--bg-secondary)] px-12 py-10 flex items-center border-r border-[var(--border)]">
            <div>
              <Link href={href} className="text-lg font-semibold text-[var(--text)] hover:text-[var(--accent)] transition-colors block mb-3">
                {item.label}
              </Link>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{description}</p>
            </div>
          </div>
          <div className="w-1/3 px-12 py-10 flex items-start">
            <ul className="space-y-4 w-full">
              {item.children?.map((child) => {
                const childLinkProps = child.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
                return (
                  <li key={child.label}>
                    <Link
                      href={child.href || "#"}
                      {...childLinkProps}
                      className="text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      {child.label}
                      {child.external && <span className="text-xs opacity-40">↗</span>}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="w-1/3 overflow-hidden">
            <img src="/fondo.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      )}
    </div>
  )
}

function NavDropdown({ item }: { item: NavItem }) {
  const { open, enter, leave } = useHoverDelay()

  const hasChildren = item.children && item.children.length > 0
  const linkProps = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
  const href = item.href || "#"

  if (!hasChildren) {
    return (
      <Link
        href={href}
        {...linkProps}
        className="px-3 py-1.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/15 transition-colors rounded-md"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/15 transition-colors rounded-md">
        {item.label}
        <svg className={`w-3.5 h-3.5 opacity-50 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute top-full left-0 bg-white border border-[var(--border)] rounded-xl shadow-xl py-1 min-w-[200px] z-50">
          {item.children!.map((child) => (
            <DropdownItem key={child.label} item={child} depth={0} />
          ))}
        </ul>
      )}
    </div>
  )
}

const langLabels: Record<Lang, string> = {
  es: "Español",
  ca: "Català",
  en: "English",
  de: "Deutsch",
}

const langUILabel: Record<Lang, string> = {
  es: "Idioma",
  ca: "Idioma",
  en: "Language",
  de: "Sprache",
}

function LangDropdown() {
  const { lang: currentLang, setLang } = useLanguage()
  const { open, enter, leave, close } = useHoverDelay()

  const langs: { label: string; code: Lang }[] = [
    { label: "Español", code: "es" },
    { label: "Català", code: "ca" },
    { label: "English", code: "en" },
    { label: "Deutsch", code: "de" },
  ]

  function switchLang(code: Lang) {
    close()
    setLang(code)
  }

  return (
    <div className="relative ml-1" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white/90 hover:text-white hover:bg-white/15 transition-colors rounded-md">
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        {langUILabel[currentLang]}
        <svg className={`w-3.5 h-3.5 opacity-50 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute top-full right-0 bg-white border border-[var(--border)] rounded-xl shadow-xl py-1 min-w-[140px] z-50">
          {langs.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => switchLang(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors whitespace-nowrap ${
                  currentLang === lang.code
                    ? "text-[var(--accent)] bg-[var(--accent-light)] font-medium"
                    : "text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--accent-light)]"
                }`}
              >
                {lang.label}
                {currentLang === lang.code && (
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function MobileLangPicker({ onClose }: { onClose: () => void }) {
  const { lang } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const langs: { code: Lang; label: string; native: string; flag: string }[] = [
    { code: "es", label: "Español",  native: "ES", flag: "🇪🇸" },
    { code: "ca", label: "Català",   native: "CA", flag: "🇪🇸" },
    { code: "en", label: "English",  native: "EN", flag: "🇬🇧" },
    { code: "de", label: "Deutsch",  native: "DE", flag: "🇩🇪" },
  ]

  return (
    <div className="fixed inset-0 z-50 lg:hidden" onClick={onClose}>
      <div
        className="absolute right-3 bg-white rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden"
        style={{
          top: 76,
          minWidth: 210,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.97)",
          transition: "opacity 0.18s ease, transform 0.18s ease",
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="px-4 py-2.5 border-b border-[var(--border)] bg-[var(--bg-secondary)]">
          <p className="text-[10px] font-semibold text-[var(--text-secondary)] uppercase tracking-widest">Idioma / Language</p>
        </div>
        {langs.map(({ code, label, flag }) => (
          <button
            key={code}
            onClick={() => { setLanguage(code); onClose() }}
            className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm border-b border-[var(--border)] last:border-0 transition-colors ${
              lang === code
                ? "bg-[var(--accent-light)] text-[var(--accent)] font-semibold"
                : "text-[var(--text)] hover:bg-[var(--bg-secondary)]"
            }`}
          >
            <span className="text-xl leading-none">{flag}</span>
            <span className="flex-1 text-left">{label}</span>
            {lang === code && (
              <svg className="w-4 h-4 text-[var(--accent)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang } = useLanguage()
  const [expanded, setExpanded] = useState<string | null>(null)
  const [subExpanded, setSubExpanded] = useState<string | null>(null)

  // Quiénes somos primero, luego etapas, luego resto del secundario
  const allItems = [
    getSecondaryNav(lang)[0],
    ...getMainNav(lang),
    ...getSecondaryNav(lang).slice(1),
  ]

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Cabecera */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)] shrink-0 bg-[#003087]">
        <Link href="/" onClick={onClose} className="flex items-center gap-3">
          <div className="w-9 h-9 shrink-0">
            <Image
              src="https://www.colegiosancayetano.com/wp-content/uploads/2021/11/cropped-logo2-300x300.jpg"
              alt="Colegio San Cayetano"
              width={36}
              height={36}
              className="object-contain rounded-full"
              unoptimized
            />
          </div>
          <span className="font-semibold text-white">Colegio San Cayetano</span>
        </Link>
        <button onClick={onClose} className="p-2 rounded-full text-white hover:bg-white/15 transition-colors">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navegación */}
      <nav className="flex-1 overflow-y-auto px-4 py-2">
        {allItems.map((item) => {
          const isOpen = expanded === item.label
          const linkProps = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
          const href = item.href || "#"
          return (
            <div key={item.label} className="border-b border-[var(--border)] last:border-0">
              <div className="flex items-center justify-between">
                <Link
                  href={href}
                  {...linkProps}
                  onClick={() => { if (!item.children) onClose() }}
                  className="flex-1 py-4 text-sm font-medium text-[var(--text)]"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() => { setExpanded(isOpen ? null : item.label); setSubExpanded(null) }}
                    className="p-3"
                  >
                    <svg className={`w-4 h-4 text-[var(--text-secondary)] transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {isOpen && item.children && (
                <div className="pb-2 pl-4 border-l-2 border-[var(--accent-light)] ml-2">
                  {item.children.map((child) => {
                    const childIsOpen = subExpanded === child.label
                    const childLinkProps = child.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
                    return (
                      <div key={child.label}>
                        <div className="flex items-center justify-between">
                          <Link
                            href={child.href || "#"}
                            {...childLinkProps}
                            onClick={() => { if (!child.children) onClose() }}
                            className="flex-1 py-3 text-sm text-[var(--text-secondary)]"
                          >
                            {child.label}
                            {child.external && <span className="text-xs opacity-40 ml-1">↗</span>}
                          </Link>
                          {child.children && (
                            <button onClick={() => setSubExpanded(childIsOpen ? null : child.label)} className="p-2">
                              <svg className={`w-3.5 h-3.5 text-[var(--text-secondary)] transition-transform ${childIsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          )}
                        </div>
                        {childIsOpen && child.children && (
                          <div className="pl-4 pb-1">
                            {child.children.map((sub) => {
                              const subLinkProps = sub.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
                              return (
                                <Link key={sub.label} href={sub.href || "#"} {...subLinkProps} onClick={onClose} className="flex items-center gap-1 py-2.5 text-xs text-[var(--text-secondary)]">
                                  {sub.label}
                                  {sub.external && <span className="opacity-40">↗</span>}
                                </Link>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </div>
  )
}

export default function Header() {
  const { lang } = useLanguage()
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileLangOpen, setMobileLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled || !isHome ? "bg-[#003087] shadow-md" : "bg-transparent"
        }`}
      >
        {/* Fila principal: logo + nav */}
        <div className="flex items-center justify-between pl-4 pr-5 lg:pl-6 lg:pr-8 py-3">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-12 h-12 shrink-0">
              <Image
                src="https://www.colegiosancayetano.com/wp-content/uploads/2021/11/cropped-logo2-300x300.jpg"
                alt="Escudo Colegio San Cayetano"
                width={48}
                height={48}
                className="object-contain rounded-full"
                unoptimized
                priority
              />
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-semibold leading-tight text-white">
                Colegio San Cayetano
              </p>
              <p className="text-xs leading-tight text-white/70">
                Palma de Mallorca
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <MegaDropdown item={getSecondaryNav(lang)[0]} description={t("who.subtitle", lang)} />
            {getMainNav(lang).map((item) => {
              const descKey: Record<string, string> = {
                [t("stage.escoleta", lang)]:    t("escoleta.subtitle", lang),
                [t("stage.infantil", lang)]:    t("infantil.subtitle", lang),
                [t("stage.primaria", lang)]:    t("primaria.subtitle", lang),
                [t("stage.secundaria", lang)]:  t("secundaria.subtitle", lang),
                [t("stage.bachillerato", lang)]: t("bach.subtitle", lang),
                "IB": t("ib.subtitle", lang),
              }
              const description = descKey[item.label]
              if (description) return <MegaDropdown key={item.label} item={item} description={description} />
              return <NavDropdown key={item.label} item={item} />
            })}
            <div className="w-px h-4 bg-white/20 mx-1" />
            <LangDropdown />
          </nav>

          <div className="flex items-center gap-1 lg:hidden">
            <button
              className="p-2 rounded-lg text-white hover:bg-white/15 transition-colors"
              onClick={() => setMobileLangOpen(v => !v)}
              aria-label="Seleccionar idioma"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </button>
            <button
              className="p-2 rounded-lg text-white hover:bg-white/15 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menú"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

      </header>

      {mobileLangOpen && <MobileLangPicker onClose={() => setMobileLangOpen(false)} />}

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
