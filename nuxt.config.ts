// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ogImage: {
    fonts: [
      'Noto+Sans+SC:400'
    ]
  },
  site: {
    url: process.env.NUXT_SITE_URL,
    name: 'YinCheng',
  },
  srcDir: 'src/',
  modulesDir: ['../../node_modules'],
  content: {
    markdown: {
      rehypePlugins: [
        'rehype-raw',
      ],
    },
    highlight: {
      theme: 'github-dark',
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
    preference: 'dark',
    classSuffix: ''
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/mdc',
    '@vueuse/motion/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
  ],
})