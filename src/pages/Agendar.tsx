import Cal from "@calcom/embed-react";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/lib/i18n";
import { CAL_LINK, CAL_NAMESPACE, useCalInit } from "@/lib/cal";

export default function Agendar() {
  const { tr } = useI18n();
  const s = tr.schedule;
  useCalInit();

  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-4xl py-10 sm:py-14">
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> {s.back}
        </a>

        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-extrabold text-foreground md:text-4xl">{s.title}</h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {s.subtitle}
          </p>
        </div>

        <div className="min-h-[640px] overflow-hidden rounded-md border border-border bg-card">
          <Cal
            namespace={CAL_NAMESPACE}
            calLink={CAL_LINK}
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> {s.back}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
