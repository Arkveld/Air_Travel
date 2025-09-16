//! Menu burger

const toggleMenu = document.querySelector(".responsive-menu");
const menu = document.querySelector(".menu");
toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("active");
  menu.classList.toggle("responsive");
});
