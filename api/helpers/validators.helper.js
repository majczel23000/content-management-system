exports.validateBodyRequest = (obj, rules) => {
    let errors = [];
    for (const fieldName in rules) {
        // If property exist in body
        if (obj.hasOwnProperty(fieldName)) {
            if (rules[fieldName].required) {
                if (!obj[fieldName].length) {
                    errors.push(`Field ${fieldName} is required.`);
                } else {
                    // check for pattern, minLength, maxLength
                    if (obj[fieldName].length < rules[fieldName].minLength) {
                        errors.push(`Field ${fieldName} minimum length is ${rules[fieldName].minLength}.`);
                    }
                    if (obj[fieldName].length > rules[fieldName].maxLength) {
                        errors.push(`Field ${fieldName} maximum length is ${rules[fieldName].maxLength}.`);
                    }
                    // TODO: Check pattern here
                }
            } else {
                // if not required but it exist in body
                // check for pattern, minLength, maxLength
                if (obj[fieldName].length < rules[fieldName].minLength) {
                    errors.push(`Field ${fieldName} minimum length is ${rules[fieldName].minLength}.`);
                }
                if (obj[fieldName].length > rules[fieldName].maxLength) {
                    errors.push(`Field ${fieldName} maximum length is ${rules[fieldName].maxLength}.`);
                }
                // TODO: Check pattern here
            }
        } else {
            // if not exist in body request
            // check if required
            if (rules[fieldName].required) {
                errors.push(`Field ${fieldName} is required.`);
            }
        }
    }
    return errors;
}
