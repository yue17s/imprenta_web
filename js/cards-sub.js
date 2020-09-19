let subproductos = document.querySelector(".subproductos");
let subID = document.getElementById("libros");
let subTitle = subID.title;
let subTitulo = document.querySelector(".subtitulo");

const crear = (elemento) => document.createElement(elemento);
const dibujarSubProductos = () => {
  imOnline[0].subProductos.forEach((objproductos) => {
    let card = crear("div");
    card.setAttribute("class", "card");

    let cardEnlace = crear("a");
    cardEnlace.setAttribute("href", `${objproductos.enlace_sub}`);

    let cardAll = crear("div");
    cardAll.setAttribute("class", "card__all");

    let cardTitulo = crear("div");
    cardTitulo.setAttribute("class", "card__titulo");
    cardTitulo.innerHTML = `<div class="card__titu">${objproductos.titulo_sub}</div>
                        `;

    let cardImagen = crear("div");
    cardImagen.setAttribute("class", "card__boton");
    cardImagen.innerHTML = `<div class="card__img">
                            <img src=${objproductos.img_sub} alt="" />
                            </div>
                        `;

    let cardBoton = crear("div");
    cardBoton.setAttribute("class", "card__imagen");
    cardBoton.innerHTML = `<div class="card__btn">
                            <button class="boton">
                            <i class="fas fa-calculator"></i> Calcular Precio
                            </button>
                            </div>
                        `;

    let cardTexto = crear("div");
    cardTexto.classList.add("card__texto");
    cardTexto.innerHTML = `<div class="card__txt">
                                <span>${objproductos.texto_sub}</span>
                            </div>
                        `;

    cardAll.appendChild(cardTitulo);
    cardAll.appendChild(cardImagen);
    cardAll.appendChild(cardBoton);
    cardAll.appendChild(cardTexto);

    cardEnlace.appendChild(cardAll);
    card.appendChild(cardEnlace);

    subproductos.appendChild(card);
  });

  /** REVISAR **/
  let cardSubTitu = crear("div");
  cardSubTitu.innerHTML = `<h4>Tipo de ${objproductos.titulo_id}</h4>`;
  subTitulo.appendChild(cardSubTitu);
   /******* */
};

const getProductosById = (id) => {
  if (imOnline[0].subProductos[0].id == subTitle) {
    dibujarSubProductos();
  }
};
let subProEncontrada = getProductosById(subTitle);
