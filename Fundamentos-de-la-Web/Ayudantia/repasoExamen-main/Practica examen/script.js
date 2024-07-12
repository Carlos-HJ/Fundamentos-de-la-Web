console.log("conectado");

function eliminarCookies(){
    var cookies = document.querySelector(".cookies");
    console.log(cookies);
    cookies.remove();
}

function sumarLike(elemento){
    var numLike = elemento.closest(".likes")
    console.log(numLike);
    var numero = numLike.querySelector(".like").innerHTML;
    console.log(numero);
    parseInt(numero);
    console.log(numero);
    numero++;
    console.log(numero);
    elemento.closest(".likes").querySelector(".like").innerHTML = numero;
}

