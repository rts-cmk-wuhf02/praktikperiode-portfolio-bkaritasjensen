document.addEventListener("DOMContentLoaded", () =>{
	
	//////////////////////////////// FEATURED //////////////////////////////////

	let featuredURL = "https://api.spotify.com/v1/browse/featured-playlists";

	fetch(featuredURL, {
		method: "GET",
		headers: {
			"Authorization": 'Bearer ' + sessionStorage.token
		}
	})
	.then((response) => response.json())
	.then((result) => {
		if (result.error){
			getToken();
		}else{
			//console.log(result)
			//console.log(result.playlists.items) 
			result.playlists.items.forEach(element => {
				console.log(element) 
				//console.log("HENTER BILLEDER", element.images[0].url)
				
				//Template
				const containerFeatured = document.getElementById("featured-cardList");
				const templateFeatured = document.getElementById("featured-template");

				const cloneFeatured = templateFeatured.content.cloneNode(true);

				cloneFeatured.querySelector(".featured__images").src = element.images[0].url;
				cloneFeatured.querySelector(".featured__imagesLink").href = `/playlists/${element.href}`;  
				
				// Tilføjer clone
				containerFeatured.appendChild(cloneFeatured);
			}); 
		}
	});

	
});