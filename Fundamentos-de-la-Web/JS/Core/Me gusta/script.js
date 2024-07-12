//SUMAR LIKES
function sumarLike1(elemento){
    var numLikes = parseInt( elemento.closest(".likes1").querySelector(".like1").innerHTML );
    numLikes++;
    elemento.closest(".likes1").querySelector(".like1").innerHTML = numLikes;
}

function sumarLike2(elemento){
    var numLikes = parseInt( elemento.closest(".likes2").querySelector(".like2").innerHTML );
    numLikes++;
    elemento.closest(".likes2").querySelector(".like2").innerHTML = numLikes;
}

function sumarLike3(elemento){
    var numLikes = parseInt( elemento.closest(".likes3").querySelector(".like3").innerHTML );
    numLikes++;
    elemento.closest(".likes3").querySelector(".like3").innerHTML = numLikes;
}
