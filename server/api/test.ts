import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig(() => {
  throw createError({
    message: 'Test Error',
    statusCode: 500
  })
});