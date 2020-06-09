document.addEventListener("DOMContentLoaded", () =>{

	////////////////////////////// FEATURED ALBUMS /////////////////////////////////

	let allAlbumsURL = "https://api.spotify.com/v1/browse/new-releases";
	
	fetch(allAlbumsURL, {
		method: "GET",
		headers: {
			"Authorization": 'Bearer ' + sessionStorage.token
		}
	})
	.then((response) => response.json())
	.then((result) => {
		//console.log(result.albums.items)
			if (result.error){
				getToken();
			}else{
				result.albums.items.forEach(element =>{
					/* let random = (int) (Math.random()*5);
					console.log(result.albums.items[random]) */
					const containerAlbumsImage = document.querySelector(".featuredAlbums-cardListImage");
					const templateAlbumsImage = document.getElementById("featuredAlbums-imagesTemplate");
					const cloneAlbumsImage = templateAlbumsImage.content.cloneNode(true);
	
					cloneAlbumsImage.querySelector(".featuredAlbums__images").src = element.images[0].url;

					containerAlbumsImage.appendChild(cloneAlbumsImage);

				})
			}
			if (result.error){
				getToken();
			}else{
				result.albums.items.forEach(element => {
					
					const containerAlbumsList = document.querySelector(".featuredAlbums_cardListList");
					const templateAlbumsList = document.getElementById("featuredAlbums-listsTemplate");
					const cloneAlbumsList = templateAlbumsList.content.cloneNode(true);
			
					cloneAlbumsList.querySelector(".featuresAlbums__imageAlbumList").src = element.images[0].url;
					cloneAlbumsList.querySelector(".featuredAlbums__albumsListAlbumName").innerText = element.name;
					cloneAlbumsList.querySelector(".featuredAlbums__albumListSongNr").innerText = element.total_tracks;

					containerAlbumsList.appendChild(cloneAlbumsList);

				})
			}
	})

});