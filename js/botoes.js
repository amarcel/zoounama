const btnMenuOpen = document.querySelector(".button__menu--open");
const btnMenuClose = document.querySelector(".button__menu--close");
const btnTop = document.querySelector(".button__go-top");
const navMenu = document.querySelector(".nav-menu");

function showMenuMobile() {
  navMenu.classList.toggle("show");
  btnTop.classList.toggle("remove");
}

btnMenuOpen.addEventListener("click", () => {
  showMenuMobile();
});

btnMenuClose.addEventListener("click", () => {
  showMenuMobile();
});
