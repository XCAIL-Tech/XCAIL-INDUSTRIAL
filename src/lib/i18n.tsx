import { createContext, useContext } from "react";
import type { ReactNode } from "react";

/**
 * XCAIL Industrial es un sitio en español únicamente. Mantenemos este módulo
 * como única fuente del copy (igual que en xcail.com) para poder ajustar
 * textos sin tocar los componentes, y para dejar la puerta abierta a sumar
 * otro idioma más adelante.
 */

const es = {
  navbar: {
    inicio: "Inicio",
    servicios: "Servicios",
    proceso: "Proceso",
    empresa: "Empresa",
    contacto: "Contacto",
    cta: "Solicitar evaluación",
  },

  hero: {
    h1: "Producción que se adapta a tu operación.",
    subheadline:
      "Soluciones de acondicionamiento, ensamblado, envasado y packaging para empresas.",
    cta_primary: "Solicitar evaluación",
    cta_secondary: "Conocer nuestros servicios",
  },

  capabilities: {
    items: [
      "Acondicionamiento",
      "Ensamblado",
      "Envasado",
      "Packaging",
      "Armado",
      "Etiquetado",
      "Preparación de kits",
    ],
  },

  services: {
    title: "Servicios industriales",
    subtitle: "Procesos flexibles para necesidades productivas concretas.",
    items: [
      {
        title: "Envasado y preparación",
        desc: "Procesos de envasado y preparación adaptados a las características del producto, presentación y volumen requerido.",
        tags: ["Preparación", "Envasado", "Presentación", "Control"],
      },
      {
        title: "Packaging y terminación",
        desc: "Armado, preparación y terminación de presentaciones comerciales listas para distribución.",
        tags: ["Armado de packaging", "Inserción", "Cierre", "Terminación"],
      },
      {
        title: "Acondicionamiento y etiquetado",
        desc: "Clasificación, control, etiquetado y acondicionamiento de productos según especificación.",
        tags: ["Etiquetado", "Clasificación", "Control visual", "Reacondicionamiento"],
      },
      {
        title: "Ensamblado",
        desc: "Montaje, integración y preparación de componentes y conjuntos según los requerimientos de cada proyecto.",
        tags: ["Montaje", "Integración", "Verificación", "Preparación"],
      },
      {
        title: "Armado y preparación de kits",
        desc: "Integración de componentes, armado de conjuntos y preparación de kits o sets según especificación.",
        tags: ["Kitting", "Sets", "Combos", "Inserción de componentes"],
      },
      {
        title: "Procesos a medida",
        desc: "¿Tu operación no encaja en una categoría? Evaluamos procesos manuales, de acondicionamiento, armado o preparación que puedan externalizarse total o parcialmente.",
        tags: ["A medida", "Total o parcial", "Evaluación"],
      },
    ],
  },

  outsourcing: {
    title: "¿Necesitás tercerizar parte de tu producción?",
    body: "Analizamos procesos productivos y operaciones que puedan externalizarse, considerando volumen, materiales, logística y requerimientos específicos de cada proyecto.",
    body2: "Cada proyecto se evalúa individualmente antes de definir su modalidad operativa.",
    cta: "Solicitar evaluación",
  },

  process: {
    title: "Cómo trabajamos",
    subtitle:
      "Un modelo por etapas: primero entendemos el proceso, después definimos la operación.",
    steps: [
      { step: "01", title: "Relevamiento", desc: "Conocemos el producto, el proceso, el volumen y los requerimientos de calidad." },
      { step: "02", title: "Evaluación", desc: "Analizamos recursos, infraestructura, tiempos y modalidad operativa necesarios." },
      { step: "03", title: "Propuesta", desc: "Definimos alcance, capacidad, costos y condiciones del proyecto." },
      { step: "04", title: "Implementación", desc: "Ponemos en marcha el proceso acordado y acompañamos su producción, continuidad y escalamiento." },
    ],
  },

  why: {
    title: "Por qué XCAIL Industrial",
    subtitle: "Una operación flexible, construida alrededor de las necesidades de cada proyecto.",
    items: [
      { title: "Flexibilidad operativa", desc: "Procesos definidos según las necesidades de cada producción, no un formato único." },
      { title: "Evaluación personalizada", desc: "Cada proyecto se analiza antes de establecer su operación, alcance y costos." },
      { title: "Experiencia productiva", desc: "Equipo con experiencia en producción, envasado, operaciones, logística y manejo de procesos productivos." },
      { title: "Respaldo XCAIL", desc: "Una unidad de XCAIL Technologies S.A.S., con estructura empresarial, tecnológica y de gestión existente." },
      { title: "Tecnología aplicada", desc: "Capacidad para incorporar progresivamente tecnología, electrónica y herramientas de control según las necesidades de cada proyecto." },
      { title: "Escalabilidad", desc: "Procesos diseñados para evolucionar según volumen y continuidad." },
    ],
  },

  industryTech: {
    title: "Industria + Tecnología",
    lead: "Experiencia productiva con el respaldo de una empresa tecnológica.",
    body: "XCAIL Industrial nace como una nueva unidad de XCAIL Technologies S.A.S. para ampliar nuestra actividad hacia operaciones productivas, ensamblado y fabricación física.",
    body2: "Esta combinación nos permite abordar proyectos con una visión que integra producción, organización de procesos y tecnología, incorporando progresivamente herramientas de control, electrónica y automatización cuando el proyecto lo requiera.",
    digital_title: "Del desarrollo digital al producto físico",
    digital_body: "La expansión industrial también acompañará progresivamente el desarrollo y ensamblado de productos físicos propios de XCAIL Technologies, incluyendo dispositivos electrónicos y tecnologías de apoyo vinculadas a nuestro ecosistema de innovación.",
    flow: ["Desarrollo", "Electrónica", "Ensamblado", "Producto"],
  },

  company: {
    title: "Empresa",
    heading: "Una nueva unidad de XCAIL Technologies",
    body: [
      "XCAIL Industrial es la unidad de operaciones industriales de XCAIL Technologies S.A.S., creada para desarrollar servicios productivos para terceros y acompañar progresivamente la fabricación de productos tecnológicos propios.",
      "Combinamos experiencia operativa, capacidad de gestión y tecnología para construir procesos adaptados a las necesidades de cada proyecto.",
      "Nacemos con un modelo flexible: cada oportunidad se analiza según sus requerimientos de producción, volumen, infraestructura y logística para configurar la operación adecuada a cada proyecto.",
    ],
    cta: "Conocer XCAIL Technologies",
    cta_url: "https://xcail.com",
  },

  contact: {
    title: "Contanos sobre tu proyecto",
    subtitle:
      "Completá el formulario con los datos del proceso que necesitás externalizar y coordinamos una evaluación.",
    schedule_prompt: "¿Preferís conversarlo en una reunión?",
    schedule_cta: "Agendar reunión",
    form_title: "Solicitud de evaluación",
    form_subtitle: "Los campos marcados con * son obligatorios.",
    fields: {
      company: "Empresa",
      company_ph: "Razón social o nombre comercial",
      name: "Nombre y apellido",
      name_ph: "Tu nombre",
      role: "Cargo",
      role_ph: "Tu rol en la empresa (opcional)",
      email: "Email",
      email_ph: "tu@correo.com",
      phone: "Teléfono",
      phone_ph: "Con código de área (opcional)",
      location: "Localidad / zona",
      location_ph: "Ciudad, provincia o región",
      service: "Servicio requerido",
      service_ph: "Seleccioná una opción",
      volume: "Volumen estimado",
      volume_ph: "Ej.: 15.000 unidades mensuales",
      frequency: "Frecuencia estimada",
      frequency_ph: "Seleccioná una opción",
      message: "Descripción del proceso",
      message_ph: "Contanos qué proceso necesitás tercerizar: producto, materiales, pasos, controles de calidad, plazos…",
    },
    services: [
      "Envasado",
      "Packaging",
      "Acondicionamiento",
      "Ensamblado",
      "Armado / preparación de kits",
      "Etiquetado",
      "Otro proceso",
    ],
    frequencies: ["Única", "Semanal", "Mensual", "Recurrente", "A definir"],
    submit: "Solicitar evaluación",
    sending: "Enviando…",
    success: "Recibimos tu solicitud. Nos comunicamos a la brevedad.",
    error: "Hubo un error al enviar. Probá de nuevo o escribinos a contacto@xcailindustrial.com",
  },

  schedule: {
    title: "Agendá una reunión",
    subtitle:
      "Una reunión breve para conversar sobre el proceso que necesitás externalizar y los próximos pasos. Sin compromiso.",
    back: "Volver al inicio",
  },

  faq: {
    title: "Preguntas frecuentes",
    subtitle: "Cómo trabaja XCAIL Industrial y qué esperar de una evaluación.",
    still_have_questions: "¿Tenés otra consulta?",
    write_us: "Escribinos a contacto@xcailindustrial.com",
    items: [
      {
        question: "¿Qué es XCAIL Industrial?",
        answer:
          "XCAIL Industrial es la unidad de operaciones industriales de XCAIL Technologies S.A.S. Ofrece servicios de acondicionamiento, ensamblado, envasado, packaging y armado para empresas que necesitan tercerizar procesos productivos.",
      },
      {
        question: "¿XCAIL Industrial es una empresa distinta de XCAIL Technologies?",
        answer:
          "No. La razón social sigue siendo XCAIL Technologies S.A.S. XCAIL Industrial es una unidad comercial de la misma compañía, enfocada en operaciones productivas.",
      },
      {
        question: "¿Qué procesos puede tercerizar una empresa con XCAIL Industrial?",
        answer:
          "Envasado, packaging, acondicionamiento, etiquetado, ensamblado, armado, preparación de kits, terminaciones y otros procesos manuales. Cada proceso se evalúa según volumen, materiales, logística y requerimientos de calidad.",
      },
      {
        question: "¿Cómo empieza un proyecto?",
        answer:
          "Con una solicitud de evaluación. A partir de los datos del proceso hacemos un relevamiento, analizamos los recursos necesarios y elaboramos una propuesta con alcance, capacidad, costos y condiciones.",
      },
      {
        question: "¿XCAIL Industrial también fabrica productos propios?",
        answer:
          "Es una línea de trabajo progresiva. XCAIL Technologies desarrolla productos de su ecosistema de innovación —dispositivos electrónicos y tecnologías de apoyo— cuyo desarrollo y ensamblado físico se irá canalizando a través de XCAIL Industrial.",
      },
      {
        question: "¿Dónde está XCAIL Industrial?",
        answer:
          "En la Ciudad Autónoma de Buenos Aires, Argentina. La operación de cada proyecto se estructura según sus requerimientos específicos.",
      },
    ],
  },

  footer: {
    unit: "Una unidad de XCAIL Technologies S.A.S.",
    tagline: "Operaciones productivas para empresas.",
    services_title: "Servicios",
    services: ["Envasado", "Packaging", "Acondicionamiento", "Ensamblado"],
    company_title: "Empresa",
    company: [
      { label: "Sobre XCAIL Industrial", href: "/empresa", external: false },
      { label: "XCAIL Technologies", href: "https://xcail.com", external: true },
      { label: "Preguntas frecuentes", href: "/preguntas-frecuentes", external: false },
      { label: "Contacto", href: "/contacto", external: false },
    ],
    legal_title: "Legal",
    legal: [
      { label: "Política de Privacidad", href: "/privacidad" },
      { label: "Términos y Condiciones", href: "/terminos" },
      { label: "Aviso Legal", href: "/aviso-legal" },
    ],
    location: "CABA, Argentina",
    email: "contacto@xcailindustrial.com",
    rights: "Todos los derechos reservados",
  },
} as const;

const translations = { es };

export type Translations = typeof es;

interface I18nContextType {
  tr: Translations;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  return (
    <I18nContext.Provider value={{ tr: translations.es }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
