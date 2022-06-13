const flexSwitchCheckReverse = document.querySelector("#flexSwitchCheckReverse");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
}

var bandera = false;
const fondoTarjeta = document.querySelectorAll(".bg-info");
const bg = document.querySelectorAll(".bg");;
//const link = document.querySelectorAll(".text-white");
const labbel = document.getElementsByClassName("form-check-label");
flexSwitchCheckReverse.addEventListener("click", function () {
    if(!bandera){
        fondoTarjeta.forEach(element=>{
            element.classList.remove("bg-info");
            element.classList.add("tarjetaFondo");
        });
        bg.forEach(element=>{
            element.classList.remove("bg");
            element.classList.add("bgNegativo");
        });      
        labbel[0].classList.remove("text-black");
        labbel[0].classList.add("text-white");
        /*link.forEach(element => {
            element.classList.remove("text-white");
            element.classList.add("text-black");
    });*/
    }else{
        fondoTarjeta.forEach(element=>{
            element.classList.add("bg-info");
            element.classList.remove("tarjetaFondo");
        });
        bg.forEach(element=>{
            element.classList.add("bg");
            element.classList.remove("bgNegativo");
        });  
        labbel[0].classList.remove("text-white");
        labbel[0].classList.add("text-black");
       /* link.forEach(element => {
            element.classList.remove("text-black");
            element.classList.add("text-white");
    });*/
    }
    bandera= !bandera;

    
    
});
