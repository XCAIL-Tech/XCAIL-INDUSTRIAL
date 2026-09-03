# XCAIL Industrial — Sitio web

Landing comercial de **XCAIL Industrial**, la unidad de operaciones industriales
de **XCAIL Technologies S.A.S.** Servicios de acondicionamiento, ensamblado,
envasado, packaging y armado para empresas que necesitan tercerizar procesos
productivos.

- Producción: `https://xcailindustrial.com` (dominio pendiente de compra)
- Repo: `https://github.com/XCAIL-Tech/XCAIL-INDUSTRIAL`
- Deploy: Vercel (frontend + función `api/notify.js` en el mismo build)

## Stack

- **Vite 5** + **React 18** + **TypeScript** (strict)
- **Tailwind CSS 3** + primitivas shadcn/ui (Radix)
- **react-router-dom 7** (SPA, `vercel.json` reescribe todo a `index.html`)
- **Cal.com** embed para agendar reuniones (`src/lib/cal.ts`)
- **Resend** para el mail del formulario (vía `api/notify.js`, sin backend propio)
- Español únicamente. Copy centralizado en `src/lib/i18n.tsx`.
- Tema claro por defecto; toggle a oscuro en la Navbar.

## Correr en local

Requisitos: Node 18+ y pnpm 9+.

```bash
pnpm install
pnpm dev            # http://localhost:5173
```

El frontend **no necesita variables de entorno** para correr en local. El
formulario de contacto le pega a `/api/notify`, que solo existe en el deploy de
Vercel — para probar el envío real, usá un Preview Deployment.

```bash
pnpm build          # tsc + vite build → dist/
pnpm preview        # http://localhost:4173
pnpm lint
```

## Estructura

```
src/
├── components/
│   ├── Navbar / Hero / Capabilities / Services / OutsourcingCta
│   ├── Process / WhyIndustrial / IndustryTech / Company / Contact / Footer
│   ├── Wordmark / SectionHeader / ScrollToTop
│   └── ui/           # primitivas shadcn (button, sheet, navigation-menu) + NetworkBackground
├── pages/            # Privacidad, Terminos, AvisoLegal, Faq, Agendar
├── lib/              # i18n.tsx (todo el copy), cal.ts, utils.ts
├── hooks/            # useTheme
├── App.tsx / App.css # rutas + design tokens
api/
└── notify.js         # Vercel Serverless Function — envía el mail (Resend)
```

## Relación con xcail.com

Este repo se sembró desde el de XCAIL Technologies (`XCAIL-WEB`). Son proyectos
**independientes** (repo, deploy y dominio propios). Para simplificar un futuro
merge de fixes, estos archivos se mantienen **idénticos** entre ambos repos y
conviene no divergirlos sin necesidad:

- `src/components/ui/button.tsx`, `sheet.tsx`, `navigation-menu.tsx`
- `src/lib/utils.ts`

Ver `DEPLOY.md` para el detalle de despliegue.
