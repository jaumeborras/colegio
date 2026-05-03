import { t, type Lang } from "@/lib/i18n"

export type NavItem = {
  label: string
  href?: string
  external?: boolean
  children?: NavItem[]
}

export function getMainNav(lang: Lang): NavItem[] {
  return [
    {
      label: t("nav.stages", lang),
      href: "/etapas/escoleta",
      children: [
        { label: t("stage.escoleta", lang), href: "/etapas/escoleta" },
        { label: t("stage.infantil", lang), href: "/etapas/infantil" },
        { label: t("stage.primaria", lang), href: "/etapas/primaria" },
        { label: t("stage.secundaria", lang), href: "/etapas/secundaria" },
        { label: t("stage.bachillerato", lang), href: "/etapas/bachillerato" },
      ],
    },
    {
      label: "IB",
      href: "/etapas/ib",
      children: [
        { label: t("nav.ib.diploma", lang), href: "https://sites.google.com/csc.edu.es/csc22esp-ibprograma", external: true },
        { label: "IB-ManageBac", href: "https://colegiosancayetano.managebac.com/", external: true },
        { label: t("stage.library", lang), href: "https://biblioteca.colegiosancayetano.com/", external: true },
      ],
    },
    {
      label: t("nav.pastoral", lang),
      href: "https://sites.google.com/csc.edu.es/cs22esp-pastoral",
      external: true,
    },
    {
      label: t("nav.virtual", lang),
      href: "/oficina-virtual",
      children: [
        { label: t("virtual.online.title", lang), href: "https://sites.google.com/csc.edu.es/csc22esp-oficinavirtual", external: true },
        { label: "Alexia", href: "https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d", external: true },
        { label: "IB-ManageBac", href: "https://colegiosancayetano.managebac.com/", external: true },
        { label: t("virtual.complaints.title", lang), href: "https://whistleblowersoftware.com/secure/csc", external: true },
        { label: t("virtual.jobs.title", lang), href: "https://forms.gle/WXyGe2xq6AtCfqBf8", external: true },
        { label: "IAQSE-GESAVA", href: "https://intranet.caib.es/xesavafront-pub/", external: true },
      ],
    },
    {
      label: t("nav.school.life", lang),
      href: "#",
      children: [
        { label: t("nav.cafeteria", lang), href: "/comedor" },
        { label: t("nav.extra", lang), href: "/extraescolares" },
        { label: t("school.nursing", lang), href: "#" },
        { label: t("extra.summer.link", lang), href: "/extraescolares/verano" },
      ],
    },
  ]
}

export function getSecondaryNav(lang: Lang): NavItem[] {
  return [
    {
      label: t("who.title", lang),
      href: "/quienes-somos",
      children: [
        { label: t("who.title", lang), href: "/quienes-somos" },
        { label: t("nav.info", lang), href: "/informacion" },
        { label: "Sanca TV", href: "http://www.sanca.tv", external: true },
        { label: "Facebook", href: "https://www.facebook.com/Colegio-San-Cayetano-Palma-de-Mallorca-100322058504103", external: true },
        { label: "Instagram", href: "https://www.instagram.com/sancayetanopalma/", external: true },
        { label: t("nav.contact", lang), href: "/contacto" },
      ],
    },
    { label: t("nav.admissions", lang), href: "/admisiones" },
  ]
}
