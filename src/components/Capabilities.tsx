import { useI18n } from "@/lib/i18n";

export function Capabilities() {
  const { tr } = useI18n();
  const items = tr.capabilities.items;
  const loop = [...items, ...items];

  return (
    <section
      aria-label="Capacidades operativas"
      className="on-dark relative overflow-hidden border-y border-white/10 bg-hero py-4 text-white"
    >
      <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-7 font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/60">
              {item}
            </span>
            <span className="text-secondary" aria-hidden>—</span>
          </span>
        ))}
      </div>
      {/* degradados de borde */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[hsl(var(--hero))] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[hsl(var(--hero))] to-transparent" />
    </section>
  );
}
