// close read more button when clicked
document.getElementById("read-more-button").addEventListener('click', (e) => {
    e.target.style.display = "none";
})

const navBar = document.querySelector("nav")
const navbarToggler = document.getElementById("navbar-toggler-button");
const collapsable = document.getElementById("navbarsExample11");


navbarToggler.addEventListener("click", ()=>{
	if (navbarToggler.classList.contains("collapsed")){
		navBar.style.height = "100px";
		collapsable.style.paddingBottom = "0px";
	} else{
		navBar.style.height = "fit-content";
		collapsable.style.paddingBottom = "30px";
	}
})

