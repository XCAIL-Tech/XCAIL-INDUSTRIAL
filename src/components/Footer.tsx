import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { tr } = useI18n();
  const f = tr.footer;

  return (
    <footer className="on-dark border-t border-white/10 bg-hero text-white">
      <div className="container py-14">
        <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
          {/* Marca */}
          <div className="flex flex-col gap-3">
            <a href="/" aria-label="XCAIL Industrial — Inicio" className="w-fit">
              <img
                src="/media/logos/XCAIL-INDUSTRIAL-AZUL-PNG.png"
                alt="XCAIL Industrial"
                className="h-16 w-auto"
              />
            </a>
            <p className="text-[10.5px] leading-snug text-white/45">{f.unit}</p>
            <p className="max-w-xs text-sm leading-relaxed text-white/60">{f.tagline}</p>
            <div className="mt-2 space-y-1">
              <p className="text-sm text-white/55">{f.location}</p>
              <a
                href={`mailto:${f.email}`}
                className="block text-sm text-white/55 transition-colors hover:text-primary"
              >
                {f.email}
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white">
              {f.services_title}
            </p>
            <ul className="space-y-2">
              {f.services.map((s) => (
                <li key={s}>
                  <a href="/servicios" className="text-sm text-white/55 transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white">
              {f.company_title}
            </p>
            <ul className="space-y-2">
              {f.company.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white">
              {f.legal_title}
            </p>
            <ul className="space-y-2">
              {f.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-white/55 transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center border-t border-white/10 pt-6">
          <p className="text-center text-xs text-white/45">
            © {new Date().getFullYear()} XCAIL Industrial · {f.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
