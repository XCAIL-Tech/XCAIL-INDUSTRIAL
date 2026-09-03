import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { NetworkBackground } from "./ui/NetworkBackground";
import { ProcessSchematic } from "./illustrations/ProcessSchematic";
import { Wordmark } from "./Wordmark";

function goToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const { tr } = useI18n();
  const h = tr.hero;

  return (
    <section
      id="home"
      className="on-dark relative isolate overflow-hidden bg-gradient-to-b from-[hsl(200_24%_14%)] via-[hsl(200_28%_10%)] to-[hsl(200_30%_8%)] text-white"
    >
      <NetworkBackground />
      <div className="blueprint-grid-hero absolute inset-0 z-0" />
      <div className="pointer-events-none absolute -right-[6%] top-1/4 z-0 h-[45%] w-[45%] rounded-full bg-primary/15 blur-[140px]" />
      <div className="pointer-events-none absolute -left-[10%] bottom-0 z-0 h-[35%] w-[35%] rounded-full bg-secondary/10 blur-[130px]" />

      <div className="container relative z-10 mx-auto grid items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Columna de contenido */}
        <div className="max-w-2xl space-y-7 animate-fade-up">
          <Wordmark size="xl" icon={false} gradient />

          <h1 className="font-display text-[1.6rem] font-semibold leading-snug tracking-tight text-white/90 sm:text-[2rem]">
            {h.h1}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            {h.subheadline}
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              onClick={() => goToSection("contacto")}
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold"
            >
              {h.cta_primary} <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => goToSection("servicios")}
              className="btn-line inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold"
            >
              {h.cta_secondary}
            </button>
          </div>
        </div>

        {/* Columna visual */}
        <div className="relative hidden animate-fade-up lg:block">
          <div className="absolute -inset-4 rounded-lg border border-white/[0.06]" />
          <ProcessSchematic className="w-full" />
        </div>
      </div>
    </section>
  );
}
