/**
 * Esquema isométrico de una línea de operaciones: entrada → 3 estaciones →
 * salida. Ilustración propia (SVG), sin fotos — no insinúa infraestructura
 * instalada. Vive sobre la franja oscura del Hero, por eso los colores van
 * fijos (petróleo claro + cobre).
 */
const PETROL = "#39A2B4";
const PETROL_DIM = "#1B5866";
const COPPER = "#C2603A";
const LINE = "rgba(255,255,255,0.14)";

function IsoBox({ x, y, h = 34, tone = "petrol" }: { x: number; y: number; h?: number; tone?: "petrol" | "copper" }) {
  const w = 44; // ancho de una cara en proyección
  const top = tone === "copper" ? "#3A2018" : "#0E2A31";
  const left = tone === "copper" ? "#7C3B26" : PETROL_DIM;
  const right = tone === "copper" ? "#5A2A1B" : "#12414C";
  const edge = tone === "copper" ? COPPER : PETROL;
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* cara superior */}
      <path d={`M0,${-h} L${w},${-h - 22} L${w * 2},${-h} L${w},${-h + 22} Z`} fill={top} stroke={edge} strokeWidth="1.5" />
      {/* cara izquierda */}
      <path d={`M0,${-h} L${w},${-h + 22} L${w},22 L0,0 Z`} fill={left} stroke={edge} strokeWidth="1.5" />
      {/* cara derecha */}
      <path d={`M${w},${-h + 22} L${w * 2},${-h} L${w * 2},0 L${w},22 Z`} fill={right} stroke={edge} strokeWidth="1.5" />
    </g>
  );
}

export function ProcessSchematic({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 440"
      className={className}
      fill="none"
      role="img"
      aria-label="Esquema de una línea de operaciones: entrada, estaciones de proceso y salida"
    >
      {/* plano base — grilla isométrica */}
      <g opacity="0.55">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`a${i}`} x1={40 + i * 44} y1={90 + i * 22} x2={40 + i * 44 - 180} y2={90 + i * 22 + 90} stroke={LINE} strokeWidth="1" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`b${i}`} x1={40 + i * 44} y1={90 + i * 22} x2={40 + i * 44 + 180} y2={90 + i * 22 + 90} stroke={LINE} strokeWidth="1" />
        ))}
      </g>

      {/* ruta que conecta las estaciones */}
      <path
        d="M70,250 L158,206 L246,250 L334,206 L422,250"
        stroke={COPPER}
        strokeWidth="2"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />

      {/* estaciones */}
      <IsoBox x={26} y={250} h={26} />
      <IsoBox x={114} y={206} h={40} />
      <IsoBox x={202} y={250} h={40} tone="copper" />
      <IsoBox x={290} y={206} h={40} />
      <IsoBox x={378} y={250} h={30} />

      {/* nodos */}
      {[
        [70, 250],
        [158, 206],
        [246, 250],
        [334, 206],
        [422, 250],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill={i === 2 ? COPPER : PETROL} />
      ))}

      {/* etiquetas técnicas */}
      <g fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="rgba(255,255,255,0.5)">
        <text x="34" y="300">IN · 01</text>
        <text x="196" y="322">OP · 02—04</text>
        <text x="388" y="300">OUT</text>
      </g>
    </svg>
  );
}
