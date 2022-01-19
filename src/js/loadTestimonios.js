const insertaTestimonio = ({ cliente, comentario, imagen }) => {
    const containerTestimonios = document.querySelector(".testimoniales__grid");
    const divTestimonio = document.createElement("div");
    const headerTestimonio = document.createElement("header");
    const divImageTestimonio = document.createElement("div");
    const imgTestimonio = document.createElement("img");
    const divInfoTestimonio = document.createElement("div");
    const pAutoTestimonio = document.createElement("p");
    const imgCalificacion = document.createElement("img");
    const blkTxtTestimonio = document.createElement("blockquote");

    // header
    headerTestimonio.className = "testimonial__header";
    divImageTestimonio.className = "testimonial__imagen";
    imgTestimonio.src = imagen;
    imgTestimonio.alt = "testimonial";
    divImageTestimonio.appendChild(imgTestimonio);

    divInfoTestimonio.className = "testimonial__informacion";
    pAutoTestimonio.className = "testimonial__autor";
    pAutoTestimonio.innerText = cliente;
    imgCalificacion.className = "testimonial__calificacion";
    imgCalificacion.src = "build/img/estrellas.png";
    imgCalificacion.alt = "imagen estrellas";
    divInfoTestimonio.appendChild(pAutoTestimonio);
    divInfoTestimonio.appendChild(imgCalificacion);

    headerTestimonio.appendChild(divImageTestimonio);
    headerTestimonio.appendChild(divInfoTestimonio);

    // blockquote
    blkTxtTestimonio.className = "testimonial__texto";
    blkTxtTestimonio.innerText = comentario;

    divTestimonio.className = "testimonial";
    divTestimonio.appendChild(headerTestimonio);
    divTestimonio.appendChild(blkTxtTestimonio);

    containerTestimonios.appendChild(divTestimonio);
};

export { insertaTestimonio };