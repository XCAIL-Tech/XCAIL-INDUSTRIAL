import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

/**
 * Configuración compartida del embed de Cal.com para XCAIL Industrial.
 *
 * Por ahora reutiliza el evento de XCAIL (https://cal.com/xcail/reunion).
 * Si se crea un evento propio para Industrial, cambiar CAL_LINK / CAL_NAMESPACE.
 *
 * El color de marca (cobre) y el tema se fuerzan desde acá porque el plan
 * gratuito de Cal.com no permite configurarlos en su panel; los parámetros
 * del embed son client-side y no dependen del plan.
 */
export const CAL_NAMESPACE = "reunion";
export const CAL_LINK = "xcail/reunion";

const CAL_BRAND = "#C6402A";

export const CAL_UI_CONFIG = {
  theme: "light" as const,
  hideEventTypeDetails: false,
  layout: "month_view" as const,
  cssVarsPerTheme: {
    light: { "cal-brand": CAL_BRAND },
    dark: { "cal-brand": CAL_BRAND },
  },
};

/**
 * Props a esparcir sobre cualquier `<button>` para que abra el modal de
 * Cal.com al hacer click. El embed instala un listener global que detecta
 * estos atributos.
 */
export const calTriggerProps = {
  "data-cal-namespace": CAL_NAMESPACE,
  "data-cal-link": CAL_LINK,
  "data-cal-config": JSON.stringify({ layout: "month_view" }),
} as const;

/**
 * Carga el script del embed y aplica la config de UI una sola vez.
 * Llamar en cualquier componente que renderice un disparador del modal o el
 * calendario inline.
 */
export function useCalInit() {
  useEffect(() => {
    let cancelled = false;
    getCalApi({ namespace: CAL_NAMESPACE }).then((cal) => {
      if (!cancelled) cal("ui", CAL_UI_CONFIG);
    });
    return () => {
      cancelled = true;
    };
  }, []);
}
