//delete input if not valid
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
        NotValid(nameInput);
    }else{
        Valid(nameInput);
    }
}
function EmailValidate(){
    const emailRegex=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if(!emailRegex.test(emailInput.value)){
        NotValid(emailInput);
    }else{
        Valid(emailInput);
    }
}
function PhoneValidate(){
    const phoneRegex=/^(\+56)?(9{1})(\d{8})$/;
    if(!phoneRegex.test(phoneInput.value)){
        NotValid(phoneInput);
    }else{
        Valid(phoneInput);
    }
}
function MessageValidate(){
    const messageRegex=/^[a-zA-Z0-9-_.,"'\(\)\ ]{2,150}$/;
    if(!messageRegex.test(messageInput.value)){
        NotValid(messageInput);
    }else{
        Valid(messageInput);
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
//submit trigger
