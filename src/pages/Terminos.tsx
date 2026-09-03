import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Terminos() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-3xl py-20">
        <h1 className="mb-2 text-3xl font-extrabold text-foreground md:text-4xl">Términos y Condiciones</h1>
        <p className="mb-10 text-sm text-muted-foreground">Última actualización: 3 de septiembre de 2026</p>

        <div className="space-y-8 leading-relaxed text-muted-foreground">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Aceptación</h2>
            <p>
              Al acceder o utilizar el sitio web{" "}
              <a href="https://xcailindustrial.com" className="text-primary hover:underline">xcailindustrial.com</a>{" "}
              ("el Sitio"), operado por <strong>XCAIL Technologies S.A.S.</strong> a través de su
              unidad comercial <strong>XCAIL Industrial</strong> ("XCAIL Industrial", "la Empresa"),
              aceptás íntegramente estos Términos y Condiciones. Si no estás de acuerdo, debés
              abstenerte de utilizar el Sitio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Titularidad</h2>
            <p>
              El Sitio es operado por <strong>XCAIL Technologies S.A.S.</strong>, CUIT
              30-71921679-6, con domicilio en Nicaragua 4817, Ciudad Autónoma de Buenos Aires,
              Argentina, debidamente inscripta ante la IGJ. XCAIL Industrial es una unidad comercial
              de dicha sociedad y no constituye una persona jurídica independiente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Naturaleza del Sitio</h2>
            <p>
              El Sitio tiene finalidad informativa y comercial: presenta los servicios industriales
              de XCAIL Industrial y canaliza solicitudes de evaluación y consultas a través de su
              formulario de contacto. El Sitio no constituye una oferta vinculante ni permite la
              contratación en línea de servicios. Toda prestación se rige por la propuesta comercial
              específica que se acuerde por escrito para cada proyecto.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Uso del Sitio</h2>
            <p>Al utilizar el Sitio, te comprometés a:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>Utilizarlo de conformidad con la legislación vigente y estos términos.</li>
              <li>No utilizarlo para fines ilícitos, fraudulentos o que perjudiquen a terceros.</li>
              <li>No intentar acceder a sistemas, datos o áreas no autorizadas.</li>
              <li>Proveer información veraz al completar el formulario de contacto.</li>
              <li>No utilizar bots, scrapers ni sistemas automatizados para extraer contenido del Sitio.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Propiedad intelectual</h2>
            <p>
              Todos los contenidos, diseños, marcas, código fuente y materiales del Sitio son
              propiedad exclusiva de XCAIL Technologies S.A.S. o de sus licenciantes, y están
              protegidos por las leyes de propiedad intelectual aplicables. Ninguna parte del Sitio
              puede ser reproducida, distribuida o utilizada sin autorización expresa y por escrito
              de la Empresa.
            </p>
            <p>
              Cualquier idea o sugerencia enviada a través del formulario podrá ser considerada
              libremente por la Empresa, sin generar derecho a compensación ni reconocimiento de
              autoría.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Enlaces a sitios de terceros</h2>
            <p>
              El Sitio puede contener enlaces a sitios de la misma compañía (por ejemplo,
              xcail.com) o de terceros. XCAIL Industrial no controla el contenido de sitios de
              terceros y no asume responsabilidad por su disponibilidad, contenido o prácticas de
              privacidad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Limitación de responsabilidad</h2>
            <p>
              El Sitio se proporciona "tal como está". En la máxima medida permitida por la ley,
              XCAIL Industrial no asume responsabilidad por interrupciones temporales o fallas del
              Sitio, ni por decisiones tomadas por terceros en base a la información publicada en
              él, la cual tiene carácter general y orientativo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Privacidad</h2>
            <p>
              El tratamiento de datos personales recopilados a través de este Sitio se rige por
              nuestra{" "}
              <a href="/privacidad" className="text-primary hover:underline">Política de Privacidad</a>,
              que forma parte integrante de estos términos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Modificaciones</h2>
            <p>
              XCAIL Industrial se reserva el derecho de modificar estos Términos y Condiciones en
              cualquier momento. Las modificaciones entrarán en vigor desde su publicación en este
              sitio.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Ley aplicable y jurisdicción</h2>
            <p>
              Estos términos se rigen por las leyes de la República Argentina. Para cualquier
              controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de
              los tribunales ordinarios en lo Comercial de la Ciudad Autónoma de Buenos Aires,
              Argentina.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">11. Contacto</h2>
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
