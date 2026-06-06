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

// Paneles Contacto
const paneles = document.querySelectorAll(".panel");

paneles.forEach((panel) => {
  const boton = panel.querySelector(".toggle");

  boton.addEventListener("click", () => {
    paneles.forEach((p) => {
      if (p !== panel) p.classList.remove("abierto");
    });

    panel.classList.toggle("abierto");
  });
});



