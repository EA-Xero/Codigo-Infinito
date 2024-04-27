//Ejercicio 4

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");

function cambiarColor(event) {
  var div = event.target;
  div.style.backgroundColor = "black";
}

div1.addEventListener("click", cambiarColor);
div2.addEventListener("click", cambiarColor);
div3.addEventListener("click", cambiarColor);
div4.addEventListener("click", cambiarColor);

var color;
var el = document.getElementById("key");
var la = document.getElementById("alo");

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
    CC(color)

  } else if (event.key === "s") {
    color = "orange";
    CC(color)

  } else if (event.key === "d") {
    color = "skyblue";
    CC(color)
  } else if (event.key === "q"){
    color = "purple"
    CC(color)
  } else if (event.key === "w"){
    color = "grey"
    CC(color)
  } else if (event.key === "e"){
    color = "brown"
    CC(color)
  }
});





function CC(color){
    if (color === "pink" || color === "orange" || color === "skyblue"){
        el.style.backgroundColor = color;
    }
    else if (color === "grey" || color === "purple" || color === "brown"){
        la.style.backgroundColor = color
    }
}