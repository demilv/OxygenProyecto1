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

let valueName = document.getElementById("name")
let valueEmail = document.getElementById("email")
let valueCheck = document.getElementById("consent")
let nameCorrect = false
let emailCorrect = false
let checkCorrect = false

valueName.addEventListener("focusout", (e) =>{
    let regName = e.target.value
    if (regName.length < 2 || regName.length >100){
        valueName.classList.add("error")    
        nameCorrect = false    
    }else{
        valueName.classList.remove("error")
        nameCorrect = true
    }    
})

valueEmail.addEventListener("focusout", (e) => {
    let regEmail =/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(e.target.value);    
    if (!regEmail){
        valueEmail.classList.add("error") 
        emailCorrect = false
    }else{
        valueEmail.classList.remove("error") 
        emailCorrect = true
    } 
})

valueCheck.addEventListener("change", (e)=>{
    if (!e.target.checked){
        valueCheck.classList.add("error") 
        checkCorrect = false
    }else{
        valueCheck.classList.remove("error")
        checkCorrect = true
    }
})

//5

//valueName valueEmail valueCheck

function onSubmit(){
    event.preventDefault();
    let upload = false
    if (nameCorrect === true && emailCorrect === true && checkCorrect === true){
        upload = true
    }

    if (upload === true){
        console.log("correcto")
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            name: valueName.value,
            email: valueEmail.value,            
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
        valueName.value = '';
        valueEmail.value = '';
        valueCheck.checked = false;
    }else{
        console.log("Algún campo todavía no es correcto")
    }
   
}

//6





window.addEventListener('scroll', scrollPercentage)
window.addEventListener('scroll', showButton)