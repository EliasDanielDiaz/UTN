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
    resena: `
<p><b>Cornelio Saavedra (1759–1829)</b></p>

<p>Cornelio Saavedra fue un <b>militar y político porteño</b>, figura central en los acontecimientos que llevaron a la Revolución de Mayo. Con amplia experiencia en las milicias criollas —donde se destacó durante las Invasiones Inglesas— se convirtió en un líder respetado por su prudencia, su capacidad organizativa y su influencia entre los cuerpos militares.</p>

<p>El <b>25 de mayo de 1810</b> fue elegido presidente de la <b>Primera Junta</b>, el primer gobierno patrio, lo que lo convirtió en una de las autoridades más importantes del inicio del proceso independentista. Su postura moderada buscaba evitar rupturas bruscas y mantener el orden mientras se avanzaba hacia la autonomía.</p>

<p>Aunque luego se retiró de la vida pública, Saavedra es recordado como un <b>conductor clave del primer gobierno argentino</b>, un hombre de mando firme y presencia decisiva en los días fundacionales.</p>
`,
  },

  paso: {
    nombre: "Juan José Paso",
    img: "imagenes/02JuanJosePaso.jpg",
    resena: `
<p><b>Juan José Paso (1758–1833)</b></p>

<p>Juan José Paso fue un <b>abogado, funcionario y político rioplatense</b> que desempeñó un papel fundamental en los debates y decisiones que llevaron a la formación del primer gobierno patrio. Su formación jurídica y su capacidad oratoria lo convirtieron en una figura influyente dentro del movimiento revolucionario.</p>

<p>Participó activamente en el <b>Cabildo Abierto del 22 de mayo de 1810</b>, donde defendió la idea de que el poder debía recaer en el pueblo ante la ausencia del rey. Tras la Revolución de Mayo, integró la <b>Primera Junta</b> como uno de sus dos secretarios, aportando claridad jurídica y firmeza política.</p>

<p>A lo largo de su vida ocupó diversos cargos públicos y continuó vinculado a los procesos institucionales del país. Es recordado como un <b>intelectual comprometido</b> con la causa de la independencia y la organización del Estado.</p>
`,
  },

  matheu: {
    nombre: "Domingo Matheu",
    img: "imagenes/03DomingoMatheu.jpg",
    resena: `
<p><b>Domingo Matheu (1765–1831)</b></p>

<p>Domingo Matheu fue un <b>comerciante catalán</b> radicado en Buenos Aires que se convirtió en un firme defensor de la causa revolucionaria. Su experiencia en el comercio y su prestigio entre los sectores urbanos lo llevaron a ocupar un lugar destacado en la vida política del Río de la Plata.</p>

<p>Tras las Invasiones Inglesas, colaboró activamente con las milicias criollas y se ganó el respeto de los líderes patriotas. En 1810 fue designado vocal de la <b>Primera Junta</b>, donde aportó recursos, organización y apoyo logístico para sostener el proceso revolucionario.</p>

<p>Matheu es recordado como un <b>ciudadano comprometido</b> que puso su fortuna y su influencia al servicio de la independencia argentina.</p>
`,
  },

  larrea: {
    nombre: "Juan Larrea",
    img: "imagenes/04JuanLarrea.jpg",
    resena: `
<p><b>Juan Larrea (1782–1847)</b></p>

<p>Juan Larrea fue un <b>comerciante y político español</b> que se integró plenamente a la vida pública del Río de la Plata y apoyó decididamente la causa revolucionaria. Su visión económica y su capacidad administrativa lo convirtieron en una figura clave en los primeros gobiernos patrios.</p>

<p>En 1810 fue nombrado vocal de la <b>Primera Junta</b>, donde impulsó medidas para fortalecer la economía y asegurar recursos para las campañas militares. Más adelante, como miembro del Segundo Triunvirato, continuó promoviendo políticas de desarrollo y organización estatal.</p>

<p>Larrea es recordado como un <b>gestor eficaz</b> que contribuyó al sostenimiento material de la revolución y al crecimiento institucional del país.</p>
`,
  },

  castelli: {
    nombre: "Juan Jose Castelli",
    img: "imagenes/05JuanJoseCastelli.jpg",
    resena: `
<p><b>Juan José Castelli (1764–1812)</b></p>

<p>Juan José Castelli fue un <b>abogado, orador y revolucionario</b> conocido como el “Orador de la Revolución”. Su formación ilustrada y su pensamiento político avanzado lo convirtieron en una de las voces más influyentes del proceso emancipador.</p>

<p>Participó activamente en el <b>Cabildo Abierto del 22 de mayo</b> y fue uno de los principales impulsores de la destitución del virrey. Como vocal de la <b>Primera Junta</b>, encabezó la campaña al Alto Perú, donde proclamó medidas de libertad, igualdad y abolición de privilegios coloniales.</p>

<p>Aunque su campaña militar no tuvo el éxito esperado, Castelli es recordado como un <b>defensor apasionado de los ideales revolucionarios</b> y un símbolo del pensamiento político más avanzado de su tiempo.</p>
`,
  },

  moreno: {
    nombre: "Mariano Moreno",
    img: "imagenes/06MarianoMoreno.jpg",
    resena: `
<p><b>Mariano Moreno (1778–1811)</b></p>

<p>Mariano Moreno fue un <b>abogado, periodista y político revolucionario</b> cuya influencia intelectual marcó profundamente los primeros pasos de la independencia argentina. Su pensamiento ilustrado y su firme defensa de la libertad lo convirtieron en una de las figuras más destacadas de la Revolución de Mayo.</p>

<p>Como secretario de la <b>Primera Junta</b>, impulsó medidas decisivas para transformar el antiguo orden colonial: promovió la libertad de comercio, la modernización del Estado y la difusión de ideas revolucionarias. Su obra más influyente, la <b>Gazeta de Buenos Aires</b>, se convirtió en el principal medio de comunicación del nuevo gobierno.</p>

<p>Moreno defendió una postura política enérgica y reformista, orientada a consolidar la independencia y evitar retrocesos. Su temprana muerte en alta mar, en 1811, lo convirtió en un <b>símbolo del compromiso intelectual y político</b> con la causa emancipadora.</p>
`,
  },

  french: {
    nombre: "Domingo French",
    img: "imagenes/07DomingoFrench.jpg",
    resena: `
<p><b>Domingo French (1774–1825)</b></p>

<p>Domingo French fue un <b>militar y revolucionario porteño</b> que participó activamente en los acontecimientos que llevaron a la Revolución de Mayo. Su valentía y su compromiso con la causa patriota lo convirtieron en una figura destacada entre los grupos movilizados en 1810.</p>

<p>Junto con Antonio Beruti, encabezó a los llamados <b>“chisperos”</b>, quienes distribuyeron cintas blancas y celestes durante los días previos al 25 de mayo para identificar a los partidarios de la revolución. También colaboró en la presión popular que impulsó la formación de la Primera Junta.</p>

<p>French continuó vinculado a las milicias y a la actividad política, defendiendo los ideales de libertad y autonomía. Es recordado como un <b>protagonista clave del movimiento popular</b> que acompañó el nacimiento del primer gobierno patrio.</p>
`,
  },

  beruti: {
    nombre: "Antonio Beruti",
    img: "imagenes/08AntonioBeruti.jpg",
    resena: `
<p><b>Antonio Beruti (1772–1841)</b></p>

<p>Antonio Beruti fue un <b>militar y activista político</b> que desempeñó un papel fundamental en la movilización popular durante los días de la Revolución de Mayo. Su participación, junto a Domingo French, fue decisiva para sostener la presión social que permitió la formación del primer gobierno patrio.</p>

<p>Como líder de los <b>“chisperos”</b>, Beruti distribuyó cintas blancas y celestes entre los simpatizantes de la causa revolucionaria y colaboró en la organización de grupos que exigían la renuncia del virrey Cisneros. Su accionar contribuyó a consolidar el apoyo popular a la Junta.</p>

<p>Beruti continuó su carrera militar en los años posteriores y es recordado como un <b>símbolo del fervor patriótico</b> que acompañó el proceso revolucionario.</p>
`,
  },

  belgrano: {
    nombre: "Manuel Belgrano",
    img: "imagenes/09ManuelBelgrano.jpg",
    resena: `
<p><b>Manuel Belgrano (1770–1820)</b></p>

<p>Manuel Belgrano fue un <b>abogado, economista, militar y político</b> que se convirtió en una de las figuras más influyentes de la independencia argentina. Su pensamiento ilustrado y su compromiso con la educación y el progreso marcaron profundamente la historia del país.</p>

<p>Participó activamente en la Revolución de Mayo y fue uno de los vocales de la <b>Primera Junta</b>. Como general del Ejército del Norte, lideró campañas decisivas y obtuvo victorias emblemáticas como <b>Tucumán</b> y <b>Salta</b>, que fortalecieron la causa patriota.</p>

<p>En 1812 creó la <b>Bandera Argentina</b>, símbolo de unidad y libertad. Su vida estuvo marcada por la austeridad, el servicio público y la defensa de la educación como base del desarrollo nacional.</p>

<p>Belgrano es recordado como un <b>prócer fundamental</b>, cuya visión y sacrificio dejaron una huella imborrable en la identidad argentina.</p>
`,
  },

  brown: {
    nombre: "Guillermo Brown",
    img: "imagenes/10GuillermoBrown.jpg",
    resena: `
<p><b>Guillermo Brown (1777–1857)</b></p>

<p>Guillermo Brown fue un marino de origen irlandés que se convirtió en el <b>padre de la Armada Argentina</b> y una de las figuras más decisivas en la consolidación del poder naval del país durante sus primeros años de vida independiente.</p>

<p>Llegó al Río de la Plata a fines del siglo XVIII y, tras dedicarse al comercio marítimo, se unió a la causa revolucionaria. Su talento natural para la navegación y el combate lo llevó a ser nombrado <b>Comandante de la Primera Escuadra Naval</b> en 1814. Ese mismo año obtuvo su victoria más emblemática: el <b>Combate de Martín García</b>, un triunfo clave que permitió cortar el abastecimiento realista y asegurar el control patriota del estuario.</p>

<p>A lo largo de su carrera participó en múltiples campañas, entre ellas la <b>Guerra contra el Imperio del Brasil</b> (1825–1828), donde volvió a destacarse por su audacia y su capacidad para enfrentar fuerzas superiores. También defendió Buenos Aires durante los bloqueos anglo-franceses y mantuvo su compromiso con la causa nacional hasta avanzada edad.</p>

<p>Recordado por su valentía, su disciplina y su profundo sentido del deber, Brown es considerado uno de los grandes arquitectos de la soberanía argentina en el mar y un símbolo de la tradición naval del país.</p>
`,
  },

  azurduy: {
    nombre: "Juana de Azurduy",
    img: "imagenes/11JuanaDeAzurduy.jpg",
    resena: `
<p><b>Juana Azurduy (1780–1862)</b></p>

<p>Juana Azurduy fue una <b>militar y heroína de la independencia sudamericana</b>, reconocida por su valentía y liderazgo en las luchas contra las fuerzas realistas. Su compromiso con la libertad la convirtió en un símbolo de coraje y resistencia.</p>

<p>Junto a su esposo Manuel Padilla, organizó milicias indígenas y criollas en el Alto Perú. Participó en numerosos combates y llegó a comandar tropas propias, destacándose por su estrategia y determinación. En 1816 recibió el grado de <b>teniente coronela</b> por su actuación en batalla.</p>

<p>Azurduy enfrentó enormes sacrificios personales y continuó luchando incluso tras la muerte de su esposo. Hoy es recordada como una <b>figura emblemática de la lucha por la independencia</b> y un referente del protagonismo femenino en la historia latinoamericana.</p>
`,
  },

  guemes: {
    nombre: "Martín Miguel de Güemes",
    img: "imagenes/12MartinMiguelDeGuemes.jpg",
    resena: `
<p><b>Martín Miguel de Güemes (1785–1821)</b></p>

<p>Martín Miguel de Güemes fue un <b>militar salteño</b> que desempeñó un papel decisivo en la defensa del norte argentino durante la guerra de independencia. Su liderazgo en la guerra de guerrillas permitió contener repetidas invasiones realistas.</p>

<p>Al mando de los <b>Infernales</b>, un cuerpo de gauchos armados, Güemes aplicó tácticas de desgaste que impidieron el avance enemigo hacia el interior del país. Su colaboración con el Ejército del Norte y con San Martín fue clave para asegurar la retaguardia patriota.</p>

<p>Como gobernador de Salta, impulsó medidas para fortalecer la defensa y apoyar a las poblaciones locales. Es recordado como un <b>héroe popular</b> y uno de los principales defensores del territorio argentino.</p>
`,
  },

  sanmartin: {
    nombre: "Jose de San Martín",
    img: "imagenes/13JoseDeSanMartin.jpg",
    resena: `
<p><b>José de San Martín (1778–1850)</b></p>

<p>José de San Martín fue un <b>militar y estratega</b> considerado uno de los libertadores de América. Su visión continental y su capacidad de liderazgo lo convirtieron en una figura central de la independencia de Argentina, Chile y Perú.</p>

<p>Tras organizar el <b>Ejército de los Andes</b>, llevó a cabo una de las campañas más audaces de la historia militar, cruzando la cordillera para liberar Chile y luego avanzar hacia Perú. Su estrategia aseguró la independencia del sur del continente.</p>

<p>San Martín defendió principios de disciplina, honor y libertad. Su retiro voluntario de la vida política lo consolidó como un <b>símbolo de integridad</b> y compromiso con la causa emancipadora.</p>
`,
  },

  dorrego: {
    nombre: "Manuel Dorrego",
    img: "imagenes/14ManuelDorrego.jpg",
    resena: `
<p><b>Manuel Dorrego (1787–1828)</b></p>

<p>Manuel Dorrego fue un <b>militar y político federal</b> que participó activamente en las guerras de independencia y en los primeros debates políticos del país. Su oratoria y su defensa del federalismo lo convirtieron en una figura influyente.</p>

<p>Combatió en el Ejército del Norte y apoyó la causa revolucionaria desde sus inicios. Más tarde, como gobernador de Buenos Aires, impulsó políticas populares y defendió la autonomía provincial.</p>

<p>Su fusilamiento en 1828 marcó uno de los episodios más controvertidos de la historia argentina. Hoy es recordado como un <b>defensor del federalismo</b> y de los sectores populares.</p>
`,
  },

  rivadavia: {
    nombre: "Bernardino Rivadavia",
    img: "imagenes/15BernardinoRivadavia.jpg",
    resena: `
<p><b>Bernardino Rivadavia (1780–1845)</b></p>

<p>Bernardino Rivadavia fue un <b>político y reformista</b> que impulsó importantes transformaciones institucionales y culturales en el Río de la Plata. Su visión modernizadora lo llevó a promover la educación, la ciencia y la organización del Estado.</p>

<p>En 1826 se convirtió en el <b>primer presidente de las Provincias Unidas del Río de la Plata</b>. Durante su gobierno impulsó reformas administrativas, la creación de instituciones culturales y el fomento de la inmigración.</p>

<p>Aunque su figura generó debates y controversias, Rivadavia es recordado como un <b>pionero de la organización nacional</b> y un impulsor del progreso intelectual.</p>
`,
  },

  rosas: {
    nombre: "Juan Manuel de Rosas",
    img: "imagenes/16JuanManuelDeRosas.jpg",
    resena: `
<p><b>Juan Manuel de Rosas (1793–1877)</b></p>

<p>Juan Manuel de Rosas fue un <b>político y estanciero</b> que gobernó Buenos Aires durante gran parte del siglo XIX. Su figura es una de las más debatidas de la historia argentina debido a su estilo de gobierno y su influencia política.</p>

<p>Como líder federal, consolidó el poder de la provincia y enfrentó conflictos internos y externos, incluyendo el <b>bloqueo anglo-francés</b>. Su gobierno se caracterizó por un fuerte control político y social.</p>

<p>Tras su derrota en Caseros, se exilió en Inglaterra. Rosas es recordado como un <b>protagonista central</b> del período de organización nacional, cuya figura sigue generando interpretaciones diversas.</p>
`,
  },

  varela: {
    nombre: "Florencio Varela",
    img: "imagenes/17FlorencioVarela.jpg",
    resena: `
<p><b>Florencio Varela (1807–1848)</b></p>

<p>Florencio Varela fue un <b>periodista, escritor y político</b> que se destacó por su oposición al gobierno de Rosas y por su defensa de las libertades civiles. Su labor intelectual influyó en el pensamiento político de su época.</p>

<p>Desde el exilio en Montevideo, escribió en diversos periódicos y promovió ideas de organización republicana y modernización institucional. Su crítica constante al régimen rosista lo convirtió en una figura influyente entre los opositores.</p>

<p>Varela es recordado como un <b>intelectual comprometido</b> con la libertad de expresión y el desarrollo político del país.</p>
`,
  },

  alberdi: {
    nombre: "Juan Bautista Alberdi",
    img: "imagenes/18JuanBautistaAlberdi.jpg",
    resena: `
<p><b>Juan Bautista Alberdi (1810–1884)</b></p>

<p>Juan Bautista Alberdi fue un <b>jurista, diplomático y pensador</b> cuya obra influyó decisivamente en la organización institucional de la Argentina. Su pensamiento liberal y su visión de país marcaron el rumbo de la Constitución de 1853.</p>

<p>Su obra más influyente, <b>“Bases y puntos de partida para la organización política de la República Argentina”</b>, sirvió como fundamento para la redacción constitucional. Defendió la inmigración, la educación y el desarrollo económico como pilares del progreso.</p>

<p>Alberdi es recordado como un <b>arquitecto intelectual</b> del Estado argentino moderno.</p>
`,
  },

  mitre: {
    nombre: "Bartolomé Mitre",
    img: "imagenes/19BartolomeMitre.jpg",
    resena: `
<p><b>Bartolomé Mitre (1821–1906)</b></p>

<p>Bartolomé Mitre fue un <b>militar, político, historiador y escritor</b> que desempeñó un papel central en la organización nacional. Su liderazgo político y su obra intelectual dejaron una profunda huella en la historia argentina.</p>

<p>En 1862 se convirtió en el <b>primer presidente de la Argentina unificada</b>. Durante su gobierno impulsó la organización institucional, la educación y la consolidación del Estado.</p>

<p>Mitre también fue un destacado historiador y fundador del diario <b>La Nación</b>. Es recordado como un <b>constructor del Estado moderno</b> y un referente cultural del país.</p>
`,
  },

  sarmiento: {
    nombre: "Domingo Faustino Sarmiento",
    img: "imagenes/20DomingoFaustinoSarmiento.jpg",
    resena: `
<p><b>Domingo Faustino Sarmiento (1811–1888)</b></p>

<p>Domingo Faustino Sarmiento fue un <b>educador, escritor, periodista y político</b> cuya obra transformó profundamente la educación y la cultura argentina. Su pensamiento progresista lo convirtió en uno de los grandes reformadores del país.</p>

<p>Como presidente (1868–1874), impulsó la <b>educación pública</b>, la formación docente, la creación de escuelas y la modernización del Estado. Su visión buscó integrar al país a través del conocimiento y el desarrollo social.</p>

<p>Sarmiento es recordado como el <b>“Padre del aula”</b> y uno de los principales impulsores del sistema educativo argentino.</p>
`,
  },
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
