let Burger = document.querySelector(".burger");
let BurgerMenu = document.querySelector(".low-width-media-burger");
let alls = document.querySelector(".all-elements");



Burger.addEventListener("click", () => {
	if (Burger.classList.contains("burger_active")) {
		BurgerMenu.style.display = "none";
		Burger.classList.toggle("burger_active");
	}
	else {
		Burger.classList.add("burger_active");
		BurgerMenu.style.display = "block";
	}
})





BurgerMenu.onclick = function () {
	BurgerMenu.style.display = "none";
	Burger.classList.remove("burger_active");
}

alls.onclick = function () {
	BurgerMenu.style.display = "none";
	Burger.classList.remove("burger_active");
}



