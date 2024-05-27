const scrollId = document.getElementById("progreso")
let userScrolled = 0

function scrollPercentage() {   
    let scrollTotal = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
    let userScrolled = (scrollTotal / height) * 100;
    scrollId.style.width = userScrolled + "%";
}

window.addEventListener('scroll', scrollPercentage)
