'use strict';

document.getElementById("btn_contact").addEventListener("click", contact);

function validation() {
    Swal.fire({
        title: "Verificar los datos ingresados",
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe width="320" height="240" src="https://embed.lottiefiles.com/animation/35271"></iframe>',
    })
}


function contact() {
    let name = document.getElementById("inp_name").value;
    let last_name = document.getElementById("inp_last_name").value;
    let phone = document.getElementById("inp_phone").value;
    let email = document.getElementById("inp_email").value;
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');


let input = [name, last_name, phone, email];
let input_id = ["inp_name", "inp_last_name", "inp_phone", "inp_email"];
let error_count = 0;
let text = "";

for (let i = 0; i < input.length; i++) {
    document.getElementById(input_id[i]).classList.remove("error");
    if (input[i] == "") {
        text = "El campo requerido no puede estar vacio.";
        validation(text);
        document.getElementById(input_id[i]).classList.add("error");
        error_count++

    }
}


if (expressionEmail.test(email) === false) {
    alerta.textContent = 'El email es invalido';
    alerta.classList.add('alertaRoja');
    alerta.classList.remove('alertaVerde');
    error_count++;
}

if (!/^[0-9]{1,11}$/.test(phone)) {
    alerta.textContent = "El número de teléfono es invalido.";
    alerta.classList.add('alertaRoja');
    alerta.classList.remove('alertaVerde');
    error_count++;
}


if (error_count == 0) {
    emailjs.sendForm('service_i0wsisj', 'template_q2qnnh9', '#contact_form', 'kANdDS_0TDT8yftxR');
            cleanInputs(); 
    Swal.fire({
        title: "Gracias por Suscribirse",
        text: "Lo esperamos en el evento!",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 5000,
        html: '<iframe width="320" height="240" src="https://embed.lottiefiles.com/animation/95029"></iframe>',
    })
}

function cleanInputs() {
    inp_name.value = '';
    inp_last_name.value = '';
    inp_phone.value = '';
    inp_email.value = '';
    mensajeAlert.value = '';
}
}

