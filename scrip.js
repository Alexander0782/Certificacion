function InicioSesion(){
    alert("Inicio de Sesión exitoso")
}

function Rentar(boton){
    if(boton.textContent === "Rentar"){
        boton.style.backgroundColor = "red";
        boton.textContent = "No Disponible"   
    }
    else{
        boton.style.backgroundColor = "";
        boton.textContent = "Rentar"
    }
}

function CambiarTexto(palabra){
    const Titulo = document.getElementById("titulo")
    Titulo.textContent = palabra;
}