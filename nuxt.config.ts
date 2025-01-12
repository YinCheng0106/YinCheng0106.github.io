// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modulesDir: ['../../node_modules'],
  content: {
    markdown: {
      mdc: true,
    },
    highlight: {
      langs: ['json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'c', 'cpp', 'java'],
      theme: {
        default: 'one-dark-pro',
        dark: 'github-dark',
        light: 'github-light'
      },
      preload: ['javascript', 'html', 'css', 'python'],
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
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxtjs/mdc',
    '@nuxt/content',
    '@nuxt/image'
  ],
})