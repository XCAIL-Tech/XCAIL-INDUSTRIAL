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
      "Servicios de acondicionamiento, ensamblado, envasado y packaging para empresas.",
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
      "Producción",
    ],
  },

  services: {
    title: "Servicios industriales",
    subtitle: "Procesos flexibles para necesidades productivas concretas.",
    items: [
      {
        title: "Envasado y preparación",
        desc: "Procesos de envasado, dosificado y preparación adaptados al producto y al volumen requerido.",
      },
      {
        title: "Packaging y terminación",
        desc: "Armado, preparación y terminación de presentaciones comerciales listas para distribución.",
      },
      {
        title: "Acondicionamiento y etiquetado",
        desc: "Clasificación, control, etiquetado y acondicionamiento de productos según especificación.",
      },
      {
        title: "Ensamblado",
        desc: "Montaje manual —y progresivamente semiautomático— de componentes y conjuntos.",
      },
      {
        title: "Armado y preparación de kits",
        desc: "Procesos manuales, integración de componentes y preparación de kits o sets.",
      },
      {
        title: "Operaciones especiales",
        desc: "Evaluación de procesos particulares que una empresa necesite externalizar total o parcialmente.",
      },
    ],
  },

  outsourcing: {
    title: "¿Necesitás tercerizar parte de tu producción?",
    body: "Analizamos procesos productivos y operaciones que puedan externalizarse, considerando volumen, materiales, logística y requerimientos específicos de cada proyecto.",
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
      { step: "04", title: "Producción", desc: "Implementamos el proceso acordado y acompañamos su continuidad y escalamiento." },
    ],
  },

  why: {
    title: "Por qué XCAIL Industrial",
    subtitle: "Atributos concretos, sin métricas infladas.",
    items: [
      { title: "Flexibilidad operativa", desc: "Procesos definidos según las necesidades de cada producción, no un formato único." },
      { title: "Evaluación personalizada", desc: "Cada proyecto se analiza antes de establecer su operación, alcance y costos." },
      { title: "Experiencia productiva", desc: "Equipo con experiencia práctica en producción, envasado, logística y operaciones." },
      { title: "Respaldo empresarial", desc: "XCAIL Industrial forma parte de XCAIL Technologies S.A.S." },
      { title: "Tecnología aplicada", desc: "Posibilidad de integrar electrónica, software y automatización de forma progresiva." },
      { title: "Escalabilidad", desc: "Procesos diseñados para evolucionar según volumen y continuidad." },
    ],
  },

  industryTech: {
    title: "Industria + Tecnología",
    lead: "Una unidad industrial respaldada por una empresa tecnológica.",
    body: "XCAIL Industrial suma la capacidad tecnológica de XCAIL Technologies a las operaciones productivas: la posibilidad de integrar automatización, control y electrónica a cada proceso, según lo que necesite el proyecto.",
    services: ["Envasado", "Packaging", "Ensamblado", "Acondicionamiento", "Procesos manuales"],
  },

  company: {
    title: "Empresa",
    heading: "Una nueva unidad de XCAIL Technologies",
    body: [
      "XCAIL Industrial es la unidad de operaciones industriales de XCAIL Technologies S.A.S., creada para desarrollar servicios productivos para terceros y acompañar progresivamente la fabricación de productos tecnológicos propios.",
      "Combinamos experiencia operativa, capacidad de gestión y tecnología para construir procesos adaptados a las necesidades de cada proyecto.",
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
      service: "Servicio requerido",
      service_ph: "Seleccioná una opción",
      volume: "Volumen estimado",
      volume_ph: "Seleccioná un rango",
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
    volumes: [
      "A definir",
      "Hasta 1.000 unidades",
      "1.000 – 10.000",
      "10.000 – 50.000",
      "Más de 50.000",
    ],
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
          "Envasado, packaging, acondicionamiento, etiquetado, ensamblado, armado, preparación de kits, terminaciones y otras operaciones manuales o semiautomáticas. Cada proceso se evalúa según volumen, materiales, logística y requerimientos de calidad.",
      },
      {
        question: "¿Cómo empieza un proyecto?",
        answer:
          "Con una solicitud de evaluación. A partir de los datos del proceso hacemos un relevamiento, analizamos los recursos necesarios y elaboramos una propuesta con alcance, capacidad, costos y condiciones.",
      },
      {
        question: "¿XCAIL Industrial también fabrica productos propios?",
        answer:
          "Es una línea de trabajo a futuro. XCAIL Technologies desarrolla productos —como INCLUXIA Connect— que eventualmente requerirán fabricación y ensamblado de hardware, y esa producción se canalizará a través de XCAIL Industrial.",
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
