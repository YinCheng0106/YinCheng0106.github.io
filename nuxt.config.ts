// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    
    navigation: {
      fields: ['title', 'description'],
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: ''
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['./assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/color-mode', '@nuxt/ui', '@nuxtjs/mdc', '@nuxt/content'],
})