//global validator
let isInputValid=[false,false,false,false];

//get elements from the DOM
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const phoneInput=document.getElementById("phone");
const messageInput=document.getElementById("message");
const form =document.getElementById("contactForm");
//add event listeners
nameInput.addEventListener('blur',NameValidate);
emailInput.addEventListener('blur',EmailValidate);
phoneInput.addEventListener('blur',PhoneValidate);
messageInput.addEventListener('blur',MessageValidate);
//add validation functions
function NameValidate(){
    const nameRegex=/^[A-Za-z]{2,20}( )?[A-Za-z]{2,20}$/
    if(!nameRegex.test(nameInput.value)){
        isInputValid[0]=false;
        console.log(isInputValid);
    }else{
        isInputValid[0]=true;
        console.log(isInputValid);
    }
}
function EmailValidate(){
    const emailRegex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if(!emailRegex.test(emailInput.value)){
        isInputValid[1]=false;
        console.log(isInputValid);
    }else{
        isInputValid[1]=true;
        console.log(isInputValid);
    }
}
function PhoneValidate(){
    const phoneRegex=/^(\+56)?(9{1})(\d{8})$/;
    if(!phoneRegex.test(phoneInput.value)){
        isInputValid[2]=false;
        console.log(isInputValid);
    }else{
        isInputValid[2]=true;
        console.log(isInputValid);
    }
}
function MessageValidate(){
    const messageRegex=/^[a-zA-Z0-9-_.,"'\(\)\ ]{2,150}$/;
    if(!messageRegex.test(messageInput.value)){
        isInputValid[3]=false;
        console.log(isInputValid);
    }else{
        isInputValid[3]=true;
        console.log(isInputValid);
    }
}

//triggers
function Valid(input){
    input.classList.remove("notValid");
    input.classList.add("valid");
}
function NotValid(input){
    input.classList.add("notValid");
    input.classList.remove("valid");
}
//enviar mensaje
function IsInputValid(){
    if(isInputValid.includes(false)){
        console.log('faltan campos por rellenar');
    }else{
        console.log('mesaje enviado');
        function EnviarMensaje(){ 
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
                url: '/send-mail',
                data: data,
                success: function(response){
                    alert(response.message);
                },
                dataType: 'json'
              });
        }
        EnviarMensaje();
    }
}
