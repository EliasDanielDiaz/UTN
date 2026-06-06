/* ============================
   DETECTAR PÁGINA ACTUAL
============================ */
const archivoActual = window.location.pathname.split("/").pop();

const enlaces = document.querySelectorAll("nav ul li a");

enlaces.forEach((enlace) => {
  const href = enlace.getAttribute("href");

  if (href === archivoActual) {
    enlace.setAttribute("aria-current", "page");
  } else {
    enlace.removeAttribute("aria-current");
  }
});

/* ============================
   MENÚ HAMBURGUESA
============================ */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
});

enlaces.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("open");
  });
});
