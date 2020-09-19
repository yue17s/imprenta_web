const btnIO = document.querySelector(".btnIO");
const btnCO = document.querySelector(".btnCO");
const carusel = document.querySelector(".carusel");
const ofrece = document.getElementById("ofrece");

const flkty = new Flickity(carusel, {
  cellAlign: "center",
  contain: true,
  autoPlay: true,
});

/** efecto clic WAVES */
/*btnIO.onclick = () => {
  Waves.init();
  Waves.attach(btnIO);
  location.href = "./impreonline.html";
};

btnCO.onclick = () => {
  console.log("HOLA");
  Waves.init();
  Waves.attach(btnCO);
  location.href = "./contactanos.html";
};*/
function llamarPaginaImpreOnline() {
  llamaImpreOnline();
}
function llamarPaginaContactanos() {
  llamaContactanos();
}

function llamaContactanos() {
  location.href = "./contactanos.html";
}
function llamaImpreOnline() {
  location.href = "./impreonline.html";
}
