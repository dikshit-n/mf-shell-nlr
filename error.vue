<template>
  <div>Error occured</div>
  <p>{{ error.statusCode }}</p>
  <p>{{ error.message }}</p>
</template>
<script lang="ts">
import type { NuxtError } from '#app';
import { defineProps } from 'vue'

defineProps({
  error: Object as () => NuxtError
})
</script>
