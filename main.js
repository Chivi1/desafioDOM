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
            //sendgrid para enviar mail de bienvenida a correo de input
        let mailUsuario =  datos.get("correo");
        const mailjet = require ('node-mailjet')
            .connect('****************************1234', '****************************abcd')
        const request = mailjet
            .post("send", {'version': 'v3.1'})
            .request({
            "Messages":[
            {
            "From": {
                "Email": "paulofr016@gmail.com",
                "Name": "Francisco"
            },
            "To": [
            {
                "Email": "paulofr016@gmail.com",
                "Name": "Francisco"
            }
        ],
            "Subject": "Greetings from Mailjet.",
            "TextPart": "My first Mailjet email",
            "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
            "CustomID": "AppGettingStartedTest"
    }
    ] 
    })
    request
        .then((result) => {
        console.log(result.body)
    })
        .catch((err) => {
            console.log(err.statusCode)
        })
    exit();
}); 

