export function minLengthValidation(inputData, minLenght) {
    const { value } = inputData;
    removeClassErrorSuccess(inputData);
    if (value.length >= minLenght) {
        inputData.classList.add('success');
        return true;
    } else {
        inputData.classList.add('error');
        return false;
    }

}

export function emailValidation(inputData) {
    const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/; //pattern email
    const { value } = inputData; //destructuracion para obtener el email del value

    removeClassErrorSuccess(inputData); //remuevo la clase

    const resultValidation = emailValid.test(value); // se valida el email

    if (resultValidation) {
        inputData.classList.add('success');
        return true;
    } else {
        inputData.classList.add('error');
        return false;
    }


}

function removeClassErrorSuccess(inputData) {
    inputData.classList.remove('success');
    inputData.classList.remove('error');

}