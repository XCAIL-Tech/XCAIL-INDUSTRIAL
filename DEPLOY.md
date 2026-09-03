# Deploy — XCAIL Industrial

## 1. GitHub

Repo: `https://github.com/XCAIL-Tech/XCAIL-INDUSTRIAL` (público, para no pagar
Vercel). El `.env` **no se sube** (está en `.gitignore`). No hay secretos en el
código: la key de Resend vive solo en las Environment Variables de Vercel.

```bash
git add .
git commit -m "..."
git push origin main
```

## 2. Vercel

1. [vercel.com/new](https://vercel.com/new) → Import `XCAIL-Tech/XCAIL-INDUSTRIAL`
2. Build settings:
   - Framework Preset: **Vite**
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`
3. Environment Variables (Production + Preview):

   | Name | Valor | Notas |
   |------|-------|-------|
   | `RESEND_API_KEY` | key de resend.com/api-keys | **Sin** prefijo `VITE_` — solo servidor |
   | `NOTIFY_EMAIL` *(opcional)* | `contacto@xcailindustrial.com` | Destinatario. Es el default si no se define |
   | `FROM_EMAIL` *(opcional)* | `noreply@mail.xcail.com` | Remitente. Default si no se define |

4. Deploy.

## 3. Dominio (cuando se compre `xcailindustrial.com`)

En Vercel → Settings → Domains → Add `xcailindustrial.com`. Configurar en el
proveedor de DNS:

| Tipo | Nombre | Valor |
|------|--------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

## 4. Email del formulario

El formulario le pega a `/api/notify` (misma app, mismo deploy — no hay servicio
externo que mantener).

**Mientras `xcailindustrial.com` no tenga mail configurado:**

- `FROM_EMAIL` usa `noreply@mail.xcail.com`, un subdominio **ya verificado** en
  Resend por xcail.com — funciona sin tocar DNS nuevo.
- `NOTIFY_EMAIL` puede apuntar temporalmente a una casilla que ya exista
  (ej. `contacto@xcail.com`) hasta que exista `contacto@xcailindustrial.com`.

**Cuando el dominio esté listo:**

1. Crear la casilla `contacto@xcailindustrial.com` en el proveedor de mail.
2. (Opcional, recomendado) En [resend.com/domains](https://resend.com/domains)
   agregar `mail.xcailindustrial.com`, cargar los registros DKIM/SPF que indique
   Resend, y setear `FROM_EMAIL=noreply@mail.xcailindustrial.com`.
3. Setear `NOTIFY_EMAIL=contacto@xcailindustrial.com` y redeploy.

## 5. Cal.com

`src/lib/cal.ts` reutiliza el evento `xcail/reunion` de XCAIL. Si se crea un
evento propio de Industrial, cambiar `CAL_LINK` y `CAL_NAMESPACE` ahí.

## Costos

Vercel Hobby $0 · Resend Free $0 (3.000 mails/mes). Total: $0/mes.
