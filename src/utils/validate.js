const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;
    return re.test(String(password).toLowerCase());
};

const validateData = (data) => {
    let results = {};
    data.forEach((field) => {
        console.log('field', field);
        switch (field.type) {
            case 'email': {
                if(! validateEmail(field.value)) {
                    results.email = 'The email should be a valid email';
                }
                break;
            }
            case 'password': {
                if(! validatePassword(field.value)) {
                    results.password = 'The password should be at least 4 chars ' +
                        'with at least one digit and one alphabetic';
                }
                break;
            }
            default:
                return true;
        }
    });
    if(Object.keys(results).length === 0) {
        return true;
    }

    return results;
};

export default validateData;