function abrirTelon() {
  const enlaces = document.getElementById("enlaces");
  const presentacion = document.getElementById("presentacion");
  var body = document.getElementsByTagName("body")[0];
  enlaces.style.opacity = 0;
  presentacion.style.opacity= 0;
  setTimeout(function() {
    enlaces.style.display="none";
    presentacion.style.display="none";
    body.style.overflow = "auto";
    // Aquí puedes continuar con el código que deseas ejecutar después de la pausa de 2 segundos
  }, 1100);
}	