const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}
//login inicial del Index para acceder al formulario de Page
const formularioInicial = document.getElementById("formulario");
const inputsInicial = document.querySelectorAll("#formulario input");

const loginInicial = (e) => {
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById("nombreform").classList.remove("text-danger");
                document.getElementById("nombreform").classList.add("text-success");
            } else {
                document.getElementById("nombreform").classList.add("text-danger");
                document.getElementById("nombreform").classList.remove("text-success");
                console.log("Nombre invalido");
            }
        break;
        case "apellido":
        if (expresiones.nombre.test(e.target.value)) {
            document.getElementById("apellidoform").classList.remove("text-danger");
            document.getElementById("apellidoform").classList.add("text-success");
        } else {
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

//validacion nombre
let alerta =  document.getElementById("alerta");

const stay = () => {
    alerta.innerHTML = "El nombre es OBLIGATORIO";
}

//funcion para redirigir al formulario de page.html

formulario.addEventListener("submit", (e) => {
    let nom = document.getElementById("nombre_input").value;
    let apel = document.getElementById("apellido_input").value;
    console.log(nom)
    sessionStorage.setItem("nombre", nom)
    sessionStorage.setItem("apellido", apel)
    
    if (nom.value == undefined || null || "") {
        stay();
    } else {
        window.location = "page.html";
    }
});











