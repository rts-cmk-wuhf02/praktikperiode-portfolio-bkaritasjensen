"use strict";

///////////////////////////////////GET TOKEN/////////////////////////////////////
if (sessionStorage.getItem('token') === null) {
  getToken();
}

function getToken() {
  var clientId = "da7eb70a3a7e4d25ae8f80e7746078c0";
  var ClientSecret = "eaad342834ca418aa85427b2dc264530";
  fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": "Basic " + btoa(clientId + ":" + ClientSecret)
    },
    body: "grant_type=client_credentials"
  }).then(function (respons) {
    return respons.json();
  }).then(function (resultat) {
    return sessionStorage.setItem('token', resultat.access_token);
  });
}

;