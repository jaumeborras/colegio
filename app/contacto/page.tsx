"use client"
import PageHero from "@/components/PageHero"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function ContactoPage() {
  const { lang } = useLanguage()

  const msgPlaceholder = lang === "ca" ? "Escriu el teu missatge aquí..." : lang === "en" ? "Write your message here..." : lang === "de" ? "Schreiben Sie Ihre Nachricht hier..." : "Escribe tu mensaje aquí..."

  return (
    <>
      <PageHero
        tag={t("contact.tag", lang)}
        title={t("contact.title", lang)}
        subtitle={t("contact.subtitle", lang)}
        breadcrumbs={[{ label: t("contact.title", lang) }]}
      />
      <div className="max-w-screen-xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">{t("contact.address.label", lang)}</p>
                  <p className="text-sm text-[var(--text)]">Av. Picasso, 21</p>
                  <p className="text-sm text-[var(--text)]">07014 Palma de Mallorca, Islas Baleares</p>
                  <a
                    href="https://maps.google.com/?q=Av.+Picasso,+21,+07014+Palma+de+Mallorca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[var(--accent)] hover:underline mt-2"
                  >
                    {t("contact.map.label", lang)} ↗
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">{t("contact.phone.label", lang)}</p>
                  <a href="tel:971220575" className="text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors">971 22 05 75</a>
                  <p className="text-xs text-[var(--text-secondary)] mt-0.5">{t("contact.hours", lang)}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-light)] flex items-center justify-center text-[var(--accent)] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">{t("contact.email.label", lang)}</p>
                  <a href="mailto:csc@colegiosancayetano.com" className="text-sm text-[var(--text)] hover:text-[var(--accent)] transition-colors break-all">csc@colegiosancayetano.com</a>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="border-t border-[var(--border)] pt-6">
              <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-4">{t("contact.social.title", lang)}</p>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.instagram.com/sancayetanopalma/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                  Instagram ↗
                </a>
                <a href="https://www.instagram.com/escoletasancayetano/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                  Instagram Escoleta ↗
                </a>
                <a href="https://www.facebook.com/Colegio-San-Cayetano-Palma-de-Mallorca-100322058504103" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                  Facebook ↗
                </a>
                <a href="http://www.sanca.tv" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[var(--border)] rounded-xl px-3 py-2 text-sm text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                  Sanca TV ↗
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <h2 className="text-lg font-semibold text-[var(--text)] mb-6">{t("contact.form.title", lang)}</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-2">{t("contact.form.name", lang)}</label>
                <input
                  type="text"
                  className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-2">{t("contact.form.email", lang)}</label>
                <input
                  type="email"
                  placeholder="email@ejemplo.com"
                  className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-2">{t("contact.form.subject", lang)}</label>
                <select className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors bg-white">
                  <option value="">{t("contact.form.select", lang)}</option>
                  <option>{t("contact.form.adm", lang)}</option>
                  <option>{t("contact.form.general", lang)}</option>
                  <option>{t("contact.form.cafeteria", lang)}</option>
                  <option>{t("contact.form.extra", lang)}</option>
                  <option>{t("contact.form.other", lang)}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-2">{t("contact.form.message", lang)}</label>
                <textarea
                  rows={5}
                  placeholder={msgPlaceholder}
                  className="w-full border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--accent)] text-white rounded-xl py-3 text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
              >
                {t("contact.form.send", lang)}
              </button>
              <p className="text-xs text-[var(--text-secondary)] text-center">{t("contact.form.note", lang)}</p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
