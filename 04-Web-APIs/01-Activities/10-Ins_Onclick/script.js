var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";

themeSwitcher.addEventListener("click", swi);

function swi() {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
}