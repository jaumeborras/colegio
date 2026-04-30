"use client"
import { useState, useEffect } from "react"
import type { Lang } from "./i18n"

const VALID: Lang[] = ["es", "ca", "en", "de"]
const listeners = new Set<(l: Lang) => void>()

// Set synchronously by LanguageProvider before any page renders — avoids hydration mismatch
let _initial: Lang = "es"

export function setLanguage(l: Lang) {
  _initial = l  // new pages that mount after this will start with the correct lang
  document.cookie = `lang=${l}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`
  try { localStorage.setItem("lang", l) } catch {}
  document.documentElement.lang = l
  listeners.forEach(fn => fn(l))
}

export function useLanguage() {
  const [lang, setLang] = useState<Lang>(_initial)

  useEffect(() => {
    // Check localStorage for user preference set in a previous session
    try {
      const stored = localStorage.getItem("lang") as Lang | null
      if (stored && VALID.includes(stored) && stored !== _initial) {
        setLang(stored)
        listeners.forEach(fn => fn(stored))
      }
    } catch {}

    listeners.add(setLang)
    return () => { listeners.delete(setLang) }
  }, [])

  return { lang, setLang: setLanguage }
}

export function LanguageProvider({ children, initialLang = "es" }: { children: React.ReactNode; initialLang?: Lang }) {
  // Synchronous assignment: happens before children render on both server and client
  _initial = initialLang
  return <>{children}</>
}
