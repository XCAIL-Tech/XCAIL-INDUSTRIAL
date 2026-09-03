export function SectionHeader({
  index,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {(eyebrow || index) && (
        <div
          className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
        >
          {index && <span className="spec text-muted-foreground">/ {index}</span>}
          <span className="h-px w-8 bg-secondary/60" />
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-[2.6rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
