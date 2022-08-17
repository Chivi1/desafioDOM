const stay = () => {
    alerta.classList.remove("text-success");
    alerta.classList.add("text-danger");
    alerta.innerHTML = "Los campos son OBLIGATORIOS. Revisa que se hayan colocado correctamente.";
}
const go = () => {
    alerta.classList.remove("text-danger");
    alerta.classList.add("text-success");
    alerta.innerHTML = "¡Se ve bien!";
}

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
                go();
            } else{
                stay();
            }
        break;
        case"correo":
        if (expresiones.correo.test(e.target.value)) {
            go();
        } else{
            stay();
        }
        break;
        case"telefono":
            if (expresiones.telefono.test(e.target.value)) {
                go();
            } else{
                stay();
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
/* let SENDGRID_API_KEY = "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"; */

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form enviado");
    //get data de los inputs
    var datos = new FormData (formulario);
    const newPost = {
        title: "new post",
        body: "formulario blacktail",
        userId: 1
        }
        fetch ('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then( res => res.json())
        .then( data => {
            console.log(data);
            console.log(datos.get("correo"));
            });
            
        exit();
}); 

