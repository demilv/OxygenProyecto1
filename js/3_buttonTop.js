const goUpButton = document.getElementById("up")
const posPricing = document.getElementsByClassName("pricing")[0]

function backTop(){
    window.scrollTo(0, 0)
}

function showButton(){
    const positionTarget = posPricing.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;
    if(positionTarget < screenPosition) {
        goUpButton.classList.add("goUp")
        goUpButton.classList.remove("goUpOculto");
    }else{
        goUpButton.classList.add("goUpOculto")
        goUpButton.classList.remove("goUp")
    }
}

window.addEventListener('scroll', showButton)
