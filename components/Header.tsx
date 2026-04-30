"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { getMainNav, getSecondaryNav, NavItem } from "./nav-data"
import { useLanguage } from "@/lib/i18n-context"
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

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang, setLang } = useLanguage()
  const [expanded, setExpanded] = useState<string | null>(null)
  const [subExpanded, setSubExpanded] = useState<string | null>(null)

  const allItems = [...getMainNav(lang), ...getSecondaryNav(lang)]

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border)]">
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
          <span className="font-semibold text-[var(--text)]">San Cayetano</span>
        </Link>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-[var(--bg-secondary)]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="px-4 py-3">
        {allItems.map((item) => {
          const isOpen = expanded === item.label
          const linkProps = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
          const href = item.href || "#"
          return (
            <div key={item.label} className="border-b border-[var(--border)] last:border-0">
              <div className="flex items-center justify-between">
                <Link href={href} {...linkProps} onClick={() => { if (!item.children) onClose() }} className="flex-1 py-3.5 text-sm font-medium text-[var(--text)]">
                  {item.label}
                </Link>
                {item.children && (
                  <button onClick={() => { setExpanded(isOpen ? null : item.label); setSubExpanded(null) }} className="p-2">
                    <svg className={`w-4 h-4 text-[var(--text-secondary)] transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {isOpen && item.children && (
                <div className="pb-2 pl-4">
                  {item.children.map((child) => {
                    const childIsOpen = subExpanded === child.label
                    const childLinkProps = child.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
                    const childHref = child.href || "#"
                    return (
                      <div key={child.label}>
                        <div className="flex items-center justify-between">
                          <Link href={childHref} {...childLinkProps} onClick={() => { if (!child.children) onClose() }} className="flex-1 py-2.5 text-sm text-[var(--text-secondary)]">
                            {child.label}
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
                                <Link key={sub.label} href={sub.href || "#"} {...subLinkProps} onClick={onClose} className="block py-2 text-xs text-[var(--text-secondary)]">
                                  {sub.label}
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

      {/* Selector de idioma en móvil */}
      <div className="px-4 py-4 border-t border-[var(--border)]">
        <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-3">Idioma / Language</p>
        <div className="flex gap-2 flex-wrap">
          {(["es", "ca", "en", "de"] as Lang[]).map((code) => (
            <button
              key={code}
              onClick={() => { setLang(code); onClose() }}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                lang === code
                  ? "bg-[var(--accent)] text-white"
                  : "bg-[var(--bg-secondary)] text-[var(--text)] hover:bg-[var(--accent-light)]"
              }`}
            >
              {code === "es" ? "Español" : code === "ca" ? "Català" : code === "en" ? "English" : "Deutsch"}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const { lang } = useLanguage()
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [mobileOpen, setMobileOpen] = useState(false)
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
            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-tight text-white">
                Colegio San Cayetano
              </p>
              <p className="text-xs leading-tight text-white/70">
                Palma de Mallorca
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavDropdown item={getSecondaryNav(lang)[0]} />
            {getMainNav(lang).map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
            <div className="w-px h-4 bg-white/20 mx-1" />
            <LangDropdown />
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/15 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
