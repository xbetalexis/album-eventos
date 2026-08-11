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
   DATOS
========================= */

document.getElementById("tipo").textContent =
  evento.tipo;


document.getElementById("fecha").textContent =
  evento.fecha;


document.getElementById("mensaje").textContent =
  evento.mensaje;


document.getElementById("subir").href =
  evento.album;


document.getElementById("alias").textContent =
  evento.alias;


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


/* =========================
   COPIAR ALIAS
========================= */

const copiarAlias =
  document.getElementById("copiarAlias");


const copiado =
  document.getElementById("copiado");


copiarAlias.addEventListener("click", async () => {

  try {

    await navigator.clipboard.writeText(evento.alias);

    copiado.textContent =
      "✓ Alias copiado";

    copiarAlias.textContent =
      "COPIADO";

    setTimeout(() => {

      copiado.textContent =
        "";

      copiarAlias.textContent =
        "COPIAR";

    }, 2500);

  } catch {

    copiado.textContent =
      `Alias: ${evento.alias}`;

  }

});
