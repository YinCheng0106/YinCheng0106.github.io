// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'system',
    fallback: 'light',
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
  modules: ['@nuxtjs/color-mode', '@nuxt/ui'],
})