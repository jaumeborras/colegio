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
      label: t("stage.escoleta", lang),
      href: "/etapas/escoleta",
      children: [
        { label: t("stage.escoleta", lang), href: "/etapas/escoleta" },
        { label: "Instagram Escoleta", href: "https://www.instagram.com/escoletasancayetano/", external: true },
        {
          label: "1 Año",
          href: "https://sites.google.com/csc.edu.es/e1-quevedo-2425/inicio",
          external: true,
          children: [
            { label: "1 Año A", href: "https://sites.google.com/csc.edu.es/001a2025-25?usp=sharing", external: true },
            { label: "1 Año B", href: "https://sites.google.com/csc.edu.es/001b-2025-26?usp=sharing", external: true },
          ],
        },
        {
          label: "2 Años",
          children: [
            { label: "2 Años A", href: "https://sites.google.com/csc.edu.es/escoleta-2-aos?usp=sharing", external: true },
            { label: "2 Años B", href: "https://sites.google.com/csc.edu.es/escoleta2aos?usp=sharing", external: true },
            { label: "2 Años C", href: "https://sites.google.com/csc.edu.es/002c-2025-26?usp=sharing", external: true },
          ],
        },
      ],
    },
    {
      label: t("stage.infantil", lang),
      href: "/etapas/infantil",
      children: [
        { label: t("stage.infantil", lang), href: "https://sites.google.com/csc.edu.es/csc22esp-infantil", external: true },
        {
          label: "3 Años",
          children: [
            { label: "3 Años A", href: "https://sites.google.com/csc.edu.es/3-aos-a", external: true },
            { label: "3 Años B", href: "https://sites.google.com/csc.edu.es/3-aos-b", external: true },
            { label: "3 Años C", href: "https://sites.google.com/csc.edu.es/3-aos-c", external: true },
            { label: "3 Años D", href: "https://sites.google.com/csc.edu.es/3-aos-d", external: true },
          ],
        },
        {
          label: "4 Años",
          children: [
            { label: "4 Años A", href: "https://sites.google.com/csc.edu.es/4-aos-a", external: true },
            { label: "4 Años B", href: "https://sites.google.com/csc.edu.es/4-aos-b", external: true },
            { label: "4 Años C", href: "https://sites.google.com/csc.edu.es/4-aos-c", external: true },
            { label: "4 Años D", href: "https://sites.google.com/csc.edu.es/4-aos-d", external: true },
          ],
        },
        {
          label: "5 Años",
          children: [
            { label: "5 Años A", href: "https://sites.google.com/csc.edu.es/5-aos-a", external: true },
            { label: "5 Años B", href: "https://sites.google.com/csc.edu.es/5-aos-b", external: true },
            { label: "5 Años C", href: "https://sites.google.com/csc.edu.es/5-aos-c", external: true },
            { label: "5 Años D", href: "https://sites.google.com/csc.edu.es/5-aos-d", external: true },
          ],
        },
      ],
    },
    {
      label: t("stage.primaria", lang),
      href: "/etapas/primaria",
      children: [
        { label: t("stage.primaria", lang), href: "https://sites.google.com/csc.edu.es/csc22esp-primaria", external: true },
        {
          label: "1º Primaria",
          children: [
            { label: "1º A", href: "https://sites.google.com/csc.edu.es/1-primaria-a", external: true },
            { label: "1º B", href: "https://sites.google.com/csc.edu.es/1-primaria-b", external: true },
            { label: "1º C", href: "https://sites.google.com/csc.edu.es/1-primaria-c", external: true },
            { label: "1º D", href: "https://sites.google.com/csc.edu.es/1-primaria-d", external: true },
            { label: "1º E", href: "https://sites.google.com/csc.edu.es/1-primaria-e", external: true },
          ],
        },
        {
          label: "2º Primaria",
          children: [
            { label: "2º A", href: "https://sites.google.com/csc.edu.es/2-primaria-a", external: true },
            { label: "2º B", href: "https://sites.google.com/csc.edu.es/2-primaria-b", external: true },
            { label: "2º C", href: "https://sites.google.com/csc.edu.es/2-primaria-c", external: true },
            { label: "2º D", href: "https://sites.google.com/csc.edu.es/2-primaria-d", external: true },
            { label: "2º E", href: "https://sites.google.com/csc.edu.es/2-primaria-e", external: true },
          ],
        },
      ],
    },
    {
      label: t("stage.secundaria", lang),
      href: "/etapas/secundaria",
      children: [
        { label: t("stage.secundaria", lang), href: "https://sites.google.com/csc.edu.es/csc22esp-secundaria", external: true },
        { label: t("stage.library", lang), href: "https://biblioteca.colegiosancayetano.com/", external: true },
      ],
    },
    {
      label: t("stage.bachillerato", lang),
      href: "/etapas/bachillerato",
      children: [
        { label: t("stage.bachillerato", lang), href: "https://sites.google.com/csc.edu.es/csc22esp-bachillerato", external: true },
        { label: t("stage.library", lang), href: "https://biblioteca.colegiosancayetano.com/", external: true },
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
  ]
}

export function getSecondaryNav(lang: Lang): NavItem[] {
  return [
    {
      label: t("who.title", lang),
      href: "/quienes-somos",
      children: [
        { label: t("who.title", lang), href: "/quienes-somos" },
        { label: "Sanca TV", href: "http://www.sanca.tv", external: true },
        { label: "Facebook", href: "https://www.facebook.com/Colegio-San-Cayetano-Palma-de-Mallorca-100322058504103", external: true },
        { label: "Instagram", href: "https://www.instagram.com/sancayetanopalma/", external: true },
        { label: t("nav.contact", lang), href: "/contacto" },
      ],
    },
    { label: t("nav.info", lang), href: "/informacion" },
    { label: t("nav.admissions", lang), href: "/admisiones" },
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
      label: t("nav.extra", lang),
      href: "/extraescolares",
      children: [
        { label: t("nav.info", lang), href: "/extraescolares" },
        { label: t("extra.summer.link", lang), href: "/extraescolares/verano" },
      ],
    },
    { label: t("nav.cafeteria", lang), href: "/comedor" },
  ]
}
