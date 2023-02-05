// VAR //
let $form = document.getElementById("form")
let $sendBTN = document.getElementById("send-btn")
let $inputData = document.getElementById("data")
let loginUser = document.getElementById("login")
let botDance = document.getElementById("dance")
let ls = localStorage
const arrayData = [];
let user = false;
let userLogin = false;
let music1 = new Audio();
music1.src = "./assets/musicOne.mp3"

// FUNCTIONS //
function Consulta(reply) {
    this.reply = reply;
}

function sendMessage() {

    $sendBTN.addEventListener("click", e => {

        let message = document.createElement("div")
        message.innerHTML = `<div class="user-inbox inbox"><div class="msg-header"><p>${$inputData.value}</p></div></div>`
        $form.appendChild(message)
        let messageBot = document.createElement("div")

        if ($inputData.value.includes("Informacion")) {
            let reply = new Consulta("Gaston Iglesias. Es estudiante y freelancer de la carrera de Diseño Multimedial, tambien realiza una tecnicatura en la plataforma de Coderhouse como Desarrollador Web.")
            console.log(reply)
            messageBot.innerHTML = `
                                            <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                                                <div class="icon">
                                                <i class="fa-solid fa-robot"></i>
                                                </div>
                                                <div class="msg-header">
                                                    <p>${reply.reply}</p>
                                                </div>
                                            </div>
                                        `
            $form.appendChild(messageBot)
            $inputData.value = ''
            return;
        }
        if ($inputData.value.includes("Github")) {
            let gitHub = "https://github.com/Gastonig9"
            let reply = new Consulta("Este es el link al perfil de GitHub de Gaston, alli puedes ver codigo de sus proyectos")
            messageBot.innerHTML = `
                                            <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                                                <div class="icon">
                                                <i class="fa-solid fa-robot"></i>
                                                </div>
                                                <div class="msg-header">
                                                    <p>${reply.reply}</p>
                                                    <a href="${gitHub}">Click aqui</a>
                                                </div>
                                            </div>
                                        `
            $form.appendChild(messageBot)
            $inputData.value = ''
            return;
        }
        if ($inputData.value.includes("Email")) {
            let reply = new Consulta("Este es el email de Gaston: gastonig2020@gmail.com")
            messageBot.innerHTML = `
                                            <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                                                <div class="icon">
                                                <i class="fa-solid fa-robot"></i>
                                                </div>
                                                <div class="msg-header">
                                                    <p>${reply.reply}</p>
                                                </div>
                                            </div>
                                        `
            $form.appendChild(messageBot)
            $inputData.value = ''
        }
        if ($inputData.value.includes("Linkedin")) {
            let linkedin = "https://www.linkedin.com/in/gast%C3%B3n-iglesias-847221213/"
            let reply = new Consulta("Link al perfil de linkedin de Gaston")
            messageBot.innerHTML = `
                                            <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                                                <div class="icon">
                                                <i class="fa-solid fa-robot"></i>
                                                </div>
                                                <div class="msg-header">
                                                    <p>${reply.reply}</p>
                                                    <a href="${linkedin}" target="_blank">Click aqui</a
                                                </div>
                                            </div>
                                        `
            $form.appendChild(messageBot)
            $inputData.value = ''
            return;
        }
        if ($inputData.value.includes("Curriculum")) {
            let linkedin = "https://www.linkedin.com/in/gast%C3%B3n-iglesias-847221213/"
            let reply = new Consulta("Aqui esta el Curriculum de Gaston")
            messageBot.innerHTML = `
                                            <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                                                <div class="icon">
                                                <i class="fa-solid fa-robot"></i>
                                                </div>
                                                <div class="msg-header">
                                                    <p>${reply.reply}</p>
                                                    <a href="./assets/Iglesias_Gaston.pdf" download>Descargar</a>
                                                </div>
                                            </div>
                                        `
            $form.appendChild(messageBot)
            $inputData.value = ''
            return;
        }
        if ($inputData.value.includes("Chiste")) {
            let reply = ["¿Qué le dice un gusano a otro gusano? Voy a dar una vuelta a la manzana.",
                "¿Cuál es el colmo de Aladdín? Tener mal genio.",
                "¿Cómo se dice pelo sucio en chino? Chin cham pu.",
                "¿Cómo se llama el primo de Bruce Lee? Broco Lee.",
                "Si se muere una pulga, ¿a dónde va? Al pulgatorio.",
                "¿Cuál es el último animal que subió al arca de Noé? El del-fin.",
                "¿Por qué las focas miran siempre hacia arriba? ¡Porque ahí están los focos!"]
            let aleatory = reply[Math.floor(Math.random() * reply.length)]
            messageBot.innerHTML = `
                                <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                                    <div class="icon">
                                    <i class="fa-solid fa-robot"></i>
                                    </div>
                                    <div class="msg-header">
                                        <p>${aleatory}</p>
                                    </div>
                                </div>
                            `
            $form.appendChild(messageBot)
            $inputData.value = ''
            return;
        }
        if($inputData.value.includes("Dance")){
            danceBot()
        }
        if ($inputData.value.includes("Register")) {

            messageBot.innerHTML = `
                                <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                                    <div class="icon">
                                    <i class="fa-solid fa-robot"></i>
                                    </div>
                                    <div class="msg-header">
                                        <p>Primero ingresa un nombre de usuario</p>
                                    </div>
                                </div>
                            `
            $form.appendChild(messageBot)
            $inputData.value = ''

            user = true;
            return;
        }
        if (user) {
            SetLS()
            user = false;
            swal("Usuario registrado exitosamente");
        }
        if ($inputData.value.includes("Login")) {
            messageBot.innerHTML = `
            <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                <div class="icon">
                <i class="fa-solid fa-robot"></i>
                </div>
                <div class="msg-header">
                    <p>Para poder ingresar, porfavor escribe tu nombre de usuario</p>
                </div>
            </div>
        `
            $form.appendChild(messageBot)
            $inputData.value = ''

            userLogin = true;
            return;
        }
        if (userLogin) {
            let userLogin = JSON.parse(localStorage.getItem("replyBot"))

            let findUser = userLogin.find(element => element === $inputData.value)
            if(findUser){
                swal(`Bienvenido ${findUser}`)
                console.log("hgola")
                loginUser.innerHTML = `
                <div class="card w-75 m-auto text-center" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">RoboQuery esta chateando con: <strong>${findUser}</strong></li>
                    </ul>
                </div>
                `
                $inputData.value = ""
                
            }else{
                swal(`No existe ningun usuario con ese nombre`)
            }
            
        } else {
            messageBot.innerHTML = `
                                            <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                                                <div class="icon">
                                                <i class="fa-solid fa-robot"></i>
                                                </div>
                                                <div class="msg-header">
                                                    <p>No puedo responder a eso ahora :(</p>
                                                </div>
                                            </div>
                                        `
            $form.appendChild(messageBot)
            $inputData.value = ''
            return;
        }

    })
}

sendMessage()

//SAVE LS//
function SetLS() {
    let json = JSON.parse(localStorage.getItem("replyBot"))
    console.log(json)
    if (json) {
        json.push($inputData.value)
        localStorage.setItem("replyBot", JSON.stringify(json))
    } else {
        localStorage.setItem("replyBot", JSON.stringify([$inputData.value]))
    }
    $inputData.value = ""
}

function GetLS(clave) {
    return JSON.parse(localStorage.getItem(clave));
}

//BOT DANCE//
function danceBot() {
    let contador = 0;
    music1.play()
    botDance.innerHTML = `
    <div class="card mb-3 m-auto w-25 position-absolute top-50 start-50 translate-middle animate__animated animate__bounceInLeft">
        <img src="https://i.ibb.co/Gtfqrg6/d277d514a65120f34ee565a07e236590ef48214c98e5458506ff8a75aef06d77.gif" class="card-img-top">
    </div>
    `
    let songInterval = setInterval(() => {
        contador++
        if(contador === 6) {
            music1.pause()
            clearInterval(songInterval)
            botDance.innerHTML = ` ` 
        }
    }, 2000);

}
