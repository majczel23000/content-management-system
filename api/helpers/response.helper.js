const errorResponse = (code, message, error) => {
    return {
        code,
        message,
        error
    }
}

module.exports = {
    errorResponse
}
