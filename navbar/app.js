const sidebar = document.querySelector(".sidebar");
const navLink = document.querySelector(".nav__link");

sidebar.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});
