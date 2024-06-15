const btn = document.getElementById("menu-btn");
const meun = document.getElementById("menu");

const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");

btn.addEventListener("click", navToggle);

// Toggle mobile  menu
function navToggle() {
  btn.classList.toggle("open");
  meun.classList.toggle("flex");
  meun.classList.toggle("hidden");
}
linkForm.addEventListener("submit", formSubmit);
