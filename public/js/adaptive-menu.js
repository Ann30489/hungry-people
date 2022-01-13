let navbar = document.getElementById("navbar");
let container = document.getElementById("banner");
let burgerBtn = document.getElementById("burger");
let closeBtn = document.getElementById("navbar-btn");


function openNavbar() {
	navbar.style.width = "250px";
	container.style.marginLeft = "250px";
	container.style.transition = "1s";
	document.body.classList.add("lock");
	document.getElementsByTagName('html')[0].style.overflowY = "hidden";

}

function closeNavbar() {
	navbar.style.width = "0";
	container.style.marginLeft = "0";
	document.body.classList.remove("lock");
	document.getElementsByTagName('html')[0].style.overflowY = "visible";
}

burgerBtn.addEventListener("click", () => {
	openNavbar();
});

closeBtn.addEventListener("click", () => {
	closeNavbar();
});