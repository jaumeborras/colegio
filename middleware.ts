import { NextRequest, NextResponse } from "next/server"

const VALID_LANGS = ["es", "ca", "en", "de"]

export function middleware(req: NextRequest) {
  const lang = req.nextUrl.searchParams.get("lang")
  if (lang && VALID_LANGS.includes(lang)) {
    const url = req.nextUrl.clone()
    url.searchParams.delete("lang")
    const res = NextResponse.redirect(url)
    res.cookies.set("lang", lang, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" })
    return res
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
