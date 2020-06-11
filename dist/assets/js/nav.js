"use strict";

document.getElementById("clickNav").addEventListener("click", myFunction, false);

function myFunction() {
  var x = document.getElementById("links");
  x.className = x.className === "show" ? "" : "show";
}

;