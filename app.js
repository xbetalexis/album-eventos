const parametros =
  new URLSearchParams(window.location.search);


const eventoURL =
  window.location.pathname
    .split("/")
    .filter(Boolean)
    .pop();


const slug =
  parametros.get("evento") ||
  eventoURL ||
  "valentina-xv";


const evento =
  EVENTOS[slug] ||
  EVENTOS["valentina-xv"];


/* =========================
   DATOS DEL EVENTO
========================= */

document.getElementById("tipo").textContent =
  evento.tipo;


document.getElementById("fecha").textContent =
  evento.fecha;


document.getElementById("mensaje").textContent =
  evento.mensaje;


document.getElementById("subir").href =
  evento.album;


/* =========================
   NOMBRE + CORAZÓN
========================= */

const nombreElemento =
  document.getElementById("nombre");


const nombre =
  evento.nombre;


const posicionI =
  nombre.toLowerCase().lastIndexOf("i");


if (posicionI !== -1) {

  const antes =
    nombre.substring(0, posicionI);


  const despues =
    nombre.substring(posicionI + 1);


  nombreElemento.innerHTML =
    `${antes}<span class="i-corazon">ı<span class="corazon">♥</span></span>${despues}`;

} else {

  nombreElemento.textContent =
    nombre;

}


/* =========================
   FONDO
========================= */

document.querySelector(".hero").style.backgroundImage =
  `url("${evento.fondo}")`;
