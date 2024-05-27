
const display = document.getElementById("Banish")
const display2 = display.children
const button = document.getElementsByClassName("navApp__main__opciones")[0] 

function headeroptions() {
    const Width = window.innerWidth; 

    if (Width < 1000) {
        if (button.innerHTML === "x") {
            button.innerHTML = "≡";
        } else if (button.innerHTML === "≡") {
            button.innerHTML = "x";
        }

        if (button.innerHTML === "x") {
            display.classList.add("navApp__otherVisible");
            display.classList.remove("navApp__otherHidden");
            for (let i = display2.length - 1; i >= 0; i--) {
                display2[i].classList.add("navApp__otherVisible__opcionesWide");
                display2[i].classList.remove("navApp__otherHidden__opcionesWide");
            }
        } else if (button.innerHTML === "≡") {
            display.classList.add("navApp__otherHidden");
            display.classList.remove("navApp__otherVisible");
            for (let i = display2.length - 1; i >= 0; i--) {
                display2[i].classList.add("navApp__otherHidden__opcionesWide");                
                display2[i].classList.remove("navApp__otherVisible__opcionesWide");
            }
        }
    }
}

function screenSize() {
    const Width = window.innerWidth; 

    if (Width >= 1000) {
        display.classList.add("navApp__otherVisibleWide");
        display.classList.remove("navApp__otherHidden");
        display.classList.remove("navApp__otherVisible");
        for (let i = display2.length - 1; i >= 0; i--) {
            display2[i].classList.add("navApp__otherVisibleWide__opcionesWide");
            display2[i].classList.remove("navApp__otherVisible__opcionesWide");
        }
    } else {
        if(display.classList[0] === "navApp__otherVisibleWide"){
            display.classList.remove("navApp__otherVisibleWide"); 
            display.classList.add("navApp__otherHidden")
            for (let i = display2.length - 1; i >= 0; i--) {
                display2[i].classList.add("navApp__otherHidden__opcionesWide")       
                display2[i].classList.remove("navApp__otherVisibleWide__opcionesWide")      
                button.innerHTML = "≡"           
            }
        }               
        if(!display.classList === "navApp__otherVisible"){
            display.classList.add("navApp__otherHidden");
        }
        if (!display2[0].classList === "navApp__otherVisible__opcionesWide"){
            for (let i = display2.length - 1; i >= 0; i--) {
                display2[i].classList.remove("navApp__otherVisibleWide__opcionesWide");
                display2[i].classList.add("navApp__otherHidden__opcionesWide");
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    screenSize();
    showButton();
});

window.addEventListener("resize", function() {
    screenSize();
});
