import { insertaTestimonio } from "./loadTestimonios.js";

const loadTestimonios = async() => {
    const loader = document.querySelector(".loader");
    try {
        const data = await fetch("./build/js/testimonios.json");
        if (!data.ok) {
            throw "Archivo no encontrado !";
            return;
        } else {
            const resp = await data.json();
            /* uso setTimeout para simular carga de datos desde una servidor */
            setTimeout(() => {
                loader.remove();
                Object.keys(resp).forEach((key) => {
                    insertaTestimonio(resp[key]);
                });
            }, 500);
        }
    } catch (error) {
        console.log(error);
    }
};

export default loadTestimonios;