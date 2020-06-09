"use strict";

document.addEventListener("DOMContentLoaded", function () {
  //////////////////////////////// PLAYLISTS //////////////////////////////////
  var playlistsURL = "https://api.spotify.com/v1/browse/featured-playlists";
  fetch(playlistsURL, {
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
      result.playlists.items.forEach(function (element) {
        //console.log(element) 
        var containerImage = document.querySelector(".swiper-wrapper");
        var templateImage = document.getElementById("playlists-images");
        var cloneImage = templateImage.content.cloneNode(true);
        cloneImage.querySelector(".swiper-slide").style = "background-image:url(" + element.images[0].url + ")";
        containerImage.appendChild(cloneImage);
      });
    } ///////////////////////////////////// TRACKS API ////////////////////////////////////////


    var playlistsTracksURL = "https://api.spotify.com/v1/browse/featured-playlists";
    fetch(playlistsTracksURL, {
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
        result.playlists.items.forEach(function (element) {
          var playlistURL = element.tracks.href;
          fetch(playlistURL, {
            method: "GET",
            headers: {
              "Authorization": 'Bearer ' + sessionStorage.token
            }
          }).then(function (response) {
            return response.json();
          }).then(function (result) {
            //console.log(result)
            if (result.error) {
              getToken();
            } else {
              result.items.forEach(function (element) {
                console.log("NUMRE FRA PLAYLISTE", element);
                var containerPlaylist = document.querySelector(".playlists__playlist");
                var templatePlaylist = document.getElementById("playlists-playlists");
                var clonePlaylist = templatePlaylist.content.cloneNode(true);
                clonePlaylist.querySelector(".albumDetails__albumsListAlbumName").innerText = element.track.name;
                clonePlaylist.querySelector(".albumDetails__albumsListAlbumArtist").innerText = element.track.artists[0].name;
                clonePlaylist.querySelector(".playlists__playlistsLink").href = "/player/?id=".concat(element.track.id);
                /* module.export = { choosenTrackURL }; */

                containerPlaylist.appendChild(clonePlaylist);
              });
              result.items.track.id.forEach(function (element) {//console.log(element)

                /* document.querySelector(".player__songInfoArtistName").innerText = result.items[0].track.name;
                document.querySelector(".player_songInfoArtist").innerText = element.track.artists[0].name;
                document.querySelector(".").src = element.track.album.images[0]; */
              });
            }
          });
        });
      }
    });
  });
  /* 	///////////////////////////// VISER TRACKS FRA DET VALGTE PLAYLISTE //////////////////// 
  
  	//Hvis det midste playliste er vist
  	let Image = querySelector(".swiper-slide");
  
  	if(Image === show){
  
  	}
  	
  	//Skal den vise playlistens titel
  	//Skal den vise albummets tracks */
});