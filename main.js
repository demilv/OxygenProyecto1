function headeroptions(){
    const button = document.getElementsByClassName("navApp__main__opciones")[0]
    if (button.innerHTML=== "x")
    {
        button.innerHTML= "≡"
    }else if(button.innerHTML=== "≡"){
        button.innerHTML= "x"
    }    
    
}

document.addEventListener("DOMContentLoaded", function() {
    headeroptions();
});