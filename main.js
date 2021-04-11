const iconoMenu = document.getElementById("icono-menu");
const menu = document.getElementById("menu");

iconoMenu.addEventListener("click", (e) => {
  menu.classList.toggle("active");
  document.body.classList.toggle("opacity");

  //Alterner atributo src para el icono del menu
  const rutaActual = e.target.getAttribute("src");
  if (rutaActual == "open-menu.png") {
    e.target.setAttribute("src", "open-menu2.png");
  } else {
    e.target.setAttribute("src", "open-menu.png");
  }
});
