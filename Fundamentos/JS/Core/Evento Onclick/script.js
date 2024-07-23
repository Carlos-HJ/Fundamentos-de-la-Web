// CAMBIAR EL BOTON DE INICIAR SESION
var sesion = document.getElementById("sesion");
sesion.addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});

//SUMAR LIKE Y MENSAJE DE ALERTA
function sumarLike(elemento){
    var numLikes = parseInt( elemento.closest(".likes").querySelector(".like").innerHTML );
    numLikes++;
    elemento.closest(".likes").querySelector(".like").innerHTML = numLikes;
    alert("Gato Atigrado was liked");
}

function sumarLike1(elemento){
    var numLikes = parseInt( elemento.closest(".likes1").querySelector(".like1").innerHTML );
    numLikes++;
    elemento.closest(".likes1").querySelector(".like1").innerHTML = numLikes;
    alert("Golden Retriver was liked");
}

//EL BOTON DESAPARECE
var botonTI = document.querySelectorAll("#botonTI");
botonTI.forEach(function(botonTI) {
    botonTI.addEventListener("click", function() {
        this.remove();
    });
});

