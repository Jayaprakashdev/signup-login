function Validation(values) {
    let error = {}
    const email_pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    const password_pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(values.name === '') {
        error.name = "Email should not be empty";
    }
    else {
        error.name = "";
    }
    if(values.email === "") {
        error.email = "Email should not be empty";
    }
    else if(!email_pattern.text(values.email)){
        error.email = "Email didn't match"
    }
    else {
         error.email = "";
    }
    if(values.password === "") {
        error.password = "password should not be empty"
    }
    else if(password_pattern.test(values.password)){
        error.password = "password didn't match"
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;