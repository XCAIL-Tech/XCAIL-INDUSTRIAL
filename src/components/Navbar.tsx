import { useState, useEffect } from "react";
import { Menu, Sun, Moon, ArrowRight } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { buttonVariants } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { useI18n } from "@/lib/i18n";

const LOGO = "/media/logos/XCAIL-INDUSTRIAL-AZUL-PNG.png";

const SECTION_IDS = ["home", "servicios", "proceso", "empresa", "contacto"];

const PATH_MAP: Record<string, string> = {
  home: "/",
  servicios: "/servicios",
  proceso: "/proceso",
  empresa: "/empresa",
  contacto: "/contacto",
};

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      // Si la sección "home" no está en el DOM no estamos en la landing
      // (estamos en /preguntas-frecuentes, /privacidad, etc.) — no tocar la URL.
      if (!document.getElementById("home")) return;

      const offset = 80;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.getBoundingClientRect().top <= offset) {
          const id = SECTION_IDS[i];
          setActive(id);
          window.history.replaceState(null, "", PATH_MAP[id]);
          return;
        }
      }
      setActive("home");
      window.history.replaceState(null, "", "/");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", PATH_MAP[id] ?? "/");
    return;
  }
  // La landing no está montada — navegación real para volver a montar el Home.
  window.location.href = PATH_MAP[id] ?? "/";
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { tr } = useI18n();
  const active = useActiveSection();
  const { isDark, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const routes = [
    { id: "servicios", label: tr.navbar.servicios },
    { id: "proceso", label: tr.navbar.proceso },
    { id: "empresa", label: tr.navbar.empresa },
    { id: "contacto", label: tr.navbar.contacto },
  ];

  function ThemeToggle() {
    return (
      <button
        onClick={toggleTheme}
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        className="flex h-8 w-8 items-center justify-center rounded-md border border-white/20 bg-transparent text-white/70 transition-colors hover:border-primary hover:text-primary"
      >
        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </button>
    );
  }

  return (
    <header
      className={`on-dark sticky top-0 z-40 w-full border-b bg-hero text-white transition-shadow duration-300 ${
        scrolled ? "border-white/10 shadow-lg shadow-black/20" : "border-white/[0.06]"
      }`}
    >
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex h-20 w-screen justify-between px-4">
          {/* Logo */}
          <NavigationMenuItem className="flex font-bold">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="ml-1 flex items-center"
              aria-label="XCAIL Industrial — Inicio"
            >
              <img src={LOGO} alt="XCAIL Industrial" className="h-14 w-auto" />
            </a>
          </NavigationMenuItem>

          {/* Mobile */}
          <span className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2 text-white">
                <Menu className="h-6 w-6">
                  <span className="sr-only">Menú</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side="right" className="bg-background border-l border-border text-foreground">
                <SheetHeader>
                  <SheetTitle className="flex">
                    <img src={LOGO} alt="XCAIL Industrial" className="h-14 w-auto" />
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-8 flex flex-col gap-2">
                  {routes.map(({ id, label }) => (
                    <a
                      key={id}
                      href={PATH_MAP[id]}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        scrollToSection(id);
                      }}
                      className={`${buttonVariants({ variant: "ghost" })} w-full justify-start text-muted-foreground hover:text-foreground ${
                        active === id ? "text-primary font-semibold" : ""
                      }`}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href={PATH_MAP.contacto}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      scrollToSection("contacto");
                    }}
                    className="btn-primary mt-4 inline-flex items-center justify-center gap-2 h-11 rounded-md px-5 text-sm font-semibold"
                  >
                    {tr.navbar.cta} <ArrowRight className="w-4 h-4" />
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-1 items-center">
            {routes.map((route) => (
              <a
                key={route.id}
                href={PATH_MAP[route.id]}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(route.id);
                }}
                className={`relative text-[14px] tracking-wide font-medium ${buttonVariants({ variant: "ghost" })} text-white/60 transition-colors hover:bg-white/5 hover:text-white ${
                  active === route.id ? "font-semibold text-white" : ""
                }`}
              >
                {route.label}
                {active === route.id && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop: CTA + theme toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href={PATH_MAP.contacto}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contacto");
              }}
              className="btn-primary inline-flex items-center gap-2 h-9 rounded-md px-4 text-[13px] font-semibold"
            >
              {tr.navbar.cta}
            </a>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
