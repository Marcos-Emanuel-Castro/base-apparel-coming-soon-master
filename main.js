const btn = document.querySelector('.input-button');
const mail = document.querySelector('#mail');
const textError = document.querySelector('.text-error');
const iconError = document.querySelector('.icon-error');
const textValid = document.querySelector('.text-valid');

btn.addEventListener('click', validarMail);

function validarMail() {
    if(mail.value.length >= 6){
    if(iconError.style.display = 'block'){
        textValid.style.display = 'block';
        iconError.style.display = 'none';
        textError.style.display = 'none'
    } else {
        textValid.style.display = 'block';
    }
    }else {
    iconError.style.display = 'block';
    textError.style.display = 'block';
    textValid.style.display = 'none';
    }
}