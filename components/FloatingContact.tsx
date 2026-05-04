"use client"
import { useState } from "react"
import { t } from "@/lib/i18n"
import { useLanguage } from "@/lib/i18n-context"

export default function FloatingContact() {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  const msgPlaceholder =
    lang === "ca" ? "Escriu el teu missatge aquí..."
    : lang === "en" ? "Write your message here..."
    : lang === "de" ? "Schreiben Sie Ihre Nachricht hier..."
    : "Escribe tu mensaje aquí..."

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  function handleClose() {
    setOpen(false)
    setTimeout(() => setSent(false), 400)
  }

  return (
    <>
      {/* Panel */}
      <div
        className="absolute bottom-24 right-5 z-40 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-[var(--border)] flex flex-col overflow-hidden"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(16px) scale(0.97)",
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          transformOrigin: "bottom right",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ background: "var(--accent)" }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white/20 shrink-0">
              <img
                src="https://www.colegiosancayetano.com/wp-content/uploads/2021/11/cropped-logo2-300x300.jpg"
                alt="Colegio San Cayetano"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white leading-tight">Colegio San Cayetano</p>
              <p className="text-[10px] text-white/60 leading-tight">¿En qué podemos ayudarte?</p>
            </div>
          </div>
          <button onClick={handleClose} className="p-1.5 rounded-full hover:bg-white/15 transition-colors text-white/70 hover:text-white">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 max-h-[70vh]">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "var(--accent-light)" }}>
                <svg className="w-7 h-7" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-[var(--text)]">Mensaje enviado</p>
              <p className="text-sm text-[var(--text-secondary)]">Nos pondremos en contacto contigo lo antes posible.</p>
              <button
                onClick={() => setSent(false)}
                className="mt-2 text-xs text-[var(--accent)] hover:underline"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-1.5">
                  {t("contact.form.name", lang)}
                </label>
                <input
                  type="text"
                  required
                  className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-1.5">
                  {t("contact.form.email", lang)}
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@ejemplo.com"
                  className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-1.5">
                  {t("contact.form.subject", lang)}
                </label>
                <select
                  required
                  className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors bg-white"
                >
                  <option value="">{t("contact.form.select", lang)}</option>
                  <option>{t("contact.form.adm", lang)}</option>
                  <option>{t("contact.form.general", lang)}</option>
                  <option>{t("contact.form.cafeteria", lang)}</option>
                  <option>{t("contact.form.extra", lang)}</option>
                  <option>{t("contact.form.other", lang)}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-1.5">
                  {t("contact.form.message", lang)}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={msgPlaceholder}
                  className="w-full border border-[var(--border)] rounded-xl px-3 py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl text-sm font-medium text-white transition-colors"
                style={{ background: "var(--accent)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
              >
                {t("contact.form.send", lang)}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Botón flotante */}
      <button
        onClick={() => setOpen(v => !v)}
        className="absolute bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full text-white shadow-xl transition-all hover:scale-105 active:scale-95"
        style={{ background: "var(--accent)" }}
        aria-label="Contáctanos"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </>
  )
}
