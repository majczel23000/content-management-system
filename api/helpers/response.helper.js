exports.errorResponse = (code, message, error) => {
    return {
        code,
        message,
        error
    }
}
