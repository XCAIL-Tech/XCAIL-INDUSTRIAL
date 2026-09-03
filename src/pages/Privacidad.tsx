import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-3xl py-20">
        <h1 className="mb-2 text-3xl font-extrabold text-foreground md:text-4xl">Política de Privacidad</h1>
        <p className="mb-10 text-sm text-muted-foreground">Última actualización: 3 de septiembre de 2026</p>

        <div className="space-y-8 leading-relaxed text-muted-foreground">
          <div className="rounded-md border border-border bg-card px-5 py-4 text-sm text-foreground">
            Esta Política de Privacidad se aplica al sitio{" "}
            <a href="https://xcailindustrial.com" className="text-primary hover:underline">xcailindustrial.com</a>{" "}
            y a su formulario de contacto / solicitud de evaluación.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">1. Quiénes somos</h2>
            <p>
              Este sitio es operado por <strong>XCAIL Technologies S.A.S.</strong> (CUIT
              30-71921679-6), con domicilio legal en Nicaragua 4817, Ciudad Autónoma de Buenos
              Aires (CP 1414), República Argentina, a través de su unidad comercial{" "}
              <strong>XCAIL Industrial</strong>. Actuamos como Responsable del Tratamiento de los
              datos personales recopilados a través de este sitio, en cumplimiento de la Ley N°
              25.326 de Protección de Datos Personales de Argentina y su Decreto Reglamentario
              1558/2001, y —cuando corresponda— del RGPD 2016/679 de la Unión Europea y la LGPD
              (Ley 13.709/2018) de Brasil.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">2. Datos que recopilamos</h2>
            <ul className="list-disc space-y-1.5 pl-6">
              <li>
                <strong>Formulario de contacto:</strong> empresa, nombre y apellido, cargo
                (opcional), email corporativo, teléfono (opcional), servicio requerido, volumen
                estimado y la descripción del proceso que nos envíes.
              </li>
              <li>
                <strong>Datos técnicos automáticos:</strong> dirección IP, tipo de dispositivo y
                navegador, y páginas visitadas, con fines de seguridad y estabilidad técnica.
              </li>
            </ul>
            <p>
              Este sitio no requiere creación de cuenta ni recopila datos de categorías especiales.
              No utilizamos formularios ni mecanismos para captar datos de menores de edad.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">3. Finalidad y base jurídica</h2>
            <ul className="list-disc space-y-1.5 pl-6">
              <li><strong>Responder tu consulta y evaluar el proyecto:</strong> ejecución de medidas precontractuales a tu solicitud (Art. 6.1.b RGPD).</li>
              <li><strong>Gestión comercial:</strong> interés legítimo en dar curso a la solicitud recibida (Art. 6.1.f RGPD).</li>
              <li><strong>Seguridad técnica del sitio:</strong> interés legítimo en prevenir abusos y mantener la estabilidad del servicio (Art. 6.1.f RGPD).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">4. Dónde se almacenan y cómo se protegen los datos</h2>
            <p>
              Los datos del formulario se transmiten por correo electrónico a través de{" "}
              <strong>Resend</strong> y el sitio está alojado en <strong>Vercel</strong>. Todas las
              conexiones se realizan bajo cifrado TLS.
            </p>
            <p>
              <strong>Transferencia internacional:</strong> Resend y Vercel operan con
              infraestructura fuera de Argentina (principalmente Estados Unidos). Para usuarios de
              la Unión Europea, estas transferencias se amparan en las Cláusulas Contractuales
              Estándar (SCC) aprobadas por la Comisión Europea.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">5. Divulgación de datos a terceros</h2>
            <p>
              Compartimos datos únicamente con los proveedores técnicos necesarios para operar este
              sitio y su formulario — <strong>Resend</strong> y <strong>Vercel</strong> — que
              actúan como Encargados del Tratamiento bajo sus propios acuerdos de procesamiento de
              datos. Podemos también divulgar datos ante requerimiento de autoridad judicial o
              administrativa competente. <strong>Nunca vendemos</strong> datos personales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">6. Plazos de conservación</h2>
            <p>
              Los datos de la solicitud se conservan mientras sea necesario para responderla y, en
              caso de un proyecto activo, mientras dure la relación comercial. Ante inactividad, se
              conservan por un máximo de 24 meses desde el último contacto, salvo que solicites su
              eliminación antes. Los registros técnicos de seguridad se conservan por 60 días.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">7. Tus derechos</h2>
            <p>De acuerdo con la Ley N° 25.326 (Argentina) y, cuando corresponda, el RGPD o la LGPD, tenés derecho a:</p>
            <ul className="list-disc space-y-1.5 pl-6">
              <li><strong>Acceso:</strong> confirmar qué datos personales tuyos tenemos registrados.</li>
              <li><strong>Rectificación:</strong> corregir datos incorrectos o desactualizados.</li>
              <li><strong>Supresión:</strong> solicitar la eliminación de tus datos.</li>
              <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos.</li>
              <li><strong>Portabilidad:</strong> recibir tus datos en formato estructurado.</li>
            </ul>
            <p>
              Para ejercer estos derechos, escribinos a{" "}
              <a href="mailto:contacto@xcailindustrial.com" className="text-primary hover:underline">contacto@xcailindustrial.com</a>.
              Responderemos dentro de los plazos que establezca la normativa aplicable, o en su
              defecto, dentro de un máximo de 30 días hábiles.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">8. Cookies y almacenamiento local</h2>
            <p>
              Este sitio utiliza almacenamiento local del navegador (localStorage) únicamente para
              recordar tu preferencia de tema visual (claro/oscuro). No utilizamos cookies de
              rastreo publicitario ni de terceros con fines de perfilado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">9. Modificaciones</h2>
            <p>
              Podemos actualizar esta Política periódicamente. La fecha de última actualización
              figura al inicio de este documento. Los cambios relevantes se publicarán en esta
              misma página.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">10. Contacto</h2>
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
