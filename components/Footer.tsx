"use client"
import Link from "next/link"
import Image from "next/image"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer style={{ backgroundColor: "#002060" }}>
      <div className="max-w-screen-xl mx-auto px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.7fr_0.7fr_3.5fr] gap-8 items-start">

          {/* Col 1: datos del colegio */}
          <div>
            <p className="text-lg font-bold text-white leading-snug mb-4">
              {t("footer.school", lang)}
            </p>
            <div className="space-y-0.5 text-base text-white leading-relaxed mb-5">
              <p>{t("footer.hours", lang)}</p>
              <p>Av. Picasso, 21</p>
              <p>07014 Palma de Mallorca</p>
              <p>Islas Baleares — España</p>
            </div>
            <a href="tel:971220575" className="block text-base font-bold text-white hover:text-white/75 transition-colors mb-5">
              971 22 05 75
            </a>
            <div className="flex gap-5 items-center">
              <a href="https://www.instagram.com/sancayetanopalma/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:opacity-60 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/Colegio-San-Cayetano-Palma-de-Mallorca-100322058504103" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:opacity-60 transition-opacity">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="http://www.sanca.tv" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-60 transition-opacity text-base font-bold">TV</a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="md:pt-[38px]">
            <ul className="space-y-3">
              <li><Link href="/admisiones" className="text-base text-white hover:opacity-70 transition-opacity">{t("nav.admissions", lang)}</Link></li>
              <li><Link href="/comedor" className="text-base text-white hover:opacity-70 transition-opacity">{t("cafeteria.title", lang)}</Link></li>
              <li><Link href="/extraescolares" className="text-base text-white hover:opacity-70 transition-opacity">{t("extra.title", lang)}</Link></li>
              <li><a href="https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:opacity-70 transition-opacity">Alexia (familias)</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="md:pt-[38px]">
            <ul className="space-y-3">
              <li><a href="https://colegiosancayetano.managebac.com/" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:opacity-70 transition-opacity">ManageBac (IB)</a></li>
              <li><a href="https://biblioteca.colegiosancayetano.com/" target="_blank" rel="noopener noreferrer" className="text-base text-white hover:opacity-70 transition-opacity">{t("stage.library", lang)}</a></li>
              <li><Link href="/contacto" className="text-base text-white hover:opacity-70 transition-opacity">{t("contact.title", lang)}</Link></li>
            </ul>
          </div>

          {/* Col 4: Logo grande */}
          <div className="flex justify-center items-center md:pl-12">
            <Link href="/">
              <Image
                src="/sombreado.png"
                alt="Colegio San Cayetano"
                width={520}
                height={520}
                className="object-contain w-full h-auto"
                style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
                unoptimized
              />
            </Link>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} {t("footer.school", lang)} · Palma de Mallorca
          </p>
          <div className="flex gap-5 text-sm text-white">
            <a href="https://whistleblowersoftware.com/secure/csc" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">{t("footer.complaints", lang)}</a>
            <a href="https://forms.gle/WXyGe2xq6AtCfqBf8" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">{t("footer.jobs", lang)}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
