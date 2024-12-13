export default defineEventHandler(() => {
    showError({
        statusCode: 500,
        message: 'Error Occured'
    })
});