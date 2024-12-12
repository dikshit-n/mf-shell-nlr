<template>
  <AppShell />
  <LazyBaseButton>Base Button</LazyBaseButton>
</template>

<script setup lang="ts">
const { $moduleConfig } = useNuxtApp();
console.log($moduleConfig, 'config')
  definePageMeta({
    layout: "base",
  });
</script>
