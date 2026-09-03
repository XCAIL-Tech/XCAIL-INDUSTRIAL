import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

export function Process() {
  const { tr } = useI18n();
  const p = tr.process;

  return (
    <section id="proceso" className="scroll-mt-16 border-y border-border bg-muted/30 py-24 sm:py-32">
      <div className="container mx-auto">
        <SectionHeader index="02" eyebrow="Proceso" title={p.title} subtitle={p.subtitle} />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {p.steps.map((s, i) => (
            <div key={s.step} className="relative">
              {/* conector */}
              {i < p.steps.length - 1 && (
                <span className="absolute left-14 top-6 hidden h-px w-[calc(100%-2.5rem)] bg-gradient-to-r from-border to-transparent lg:block" />
              )}
              <div className="mb-5 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-primary">{s.step}</span>
                <span className="spec text-muted-foreground/50">/ paso</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
