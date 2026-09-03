import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useI18n } from "@/lib/i18n";

function buildFaqJsonLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export default function Faq() {
  const { tr } = useI18n();
  const faq = tr.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQPage schema — se inyecta en <head> al montar. Googlebot ejecuta JS al
  // renderizar, así que esto sí es efectivo para resultados enriquecidos y
  // para motores de respuesta (GEO).
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(buildFaqJsonLd(faq.items));
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [faq.items]);

  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-3xl py-20">
        <h1 className="mb-2 text-3xl font-extrabold text-foreground md:text-4xl">{faq.title}</h1>
        <p className="mb-10 text-sm text-muted-foreground">{faq.subtitle}</p>

        <div className="space-y-3">
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className="overflow-hidden rounded-md border border-border bg-card">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="text-sm font-bold text-foreground">{item.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                {open && (
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-md border border-border bg-card px-6 py-6 text-center">
          <p className="mb-3 text-sm font-bold text-foreground">{faq.still_have_questions}</p>
          <a
            href="mailto:contacto@xcailindustrial.com"
            className="btn-primary inline-flex h-11 items-center gap-2 rounded-md px-6 text-sm font-bold"
          >
            {faq.write_us}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
