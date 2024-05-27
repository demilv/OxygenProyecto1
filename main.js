const display = document.getElementById("Banish")
const display2 = display.children
const button = document.getElementsByClassName("navApp__main__opciones")[0] 
const Width = window.innerWidth;

let scrollTotal = document.documentElement.scrollTop;
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let userScrolled = (scrollTotal / height) * 100;

const scrollId = document.getElementById("progreso")

const goUpButton = document.getElementById("up")
const posPricing = document.getElementsByClassName("pricing")[0]

const pType = document.getElementById("pricingSelector")

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
    scrollId.style.width = userScrolled + "%";
}

window.addEventListener('scroll', scrollPercentage)


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

window.addEventListener('scroll', showButton)

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
//pType

addEventListener("change", (e) => {
    const valorElegido = e.target.value
    Conversor(valorElegido)
})


function Conversor(type) {
    let free = document.getElementById("valorFree")
    let pro = document.getElementById("valorPro")
    let premium = document.getElementById("valorPremium")
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
    .then((response) => response.json())
    .then((res) => {
        console.log(res.usd)
        switch (pType.value){            
            case "USD":
                console.log("tamos aqui")
                console.log(res.usd)
                free.innerHTML = "$0"
                pro.innerHTML ="$25"
                premium.innerHTML ="$60"
                break;
            case "EUR":
                free.innerHTML ="€0"
                pro.innerHTML = `€${(25*res.usd.eur).toFixed(0)}`
                premium.innerHTML = `€${(60*res.usd.eur).toFixed(0)}`
                break;
            case "GBP":
                free.innerHTML ="G0"
                pro.innerHTML = `G${(25*res.usd.gbp).toFixed(0)}`
                premium.innerHTML = `G${(60*res.usd.gbp).toFixed(0)}`
                break;
            default:
                console.log("wtf happened")
        }
    });
}

//7

let openW = document.getElementById("popContainer")
let noEntry = localStorage.getItem("noEntry") === "true";  //controlar entrada en Show()
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

document.addEventListener("DOMContentLoaded", function() {
    console.log("Empiezo")
    setTimeout(function() {        
       Show()              
    }, 5000);    
});

function getRidPopUp(){
    if (shown === true){
        openW.classList.add("popOut")
        openW.classList.remove("popIn")
        localStorage.setItem("noEntry", "true");
    }
}

document.getElementById("closePop").addEventListener("click", function() {
    getRidPopUp();
});

document.body.addEventListener("click", function(event) {
    if (shown && !openW.contains(event.target)) {
        getRidPopUp();
    }
});

window.addEventListener('scroll', popupScroll)

//8

let sliderId = document.getElementById("sliderImagenes")

class Slider {
    constructor(sliderId, time) {
        this.sliderId = document.getElementById(sliderId);
        this.sliderChildren = this.sliderId.children;
        this.prevSliderCounter = 1;
        this.sliderCounter = 0;
        console.log(this)

        this.Buttons();
        this.startAutoSlide();
    }

    Buttons() {
        this.sliderId.querySelector('.sliderContainer__leftB').addEventListener('click', () => this.downCounter());
        this.sliderId.querySelector('.sliderContainer__rightB').addEventListener('click', () => this.upCounter());
    }

    startAutoSlide() {
        setInterval(() => this.upCounter(), 5000);        
    }

    upCounter() {
        this.prevSliderCounter = this.sliderCounter;
        this.sliderCounter++;
        if (this.sliderCounter > 4) {
            this.sliderCounter = 0;
        }
        this.sliderSelection();
    }

    downCounter() {
        this.prevSliderCounter = this.sliderCounter;
        this.sliderCounter--;
        if (this.sliderCounter < 0) {
            this.sliderCounter = 4;
        }
        this.sliderSelection();
    }

    sliderSelection() {
        this.sliderChildren[this.prevSliderCounter+2].classList.remove("sliderContainer__imgShown");
        this.sliderChildren[this.prevSliderCounter+2].classList.add("sliderContainer__imgNotShown");
        this.sliderChildren[this.sliderCounter+2].classList.remove("sliderContainer__imgNotShown");
        this.sliderChildren[this.sliderCounter+2].classList.add("sliderContainer__imgShown");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Slider('sliderImagenes');
});