import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  imports: {
    autoImport: true
  },
  devServer: {
    port: 5000
  },
  build: {
    transpile: ["rxjs"],
  },
  extends: [
    ['github:dikshit-n/mf-core-nlr#master', { install: true }], // contains reusables
    [`github:dikshit-n/mf-remote1-nlr#master`, { install: true }], // administration micro-frontend
    [`github:dikshit-n/mf-remote2-nlr#master`, { install: true }], // member micro-frontend
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
})
