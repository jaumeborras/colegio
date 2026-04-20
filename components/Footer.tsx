import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border)] mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="https://www.colegiosancayetano.com/wp-content/uploads/2021/11/cropped-logo2-300x300.jpg"
                alt="Colegio San Cayetano"
                width={40}
                height={40}
                className="object-contain rounded-full"
                unoptimized
              />
              <div>
                <p className="text-sm font-semibold text-[var(--text)] leading-tight">Colegio San Cayetano</p>
                <p className="text-xs text-[var(--text-secondary)]">Palma de Mallorca</p>
              </div>
            </Link>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Av. Picasso, 21<br />
              07014 Palma de Mallorca<br />
              Islas Baleares
            </p>
            <div className="mt-4 flex gap-3">
              <a href="https://www.instagram.com/sancayetanopalma/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com/Colegio-San-Cayetano-Palma-de-Mallorca-100322058504103" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="http://www.sanca.tv" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-xs font-semibold">TV</a>
            </div>
          </div>

          {/* Etapas */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-3">Etapas</h3>
            <ul className="space-y-2">
              {["Escoleta", "Infantil", "Primaria", "Secundaria", "Bachillerato", "IB"].map((e) => (
                <li key={e}>
                  <Link href={`/etapas/${e.toLowerCase()}`} className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                    {e}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-3">Servicios</h3>
            <ul className="space-y-2">
              <li><Link href="/comedor" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Comedor</Link></li>
              <li><Link href="/extraescolares" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Extraescolares</Link></li>
              <li><Link href="/extraescolares/verano" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Escuelas de Verano</Link></li>
              <li><Link href="/oficina-virtual" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">Oficina Virtual</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-semibold text-[var(--text)] uppercase tracking-wider mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>
                <a href="tel:971220575" className="hover:text-[var(--accent)] transition-colors">971 22 05 75</a>
              </li>
              <li>
                <a href="mailto:csc@colegiosancayetano.com" className="hover:text-[var(--accent)] transition-colors break-all">csc@colegiosancayetano.com</a>
              </li>
              <li className="pt-2">
                <a
                  href="https://maps.google.com/?q=Av.+Picasso,+21,+07014+Palma+de+Mallorca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline"
                >
                  Ver en Google Maps
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-secondary)]">
            © {new Date().getFullYear()} Colegio San Cayetano · Palma de Mallorca
          </p>
          <div className="flex gap-4 text-xs text-[var(--text-secondary)]">
            <a href="https://whistleblowersoftware.com/secure/csc" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Canal de denuncias</a>
            <a href="https://forms.gle/WXyGe2xq6AtCfqBf8" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Trabaja con nosotros</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
