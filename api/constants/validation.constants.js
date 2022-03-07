const VALIDATION = {
    auth: {
        login: {
            email: {
                required: true,
                pattern: '/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/',
                minLength: 3,
                maxLength: 260,
            },
            password: {
                required: true,
                pattern: '',
                minLength: 5,
                maxLength: 260,
            },
        }
    }
}

module.exports = VALIDATION
