import { insertaRestaurante } from "./loadRestaurantes.js";

const loadRestaurantes = () => {
    /* 1.instanciar variable */
    const idXhr = document.getElementById("mis-restaurantes"),
        xhr = new XMLHttpRequest(),
        fragment = document.createDocumentFragment();

    /* 2.asignar evento(s) */
    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            const json = JSON.parse(xhr.responseText);
            json.forEach((restaurante) => {
                insertaRestaurante(restaurante);
            });
        } else {
            const message = xhr.statusText || "Ocurrio un error !";
            idXhr.innerHTML = `Atención! ${xhr.statusText}: ${message}`;
        }
    });

    /* 3. abrir peticion / establecer la forma / recurso (url) o el endpoint */
    xhr.open("GET", "./build/js/restaurantes.json");

    /* 4.enviar la peticion */
    xhr.send();
};

export default loadRestaurantes;

/* Nota: se utiliza XMLHttpRequest para tener referencia de otra forma (antigua) de acceso datos remotos */