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
    data.test = undefined;
  }
  const serverError = async() => {
    console.log('error')
    createError({
      statusCode: 500,
      message: 'Server Error'
    })
    // await $fetch('/api/test')
  }
  setTimeout(() => {
    data.test = undefined
  }, 5000)
</script>
