import { useState, useEffect } from "react";

const STORAGE_KEY = "xcail-industrial-theme";

// Tema por defecto: claro (B2B corporativo). El modo oscuro queda disponible
// vía el toggle de la Navbar.
export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? "dark" : "light");
    } catch {
      /* almacenamiento no disponible — el tema sigue en memoria */
    }
  }, [isDark]);

  const toggle = () => setIsDark((d) => !d);

  return { isDark, toggle };
}
