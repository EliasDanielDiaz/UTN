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

// panel flotante de proceres
const panel = document.getElementById("panel");
const cerrarPanel = document.getElementById("cerrarPanel");

const infoProceres = {
    saavedra: {
    nombre: "Cornelio Saavedra",
    img: "imagenes/01CornelioSaavedra.jpg",
    resena: "<b>Cornelio Saavedra (1759–1829)</b><br><br>Cornelio Saavedra fue un <b>militar y político porteño,</b> figura central en los acontecimientos que llevaron a la Revolución de Mayo. Con amplia experiencia en las milicias criollas —donde se destacó durante las Invasiones Inglesas— se convirtió en un líder respetado por su prudencia, su capacidad organizativa y su influencia entre los cuerpos militares.<br><br>El 25 de mayo de 1810 fue elegido <b>presidente de la Primera Junta,</b> el primer gobierno patrio, lo que lo convirtió en una de las autoridades más importantes del inicio del proceso independentista. Su postura moderada buscaba evitar rupturas bruscas y mantener el orden mientras se avanzaba hacia la autonomía.<br><br>Aunque luego se retiró de la vida pública, Saavedra es recordado como un <b>conductor clave del primer gobierno argentino,</b> un hombre de mando firme y presencia decisiva en los días fundacionales.",
    },

    paso: {
    nombre: "Juan José Paso",
    img: "imagenes/02JuanJosePaso.jpg",
    resena: "<b>Juan José Paso (1758–1833)</b><br><br>Juan José Paso fue un <b>abogado, político y revolucionario rioplatense,</b> protagonista clave en los primeros gobiernos patrios. Formado en el Colegio Monserrat y en la Universidad de Córdoba, se destacó por su solidez jurídica y su capacidad para negociar en momentos críticos.<br><br>Participó activamente en la <b>Revolución de Mayo</b> y fue elegido <b>secretario de la Primera Junta,</b> donde redactó documentos fundamentales y ayudó a organizar la administración del nuevo gobierno. Más tarde integró el <b>Primer y Segundo Triunvirato,</b> ocupando un rol central en la conducción política del país durante los años iniciales de la independencia.<br><br>Paso es recordado como un <b>hombre de pluma y de Estado,</b> prudente, meticuloso y esencial para sostener la estructura institucional en tiempos de enorme inestabilidad.",
    },
    
    Matheu: {
    nombre: "Domingo Matheu",
    img: "imagenes/03DomingoMatheu.jpg",
    resena: "Domingo Matheu...",
    },
    
    Larrea: {
    nombre: "Juan Larrea",
    img: "imagenes/04JuanLarrea.jpg",
    resena: "Juan Larrea...",
    },
    
    Castelli: {
    nombre: "Juan Jose Castelli",
    img: "imagenes/05JuanJoseCastelli.jpg",
    resena: "Juan Jose Castelli...",
    },
  // Agregás los demás próceres acá
};

// ABRIR PANEL
document.querySelectorAll(".btn-info").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Evitar que el botón interno active este evento
    if (btn.id === "btn-panel") return;

    const procer = e.target.parentElement.dataset.procer;
    const data = infoProceres[procer];

    document.getElementById("panel-img").src = data.img;
    document.getElementById("panel-nombre").textContent = data.nombre;
    document.getElementById("panel-resena").innerHTML = data.resena;

    panel.classList.add("activo");

    // Cambiar texto del botón dentro del panel
    document.getElementById("btn-panel").textContent = "Ocultar reseña";
  });
});

// CERRAR PANEL DESDE EL BOTÓN INTERNO
document.getElementById("btn-panel").addEventListener("click", () => {
  panel.classList.remove("activo");
  document.getElementById("btn-panel").textContent = "Ver reseña";
});
