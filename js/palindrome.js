const form=document.getElementById("contact-form");
const message=document.getElementById("msg");
const error=document.getElementById("palindrome-error");

form.addEventListener("submit", function(event){

    const texte=message.value.toLowerCase().trim();
    const inverse=texte.split("").reverse().join("");

    if(texte.length>5 && texte === inverse){
        event.preventDefault();
        error.hidden=false;
    }else{
        error.hidden=true;
    }

});