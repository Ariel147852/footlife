// Carrusel de imágenes

let indice = 0; // inica en la primera imagen

// Función que muestra una imagen según el índice
function mostrarImagen(n) {
  let slides = document.getElementsByClassName("slide");

  // Si el índice es mayor al total, vuelve al inicio
  if (n >= slides.length) {
    indice = 0;
  }

  // Si el índice es menor a 0, va a la última imagen
  if (n < 0) {
    indice = slides.length - 1;
  }

  // Oculta todas las imágenes antes de mostrar la actual 
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Muestra la imagen actual
  slides[indice].style.display = "block"; 
}

// Función para cambiar de imagen adelante o atrás
function cambiarImagen(paso) {
  indice = indice + paso; // suma o resta 1
  mostrarImagen(indice);
}

// Función para el carrusel automático
function automatico() {
  indice++;
  mostrarImagen(indice);
  setTimeout(automatico, 4000); // cambia cada 4 segundos
}

// Cuando carga la página
document.addEventListener("DOMContentLoaded", function () {
  mostrarImagen(indice); // muestra la primera

  // Botones izquiera y derecha
  let botonPrev = document.querySelector(".prev");
  let botonNext = document.querySelector(".next");

  // Cuando el usuario hace clic, cambia la imagen antes o después
  botonPrev.addEventListener("click", function () {
    cambiarImagen(-1);
  });
// Botón siguiente 
  botonNext.addEventListener("click", function () { 
    cambiarImagen(1);
  });

  // Inicia el carrusel automático
  automatico();
});