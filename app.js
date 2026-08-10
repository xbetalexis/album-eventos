const slug = new URLSearchParams(location.search).get("evento") || "sophia-xv";
const evento = EVENTOS[slug] || EVENTOS["sophia-xv"];

document.getElementById("tipo").textContent = evento.tipo;
document.getElementById("nombre").textContent = evento.nombre;
document.getElementById("fecha").textContent = evento.fecha;
document.getElementById("mensaje").textContent = evento.mensaje;
document.getElementById("subir").href = evento.album;
document.getElementById("ver").href = evento.album;
document.querySelector(".hero").style.backgroundImage = `url("${evento.fondo}")`;

if (evento.album.includes("PEGA_ACA")) {
  for (const id of ["subir", "ver"]) {
    const el = document.getElementById(id);
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Primero pegá el enlace del álbum de Google Fotos en eventos.js");
    });
  }
}
