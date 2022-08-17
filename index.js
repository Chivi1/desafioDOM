const expresiones = {
	user: /^.{4,15}$/, // 4 a 15 digitos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
}
//login inicial del Index para acceder al formulario de Page
const formularioInicial = document.getElementById("formulario");
const inputsInicial = document.querySelectorAll("#formulario input");
let permiso;

//validacion nombre
let alerta =  document.getElementById("alerta");

const stay = () => {
    alerta.classList.remove("text-success");
    alerta.classList.add("text-danger");
    alerta.innerHTML = "Completa los campos correctamente";
}
const go = () => {
    alerta.classList.remove("text-danger");
    alerta.classList.add("text-success");
    alerta.innerHTML = "Todo bien";
}

const loginInicial = (e) => {
    switch (e.target.name) {
        case "usuario":
            if (expresiones.user.test(e.target.value)) {
                go();
            } else {
                console.log("Nombre invalido");
                stay();
            }
        break;
        case "password":
        if (expresiones.password.test(e.target.value)) {
            go();
        } else {
            stay();
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

formulario.addEventListener("submit", (e) => {
    let nom = document.getElementById("user_input").value;
    let apel = document.getElementById("pass_input").value;
    console.log(nom)
    sessionStorage.setItem("nombre", nom)
    alerta.className.includes("text-success") ? window.location = "page.html" : stay(), Swal.fire({
                                                                                                icon: 'error',
                                                                                                title: 'Oops...',
                                                                                                text: '¡no has iniciado sesion!',
                                                                                            });
    
}); 











