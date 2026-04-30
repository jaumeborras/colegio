import { cookies } from "next/headers"
import type { Lang } from "./i18n"

export async function getLang(): Promise<Lang> {
  const store = await cookies()
  const val = store.get("lang")?.value
  if (val === "ca" || val === "en" || val === "de") return val
  return "es"
}

export function htmlLang(lang: Lang): string {
  return lang
}
