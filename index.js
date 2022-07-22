const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}
//login inicial del Index para acceder al formulario de Page
const formularioInicial = document.getElementById("formulario");
const inputsInicial = document.querySelectorAll("#formulario input");

const loginInicial = (e)=> {
    switch (e.target.name) {
        case"nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById("nombreform").classList.remove("text-danger");
                document.getElementById("nombreform").classList.add("text-success");
            } else{
                document.getElementById("nombreform").classList.add("text-danger");
                document.getElementById("nombreform").classList.remove("text-success");
                console.log("Nombre invalido");
            }
        break;
        case"apellido":
        if (expresiones.nombre.test(e.target.value)) {
            document.getElementById("apellidoform").classList.remove("text-danger");
            document.getElementById("apellidoform").classList.add("text-success");
        } else{
            document.getElementById("apellidoform").classList.add("text-danger")
            document.getElementById("apellidoform").classList.remove("text-success");
        }
    }}
inputsInicial.forEach((input) => {
    input.addEventListener("keyup", loginInicial);
}); 
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form enviado");
}); 

//funcion para redirigir al formulario de page.html
function redirect() {
    formulario.addEventListener("submit", (e) => {
    window.location="page.html";
    }
)}
redirect();

let nom = document.getElementById("nombreform").value;
let apel = document.getElementById("apellidoform").value;
localStorage.setItem("nombre", nom)
localStorage.setItem("apellido", apel)