import {
  Shuffle,
  ClipboardCheck,
  HardHat,
  Building2,
  Cpu,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

const ICONS: LucideIcon[] = [Shuffle, ClipboardCheck, HardHat, Building2, Cpu, TrendingUp];

export function WhyIndustrial() {
  const { tr } = useI18n();
  const w = tr.why;

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto">
        <SectionHeader index="03" eyebrow="Diferenciales" title={w.title} subtitle={w.subtitle} />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {w.items.map((item, i) => {
            const Icon = ICONS[i] ?? Shuffle;
            return (
              <div key={item.title} className="panel flex flex-col gap-4 p-7">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
