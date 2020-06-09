"use strict";

document.addEventListener("DOMContentLoaded", function () {
  ////////////////////////////// FEATURED ALBUMS /////////////////////////////////
  var allAlbumsURL = "https://api.spotify.com/v1/browse/new-releases";
  fetch(allAlbumsURL, {
    method: "GET",
    headers: {
      "Authorization": 'Bearer ' + sessionStorage.token
    }
  }).then(function (response) {
    return response.json();
  }).then(function (result) {
    //console.log(result.albums.items)
    if (result.error) {
      getToken();
    } else {
      result.albums.items.forEach(function (element) {
        /* let random = (int) (Math.random()*5);
        console.log(result.albums.items[random]) */
        var containerAlbumsImage = document.querySelector(".featuredAlbums-cardListImage");
        var templateAlbumsImage = document.getElementById("featuredAlbums-imagesTemplate");
        var cloneAlbumsImage = templateAlbumsImage.content.cloneNode(true);
        cloneAlbumsImage.querySelector(".featuredAlbums__images").src = element.images[0].url;
        containerAlbumsImage.appendChild(cloneAlbumsImage);
      });
    }

    if (result.error) {
      getToken();
    } else {
      result.albums.items.forEach(function (element) {
        var containerAlbumsList = document.querySelector(".featuredAlbums_cardListList");
        var templateAlbumsList = document.getElementById("featuredAlbums-listsTemplate");
        var cloneAlbumsList = templateAlbumsList.content.cloneNode(true);
        cloneAlbumsList.querySelector(".featuresAlbums__imageAlbumList").src = element.images[0].url;
        cloneAlbumsList.querySelector(".featuredAlbums__albumsListAlbumName").innerText = element.name;
        cloneAlbumsList.querySelector(".featuredAlbums__albumListSongNr").innerText = element.total_tracks;
        containerAlbumsList.appendChild(cloneAlbumsList);
      });
    }
  });
});