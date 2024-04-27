//Desafio 3

ele = document.getElementById("ele1");
ele.addEventListener("click", function (){pintar("yellow")});

function pintar(color = "green") {
    ele.style.backgroundColor = color;
}