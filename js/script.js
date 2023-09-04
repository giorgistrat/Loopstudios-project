const hamBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

hamBtn.addEventListener("click", navToggle);

function navToggle() {
  hamBtn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}
