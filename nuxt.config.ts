// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  runtimeConfig: {
    mailHost: process.env.NUXT_MAIL_HOST,
    mailPort: process.env.NUXT_MAIL_PORT,
    mailUser: process.env.NUXT_MAIL_USER,
    mailPassword: process.env.NUXT_MAIL_PASSWORD,
    contactEmail: process.env.NUXT_CONTACT_EMAIL
  },

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Nur Sawaluddin - Backend & WordPress Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'CV Portfolio Nur Sawaluddin - Backend Developer & WordPress Developer dengan keahlian Laravel, MySQL, dan PostgreSQL'
        },
        { name: 'author', content: 'Nur Sawaluddin' },
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  }
})
