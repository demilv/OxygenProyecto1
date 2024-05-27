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