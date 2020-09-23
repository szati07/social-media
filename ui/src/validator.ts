export const emailValidator = (emailAddress: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(emailAddress).toLowerCase())) {
        return true;
    }

    return false;
}

export const passwordValidator = (password: string) => {
    if(password.length < 4) {
        return false
    }

    return true;
}