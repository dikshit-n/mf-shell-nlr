export default defineNuxtRouteMiddleware(() => {
  const { $moduleConfig } = useNuxtApp();
  console.log($moduleConfig, 'moduleConfig');
});