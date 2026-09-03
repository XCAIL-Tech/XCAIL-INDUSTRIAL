// api/notify.js
// Vercel Serverless Function — envía por mail cada solicitud del formulario de
// contacto de xcailindustrial.com usando Resend.
//
// Variables de entorno en Vercel (Project Settings → Environment Variables,
// SIN prefijo VITE_ porque esto corre solo en el servidor):
//   RESEND_API_KEY  — key de resend.com/api-keys
//   NOTIFY_EMAIL    (opcional) — destinatario. Default: contacto@xcailindustrial.com
//   FROM_EMAIL      (opcional) — remitente verificado en Resend.
//                    Default: noreply@mail.xcail.com (subdominio ya verificado).
//                    Cambiar a noreply@mail.xcailindustrial.com cuando ese
//                    dominio esté verificado en Resend.

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "contacto@xcailindustrial.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@mail.xcail.com";

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label, value) {
  if (!value) return "";
  return `<tr style="border-bottom:1px solid #2a2a2a;">
    <td style="padding:6px 12px;color:#888;width:150px;">${escapeHtml(label)}</td>
    <td style="padding:6px 12px;color:#fff;">${escapeHtml(value)}</td>
  </tr>`;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(404).json({ ok: false, error: "not_found" });
    return;
  }
  if (!RESEND_API_KEY) {
    console.error("notify: falta RESEND_API_KEY en las variables de entorno de Vercel");
    res.status(500).json({ ok: false, error: "missing_config" });
    return;
  }

  try {
    const { company, name, role, email, phone, service, volume, message } = req.body || {};

    if (!company || !name || !email || !message) {
      res.status(400).json({ ok: false, error: "incomplete_fields" });
      return;
    }

    const html = `
      <!DOCTYPE html>
      <html>
      <head><meta charset="utf-8"></head>
      <body style="background:#111;color:#fff;font-family:Inter,Arial,sans-serif;padding:32px;">
        <div style="max-width:620px;margin:0 auto;">
          <div style="border-bottom:2px solid #C6402A;padding-bottom:16px;margin-bottom:24px;">
            <h2 style="margin:0;color:#C6402A;font-size:18px;">XCAIL Industrial</h2>
            <p style="margin:4px 0 0;color:#888;font-size:13px;">Nueva solicitud de evaluación</p>
          </div>

          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            ${row("Empresa", company)}
            ${row("Nombre", name)}
            ${row("Cargo", role)}
            ${row("Email", email)}
            ${row("Teléfono", phone)}
            ${row("Servicio requerido", service)}
            ${row("Volumen estimado", volume)}
          </table>

          <div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:8px;padding:16px;">
            <p style="margin:0 0 8px;color:#888;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Descripción del proceso</p>
            <p style="margin:0;color:#ccc;white-space:pre-wrap;">${escapeHtml(message)}</p>
          </div>

          <p style="margin-top:32px;color:#555;font-size:12px;text-align:center;">
            Enviado automáticamente desde xcailindustrial.com.<br>
            Usá "Responder" para escribirle directo a quien consultó.
          </p>
        </div>
      </body>
      </html>
    `;

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `XCAIL Industrial <${FROM_EMAIL}>`,
        to: [NOTIFY_EMAIL],
        reply_to: email,
        subject: `[XCAIL Industrial] ${company} — ${service || "Solicitud de evaluación"}`,
        html,
      }),
    });

    const resendBody = await resendRes.text();
    if (!resendRes.ok) {
      console.error("notify: error de Resend:", resendBody);
      res.status(502).json({ ok: false, error: resendBody });
      return;
    }

    console.log(`notify: solicitud enviada por ${name} (${company} / ${email})`);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("notify: error interno:", err);
    res.status(500).json({ ok: false, error: "internal_error" });
  }
}
