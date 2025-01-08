// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    highlight: {
      theme: {
        default: 'one-dark-pro',
        dark: 'github-dark',
      }
    },
    navigation: {
      fields: ['title', 'description', 'date'],
    },

  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'zh-Hant'
      },
      charset: 'utf-8'
    }
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
  modules: ['@nuxtjs/color-mode', '@nuxt/ui', '@nuxtjs/mdc', '@nuxt/content', '@nuxt/image'],
})