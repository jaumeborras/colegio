"use client"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { mainNav, secondaryNav, NavItem } from "./nav-data"

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

  return { open, enter, leave }
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
        className="px-3 py-1.5 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors rounded-md hover:bg-[var(--accent-light)]"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors rounded-md hover:bg-[var(--accent-light)]">
        {item.label}
        <svg className={`w-3.5 h-3.5 opacity-50 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {/* Bridge invisible para no perder el hover al bajar el mouse */}
      {open && <div className="absolute top-full left-0 w-full h-2" />}
      {open && (
        <ul className="absolute top-[calc(100%+4px)] left-0 bg-white border border-[var(--border)] rounded-xl shadow-xl py-1 min-w-[200px] z-50">
          {item.children!.map((child) => (
            <DropdownItem key={child.label} item={child} depth={0} />
          ))}
        </ul>
      )}
    </div>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [subExpanded, setSubExpanded] = useState<string | null>(null)

  const allItems = [...mainNav, ...secondaryNav]

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
    </div>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
        {/* Secondary nav */}
        <div className="hidden lg:flex items-center justify-end px-6 py-1.5 bg-[var(--bg-secondary)] border-b border-[var(--border)] gap-1">
          {secondaryNav.map((item) => (
            <NavDropdown key={item.label} item={item} />
          ))}
          <div className="w-px h-4 bg-[var(--border)] mx-2" />
          <Link href="?lang=es" className="px-2 py-1 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">ES</Link>
          <Link href="?lang=ca" className="px-2 py-1 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">CA</Link>
          <Link href="?lang=en" className="px-2 py-1 text-xs text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">EN</Link>
        </div>

        {/* Main nav */}
        <div className="flex items-center justify-between px-5 lg:px-8 py-3 max-w-screen-xl mx-auto">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Logo — versión color sobre fondo blanco */}
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
              <p className="text-sm font-semibold text-[var(--text)] leading-tight">Colegio San Cayetano</p>
              <p className="text-xs text-[var(--text-secondary)] leading-tight">Palma de Mallorca</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {mainNav.map((item) => (
              <NavDropdown key={item.label} item={item} />
            ))}
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors"
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
