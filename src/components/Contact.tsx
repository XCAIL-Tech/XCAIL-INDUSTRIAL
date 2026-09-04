import { useState } from "react";
import { Send, CalendarClock } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { calTriggerProps } from "@/lib/cal";
import { SectionHeader } from "./SectionHeader";

type Status = "idle" | "sending" | "success" | "error";

const INITIAL = {
  company: "",
  name: "",
  role: "",
  email: "",
  phone: "",
  location: "",
  service: "",
  volume: "",
  frequency: "",
  message: "",
};

const fieldClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50";

const labelClass = "font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-muted-foreground";

export function Contact() {
  const { tr } = useI18n();
  const c = tr.contact;
  const f = c.fields;

  const [data, setData] = useState(INITIAL);
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`notify_failed_${res.status}`);
      setStatus("success");
      setData(INITIAL);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      console.error("Error al enviar el formulario:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contacto" className="scroll-mt-16 border-t border-border bg-background py-24 sm:py-32">
      <div className="container mx-auto">
        <SectionHeader index="05" eyebrow="Contacto" title={c.title} subtitle={c.subtitle} align="center" />

        {/* Alternativa: agendar reunión */}
        <div className="mx-auto mb-6 flex max-w-4xl flex-col items-center justify-center gap-3 rounded-md border border-border bg-card px-5 py-4 text-center sm:flex-row">
          <span className="text-sm text-muted-foreground">{c.schedule_prompt}</span>
          <button
            type="button"
            {...calTriggerProps}
            className="btn-line inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold"
          >
            <CalendarClock className="h-4 w-4" /> {c.schedule_cta}
          </button>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="panel p-6 lg:p-8">
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground">{c.form_title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.form_subtitle}</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="company" className={labelClass}>{f.company} *</label>
                  <input id="company" name="company" value={data.company} onChange={onChange}
                    required disabled={status === "sending"} placeholder={f.company_ph} className={fieldClass} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="name" className={labelClass}>{f.name} *</label>
                  <input id="name" name="name" value={data.name} onChange={onChange}
                    required disabled={status === "sending"} placeholder={f.name_ph} className={fieldClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="email" className={labelClass}>{f.email} *</label>
                  <input type="email" id="email" name="email" value={data.email} onChange={onChange}
                    required disabled={status === "sending"} placeholder={f.email_ph} className={fieldClass} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="role" className={labelClass}>{f.role}</label>
                  <input id="role" name="role" value={data.role} onChange={onChange}
                    disabled={status === "sending"} placeholder={f.role_ph} className={fieldClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="phone" className={labelClass}>{f.phone}</label>
                  <input id="phone" name="phone" value={data.phone} onChange={onChange}
                    disabled={status === "sending"} placeholder={f.phone_ph} className={fieldClass} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="location" className={labelClass}>{f.location}</label>
                  <input id="location" name="location" value={data.location} onChange={onChange}
                    disabled={status === "sending"} placeholder={f.location_ph} className={fieldClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <label htmlFor="service" className={labelClass}>{f.service}</label>
                  <select id="service" name="service" value={data.service} onChange={onChange}
                    disabled={status === "sending"} className={`${fieldClass} appearance-none`}>
                    <option value="">{f.service_ph}</option>
                    {c.services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="volume" className={labelClass}>{f.volume}</label>
                  <input id="volume" name="volume" value={data.volume} onChange={onChange}
                    disabled={status === "sending"} placeholder={f.volume_ph} className={fieldClass} />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="frequency" className={labelClass}>{f.frequency}</label>
                  <select id="frequency" name="frequency" value={data.frequency} onChange={onChange}
                    disabled={status === "sending"} className={`${fieldClass} appearance-none`}>
                    <option value="">{f.frequency_ph}</option>
                    {c.frequencies.map((v) => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className={labelClass}>{f.message} *</label>
                <textarea id="message" name="message" value={data.message} onChange={onChange}
                  required disabled={status === "sending"} rows={5} placeholder={f.message_ph}
                  className={fieldClass} />
              </div>

              {status === "success" && (
                <div className="rounded-md border border-emerald-500/40 bg-emerald-500/10 p-3 text-center text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {c.success}
                </div>
              )}
              {status === "error" && (
                <div className="rounded-md border border-destructive/40 bg-destructive/10 p-3 text-center text-xs font-bold text-destructive">
                  {c.error}
                </div>
              )}

              <button type="submit" disabled={status === "sending"}
                className="btn-primary flex w-full items-center justify-center gap-2 rounded-md py-4 text-sm font-bold uppercase tracking-wider disabled:opacity-50">
                {status === "sending" ? c.sending : <>{c.submit} <Send className="h-4 w-4" /></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
