"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //////////////////////////////// FEATURED //////////////////////////////////
  var featuredURL = "https://api.spotify.com/v1/browse/featured-playlists";
  fetch(featuredURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    if (result.error) {
      getToken();
    } else {
      //console.log(result)
      //console.log(result.playlists.items) 
      result.playlists.items.forEach(function (element) {
        console.log(element); //console.log("HENTER BILLEDER", element.images[0].url)
        //Template

        var containerFeatured = document.getElementById("featured-cardList");
        var templateFeatured = document.getElementById("featured-template");
        var cloneFeatured = templateFeatured.content.cloneNode(true);
        cloneFeatured.querySelector(".featured__images").src = element.images[0].url;
        cloneFeatured.querySelector(".featured__imagesLink").href = "/playlists/".concat(element.href); // Tilføjer clone

        containerFeatured.appendChild(cloneFeatured);
      });
    }
  });
});