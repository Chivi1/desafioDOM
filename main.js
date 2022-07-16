const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

let alertaNom = document.getElementById("group_nombre");
const validarForm = (e) => {
    switch (e.target.name) {
        case"nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById("group_nombre").classList.remove("bg-danger");
                document.getElementById("group_nombre").classList.add("bg-success");
            } else{
                document.getElementById("group_nombre").classList.add("bg-danger");
                document.getElementById("group_nombre").classList.remove("bg-success");
                console.log("Nombre invalido");
            }
        break;
        case"correo":
        if (expresiones.correo.test(e.target.value)) {
            document.getElementById("group_correo").classList.remove("bg-danger");
            document.getElementById("group_correo").classList.add("bg-success");
        } else{
            document.getElementById("group_correo").classList.add("bg-danger")
            document.getElementById("group_correo").classList.remove("bg-success");
        }
        break;
        case"telefono":
            if (expresiones.telefono.test(e.target.value)) {
                console.log("todo bien");
                document.getElementById("group_telefono").classList.remove("bg-danger");
                document.getElementById("group_telefono").classList.add("bg-success");
            } else{
                document.getElementById("group_telefono").classList.add("bg-danger");
                document.getElementById("group_telefono").classList.remove("bg-success");
                console.log("numero invalido");
        }
        break;
    }}
inputs.forEach((input) => {
    input.addEventListener("keyup", validarForm);
    }); 


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form enviado");
}); 
