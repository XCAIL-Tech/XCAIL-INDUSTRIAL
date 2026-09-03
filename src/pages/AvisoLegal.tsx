import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AvisoLegal() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-3xl py-20">
        <h1 className="mb-2 text-3xl font-extrabold text-foreground md:text-4xl">Aviso Legal</h1>
        <p className="mb-10 text-sm text-muted-foreground">Última actualización: 3 de septiembre de 2026</p>

        <div className="space-y-8 leading-relaxed text-muted-foreground">
          <div className="rounded-md border border-border bg-card px-5 py-4 text-sm text-foreground">
            Este Aviso Legal regula el acceso y uso del sitio{" "}
            <a href="https://xcailindustrial.com" className="text-primary hover:underline">xcailindustrial.com</a>,
            correspondiente a <strong>XCAIL Industrial</strong>, unidad comercial de{" "}
            <strong>XCAIL Technologies S.A.S.</strong>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Información del titular</h2>
            <ul className="list-none space-y-1.5 pl-2">
              <li><strong>Razón social:</strong> XCAIL Technologies S.A.S.</li>
              <li><strong>Unidad comercial:</strong> XCAIL Industrial</li>
              <li><strong>CUIT:</strong> <span className="font-mono tracking-wide">30-71921679-6</span></li>
              <li><strong>Domicilio legal:</strong> Nicaragua 4817, Ciudad Autónoma de Buenos Aires (CP 1414), República Argentina</li>
              <li><strong>Correo electrónico:</strong>{" "}
                <a href="mailto:contacto@xcailindustrial.com" className="text-primary hover:underline">contacto@xcailindustrial.com</a>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Registro y constitución</h2>
            <p>
              XCAIL Technologies S.A.S. es una sociedad debidamente constituida e inscripta ante la
              Inspección General de Justicia (IGJ) de la República Argentina bajo el número de
              registro RL-2025-130785373-APN-DA#IGJ. "XCAIL Technologies" es marca registrada ante
              el Instituto Nacional de la Propiedad Industrial (INPI) de Argentina. XCAIL Industrial
              es una unidad comercial de dicha sociedad y no constituye una persona jurídica
              independiente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Representación legal</h2>
            <ul className="list-none space-y-1.5 pl-2">
              <li><strong>Director Ejecutivo / Fundador:</strong> Carlos Ezequiel Leiva</li>
              <li><strong>Responsable de contenido editorial:</strong> Carlos Ezequiel Leiva</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Objeto del sitio</h2>
            <p>
              <strong>xcailindustrial.com</strong> presenta a XCAIL Industrial y sus servicios de
              acondicionamiento, ensamblado, envasado, packaging y armado para empresas, y canaliza
              solicitudes de evaluación y consultas comerciales a través de su formulario de
              contacto. El sitio no requiere registro de cuenta ni permite la contratación en línea
              de servicios: cada proyecto se define mediante una propuesta comercial específica.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Propiedad intelectual y marcas</h2>
            <p>
              El nombre y los logotipos de XCAIL Technologies y XCAIL Industrial, el diseño de las
              interfaces, el código fuente y todo el contenido del Sitio son propiedad exclusiva de
              XCAIL Technologies S.A.S. o de sus licenciantes. Cualquier reproducción, distribución
              o transformación de estos contenidos sin autorización expresa y por escrito de la
              Empresa está prohibida bajo la Ley 11.723 de Propiedad Intelectual y demás normativa
              aplicable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Condiciones de uso y privacidad</h2>
            <p>
              El acceso y uso de este Sitio implica la aceptación de los{" "}
              <a href="/terminos" className="text-primary hover:underline">Términos y Condiciones</a>{" "}
              y de la{" "}
              <a href="/privacidad" className="text-primary hover:underline">Política de Privacidad</a>, que
              forman parte integrante de este Aviso Legal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Resolución de disputas y jurisdicción</h2>
            <p>
              Este Aviso Legal se rige por las leyes de la República Argentina. Para cualquier
              controversia derivada del acceso o uso del Sitio, las partes se someten a la
              jurisdicción de los Tribunales Ordinarios en lo Comercial de la Ciudad Autónoma de
              Buenos Aires.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Contacto</h2>
            <ul className="list-none space-y-1.5 pl-2">
              <li><strong>Empresa:</strong> XCAIL Technologies S.A.S. — XCAIL Industrial</li>
              <li><strong>Email:</strong>{" "}
                <a href="mailto:contacto@xcailindustrial.com" className="text-primary hover:underline">contacto@xcailindustrial.com</a>
              </li>
              <li><strong>Domicilio:</strong> Nicaragua 4817, Ciudad Autónoma de Buenos Aires, Argentina</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
