const display = document.getElementById("Banish")
const display2 = display.children
const button = document.getElementsByClassName("navApp__main__opciones")[0] 
const Width = window.innerWidth;

const scrollId = document.getElementById("progreso")

const goUpButton = document.getElementById("up")
const posPricing = document.getElementsByClassName("pricing")[0]

//1

function headeroptions(){                 

    if (Width < 1000){
        if (button.innerHTML=== "x")
        {
            button.innerHTML= "≡"
        }else if(button.innerHTML=== "≡"){
            button.innerHTML= "x"
        }        

        if (button.innerHTML=== "x"){
            
            display.classList.add("navApp__otherVisible");
            display.classList.remove("navApp__otherHidden");
            for (let i = display2.length; i>=0 ; i--){
                display2[i-1].classList.add("navApp__otherVisible__opcionesWide")
                display2[i-1].classList.remove("navApp__otherHidden__opcionesWide")            
            }
                     
        } else if (button.innerHTML=== "≡"){
            display.classList.add("navApp__otherHidden");
            display.classList.remove("navApp__otherVisible");  
            for (let i = display2.length; i>=0 ; i--){
                display2[i-1].classList.add("navApp__otherHidden__opcionesWide")
                display2[i-1].classList.remove("navApp__otherVisible__opcionesWide")            
            }          
            
        }          
    } 
}


document.addEventListener("DOMContentLoaded", function() {
    if (Width >= 1000) {
        display.classList.add("navApp__otherVisibleWide");
        display.classList.remove("navApp__otherHidden");
        display.classList.remove("navApp__otherVisible");
        for (let i = display2.length; i>=0 ; i--){
            display2[i-1].classList.add("navApp__otherVisibleWide__opcionesWide")
            display2[i-1].classList.remove("navApp__otherVisible__opcionesWide")            
        }
    }  
    showButton()
});

//2

function scrollPercentage() {
    let scrollTotal = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let userScrolled = (scrollTotal / height) * 100;
    scrollId.style.width = userScrolled + "%";
}

//3

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

//4





window.addEventListener('scroll', scrollPercentage)
window.addEventListener('scroll', showButton)