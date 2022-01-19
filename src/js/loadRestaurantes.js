const insertaRestaurante = ({ nombre, imagen, informacion }) => {
    console.log(nombre, imagen, informacion);
    const containerFavorito = document.querySelector(".favoritos__grid");
    const divFavorito = document.createElement("div");
    const divFavoritoGrid = document.createElement("div");
    const divFavoritoImagen = document.createElement("div");
    const divFavoritoImagenIMG = document.createElement("img");
    const divFavoritoContenido = document.createElement("div");
    const divFavoritoContenidoIMG = document.createElement("img");
    const divFavoritoNombre = document.createElement("h3");
    const divFavoritoInformacion = document.createElement("p");

    /* asignacion de CSS clases */
    divFavorito.className = "favorito";
    divFavoritoGrid.className = "favorito__grid";
    divFavoritoImagen.className = "favorito__imagen";
    divFavoritoContenido.className = "favorito__contenido";
    divFavoritoNombre.className = "favorito__nombre";
    divFavoritoInformacion.className = "favorito__descripcion";

    /* crear estructura */
    divFavoritoImagenIMG.src = imagen;
    divFavoritoImagenIMG.alt = `logo del restaurante ${nombre}`;

    divFavoritoImagen.appendChild(divFavoritoImagenIMG);

    divFavoritoContenidoIMG.src = "build/img/estrellas.png";
    divFavoritoContenidoIMG.alt = `Calificacion del restaurante ${nombre}`;

    divFavoritoNombre.textContent = nombre;
    divFavoritoInformacion.textContent = informacion;

    divFavoritoContenido.appendChild(divFavoritoContenidoIMG);
    divFavoritoContenido.appendChild(divFavoritoNombre);
    divFavoritoContenido.appendChild(divFavoritoInformacion);

    divFavoritoGrid.appendChild(divFavoritoImagen);
    divFavoritoGrid.appendChild(divFavoritoContenido);

    divFavorito.appendChild(divFavoritoGrid);

    containerFavorito.appendChild(divFavorito);
};

export { insertaRestaurante };