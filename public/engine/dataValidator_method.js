import EmailValidator from "email-validator";

function dataValidator(data) {
    if(EmailValidator.validate(data.email) && data.name.length !== 0 && data.regDate.length !== 0) {
        return true;
    } else {
        return false;
    }
}

export { dataValidator };