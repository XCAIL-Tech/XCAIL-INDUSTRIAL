import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

function goToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function OutsourcingCta() {
  const { tr } = useI18n();
  const o = tr.outsourcing;

  return (
    <section className="on-dark bg-background py-6 sm:py-12">
      <div className="container mx-auto">
        <div className="panel-dark blueprint-grid relative overflow-hidden px-7 py-14 text-white sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute -left-[6%] top-0 h-full w-[35%] rounded-full bg-primary/20 blur-[120px]" />
          <span className="spec absolute right-8 top-8 hidden text-white/25 sm:block">// TERCERIZACIÓN</span>
          <div className="relative max-w-3xl">
            <h2 className="font-display text-[1.75rem] font-bold leading-tight tracking-tight sm:text-4xl">
              {o.title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
              {o.body}
            </p>
            <button
              onClick={() => goToSection("contacto")}
              className="btn-primary mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold"
            >
              {o.cta} <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
