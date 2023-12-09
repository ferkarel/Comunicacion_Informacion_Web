'use strict';

document.getElementById("btn_quote").addEventListener("click", quote);

function validation() {
    Swal.fire({
        title: "Verificar los datos ingresados",
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#008383",
        html: '<iframe src="https://lottie.host/?file=881ee991-f530-4367-a634-86ffd39e7858/TAdGqjj5Ay.json"></iframe>',
    })
}


function quote() {
    let name = document.getElementById("inp_name").value;
    let last_name = document.getElementById("inp_last_name").value;
    let phone = document.getElementById("inp_phone").value;
    let email = document.getElementById("inp_email").value;
    
    let check_term_condition = document.getElementById("term_condition").checked;

    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');


    let input = [name, last_name, phone, email];
    let input_id = ["inp_name", "inp_last_name", "inp_phone", "inp_email"];
    let error_count = 0;
    let text = "";

    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            text = "No puede haber ningún campo vacio.";
            validation(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++

        }
    }

    if (!check_term_condition) {
        alerta.textContent = "Por favor marque la casilla de Términos y Condiciones";
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');
        error_count++;
    }


    if (expressionEmail.test(email) === false) {
        alerta.textContent = 'email invalido';
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');
        error_count++;
    }

    if (!/^[0-9]{1,11}$/.test(phone)) {
        alerta.textContent = "El número de teléfono debe contener sólo números y no más de 11 dígitos.";
        alerta.classList.add('alertaRoja');
        alerta.classList.remove('alertaVerde');
        error_count++;
    }



    if (error_count == 0) {
        
        cleanInputs();
        Swal.fire({
            title: "Gracias por Contactarnos.",
            text: "Pronto nos pondremos en contacto con usted",
            showConfirmButton: true,
            html: '<iframe src="https://lottie.host/?file=64a32bd2-73f9-403d-aa4e-a7c2a6405c78/QjRMGQ0Zjz.json"></iframe>',
        })
    }

    function cleanInputs() {
        let inp_comments = document.getElementById("free_comments");

        if (inp_comments.value != '') {
            inp_comments.value = '';
        }

        inp_name.value = '';
        inp_last_name.value = '';
        inp_phone.value = '';
        inp_email.value = '';
        mensajeAlert.textContent = '';
    }
}




