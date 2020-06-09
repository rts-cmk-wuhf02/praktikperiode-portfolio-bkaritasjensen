"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //////////////////////////////// CATEGORI //////////////////////////////////
  var categoriesURL = "https://api.spotify.com/v1/browse/categories";
  var categoriesColors = ["#FF1168", "#E54028", "#F18D05", "#F2BC06", "#5EB11C", "#3A7634", "#0ABEBE", "#00A1CB", "#115793", "#FF1168", "#E54028", "#F18D05", "#F2BC06", "#5EB11C", "#3A7634", "#0ABEBE", "#00A1CB", "#115793", "#FF1168", "#E54028", "#F18D05", "#F2BC06", "#5EB11C", "#3A7634", "#0ABEBE", "#00A1CB", "#115793"];
  fetch(categoriesURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    if (result.error) {
      getToken(); //console.log(result.error)
    } else {
      //console.log(result)
      //console.log(result.categories.items) 
      result.categories.items.forEach(function (element, index) {
        console.log(element); //console.log(element.name)
        //Template

        var containerCategories = document.getElementById("dropdown");
        var templateCategories = document.getElementById("categories-template");
        var cloneCategories = templateCategories.content.cloneNode(true);
        cloneCategories.querySelector(".categories__title").innerText = element.name;
        cloneCategories.querySelector(".dropdown .dropbtn").style.background = categoriesColors[index]; // Tilføjer clone

        containerCategories.appendChild(cloneCategories);
      });
    }
  });
  /* 		////////////////////////// TILFØJER SUBCATEGORIES /////////////////////////////////////
  var subCategoriesID = element.id;
  
  fetch(`https://api.spotify.com/v1/browse/categories/${subCategoriesID}/playlists`, {
  	method: "GET",
  	headers: {
  		"Authorization": 'Bearer ' + sessionStorage.token
  	}
  })
  .then((response) => response.json())
  .then((result) => {
  	if (result.error && result.error.status === 401){
  		getToken();
  	}else{
  		result.playlists.items.forEach(element => {
  			const templateSubcategories = document.getElementById("subcategories-template").content.cloneNode(true);
  			const containerSubcategories = templateSubcategories.querySelector("li a"); true
  			
  			containerSubcategories.innerText = element.name;
  			
  			containerCategoriesUl.appendChild(templateSubcategories);
  		});
  		containerCategoriesLi.appendChild(templateCategories);
  	}
  }) */
});