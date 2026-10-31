export const locales = ['pt', 'en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      projects: 'Projetos',
      posts: 'Artigos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou Thuan',
      title: 'Desenvolvedor Back-end com foco em produto e experiência digital.',
      subtitle:
        'Crio soluções escaláveis, interfaces bem pensadas e experiências que unem tecnologia e clareza.',
      ctaPrimary: 'Ver projetos',
      ctaSecondary: 'Falar comigo',
    },
    about: {
      title: 'Sobre mim',
      text: 'Sou desenvolvedor com foco em backend, arquitetura de software, APIs e experiências digitais eficientes. Gosto de construir soluções que sejam simples de manter, boas para o usuário e úteis no dia a dia.',
    },
    projects: {
      title: 'Projetos',
      cta: 'Ver todos',
    },
    posts: {
      title: 'Artigos recentes',
      cta: 'Ver todos',
    },
    footer: {
      text: 'Feito com Astro e paixão por código bem construído.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      posts: 'Posts',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Hello, I am Thuan',
      title: 'Back-end developer focused on product and digital experience.',
      subtitle:
        'I build scalable solutions, well-crafted interfaces, and experiences that combine technology with clarity.',
      ctaPrimary: 'View projects',
      ctaSecondary: 'Let’s talk',
    },
    about: {
      title: 'About me',
      text: 'I am a developer focused on backend, software architecture, APIs, and efficient digital experiences. I enjoy building solutions that are easy to maintain, valuable to the user, and practical in real life.',
    },
    projects: {
      title: 'Projects',
      cta: 'See all',
    },
    posts: {
      title: 'Recent posts',
      cta: 'See all',
    },
    footer: {
      text: 'Built with Astro and a passion for well-crafted code.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      posts: 'Artículos',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy Thuan',
      title: 'Desarrollador back-end enfocado en producto y experiencia digital.',
      subtitle:
        'Creo soluciones escalables, interfaces bien pensadas y experiencias que combinan tecnología con claridad.',
      ctaPrimary: 'Ver proyectos',
      ctaSecondary: 'Hablemos',
    },
    about: {
      title: 'Sobre mí',
      text: 'Soy desarrollador con foco en backend, arquitectura de software, APIs y experiencias digitales eficientes. Me gusta construir soluciones fáciles de mantener, útiles para el usuario y prácticas en la vida real.',
    },
    projects: {
      title: 'Proyectos',
      cta: 'Ver todos',
    },
    posts: {
      title: 'Artículos recientes',
      cta: 'Ver todos',
    },
    footer: {
      text: 'Hecho con Astro y pasión por un código bien construido.',
    },
  },
} as const;
