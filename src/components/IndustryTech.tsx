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
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {it.services.map((s) => (
              <span
                key={s}
                className="rounded-sm border border-white/12 bg-white/[0.03] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
