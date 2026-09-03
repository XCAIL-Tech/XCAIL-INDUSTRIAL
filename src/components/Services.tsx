import { Package, Boxes, Tags, Cog, Wrench, SlidersHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

const ICONS: LucideIcon[] = [Package, Boxes, Tags, Cog, Wrench, SlidersHorizontal];

export function Services() {
  const { tr } = useI18n();
  const s = tr.services;

  return (
    <section id="servicios" className="scroll-mt-16 bg-background py-24 sm:py-32">
      <div className="container mx-auto">
        <SectionHeader index="01" eyebrow="Servicios" title={s.title} subtitle={s.subtitle} />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => {
            const Icon = ICONS[i] ?? Package;
            return (
              <div
                key={item.title}
                className="group relative flex flex-col gap-5 bg-card p-7 transition-colors hover:bg-muted/40"
              >
                {/* regla superior de acento */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/25 bg-primary/[0.07] text-primary">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </div>
                  <span className="spec text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
