// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  imports: {
    autoImport: true
  },
  devServer: {
    port: 5000
  },
  extends: [
    ['github:dikshit-n/mf-core-nlr#master', { install: true }], // contains reusables
    [`github:dikshit-n/mf-remote1-nlr#${process.env.BRANCH}`, { install: true }], // administration micro-frontend
    [`github:dikshit-n/mf-remote2-nlr#master`, { install: true }], // member micro-frontend
  ],
  modules: ['@nuxt/image', '@primevue/nuxt-module'],
  primevue: {
    autoImport: true,
    options: {
      theme: {
          preset: Aura,
          options: {
            ripple: true,
            inputVariant: 'filled',
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false
        }
      }
    }
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
})
