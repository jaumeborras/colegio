"use client"
import { useState, useEffect } from "react"

export default function IntroAnimation() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in")

  useEffect(() => {
    if (sessionStorage.getItem("intro_shown")) {
      setPhase("done")
      return
    }
    sessionStorage.setItem("intro_shown", "1")
    const t1 = setTimeout(() => setPhase("out"), 1400)
    const t2 = setTimeout(() => setPhase("done"), 2600)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === "done") return null

  return (
    <>
      <div
        className="fixed inset-0 z-[9998]"
        style={{
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          opacity: phase === "out" ? 0 : 1,
          transition: phase === "out" ? "opacity 0.8s ease 0.25s" : "none",
          pointerEvents: phase === "out" ? "none" : "all",
        }}
      />
      <img
        src="https://www.colegiosancayetano.com/wp-content/uploads/2021/11/cropped-logo2-300x300.jpg"
        alt="Colegio San Cayetano"
        className="fixed z-[9999] object-contain rounded-full"
        style={
          phase === "in"
            ? {
                width: 140,
                height: 140,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                transition: "none",
              }
            : {
                width: 48,
                height: 48,
                top: 12,
                left: 16,
                transform: "none",
                transition: "width 0.75s cubic-bezier(0.4,0,0.2,1), height 0.75s cubic-bezier(0.4,0,0.2,1), top 0.75s cubic-bezier(0.4,0,0.2,1), left 0.75s cubic-bezier(0.4,0,0.2,1)",
              }
        }
      />
    </>
  )
}
