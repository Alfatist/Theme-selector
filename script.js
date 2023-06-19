const theme_selector = document.querySelector(".theme_selector");
document.onkeyup = function (event) {
  if (event.key === "AltGraph" && event.ctrlKey) {
    trocaCor();
  }
};

function showSelector() {
  theme_selector.style.transform = "translate(0%, -50%)";
}

function hideSelector() {
  theme_selector.style.transform = "translate(100%, -50%)";
}

function trocaCor() {
  let botao = document.querySelector(".theme-circle:checked");
  botao.nextElementSibling ? (botao.nextElementSibling.checked = true) : (document.querySelector(".theme-circle").checked = true);
}
