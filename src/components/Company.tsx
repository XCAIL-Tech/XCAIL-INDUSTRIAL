import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Company() {
  const { tr } = useI18n();
  const c = tr.company;

  return (
    <section id="empresa" className="on-dark scroll-mt-16 bg-background py-6 sm:py-12">
      <div className="container mx-auto">
        <div className="panel-dark blueprint-grid overflow-hidden px-7 py-14 text-white sm:px-14 sm:py-16">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="spec text-white/35">/ 04</span>
              <span className="h-px w-8 bg-secondary/60" />
              <span className="eyebrow">Empresa</span>
            </div>
            <h2 className="font-display text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl">
              {c.heading}
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/65 sm:text-base">
              {c.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <a
              href={c.cta_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-primary hover:underline"
            >
              {c.cta} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
