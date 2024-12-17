<template>
  <NuxtLayout :routes>
    <template #title>HealPros Member Care Management</template>
    <template #headerActions>
      <div class="header-actions">
        <i class="pi pi-bell"></i>
        <i class="pi pi-cog"></i>
        <Button icon="pi pi-user" variant="outlined" severity="contrast" label="Maximilian" />
      </div>
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import Button from 'primevue/Button'
import routes from '@/content/config.json';
console.log(routes)
  // const routes = (await queryContent('/config').find())?.[0].body;
</script>

<style scoped>
  .header-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
</style>