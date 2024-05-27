addEventListener("change", (e) => {
    const valorElegido = e.target.value
    Conversor(valorElegido)
})

function Conversor(type) {
    const pType = document.getElementById("pricingSelector")
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