export type NavItem = {
  label: string
  href?: string
  external?: boolean
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  {
    label: "Escoleta",
    href: "/etapas/escoleta",
    children: [
      { label: "Escoleta", href: "/etapas/escoleta" },
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
    label: "Infantil",
    href: "/etapas/infantil",
    children: [
      { label: "Ed. Infantil", href: "https://sites.google.com/csc.edu.es/csc22esp-infantil", external: true },
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
    label: "Primaria",
    href: "/etapas/primaria",
    children: [
      { label: "Ed. Primaria", href: "https://sites.google.com/csc.edu.es/csc22esp-primaria", external: true },
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
    label: "Secundaria",
    href: "/etapas/secundaria",
    children: [
      { label: "Ed. Secundaria", href: "https://sites.google.com/csc.edu.es/csc22esp-secundaria", external: true },
      { label: "Biblioteca", href: "https://biblioteca.colegiosancayetano.com/", external: true },
    ],
  },
  {
    label: "Bachillerato",
    href: "/etapas/bachillerato",
    children: [
      { label: "Bachillerato", href: "https://sites.google.com/csc.edu.es/csc22esp-bachillerato", external: true },
      { label: "Biblioteca", href: "https://biblioteca.colegiosancayetano.com/", external: true },
    ],
  },
  {
    label: "IB",
    href: "/etapas/ib",
    children: [
      { label: "Programa Diploma IB", href: "https://sites.google.com/csc.edu.es/csc22esp-ibprograma", external: true },
      { label: "IB-ManageBac", href: "https://colegiosancayetano.managebac.com/", external: true },
      { label: "Biblioteca", href: "https://biblioteca.colegiosancayetano.com/", external: true },
    ],
  },
  {
    label: "Pastoral",
    href: "https://sites.google.com/csc.edu.es/cs22esp-pastoral",
    external: true,
  },
]

export const secondaryNav: NavItem[] = [
  {
    label: "Quiénes somos",
    href: "/quienes-somos",
    children: [
      { label: "Quiénes somos", href: "/quienes-somos" },
      { label: "Sanca TV", href: "http://www.sanca.tv", external: true },
      { label: "Facebook", href: "https://www.facebook.com/Colegio-San-Cayetano-Palma-de-Mallorca-100322058504103", external: true },
      { label: "Instagram Colegio", href: "https://www.instagram.com/sancayetanopalma/", external: true },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    label: "Información",
    href: "/informacion",
  },
  {
    label: "Admisiones",
    href: "/admisiones",
  },
  {
    label: "Oficina Virtual",
    href: "/oficina-virtual",
    children: [
      { label: "Trámites online", href: "https://sites.google.com/csc.edu.es/csc22esp-oficinavirtual", external: true },
      { label: "Alexia", href: "https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=bhaA17N5NZc%3d", external: true },
      { label: "IB-ManageBac", href: "https://colegiosancayetano.managebac.com/", external: true },
      { label: "Canal de denuncias", href: "https://whistleblowersoftware.com/secure/csc", external: true },
      { label: "Trabaja con nosotros", href: "https://forms.gle/WXyGe2xq6AtCfqBf8", external: true },
      { label: "IAQSE-GESAVA", href: "https://intranet.caib.es/xesavafront-pub/", external: true },
    ],
  },
  {
    label: "Extraescolares",
    href: "/extraescolares",
    children: [
      { label: "Información", href: "/extraescolares" },
      { label: "Escuelas de Verano", href: "/extraescolares/verano" },
    ],
  },
  {
    label: "Comedor",
    href: "/comedor",
  },
]
