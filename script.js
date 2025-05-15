document.addEventListener("DOMContentLoaded", function () {
	const projectCards = document.querySelectorAll(".project-card");

	projectCards.forEach((card) => {
		card.addEventListener("click", function () {
			window.open(card.href);
		});
	});
});

document.getElementById("menu-toggle").onclick = function () {
	document.getElementById("mobile-menu").classList.toggle("open");
};
