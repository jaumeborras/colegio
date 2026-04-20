"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const LOGO_URL = "https://www.colegiosancayetano.com/wp-content/uploads/2021/12/Colegio-San-Cayetano-sombreado.png"

const images = [
  {
    src: "https://www.colegiosancayetano.com/wp-content/uploads/2021/11/Foto-Claustro-1920x1080-1.jpg",
    alt: "Colegio San Cayetano — instalaciones",
  },
  {
    src: "https://www.colegiosancayetano.com/wp-content/uploads/2023/03/1862_001.jpg",
    alt: "Colegio San Cayetano — actividades",
  },
  {
    src: "https://www.colegiosancayetano.com/images/SANCA_119.jpg",
    alt: "Colegio San Cayetano — comunidad educativa",
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current)
      setCurrent((c) => (c + 1) % images.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [current])

  return (
    <section className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Imágenes con fade */}
      {images.map((img, i) => (
        <div
          key={img.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover object-center"
            unoptimized
            priority={i === 0}
          />
        </div>
      ))}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Contenido centrado */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <Image
          src={LOGO_URL}
          alt="Colegio San Cayetano — Palma de Mallorca"
          width={700}
          height={700}
          className="object-contain brightness-0 invert drop-shadow-2xl w-[340px] sm:w-[500px] md:w-[620px] lg:w-[700px] mb-10 md:mb-14"
          unoptimized
          priority
        />
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/admisiones"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-white text-[var(--accent)] text-sm font-semibold rounded-xl hover:bg-white/90 transition-colors shadow-lg"
          >
            Proceso de admisión
          </Link>
          <Link
            href="/quienes-somos"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-white/15 backdrop-blur-sm border border-white/40 text-white text-sm font-medium rounded-xl hover:bg-white/25 transition-colors"
          >
            Quiénes somos
          </Link>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => { setPrev(current); setCurrent(i) }}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/40"}`}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
