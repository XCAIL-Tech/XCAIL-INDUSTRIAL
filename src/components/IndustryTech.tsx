import { ChevronRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function IndustryTech() {
  const { tr } = useI18n();
  const it = tr.industryTech;

  return (
    <section className="on-dark bg-background py-6 sm:py-12">
      <div className="container mx-auto">
        <div className="panel-dark blueprint-grid overflow-hidden px-7 py-14 text-white sm:px-14 sm:py-16">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-secondary/60" />
              <span className="eyebrow">{it.title}</span>
            </div>
            <h2 className="font-display text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl">
              {it.lead}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">{it.body}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/65 sm:text-base">{it.body2}</p>
          </div>

          {/* Del desarrollo digital al producto físico */}
          <div className="mt-10 rounded-md border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-white">{it.digital_title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">{it.digital_body}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-1 gap-y-2">
              {it.flow.map((step, i) => (
                <span key={step} className="flex items-center">
                  <span className="rounded-sm border border-white/12 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/70">
                    {step}
                  </span>
                  {i < it.flow.length - 1 && (
                    <ChevronRight className="mx-0.5 h-3.5 w-3.5 shrink-0 text-secondary" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
