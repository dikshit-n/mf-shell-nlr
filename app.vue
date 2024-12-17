<template>
  <NuxtLayout :routes="routes">
    <template #title>HealPros Member Care Management</template>
    <template #headerActions>
      <div class="header-actions">
        <i class="pi pi-bell"></i>
        <i class="pi pi-cog"></i>
        <span>(Services Count: {{ eventPayload?.servicesCount }})</span>
        <Button icon="pi pi-user" variant="outlined" severity="contrast" label="Maximilian" @click="emitUserEvent"/>
      </div>
    </template>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/Button';
import routes from '@/content/config.json';

console.log(routes);

let eventPayload = ref(null);

const emitUserEvent = () => {
  const payload = {
    message: "User event emitted!",
    userName: 'Maximilian',
  };
  console.log("Emitting Event from shell:", payload);
  eventBus.emit("shellUserEvent", payload);
};

onMounted(() => {
  console.log("shell mounting");
  eventBus.on("serviceEvent", (payload) => {
    console.log("Event Received from service:", payload);
    eventPayload.value = payload;
  });
});
</script>

<style scoped>
  .header-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .header-actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

</style>