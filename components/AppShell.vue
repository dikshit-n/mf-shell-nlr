<template>
    <h1>Shell component</h1>
    <p>
      {{ data.test.name }}
    </p>
    <BaseButton @click="componentError">Component Error</BaseButton>
    <BaseButton @click="serverError">Server Error</BaseButton>
</template>

<script setup>
  const data = reactive({
    test: {
      name: 'test'
    }
  })
  const componentError = () => {
    data.test = undefined
    // use show error component to trigger error.vue
    // showError({
    //   statusCode: 500,
    //   message: 'error occured',
    //   fatal: true
    // })
  }
  const serverError = async() => {
    await $fetch('/api/error')
  }
</script>
