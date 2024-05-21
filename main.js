const display = document.getElementById("Banish")
const display2 = display.children
const Width = window.innerWidth;

function headeroptions(){
    const button = document.getElementsByClassName("navApp__main__opciones")[0]               

    if (Width < 1000){
        /*if (button.innerHTML=== "≡")
        {
            display.classList.add("navApp__otherHidden");
            display.classList.remove("navApp__otherVisibleWide");
        }else if(button.innerHTML=== "x"){
            display.classList.add("navApp__otherVisible")
            display.classList.remove("navApp__otherVisibleWide");
        } */  

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
});
