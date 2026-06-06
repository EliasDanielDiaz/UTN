/* ============================
    PANELES DE CONTACTO
============================ */
const paneles = document.querySelectorAll(".panel");

paneles.forEach((panel) => {
  const boton = panel.querySelector(".toggle");

  boton.addEventListener("click", () => {

    // Cerrar todos los demás paneles
    paneles.forEach((p) => {
      if (p !== panel) p.classList.remove("abierto");
    });

    // Abrir/cerrar el panel clickeado
    panel.classList.toggle("abierto");
  });
});
