"use client"

import React, { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { getMainNav, getSecondaryNav, NavItem } from "./nav-data"
import { useLanguage, setLanguage } from "@/lib/i18n-context"
import { t } from "@/lib/i18n"
import type { Lang } from "@/lib/i18n"

const SenyeraSVG = ({ width = 20, height = 14 }: { width?: number; height?: number }) => (
  <svg viewBox="0 0 30 20" width={width} height={height} style={{ borderRadius: 2, display: "block", flexShrink: 0 }}>
    <rect width="30" height="20" fill="#FCDD09"/>
    <rect y="0"     width="30" height="2.22" fill="#DA121A"/>
    <rect y="4.44"  width="30" height="2.22" fill="#DA121A"/>
    <rect y="8.89"  width="30" height="2.22" fill="#DA121A"/>
    <rect y="13.33" width="30" height="2.22" fill="#DA121A"/>
    <rect y="17.78" width="30" height="2.22" fill="#DA121A"/>
  </svg>
)

const langFlags: Record<Lang, React.ReactNode> = {
  es: <span className="text-base leading-none">🇪🇸</span>,
  ca: <SenyeraSVG />,
  en: <span className="text-base leading-none">🇬🇧</span>,
  de: <span className="text-base leading-none">🇩🇪</span>,
}

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

// Solo el botón trigger — el panel lo gestiona Header
function MegaDropdown({ item, description, image, onEnter, onLeave, isActive }: {
  item: NavItem
  description: string
  image?: string
  onEnter: (item: NavItem, desc: string, image?: string) => void
  onLeave: () => void
  isActive: boolean
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onEnter(item, description, image)}
      onMouseLeave={onLeave}
    >
      <button className={`flex items-center gap-1 px-3 py-2 text-base font-medium transition-colors rounded-md ${
        isActive ? "text-white bg-white/20" : "text-white/90 hover:text-white hover:bg-white/15"
      }`}>
        {item.label}
        <svg className={`w-3.5 h-3.5 opacity-50 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  )
}

// Panel compartido — se monta una vez por sección activa, anima la entrada
function MegaPanel({ item, description, image = "/fotos/fondo.png", onMouseEnter, onMouseLeave }: {
  item: NavItem
  description: string
  image?: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const [show, setShow] = useState(false)
  const href = item.href || "#"

  useEffect(() => {
    const raf = requestAnimationFrame(() => setShow(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        top: 72,
        left: 0,
        right: 0,
        height: 320,
        zIndex: 39,
        display: "flex",
        background: "white",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
        overflow: "hidden",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(-8px)",
        transition: "opacity 0.18s ease, transform 0.18s ease",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Columna descripción */}
      <div style={{
        flex: "0 0 26%",
        boxSizing: "border-box",
        padding: "0 56px",
        display: "flex",
        alignItems: "center",
        borderRight: "1px solid var(--border)",
      }}>
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>{item.label}</p>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{description}</p>
          <Link href={href} style={{ display: "inline-block", marginTop: 20, fontSize: 12, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}
            onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
            onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
          >
            Ver todo →
          </Link>
        </div>
      </div>
      {/* Columna links */}
      <div style={{
        flex: "0 0 26%",
        boxSizing: "border-box",
        padding: "0 56px",
        display: "flex",
        alignItems: "center",
      }}>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, width: "100%", display: "flex", flexDirection: "column", gap: 14 }}>
          {item.children?.map((child) => {
            const childLinkProps = child.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
            return (
              <li key={child.label}>
                <Link
                  href={child.href || "#"}
                  {...childLinkProps}
                  style={{ fontSize: 14, color: "var(--text)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
                >
                  {child.label}
                  {child.external && <span style={{ fontSize: 11, opacity: 0.4, marginLeft: 4 }}>↗</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      {/* Imagen */}
      <div style={{ flex: "0 0 48%", overflow: "hidden" }}>
        <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>
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
        className="px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/15 transition-colors rounded-md"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1 px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/15 transition-colors rounded-md">
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

function LangDropdown() {
  const { lang: currentLang, setLang } = useLanguage()
  const { open, enter, leave, close } = useHoverDelay()

  const langs: { label: string; code: Lang }[] = [
    { label: "Español", code: "es" },
    { label: "Català",  code: "ca" },
    { label: "English", code: "en" },
    { label: "Deutsch", code: "de" },
  ]

  function switchLang(code: Lang) {
    close()
    setLang(code)
  }

  return (
    <div className="relative ml-1" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1.5 px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/15 transition-colors rounded-md">
        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        Idioma
        <svg className={`w-3.5 h-3.5 opacity-50 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="absolute top-full right-0 mt-1 rounded-xl overflow-hidden shadow-2xl z-50 min-w-[160px]"
          style={{ background: "#001a4d", border: "1px solid rgba(255,255,255,0.12)" }}>
          {langs.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => switchLang(lang.code)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm whitespace-nowrap transition-colors"
                style={{
                  color: currentLang === lang.code ? "#ffffff" : "rgba(255,255,255,0.55)",
                  fontWeight: currentLang === lang.code ? 600 : 400,
                  background: "transparent",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span className="w-5 h-4 flex items-center shrink-0">{langFlags[lang.code]}</span>
                <span className="flex-1 text-left">{lang.label}</span>
                {currentLang === lang.code && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
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

  const langs: { code: Lang; label: string; flag: React.ReactNode }[] = [
    { code: "es", label: "Español", flag: <span className="text-xl leading-none">🇪🇸</span> },
    { code: "ca", label: "Català",  flag: <SenyeraSVG width={28} height={19} /> },
    { code: "en", label: "English", flag: <span className="text-xl leading-none">🇬🇧</span> },
    { code: "de", label: "Deutsch", flag: <span className="text-xl leading-none">🇩🇪</span> },
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
            <span className="w-7 h-5 flex items-center shrink-0">{flag}</span>
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
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (open) {
      setMounted(true)
      document.body.style.overflow = "hidden"
      let raf2: number
      const raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setShow(true))
      })
      return () => { cancelAnimationFrame(raf1); cancelAnimationFrame(raf2) }
    } else {
      setShow(false)
      document.body.style.overflow = ""
      const timer = setTimeout(() => setMounted(false), 500)
      return () => clearTimeout(timer)
    }
  }, [open])

  useEffect(() => () => { document.body.style.overflow = "" }, [])

  const allItems = [
    getSecondaryNav(lang)[0],
    ...getMainNav(lang),
    ...getSecondaryNav(lang).slice(1),
  ]

  if (!mounted) return null

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden bg-white flex flex-col"
      style={{
        transform: show ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Cabecera */}
      <div className="flex items-center justify-between px-5 py-4 shrink-0 bg-[#003087]">
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
          <div>
            <p className="font-semibold text-white text-sm leading-tight">Colegio San Cayetano</p>
            <p className="text-white/60 text-xs leading-tight">Palma de Mallorca</p>
          </div>
        </Link>
        <button onClick={onClose} className="p-2 text-white hover:bg-white/15 transition-colors rounded-full">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Navegación */}
      <nav className="flex-1 overflow-y-auto">
        {allItems.map((item, idx) => {
          const isOpen = expanded === item.label
          const linkProps = item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}
          const href = item.href || "#"
          return (
            <div
              key={item.label}
              className="border-b border-[var(--border)]"
              style={{
                opacity: show ? 1 : 0,
                transform: show ? "translateX(0)" : "translateX(32px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                transitionDelay: show ? `${idx * 55 + 120}ms` : "0ms",
              }}
            >
              <div className="flex items-center justify-between px-6">
                <Link
                  href={href}
                  {...linkProps}
                  onClick={() => { if (!item.children) onClose() }}
                  className="flex-1 py-5 text-lg font-medium text-[var(--accent)]"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <button
                    onClick={() => { setExpanded(isOpen ? null : item.label); setSubExpanded(null) }}
                    className="p-2 text-[var(--accent)]"
                    aria-label={isOpen ? "Cerrar" : "Abrir"}
                  >
                    <svg className="w-5 h-5 transition-transform duration-200" style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                ) : (
                  <svg className="w-4 h-4 text-[var(--accent)] opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
              {isOpen && item.children && (
                <div className="bg-[var(--bg-secondary)] px-6 py-2 border-t border-[var(--border)]">
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
                            className="flex-1 py-3 text-sm text-[var(--text)] font-medium"
                          >
                            {child.label}
                            {child.external && <span className="text-xs opacity-40 ml-1">↗</span>}
                          </Link>
                          {child.children && (
                            <button onClick={() => setSubExpanded(childIsOpen ? null : child.label)} className="p-2 text-[var(--accent)]">
                              <svg className="w-4 h-4 transition-transform duration-200" style={{ transform: childIsOpen ? "rotate(45deg)" : "rotate(0deg)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                              </svg>
                            </button>
                          )}
                        </div>
                        {childIsOpen && child.children && (
                          <div className="pl-4 pb-2 border-l-2 border-[var(--accent-light)]">
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

      {/* Footer */}
      <div className="bg-[#003087] px-6 py-5 shrink-0 space-y-4">
        <Link href="/admisiones" onClick={onClose} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm font-semibold uppercase tracking-widest">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
          Solicitar admisión
        </Link>
        <Link href="/contacto" onClick={onClose} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm font-semibold uppercase tracking-widest">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Contacto
        </Link>
      </div>
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
  const [activeMega, setActiveMega] = useState<{ item: NavItem; description: string; image?: string } | null>(null)
  const closeMegaTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onMegaEnter = useCallback((item: NavItem, description: string, image?: string) => {
    if (closeMegaTimer.current) clearTimeout(closeMegaTimer.current)
    setActiveMega({ item, description, image })
  }, [])

  const onMegaLeave = useCallback(() => {
    closeMegaTimer.current = setTimeout(() => setActiveMega(null), 200)
  }, [])

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
          scrolled || !isHome || activeMega !== null ? "bg-[#003087] shadow-md" : "bg-transparent"
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
            <MegaDropdown
              item={getSecondaryNav(lang)[0]}
              description={t("who.subtitle", lang)}
              onEnter={onMegaEnter}
              onLeave={onMegaLeave}
              isActive={activeMega?.item.label === getSecondaryNav(lang)[0].label}
            />
            {getMainNav(lang).map((item) => {
              const descKey: Record<string, string> = {
                [t("nav.stages", lang)]:      t("stages.subtitle", lang),
                "IB":                         t("ib.subtitle", lang),
                [t("nav.virtual", lang)]:     t("virtual.subtitle", lang),
                [t("nav.families", lang)]:    t("families.subtitle", lang),
                [t("nav.school.life", lang)]: t("school.life.subtitle", lang),
              }
              const imageKey: Record<string, string> = {
                [t("nav.stages", lang)]:      "/fotos/primaria.png",
                "IB":                         "/fotos/IB.jpg",
                [t("nav.virtual", lang)]:     "/fotos/fondo.png",
                [t("nav.families", lang)]:    "/fotos/infantil.jpg",
                [t("nav.school.life", lang)]: "/fotos/multi.jpg",
              }
              const description = descKey[item.label]
              if (description) return (
                <MegaDropdown
                  key={item.label}
                  item={item}
                  description={description}
                  image={imageKey[item.label]}
                  onEnter={onMegaEnter}
                  onLeave={onMegaLeave}
                  isActive={activeMega?.item.label === item.label}
                />
              )
              return <NavDropdown key={item.label} item={item} />
            })}
            {getSecondaryNav(lang).slice(1).map((item) => (
              <React.Fragment key={item.label}>
                {item.cta && <div className="w-px h-4 bg-white/20 mx-1" />}
                <Link
                  href={item.href || "#"}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={item.cta
                    ? "px-4 py-1.5 text-base font-medium text-white border border-white/60 rounded-full hover:bg-white/15 transition-colors"
                    : "px-3 py-2 text-base font-medium text-white/90 hover:text-white hover:bg-white/15 transition-colors rounded-md"
                  }
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
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

      {activeMega && (
        <MegaPanel
          key={activeMega.item.label}
          item={activeMega.item}
          description={activeMega.description}
          image={activeMega.image}
          onMouseEnter={() => { if (closeMegaTimer.current) clearTimeout(closeMegaTimer.current) }}
          onMouseLeave={onMegaLeave}
        />
      )}
      {mobileLangOpen && <MobileLangPicker onClose={() => setMobileLangOpen(false)} />}

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
