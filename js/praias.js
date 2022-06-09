import infoPraias from "./api/api-praias.js";

const infoBox = document.querySelector("#info-box");
const atalaiaThumb = document.querySelector("#atalaia");
const farolThumb = document.querySelector("#farol");
const lagoThumb = document.querySelector("#lagoCoca");

const tituloTag = document.createElement("h1");
const paragrafo1Tag = document.createElement("p");
const paragrafo2Tag = document.createElement("p");
const ancoraTag = document.createElement("a");

function clear() {
  if (tituloTag) {
    tituloTag.remove();
    paragrafo1Tag.remove();
    paragrafo2Tag.remove();
    ancoraTag.remove();
  }
}

atalaiaThumb.addEventListener("click", () => {
  clear();
  infoBox.appendChild(tituloTag).innerHTML = infoPraias[0].titulo;
  infoBox.appendChild(paragrafo1Tag).innerHTML = infoPraias[0].paragrafo1;
  infoBox.appendChild(paragrafo2Tag).innerHTML = infoPraias[0].paragrafo2;
  infoBox.appendChild(ancoraTag).setAttribute("href", infoPraias[0].fonte);
  infoBox.appendChild(ancoraTag).setAttribute("target", "_blank");

  ancoraTag.innerText = "fonte do texro";
});
farolThumb.addEventListener("click", () => {
  clear();
  infoBox.appendChild(tituloTag).innerHTML = infoPraias[2].titulo;
  infoBox.appendChild(paragrafo1Tag).innerHTML = infoPraias[2].paragrafo1;
  infoBox.appendChild(paragrafo2Tag).innerHTML = infoPraias[2].paragrafo2;
  infoBox.appendChild(ancoraTag).setAttribute("href", infoPraias[2].fonte);
  infoBox.appendChild(ancoraTag).setAttribute("target", "_blank");

  ancoraTag.innerText = "fonte do texro";
});
lagoThumb.addEventListener("click", () => {
  clear();
  infoBox.appendChild(tituloTag).innerHTML = infoPraias[1].titulo;
  infoBox.appendChild(paragrafo1Tag).innerHTML = infoPraias[1].paragrafo1;
  infoBox.appendChild(ancoraTag).setAttribute("href", infoPraias[1].fonte);
  infoBox.appendChild(ancoraTag).setAttribute("target", "_blank");

  ancoraTag.innerText = "fonte do texro";
});
