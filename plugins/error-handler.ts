export default defineNuxtPlugin((nuxtApp) => {
    // Handles logical errors that happens at the rutime
    nuxtApp.hook('vue:error', (error, instance, info) => {
        // trigger the error.vue component
        showError({
            statusCode: 500,
            message: error.message,
            fatal: true
        })
    })
    nuxtApp.hook('app:error', (error) => {
        // all errors come here eventually
        // even if the errors are handled already
        // place to call error logging services
        console.log(error, 'app:error');
      })
})
