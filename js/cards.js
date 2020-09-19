let productos = document.querySelector(".productos");

const crear = (elemento) => document.createElement(elemento);
const dibujarProductos = () => {
  imOnline.forEach((objproductos) => {
    let card = crear("div");
    card.setAttribute("class", "card");

    let cardEnlace = crear("a");
    cardEnlace.setAttribute("href", `${objproductos.enlace}`);

    let cardAll = crear("div");
    cardAll.setAttribute("class", "card__all");

    let cardTitulo = crear("div");
    cardTitulo.setAttribute("class", "card__titulo");
    cardTitulo.innerHTML = `<div class="card__titu">${objproductos.titulo_main}</div>
                        `;

    let cardImagen = crear("div");
    cardImagen.setAttribute("class", "card__boton");
    cardImagen.innerHTML = `<div class="card__img">
                            <img src=${objproductos.img_main} alt="" />
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
                                <span>${objproductos.texto}</span>
                            </div>
                        `;

    cardAll.appendChild(cardTitulo);
    cardAll.appendChild(cardImagen);
    cardAll.appendChild(cardBoton);
    cardAll.appendChild(cardTexto);

    cardEnlace.appendChild(cardAll);
    card.appendChild(cardEnlace);

    productos.appendChild(card);
  });
};


dibujarProductos();