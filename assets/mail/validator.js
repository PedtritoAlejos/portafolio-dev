//global validator
let isInputValid=[false,false,false,false];

//get elements from the DOM
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const phoneInput=document.getElementById("phone");
const messageInput=document.getElementById("message");
const form =document.getElementById("contactForm");
const nombre=document.getElementById("nombre");
const correo=document.getElementById("correo");
const fono=document.getElementById("fono");
const texto=document.getElementById("texto");
const captcha = document.getElementsByClassName("g-recaptcha");


//add event listeners
nameInput.addEventListener('blur',NameValidate);
emailInput.addEventListener('blur',EmailValidate);
phoneInput.addEventListener('blur',PhoneValidate);
messageInput.addEventListener('blur',MessageValidate);
//add validation functions
function NameValidate(){
    const nameRegex=/^[A-Za-z]{2,20}( )?([A-Za-z]{2,20})?$/;
    if(!nameRegex.test(nameInput.value)){
        isInputValid[0]=false;
        nombre.classList.add("alert-danger","alert");
        nombre.innerHTML="<strong>El nombre ingresado no es valido.</strong>";

    }else{
        isInputValid[0]=true;
        nombre.classList.remove("alert-danger","alert");
        nombre.innerHTML="<strong></strong>";
    }
}
function EmailValidate(){
    const emailRegex=/^[a-zA-Z0-9-_.]{2,30}[@]{1,1}[a-zA-Z0-9-_.]{2,30}$/;
    if(!emailRegex.test(emailInput.value)){
        isInputValid[1]=false;
        correo.classList.add("alert-danger","alert");
        correo.innerHTML="<strong>El correo ingresado no es valido.</strong>";

    }else{
        isInputValid[1]=true;
        correo.classList.remove("alert-danger","alert");
        correo.innerHTML="<strong></strong>";

    }
}
function PhoneValidate(){
    const phoneRegex=/^(\+)?(56)?(9{1})(\d{8})$/;
    if(!phoneRegex.test(phoneInput.value)){
        isInputValid[2]=false;
        fono.classList.add("alert-danger","alert");
        fono.innerHTML="<strong>El telefono ingresado no es valido.</strong>";

    }else{
        isInputValid[2]=true;
        fono.classList.remove("alert-danger","alert");
        fono.innerHTML="<strong></strong>";

    }
}
function MessageValidate(){
    const messageRegex=/^[a-zA-Z0-9 -_.,"\n'\(\)\ ]{2,450}$/;
    if(!messageRegex.test(messageInput.value)){
        isInputValid[3]=false;
        texto.classList.add("alert-danger","alert");
        texto.innerHTML="<strong>El texto ingresado no es valido.</strong>";

    }else{
        isInputValid[3]=true;
        texto.classList.remove("alert-danger","alert");
        texto.innerHTML="<strong></strong>";

    }
}

const validaCaptcha = (mensaje) =>{ 
    let responseCaptcha = grecaptcha.getResponse();
    let captchaError = document.getElementById("captcha");


    if(responseCaptcha.length == 0){
        captchaError.classList.add("alert-danger","alert","text-center");
        captchaError.innerHTML=`<strong >${mensaje}.</strong>`;
        return "error";
    } else {
      
      captchaError.classList.remove("alert-danger","alert", "text-center");
      return "validado";
    }
    
}

//triggers
function Valid(input){
    input.classList.remove("notValid");
    input.classList.add("valid");
}
function NotValid(input){
    input.classList.add("");
    input.classList.remove("valid");
}
//enviar mensaje
function IsInputValid(){
    if(isInputValid.includes(false)){
    }else{
        function EnviarMensaje(){ 
           
         let validacion = validaCaptcha("Debes llenar la casilla del captcha para continuar");
              
         if (validacion === "validado") {
             
         
            let username = document.getElementById("name").value;
            let userphone = document.getElementById("phone").value;
            let usermail = document.getElementById("email").value;
            let usermessage = document.getElementById("message").value;
        
            let data={
                username:username,
                userphone: userphone,
                usermail: usermail,
                usermessage: usermessage
            }
        
            $.ajax({
                type: "POST",
                url: 'http://localhost:3000/send-mail',
                data: data,
                success: function(response){
                    alert(response.message);
                },
                dataType: 'json'
              });

         }
        }
        EnviarMensaje();
    }
}
