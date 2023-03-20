//DOM ELEMENTS
let $form = document.getElementById("form")
let $sendBTN = document.getElementById("send-btn")
let $inputData = document.getElementById("data")
let loginUser = document.getElementById("login")
let botDance = document.getElementById("dance")
let $botReset = document.getElementById("btnReset")
let $alertModChat = document.getElementById("alertModChat")
let ls = localStorage

//ARRAYS "MOD CHATBOT"
const arrayData = [];
const arrayReplie = [];

//COMMAND "LOGIN", "REGISTER", "DANCE"
let user = false;
let userLogin = false;
let music1 = new Audio();
music1.src = "./assets/musicOne.mp3"
const apiKey = '6a604e7ee2c005697546c46d1ba1418b';

//FUNCTIONS

main()

function Consulta(reply) {
  this.reply = reply;
}

function main() {

  $sendBTN.addEventListener("click", e => {

    let message = document.createElement("div")
    message.innerHTML = `<div class="user-inbox inbox"><div class="msg-header"><p>${$inputData.value}</p></div></div>`
    $form.appendChild(message)
    let messageBot = document.createElement("div")

    if ($inputData.value.includes("Informacion")) {
      let reply = new Consulta("Gaston Iglesias. Es estudiante y freelancer de la carrera de Diseño Multimedial, tambien realiza una tecnicatura en la plataforma de Coderhouse como Desarrollador Web.");
      messageBot.innerHTML = `
                <div class="bot-inbox inbox animate__animated animate__fadeIn">
                  <div class="icon">
                    <i class="fa-solid fa-robot"></i>
                  </div>
                  <div class="msg-header">
                    <p>${reply.reply}</p>
                  </div>
                </div>
              `;
      $form.appendChild(messageBot);
      $inputData.value = '';
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
    if ($inputData.value.includes("Dance")) {
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
    if ($inputData.value.includes("clima")) {
      resetChatBot();
      let messageBot = document.createElement("div");
      messageBot.innerHTML = `
        <div class="bot-inbox inbox animate__animated animate__fadeIn">
          <div class="icon">
            <i class="fa-solid fa-robot"></i>
          </div>
          <div class="msg-header">
            <p>¿De qué ciudad quieres saber el clima?</p>
          </div>
        </div>
      `;
      $form.appendChild(messageBot);
      $inputData.value = "";
    
      // Esperar respuesta del usuario
      $sendBTN.addEventListener("click", () => {
        let ciudad = $inputData.value;
        let API_KEY = `6a604e7ee2c005697546c46d1ba1418b`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`;
    
        // Obtener el clima utilizando fetch
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            // Obtener el código de país
            let countryCode = data.sys.country;
    
            // Mostrar el clima y el país
            let reply = new Consulta(`La temperatura actual en ${ciudad} (${countryCode}) es ${data.main.temp}°C`);
            let messageBot = document.createElement("div");
            messageBot.innerHTML = `
              <div class="bot-inbox inbox animate__animated animate__fadeIn">
                <div class="icon">
                  <i class="fa-solid fa-robot"></i>
                </div>
                <div class="msg-header">
                  <p class="bg-success">La ciudad solicitada: <strong>${ciudad}, Pais: ${countryCode}</strong></p>
                  <p class="bg-primary">Temperatura: ${data.main.temp}°C
                    Maxima: <strong>${data.main.temp_max}°C</strong> <br>
                    Minima: <strong>${data.main.temp_min}°C</strong>
                  </p>
                  <p class="bg-warning text-dark">Humedad: <strong>${data.main.humidity}%</strong></p>
                </div>
              </div>
            `;
            $form.appendChild(messageBot);
          })
          .catch((error) => {
            // Manejar errores
            let reply = new Consulta(`No pude obtener el clima de ${ciudad}. Inténtalo de nuevo más tarde.`);
            let messageBot = document.createElement("div");
            messageBot.innerHTML = `
              <div class="bot-inbox inbox animate__animated animate__fadeIn">
                <div class="icon">
                  <i class="fa-solid fa-robot"></i>
                </div>
                <div class="msg-header">
                  <p>${reply.reply}</p>
                </div>
              </div>
            `;
            $form.appendChild(messageBot);
          });
    
        $inputData.value = "";
      });
    }    
    if ($inputData.value.toLowerCase().includes("diccionario")) {
      resetChatBot();
      dictionaryWords();
      $inputData.value = "";
    }
    if ($inputData.value.includes("Mod chat")) {
      $alertModChat.style.display = "block"
      resetChatBot()
      messageBot.style.display = "none"
      chatBot()
      $inputData.value = ""
    }
    if (user) {
      SetLS()
      user = false;
      swal("Usuario registrado exitosamente");
    }
    if ($inputData.value.toLowerCase().includes("Login")) {
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
    if (contienePalabrasOfensivas($inputData.value)) {
      let reply = respuestaEnojada();
      messageBot.innerHTML = `
              <div class="bot-inbox inbox animate__animated animate__fadeIn">
                <div class="icon">
                  <i class="fa-solid fa-robot"></i>
                </div>
                <div class="msg-header">
                  <p>${reply}</p>
                </div>
              </div>
            `;
      $form.appendChild(messageBot)
      $inputData.value = ""
    }
    if (userLogin) {
      let userLogin = JSON.parse(localStorage.getItem("replyBot"))

      let findUser = userLogin.find(element => element === $inputData.value)
      if (findUser) {
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

      } else {
        swal(`No existe ningun usuario con ese nombre`)
      }
     } //else{
    //        messageBot.innerHTML = `
    //                                         <div class="bot-inbox inbox animate__animated animate__fadeIn"">
    //                                             <div class="icon">
    //                                             <i class="fa-solid fa-robot"></i>
    //                                             </div>
    //                                             <div class="msg-header">
    //                                                 <p>Lo siento, no pude entenderte 😢</p>
    //                                             </div>
    //                                         </div>
    //                                    `
    //        $form.appendChild(messageBot)
    //    $inputData.value = ''

    // }
  })
}

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
    if (contador === 6) {
      music1.pause()
      clearInterval(songInterval)
      botDance.innerHTML = ` `
    }
  }, 2000);

}

function chatBot() {
  const responses = [
    "¡Hola! ¿Cómo estás?",
    "Me alegra hablar contigo",
    "¿Qué te parece si hablamos sobre tus pasatiempos?",
    "¿Quieres que te cuente un chiste?",
    "Interesante, cuéntame más sobre eso",
    "¿Has viajado a algún lugar emocionante recientemente?",
    "¿Cuál es tu comida favorita?",
    "¿Qué piensas sobre el cambio climático?",
    "¿Te gusta la música? ¿Cuál es tu género favorito?",
    "Eso es interesante, ¿has considerado escribir un libro sobre eso?",
  ];

  let newMessageBot = document.createElement("div");
  newMessageBot.innerHTML = `
      <div class="bot-inbox inbox animate__animated animate__fadeIn">
        <div class="icon">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="msg-header">
          <p>¡Charlemos!</p>
        </div>
      </div>
    `;
  $form.appendChild(newMessageBot);

  $inputData.addEventListener("blur", (event) => {
    const userMessage = event.target.value.trim();
    if (userMessage) {
      arrayReplie.push(userMessage);
      console.log(arrayReplie);
    }

    if (arrayReplie.length < 5) {
      let message = document.createElement("div")
      message.innerHTML = `<div class="user-inbox inbox"><div class="msg-header"><p>${$inputData.value}</p></div></div>`
      $form.appendChild(message)
      let messageBot = document.createElement("div")
      let aleatory = responses[Math.floor(Math.random() * responses.length)]
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
    } else {
      localStorage.setItem('replies', JSON.stringify(arrayReplie));

      const savedReplies = JSON.parse(localStorage.getItem('replies')) || [];

      let aleatory = savedReplies.length > 0
        ? savedReplies[Math.floor(Math.random() * savedReplies.length)]
        : "Lo siento, no puedo entenderte.";

      // crear el mensaje de respuesta
      let message = document.createElement("div")
      message.innerHTML = `<div class="user-inbox inbox"><div class="msg-header"><p>${$inputData.value}</p></div></div>`
      $form.appendChild(message)
      let messageBot = document.createElement("div");
      messageBot.innerHTML = `
              <div class="bot-inbox inbox animate__animated animate__fadeIn"">
                <div class="icon">
                  <i class="fa-solid fa-robot"></i>
                </div>
                <div class="msg-header">
                  <p>${aleatory}</p>
                </div>
              </div>
            `;

      // agregar el mensaje al formulario
      $form.appendChild(messageBot);

      $inputData.value = '';
    }

    return;
  });
}

function esOfensiva(palabra) {
  return ["estupido", "tonto", "basura", "maldito", "tarado", "descerebrado", "cabron", "don nadie", "inutil", "baboso", "idiota", "puto"].includes(palabra.toLowerCase());
}

function contienePalabrasOfensivas(frase) {
  const palabras = frase.toLowerCase().split(" ");
  for (const palabra of palabras) {
    if (esOfensiva(palabra)) {
      return true;
    }
  }
  return false;
}

function respuestaEnojada() {
  const respuestasInsultos = [
    "No necesito soportar este tipo de comentarios ofensivos.",
    "Por favor, trata de ser más respetuoso.",
    "No toleraré este tipo de lenguaje en mi conversación.",
    "Tratemos de mantener la conversación en un tono amigable y respetuoso.",
    "No es necesario recurrir a insultos para comunicarnos.",
    "Intentemos hablar de manera civilizada y con respeto.",
    "No toleraré que me hables de esa manera.",
    "Por favor, cuida tus palabras.",
    "Tratemos de llevar la conversación de manera cordial y amistosa.",
    "Si continúas con ese tono, no podré continuar la conversación."
  ];
  let aleatory = respuestasInsultos[Math.floor(Math.random() * respuestasInsultos.length)]
  return aleatory;
}

function dictionaryWords() {
  swal({
    text: 'Enter a word',
    content: "input",
    button: {
      text: "Buscar",
      closeModal: false,
    },
  })
    .then(word => {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
          const definition = data[0].meanings[0].definitions[0].definition;
          const message = `The definition of ${word} is: ${definition}`;
          swal("Found!", message, "success", { allowHtml: true });

          let messageWord = document.createElement("div")
          messageWord.innerHTML = `
          <div class="bot-inbox inbox animate__animated animate__fadeIn">
            <div class="icon">
              <i class="fa-solid fa-robot"></i>
            </div>
            <div class="msg-header">
              <p>${message}</p>
            </div>
          </div>
        `;
          $form.appendChild(messageWord);
        })
        .catch(error => {
          console.error(error);
          swal("Error", "The word was not found in the dictionary", "error");
        });
    })
    .catch(error => {
      console.error(error);
      swal.stopLoading();
      swal.close();
    });

  let messageBot = document.createElement("div")
  messageBot.innerHTML = `
                <div class="bot-inbox inbox animate__animated animate__fadeIn">
                  <div class="icon">
                    <i class="fa-solid fa-robot"></i>
                  </div>
                  <div class="msg-header">
                    <p>Would you like to search for another word?
                      <button class="btn btn-success p-1" id="continues">Yes</button>
                      /
                      <button class="btn btn-danger p-1" id="end">No</button>
                    </p>
                  </div>
                </div>
              `;
  $form.appendChild(messageBot);

  let continues = document.getElementById("continues")
  let end = document.getElementById("end")

  continues.addEventListener("click", () => { dictionaryWords() })
  end.addEventListener("click", () => { location.reload() })
}

function resetChatBot() {
  $botReset.style.display = "block"
  $botReset.addEventListener("click", () => {
    location.reload()
  })
}


//COMMANDS POPOVER
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})