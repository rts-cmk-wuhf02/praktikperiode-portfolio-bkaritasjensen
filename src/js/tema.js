document.addEventListener("DOMContentLoaded", () => {
	// FINDER DEN SIDST VALGTE TEMA
	var currentTheme = localStorage.getItem('current-theme');
	document.documentElement.setAttribute('data-theme', currentTheme);

	// CHECK TEMA ELLER ÆNDRE
	var checkTheme = document.querySelector(".change-theme");

	checkTheme.addEventListener("click", () =>{
		if(document.documentElement.dataset.theme == "light"){
			document.documentElement.setAttribute('data-theme', 'dark');

			checkTheme.classList.add("dark-theme-activate");
			localStorage.setItem('current-theme', 'dark');
		}else{
			document.documentElement.setAttribute('data-theme', 'light');

			checkTheme.classList.remove("dark-theme-activate");
			localStorage.setItem('current-theme', 'light')
		}
	})
});