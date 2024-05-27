let openW = document.getElementById("popContainer")
let noEntry = localStorage.getItem("noEntry") === "true";   //controlar entrada en Show()
//let noEntry = false 
let shown = false // controlar entrada en getRid()

function Show(){
    if (noEntry === false){        
        openW.classList.add("popIn");
        openW.classList.remove("popOut")
        shown = true;
        noEntry = true; 
    }
}

function popupScroll(){
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