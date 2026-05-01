import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import FloatingContact from "@/components/FloatingContact"
import { getLang, htmlLang } from "@/lib/lang"
import { LanguageProvider } from "@/lib/i18n-context"

export const metadata: Metadata = {
  title: {
    default: "Colegio San Cayetano · Palma de Mallorca",
    template: "%s · Colegio San Cayetano",
  },
  description: "Colegio concertado en Palma de Mallorca con más de 50 años de historia. Escoleta, Infantil, Primaria, Secundaria, Bachillerato y Bachillerato Internacional (IB).",
  keywords: ["colegio", "san cayetano", "palma de mallorca", "educación", "IB", "bachillerato internacional"],
  openGraph: {
    title: "Colegio San Cayetano · Palma de Mallorca",
    description: "Más de 50 años formando personas con valores.",
    locale: "es_ES",
    type: "website",
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await getLang()
  return (
    <html lang={htmlLang(lang)} className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider initialLang={lang}>
          <Header />
          <main className="flex-1 pt-[72px]">{children}</main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  )
}
