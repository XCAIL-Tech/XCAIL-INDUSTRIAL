# CLAUDE.md — XCAIL Industrial

Guía para Claude Code en este repositorio.

## Qué es

Landing comercial de **XCAIL Industrial**, unidad de operaciones industriales de
**XCAIL Technologies S.A.S.** (misma razón social, misma CUIT 30-71921679-6).
Objetivo: conseguir solicitudes de evaluación de empresas que quieren tercerizar
procesos productivos (envasado, packaging, acondicionamiento, ensamblado, armado).

## Comandos

```bash
pnpm dev       # http://localhost:5173
pnpm build     # tsc + vite build → dist/
pnpm preview   # http://localhost:4173
pnpm lint      # eslint (flat config, typescript-eslint + react-hooks)
```

Deploy: Vercel (auto en push a `main`). Ver `DEPLOY.md`.

## Convenciones

- **Stack:** Vite 5 + React 18 + TS strict + Tailwind 3 + shadcn/ui + react-router-dom 7. SPA pura, sin SSR.
- **Español únicamente.** Todo el copy vive en `src/lib/i18n.tsx` (`useI18n().tr`). No hardcodear textos en los componentes.
- **Path alias:** `@/` → `src/`.
- **Tema:** claro por defecto. `useTheme` (en `src/hooks/`) togglea la clase `dark` y persiste en `localStorage`. Usar siempre tokens (`bg-card`, `text-muted-foreground`, `border-border`, `text-primary`…), nunca colores hardcodeados, así el modo oscuro sigue funcionando.
- **Design tokens:** en `src/App.css` (`:root` claro / `.dark` oscuro). Paleta: grafito + **azul petróleo** (`--primary` ≈ `#1B5866`) + **cobre como chispa secundaria** (`--secondary` ≈ `#B85B3B`, usar poco: números, hovers, acentos). Franjas oscuras usan `.panel-dark` + `.blueprint-grid` y el wrapper `.on-dark`.
- **Tipografía:** `font-display` = Space Grotesk (títulos, todos los `h1..h4` ya la toman por CSS base), `font-mono` = JetBrains Mono (eyebrows, labels, specs, números — clase `.eyebrow` / `.spec`), body = Outfit.
- **Superficies:** `.panel` / `.panel-hover` (cards claras con sombra), `.panel-dark` (grafito sobre fondo claro), `.btn-primary` (petróleo) / `.btn-line` (contorno), `.duotone-wrap` (fotos con tratamiento duotono vía `DuotoneImage`).
- **Footer:** siempre oscuro (`bg-hero` + `on-dark`), en ambos temas. Textos en `text-white/NN`, no tokens.
- **Ilustración:** `src/components/illustrations/` — SVG isométrico propio (`ProcessSchematic` en el Hero). Combinar con fotos de detalle tratadas en duotono (slots en `public/media/procesos/`, ver su README). Nunca fotos presentadas como instalación propia.
- **Marca:** navbar + footer + menú mobile usan el isologo `public/media/logos/XCAIL-INDUSTRIAL-AZUL-PNG.png` (cromo azulado, ya incluye "XCAIL INDUSTRIAL"). El Hero del home usa el lettering tipográfico (`Wordmark size="xl" icon={false} gradient` — "XCAIL" con degradado + "INDUSTRIAL" al mismo ancho por `text-align: justify`), sin isotipo. Favicon = `XCAIL-LOGO-2026.png` (isotipo dorado — pendiente uno azul cuadrado).
- `strict: true` + `noUnusedLocals/Parameters`. Usar `err: unknown` en catch.

## No inventar infraestructura

XCAIL Industrial **todavía no tiene planta ni maquinaria**. El copy nunca debe
afirmar "nuestra planta", "nuestras líneas de producción", metros cuadrados,
capacidad instalada, unidades/mes ni fotos presentadas como instalaciones
propias. Sí se puede hablar de evaluación de proyectos, procesos, experiencia
del equipo y respaldo de XCAIL Technologies.

## Premios / respaldo

Los reconocimientos (Sadosky, BritCham, Premios Verdes) son de **XCAIL
Technologies y sus desarrollos**, NO de XCAIL Industrial. Presentarlos siempre
como respaldo de la compañía, nunca como premios de la unidad industrial.

## Relación con xcail.com (repo XCAIL-WEB)

Proyectos independientes (repo, deploy, dominio propios). Estos archivos se
mantienen **idénticos** a los de xcail.com para poder mergear fixes a mano — no
divergirlos sin necesidad:

- `src/components/ui/button.tsx`, `sheet.tsx`, `navigation-menu.tsx`
- `src/lib/utils.ts`

## Estructura de la landing (`src/App.tsx` → `Home`)

Navbar · Hero · Capabilities (marquee) · Services · OutsourcingCta · Process ·
WhyIndustrial · IndustryTech · Company (sobre + respaldo) · Contact · Footer.

Páginas sueltas: `/privacidad` `/terminos` `/aviso-legal` `/preguntas-frecuentes` `/agendar`.

## Formulario

`Contact.tsx` → `POST /api/notify` (Vercel Function, Resend). Sin Supabase, sin
panel admin. Destinatario y remitente configurables por env (`NOTIFY_EMAIL`,
`FROM_EMAIL`); defaults en `api/notify.js`.
