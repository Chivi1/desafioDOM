const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
    user: /^.{4,15}$/, // 4 a 15 digitos.
}

const formularioRegistro = document.getElementById("formularioRegistro");
const inputsRegistro = document.querySelectorAll("#formularioRegistro input");

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
const registroValidar = (e) => {
    switch (e.target.name) {
        case "nombreRegistro":
            if (expresiones.nombre.test(e.target.value)) {
                go();
            } else {
                stay();
            }
            case "UsuarioRegistro":
                if (expresiones.user.test(e.target.value)) {
                    go();
                } else {
                    stay();
                }
                case "passRegistro":
                if (expresiones.password.test(e.target.value)) {
                    go();
                } else {
                    stay();
                }
                case "mailRegistro":
                if (expresiones.correo.test(e.target.value)) {
                    go();
                } else {
                    stay();
                }
    }}
    inputsRegistro.forEach((input) => {
        input.addEventListener("keyup", registroValidar);
    }); 
    formularioRegistro.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log("form enviado");
    });
    formularioRegistro.addEventListener("submit", (f) => {
        alerta.className.includes("text-success") ? Swal.fire({
                                                                icon: 'success',
                                                                title: '¡Perfecto!',
                                                                text: 'Ya estas registrado :)',
                                                                footer: '<a href="index.html">iniciar sesión</a>'
                                                            }) : Swal.fire(
                                                                {
                                                                    icon: 'error',
                                                                    title: 'Oops...',
                                                                    text: '¡Los campos son obligatorios! Revisa tus datos e intentalo nuevamente.',
                                                                }
                                                                        ); 
    })