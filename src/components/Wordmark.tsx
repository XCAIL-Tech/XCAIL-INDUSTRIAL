/**
 * Lockup de marca de XCAIL Industrial: "XCAIL" con "INDUSTRIAL" debajo,
 * ocupando exactamente el mismo ancho.
 *
 * Técnica (la misma del hero de xcail.com): contenedor flex en columna con
 * items-stretch → el ancho de la columna es el de "XCAIL"; la palabra de
 * abajo lleva sus letras separadas por espacios y `text-align-last: justify`,
 * que reparte el espacio sobrante hasta llenar ese ancho. Para que "expanda"
 * (en vez de desbordar), el tamaño de "INDUSTRIAL" está calibrado por debajo
 * del ancho de "XCAIL" en cada `size`.
 *
 * `icon` agrega el isotipo dorado de XCAIL a la izquierda (navbar / footer).
 * En el Hero se usa sin icono, grande y con degradado, como en xcail.com.
 */
const SIZES = {
  md: { icon: "h-7 w-7", top: "text-[1.9rem]", sub: "text-[6px]", gap: "gap-2.5" },
  lg: { icon: "h-11 w-11", top: "text-[2.75rem]", sub: "text-[8px]", gap: "gap-3.5" },
  xl: {
    icon: "h-16 w-16",
    top: "text-6xl sm:text-7xl lg:text-8xl",
    sub: "text-sm sm:text-base",
    gap: "gap-5",
  },
} as const;

export function Wordmark({
  className = "",
  size = "md",
  icon = true,
  gradient = false,
}: {
  className?: string;
  size?: keyof typeof SIZES;
  icon?: boolean;
  gradient?: boolean;
}) {
  const s = SIZES[size];

  return (
    <span className={`inline-flex items-center ${s.gap} ${className}`}>
      {icon && (
        <img
          src="/media/logos/XCAIL-LOGO-2026.png"
          alt=""
          aria-hidden="true"
          className={`${s.icon} shrink-0 object-contain`}
        />
      )}
      <span className="inline-flex flex-col items-stretch leading-none">
        <span
          className={`font-display ${s.top} font-bold leading-none tracking-tight ${
            gradient
              ? "bg-gradient-to-r from-[#4FB3C4] via-[#2E8296] to-[#1B5866] bg-clip-text text-transparent"
              : ""
          }`}
        >
          XCAIL
        </span>
        <span
          className={`mt-1 font-mono ${s.sub} font-medium uppercase text-secondary`}
          style={{ textAlign: "justify", textAlignLast: "justify" }}
        >
          {"INDUSTRIAL".split("").join(" ")}
        </span>
      </span>
    </span>
  );
}
