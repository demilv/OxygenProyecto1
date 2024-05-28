let openW = document.getElementById("popContainer")
//let noEntry = localStorage.getItem("noEntry") === "true";   //controlar entrada en Show()
let noEntry = false 
let shown = false // controlar entrada en getRid()
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 

let valueEmail2 = document.getElementById("emailPopUp")
let emailCorrect2 = false

function Show(){
    if (noEntry === false){        
        openW.classList.add("popIn");
        openW.classList.remove("popOut")
        shown = true;
        noEntry = true; 
    }
}

function popupScroll(){    
    let scrollTotal = document.documentElement.scrollTop;
    userScrolled = (scrollTotal / height) * 100;    
    userScrolled > 25 ? (Show(),  window.removeEventListener('scroll', popupScroll)) : null  
}

function getRidPopUp(){
    if (shown === true){
        openW.classList.add("popOut")
        openW.classList.remove("popIn")
        localStorage.setItem("noEntry", "true");
    }
}

window.addEventListener('scroll', popupScroll)
window.addEventListener('keydown', function(event) {
    console.log("ey")
    if (event.key === 'Escape' || event.keyCode === 27) {
        getRidPopUp();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(function() {      
       Show()              
    }, 5000);    
});

document.getElementById("closePop").addEventListener("click", function() {
    getRidPopUp();
});

document.body.addEventListener("click", function(event) {
    if (shown && !openW.contains(event.target)) {
        getRidPopUp();
    }
});

valueEmail2.addEventListener("focusout", (e) => {
    let regEmail =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e.target.value);    
    if (!regEmail){
        valueEmail2.classList.add("error") 
        emailCorrect2 = false
    }else{
        valueEmail2.classList.remove("error") 
        emailCorrect2 = true
    } 
})

function onSubmitPopUp(){
    event.preventDefault();
    let upload = false
    if (emailCorrect2 === true){
        upload = true
    }
    if (upload === true){
        console.log("correcto")
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            email: valueEmail2.value,            
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        valueEmail2.value = '';
    }else{
        console.log("Algún campo todavía no es correcto")
    }   
}