let body = document.querySelector("body");
let html = document.querySelector("html");
let navRedes = document.getElementById("nav__redes");
let navBarra = document.getElementById("nav__barra");
let navImg = document.getElementById("nav__img");

body.onscroll = (e) => {
  let scrollAbajo = html.scrollTop;

  if (scrollAbajo > 40) {
    navRedes.classList.add("none");
    navBarra.classList.add("fixed");
    navImg.classList.add("pequenio");
  } else {
    navRedes.classList.remove("none");
    navBarra.classList.remove("fixed");
    navImg.classList.remove("pequenio");
  }
};
