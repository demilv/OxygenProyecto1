

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
