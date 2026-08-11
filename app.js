const slug =
  new URLSearchParams(location.search).get("evento") ||
  location.pathname.split("/").filter(Boolean).pop() ||
  "valentina-xv";

const evento =
  EVENTOS[slug] ||
  EVENTOS["valentina-xv"];

document.getElementById("tipo").textContent =
  evento.tipo;

document.getElementById("nombre").textContent =
  evento.nombre;

document.getElementById("fecha").textContent =
  evento.fecha;

document.getElementById("mensaje").textContent =
  evento.mensaje;

document.getElementById("subir").href =
  evento.album;

document.querySelector(".hero").style.backgroundImage =
  `url("${evento.fondo}")`;
