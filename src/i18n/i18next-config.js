import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,

    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },

    react: {
      wait: true,
    },

    resources: {
      en: {
        common: {
          lng: "Lenguage",
          es: "Spanish",
          en: "English",

          small_portafolio: "My Recent Work",
          small_testimonial: "Review from Clients/Coworkers",

          testimonial: "Testimonials",
          about: "About Me",
          exp: "Experience",
          services: "Services",
          contact: "Contact Me",
          copy: "All rights reserved.",
        },
        header: {
          my_name: "Juan Bossa",
          greeting: "Hello I'm",
          job: "Frontend Developer",
          cv: "Download CV",
          contact: "Let's Talk!",
          scroll: "Scroll Down",
        },
        about: {
          getToKnow: "Get To Know",
          about: "About Me",
          experience: "Experience",
          small: "Only Personal Projects",
          education: "Education",
          certificate: "Certificates",
          projects: "Projects",
          complete: "Completed",
          see: "See Certificates",
          lore: "I am Junior Frontend Developer able to build a Web presence from the ground up - from concept, navigation, layout and programming. Skilled at writing well-designed, testable and efficient code using current best practices in Frontend Development. Fast learner, hard worker and team player.",
        },
        experience: {
          whatSkills: "What Skills I Have",
          experience: "My Experience",
          frontDev: "Frontend Development",
          medium: "Intermediate",
          low: "Basic",
        },
        services: {
          whatOffer: "What I Offer",
          services: "Services",

          ux: "UI/UX Design",
          item1_ux: "Creation of User Interfaces",
          item2_ux: "Creation of User Experience",
          item3_ux: "Production of digital material with unique designs",

          web: "Web Development",
          item1_web: "Construction of Webpages/WebApps",
          item2_web:
            "Ability to design all kinds of formats, from landing pages to e-Commerce stores",
          item3_web:
            "Responsive designs with Media Queries, respecting the semantics of the language",

          cont: "Technical Support",
          item1_cont: "Software repair on android devices",
          item2_cont: "Installation of OS/ROMs on PCs and android devices",
          item3_cont: "ability to maintain computer hardware",
        },
        contact: {
          small: "Get In Touch",
          contact: "Contact Me",
          send: "Send a message",
          form: "Send message",
          input1: "Your Full Name",
          input2: "Your Email",
          textArea: "Your Message",
        },
      },
      es: {
        common: {
          lng: "Lenguaje",
          es: "Espa??ol",
          en: "Ingles",

          small_portafolio: "Mi Trabajo Reciente",
          small_testimonial: "Rese??as de Clientes/Compa??eros de Trabajo",

          testimonial: "Testimonios",
          about: "Sobre Mi",
          exp: "Experiencia",
          services: "Servicios",
          contact: "Contactame",
          copy: "Todos los derechos reservados.",
        },
        header: {
          my_name: "Juan Bossa",
          greeting: "Hola Soy",
          job: "Desarrollador Frontend",
          cv: "Descargar CV",
          contact: "Hablemos!",
          scroll: "Desplaza hacia Abajo",
        },
        about: {
          getToKnow: "Conoce",
          about: "Sobre Mi",
          experience: "Experiencia",
          small: "Solo Proyectos Personales",
          education: "Educacion",
          certificate: "Certificaciones",
          projects: "Proyectos",
          complete: "Completados",
          see: "Ver Certificados",
          lore: "Soy un desarrollador frontend junior capaz de construir una presencia web desde cero; partiendo desde concepto, navegaci??n, maquetaci??n y programaci??n. Experto en escribir bien dise??ado, c??digo eficaz y eficiente utilizando las mejores pr??cticas actuales en desarrollo frontend. Aprende r??pido, trabajador y jugador de equipo.",
        },
        experience: {
          whatSkills: "Que Habilidades Tengo",
          experience: "Mi Experiencia",
          frontDev: "Desarrollo Frontend",
          medium: "Intermedio",
          low: "Basico",
        },
        services: {
          whatOffer: "Lo Que Ofrezco",
          services: "Servicios",

          ux: "Dise??o UI/UX",
          item1_ux: "Creacion de interfaces de Usuario",
          item2_ux: "Creacion de experiencia de Usuario",
          item3_ux: "Produccion de material digital con dise??os ??nicos",

          web: "Desarrollo Web",
          item1_web: "Construccion de paginas Web/WebApps",
          item2_web:
            "Capacidad para dise??ar en todo tipo de formatos, desde landig pages hasta tiendas de e-Comerce",
          item3_web:
            "Dise??os responsivos con Media Queries, respetando la semantica del lenguaje",

          cont: "Soporte T??cnico",
          item1_cont: "Reparacion de Software en dispositivos android",
          item2_cont: "Instalacion de SO/ROMs en PCs y disponsitivos android",
          item3_cont:
            "Habilidad para dar mantenimiento de harware para equipos",
        },
        contact: {
          small: "Sigamos en Contacto",
          contact: "Contactame",
          send: "Envia un mensaje",
          form: "Enviar mensaje",
          input1: "Tu Nombre Completo",
          input2: "Tu Email",
          textArea: "Tu Mensaje",
        },
      },
    },
  });

export default i18n;
