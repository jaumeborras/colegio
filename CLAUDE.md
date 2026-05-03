# Colegio San Cayetano — Web

> **IMPORTANTE:** Antes de atender cualquier petición, leer `COLEGIO.md`. Contiene todo el contenido publicado en la web (textos, datos, enlaces, etapas, servicios). Es la fuente de verdad del contenido del sitio.

Web institucional del Colegio San Cayetano (Palma de Mallorca). Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript.

## Stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Lenguaje**: TypeScript strict
- **i18n**: next-intl (preparado, aún no activo por rutas)

## Comandos
```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run lint     # ESLint
```

## Estructura
```
app/             # rutas Next.js (App Router)
  page.tsx       # home
  layout.tsx     # layout raíz (Header + Footer)
  globals.css    # variables CSS + Tailwind
  etapas/        # páginas por etapa educativa
  admisiones/
  comedor/
  extraescolares/
  contacto/
  quienes-somos/
  informacion/
  oficina-virtual/
components/
  Header.tsx     # nav principal con dropdowns multinivel + menú móvil
  Footer.tsx
  PageHero.tsx   # hero reutilizable para páginas interiores
  nav-data.ts    # árbol de navegación (mainNav + secondaryNav)
public/          # assets estáticos
```

## Tokens de diseño (globals.css)
| Variable | Valor | Uso |
|---|---|---|
| `--accent` | `#003087` | azul corporativo, CTAs primarios |
| `--accent-hover` | `#00256b` | hover de botones primarios |
| `--accent-light` | `#e8edf5` | fondos suaves, hover de nav |
| `--text` | `#1d1d1f` | texto principal |
| `--text-secondary` | `#6e6e73` | texto secundario |
| `--border` | `#d2d2d7` | bordes |
| `--bg-secondary` | `#f5f5f7` | fondos alternos de sección |

Usar siempre `var(--token)` en lugar de colores directos de Tailwind.

## Convenciones de código
- Componentes en PascalCase, archivos `.tsx`
- Sin comentarios salvo que el motivo no sea evidente
- Sin `"use client"` salvo que sea imprescindible (Header lo necesita por estado)
- Imágenes externas con `unoptimized` (dominio no configurado en next.config)
- Responsive mobile-first; breakpoints principales: `sm`, `md`, `lg`
- Navegación definida en `components/nav-data.ts`; añadir rutas ahí, no inline

## Colegio — datos clave
- **Nombre**: Colegio San Cayetano
- **Dirección**: Av. Picasso, 21 · 07014 Palma de Mallorca
- **Teléfono**: 971 22 05 75
- **Titularidad**: privado, vinculado a la Orden Teatina
- **Alumnos**: 1.740
- **Etapas**: Escoleta (1–2 años) › Infantil › Primaria › Secundaria › Bachillerato › IB
- **Idiomas**: castellano, catalán, inglés (trilingüe)
- **Plataformas**: Alexia (familias), ManageBac (IB), Biblioteca propia
