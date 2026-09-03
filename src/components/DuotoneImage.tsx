import { useState } from "react";

/**
 * Imagen de proceso con tratamiento duotono (petróleo + cobre), para que las
 * fotos —sean de stock o propias— se lean como un sistema y NO como
 * "instalaciones propias". Si la imagen todavía no existe o falla la carga,
 * cae a un placeholder técnico. Dejá los archivos en /public/media/procesos/.
 */
export function DuotoneImage({
  src,
  alt,
  label,
  className = "",
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`duotone-wrap ${className}`}>
      {!failed ? (
        <img src={src} alt={alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      ) : (
        <div className="blueprint-grid absolute inset-0 flex items-center justify-center">
          <span className="spec rounded-sm border border-white/15 bg-black/30 px-2.5 py-1 text-white/55">
            {label ?? "imagen pendiente"}
          </span>
        </div>
      )}
      {/* rejilla técnica encima */}
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />
      {label && !failed && (
        <span className="spec absolute bottom-3 left-3 rounded-sm bg-black/45 px-2 py-1 text-white/80 backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
