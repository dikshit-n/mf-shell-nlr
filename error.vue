<script setup lang="ts">
import type { NuxtError } from '#app'
// import Button from 'primevue/button'

defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>{{ error?.statusCode }}</h2>
    <p>{{ error?.message }}</p>
    <button @click="handleError" label="Clear errors">Clear Errors</button>
  </div>
</template>
