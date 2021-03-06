let saludo = document.getElementById("saludo");
let nomSaludo = JSON.stringify(sessionStorage.getItem("nombre"));
console.log(saludo);
saludo.innerHTML =  nomSaludo + " Cuentanos mas sobre tí..."  

const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");
//validaciones
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
                document.getElementById("group_nombre").classList.remove("text-danger");
                document.getElementById("group_nombre").classList.add("text-success");
            } else{
                document.getElementById("group_nombre").classList.add("text-danger");
                document.getElementById("group_nombre").classList.remove("text-success");
                console.log("Nombre invalido");
            }
        break;
        case"correo":
        if (expresiones.correo.test(e.target.value)) {
            document.getElementById("group_correo").classList.remove("text-danger");
            document.getElementById("group_correo").classList.add("text-success");
        } else{
            document.getElementById("group_correo").classList.add("text-danger")
            document.getElementById("group_correo").classList.remove("text-success");
        }
        break;
        case"telefono":
            if (expresiones.telefono.test(e.target.value)) {
                console.log("todo bien");
                document.getElementById("group_telefono").classList.remove("text-danger");
                document.getElementById("group_telefono").classList.add("text-success");
            } else{
                document.getElementById("group_telefono").classList.add("text-danger");
                document.getElementById("group_telefono").classList.remove("text-success");
                console.log("numero invalido");
        }
        break;
    }}
inputs.forEach((input) => {
    input.addEventListener("keyup", validarForm);
    }); 

let salida =  document.getElementById("enviado");

const exit = () => {
    salida.innerHTML = "Formulario enviado exitosamente. ¡Recibiras una respuesta en los proximos 7 dias!"
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form enviado");
    exit();
}); 

