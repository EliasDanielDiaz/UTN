/* ============================
    BASE DE DATOS DE CURSOS
============================ */
const cursos = {

  "AFTE": {
    materias: [
      ["Ciencias Naturales", "LEGUIZAMÓN, Darío"],
      ["Ciencias Sociales", "LISTA, Gonzalo"],
      ["Construcción de la Ciudadanía", "ZERETZKI, Aurora"],
      ["Educación Artística", "PAZ, Fernando"],
      ["Educación Física", "GOLD, Víctor"],
      ["Inglés", "CARABAJAL, Pamela"],
      ["Matemática", "BISOGNO, Yamila"],
      ["Prácticas del Lenguaje", "BIANCHI, Anabel"]
    ],

    horarios: [
      ["7:30 a 8:30", "Prácticas del Lenguaje", "Construcción de la Ciudadanía", "Prácticas del Lenguaje", "Educación Física", "Matemática"],
      ["8:30 a 9:30", "Prácticas del Lenguaje", "Educación Física", "Ciencias Naturales", "Prácticas del Lenguaje", "Matemática"],
      ["9:40 a 10:40", "Inglés", "Ciencias Sociales", "Ciencias Naturales", "Ciencias Sociales", "Educación Artística"],
      ["10:50 a 11:50", "Inglés", "Ciencias Sociales", "Ciencias Naturales", "Construcción de la Ciudadanía", "Educación Artística"],
      ["11:50 a 12:50", "-----", "-----", "Matemática", "Matemática", "-----"]
    ]
  },

  "1_A": {
    materias: [
      ["Ciencias Naturales", "MANCILLA, Cinthya"],
      ["Ciencias Sociales", "ZERETZKI, Aurora"],
      ["Construcción de la Ciudadanía", "ROUSSINEAU, Gisela"],
      ["Educación Artística", "ALVARADO, Diego"],
      ["Educación Física", "GOLD, Víctor / MENDEZ CARBALLO, Ezequiel"],
      ["Inglés", "FRAGELLI, María Fernanda"],
      ["Matemática", "SÁNCHEZ, Soledad"],
      ["Prácticas del Lenguaje", "AZUAGA, Iliana"]
    ],

    horarios: [
      ["7:30 a 8:30", "Prácticas del Lenguaje", "Ciencias Naturales", "Ciencias Sociales", "Matemática", "Ciencias Sociales"],
      ["8:30 a 9:30", "Prácticas del Lenguaje", "Ciencias Naturales", "Ciencias Naturales", "Matemática", "Ciencias Sociales"],
      ["9:40 a 10:40", "Educación Artística", "Prácticas del Lenguaje", "Inglés", "Ciencias Sociales", "Construcción de la Ciudadanía"],
      ["10:50 a 11:50", "Educación Artística", "Prácticas del Lenguaje", "Inglés", "Ciencias Naturales", "Construcción de la Ciudadanía"],
      ["11:50 a 12:50", "Educación Física", "Matemática", "Matemática", "Educación Física", "-----"]
    ]
  },

  "1_B": {
    materias: [
      ["Ciencias Naturales", "MENDIVE, Gisela"],
      ["Ciencias Sociales", "LISTA, Gonzalo"],
      ["Construcción de la Ciudadanía", "GOLD, Victor / PONCE, Fernando"],
      ["Educación Artística", "CUADRADO, Silvia"],
      ["Educación Física", "GOLD, Victor / GOLD, Victor"],
      ["Inglés", "CASINELLI, Mariana / ORREGO, Mónica"],
      ["Matemática", "BISOGNO, Yamila"],
      ["Prácticas del Lenguaje", "BIANCHI, Anabel / VICINO, Bruno"]
    ],

    horarios: [
      ["7:30 a 8:30", "Inglés", "Educación Física", "Prácticas del Lenguaje", "Matemática", "Educación Física"],
      ["8:30 a 9:30", "Inglés", "Ciencias Naturales", "Prácticas del Lenguaje", "Matemática", "Ciencias Naturales"],
      ["9:40 a 10:40", "Construcción de la Ciudadanía", "Ciencias Naturales", "Matemática", "Ciencias Naturales", "Educación Artística"],
      ["10:50 a 11:50", "Construcción de la Ciudadanía", "Educación Artística", "Matemática", "Ciencias Sociales", "Prácticas del Lenguaje"],
      ["11:50 a 12:50", "Ciencias Sociales", "Ciencias Sociales", "-----", "Ciencias Sociales", "Prácticas del Lenguaje"]
    ]
  },
  
  "2_A": {
    materias: [
      ["Biología", "VALLEJOS, Daiana"],
      ["Construcción de la Ciudadanía", "SILVELA, Pablo"],
      ["Educación Artística", "PAZ, Fernando"],
      ["Educación Física", "KIENER, Victoria"],
      ["Físicoquímica", "ÁLVAREZ, Paula"],
      ["Geografía", "PATISCO, Hebe"],
      ["Historia", "GUERRATO, Virginia"],
      ["Inglés", "BUSTINGORRI, Guadalupe"],
      ["Matemática", "BISOGNO, Yamila"],
      ["Prácticas del Lenguaje", "AZUAGA, Iliana"]
    ],

    horarios: [
      ["7:30 a 8:30", "Educación Artística", "Prácticas del Lenguaje", "Matemática", "Biología", "Geografía"],
      ["8:30 a 9:30", "Educación Artística", "Prácticas del Lenguaje", "Matemática", "Biología", "Geografía"],
      ["9:40 a 10:40", "Físicoquímica", "Inglés", "Físicoquímica", "Matemática", "Construcción de la Ciudadanía"],
      ["10:50 a 11:50", "Prácticas del Lenguaje", "Inglés", "Historia", "Matemática", "Construcción de la Ciudadanía"],
      ["11:50 a 12:50", "Prácticas del Lenguaje", "Educación Física", "Historia", "-----", "Educación Física"]
    ]
  },

  "2_B": {
    materias: [
      ["Biología", "VALLEJOS, Daiana"],
      ["Construcción de la Ciudadanía", "FUENTES, Alina"],
      ["Educación Artística", "CUADRADO, Silvia"],
      ["Educación Física", "GOLD, Victor / ZICCHERO, Luciana"],
      ["Físicoquímica", "FLORES SÁNCHEZ, Ismael / ARAPA, Walter"],
      ["Geografía", "VALDÉZ, Leticia"],
      ["Historia", "CHIESA, Francisco"],
      ["Inglés", "CARABAJAL, Pamela"],
      ["Matemática", "MACIEL, Daiana"],
      ["Prácticas del Lenguaje", "BIANCHI, Anabel"]
    ],

    horarios: [
      ["7:30 a 8:30", "Matemática", "Educación Artística", "Educación Artística", "Inglés", "Prácticas del Lenguaje"],
      ["8:30 a 9:30", "Matemática", "Educación Física", "Prácticas del Lenguaje", "Inglés", "Prácticas del Lenguaje"],
      ["9:40 a 10:40", "Geografía", "Construcción de la Ciudadanía", "Prácticas del Lenguaje", "Biología", "Matemática"],
      ["10:50 a 11:50", "Geografía", "Físicoquímica", "Historia", "Biología", "Matemática"],
      ["11:50 a 12:50", "Historia", "Físicoquímica", "-----", "Construcción de la Ciudadanía", "Educación Física"]
    ]
  },

  "3_A": {
    materias: [
      ["Biología", "VALLEJOS, Daiana"],
      ["Construcción de la Ciudadanía", "FUENTES, Alina"],
      ["Educación Artística", "CUADRADO, Silvia"],
      ["Educación Física", "BEGHELLI, Juan"],
      ["Físicoquímica", "AGUILAR, Patricia"],
      ["Geografía", "PATISCO, Hebe"],
      ["Historia", "RODAS, Jorge"],
      ["Inglés", "TARTAGLINI, Javier"],
      ["Matemática", "OLEA, Patricia"],
      ["Prácticas del Lenguaje", "BIANCHI, Anabel / TORRES, María"]
    ],

    horarios: [
      ["7:30 a 8:30", "Biología", "Construcción de la Ciudadanía", "Geografía", "Matemática", "Historia"],
      ["8:30 a 9:30", "Biología", "Construcción de la Ciudadanía", "Geografía", "Matemática", "Historia"],
      ["9:40 a 10:40", "Físicoquímica", "Matemática", "Prácticas del Lenguaje", "Inglés", "Prácticas del Lenguaje"],
      ["10:50 a 11:50", "Físicoquímica", "Matemática", "Prácticas del Lenguaje", "Inglés", "Educación Física"],
      ["11:50 a 12:50", "Educación Artística", "Prácticas del Lenguaje", "Educación Artística", "-----", "Educación Física"]
    ]
  },

  "3_B": {
    materias: [
      ["Biología", "VALLEJOS, Daiana"],
      ["Construcción de la Ciudadanía", "GOLD, Victor / RIZZA, Juan Ignacio"],
      ["Educación Artística", "RODRÍGUEZ, Rocío"],
      ["Educación Física", "TRAMAGLIA, Daniela / RAMOS, Santiago"],
      ["Físicoquímica", "GUERRERO, Marcela"],
      ["Geografía", "VALDÉZ, Leticia"],
      ["Historia", "ROUSSINEAU, Gisela"],
      ["Inglés", "CASINELLI, Mariana / ORREGO, Mónica"],
      ["Matemática", "BISOGNO, Yamila"],
      ["Prácticas del Lenguaje", "ANGUITA, Paula"]
    ],

    horarios: [
      ["7:30 a 8:30", "Matemática", "Biología", "Prácticas del Lenguaje", "Geografía", "Prácticas del Lenguaje"],
      ["8:30 a 9:30", "Matemática", "Biología", "Prácticas del Lenguaje", "Construcción de la Ciudadanía", "Prácticas del Lenguaje"],
      ["9:40 a 10:40", "Inglés", "Construcción de la Ciudadanía", "Educación Física", "Historia", "Físicoquímica"],
      ["10:50 a 11:50", "Inglés", "Educación Física", "Educación Artística", "Historia", "Matemática"],
      ["11:50 a 12:50", "Geografía", "Físicoquímica", "Educación Artística", "-----", "Matemática"]
    ]
  },

  "4_1a": {
    materias: [
      ["Biología", "BALCARCE, Paola"],
      ["Educación Física", "SILVELA, Pablo"],
      ["Geografía", "VALDÉZ, Leticia"],
      ["Historia", "RODAS, Jorge"],
      ["Inglés", "FRAGELLI, María Fernanda"],
      ["Introducción a la Física", "PRIETTO, Jonathan"],
      ["Introducción a la Química", "OCHOA, Silvana"],
      ["Literatura", "BIANCHI, Anabel"],
      ["Matemática", "OLEA, Patricia"],
      ["NTICX", "BERTOLOTTI, Silvia"],
      ["Salud y Adolescencia", "DANUNZIO, Carolina"]
    ],

    horarios: [
      ["7:30 a 8:30", "Matemática", "Literatura", "Inglés", "Introducción a la Física", "NTICX"],
      ["8:30 a 9:30", "Matemática", "Literatura", "Inglés", "Introducción a la Física", "NTICX"],
      ["9:40 a 10:40", "Salud y Adolescencia", "Geografía", "Historia", "Literatura", "Introducción a la Química"],
      ["10:50 a 11:50", "Salud y Adolescencia", "Geografía", "Historia", "Biología", "Introducción a la Química"],
      ["11:50 a 12:50", "-----", "Matemática", "Educación Física", "Biología", "Educación Física"]
    ]
  },

  "5_1a": {
    materias: [
      ["Arte", "BERHÓ, Guillén"],
      ["Biología", "DÍAZ, Fernando / BALCARCE, Paola"],
      ["Ciencias de la Tierra", "BALCARCE, Paola"],
      ["Educación Física", "GOLD, Victor / MONTOYA, Diego"],
      ["Física", "MARMO, Jaquelina"],
      ["Fundamentos de la Química", "LEGUIZAMÓN, Darío"],
      ["Geografía", "PATISCO, Hebe"],
      ["Historia", "RODAS, Jorge"],
      ["Inglés", "CARABAJAL, Pamela"],
      ["Literatura", "BIANCHI, Anabel"],
      ["Matemática", "BISOGNO, Yamila"],
      ["Política y Ciudadanía", "MOLINERIS, Mariana"]
    ],

    horarios: [
      ["7:30 a 8:30", "Inglés", "Ciencias de la Tierra", "Historia", "Literatura", "Fundamentos de la Química"],
      ["8:30 a 9:30", "Inglés", "Física", "Historia", "Literatura", "Fundamentos de la Química"],
      ["9:40 a 10:40", "Matemática", "Fundamentos de la Química", "Geografía", "Biología", "Matemática"],
      ["10:50 a 11:50", "Matemática", "Política y Ciudadanía", "Biología", "Geografía", "Física"],
      ["11:50 a 12:50", "-----", "Política y Ciudadanía", "Ciencias de la Tierra", "Arte", "Física"]
      ["12:50 a 13:50", "-----", "-----", "Educación Física", "Arte", "Educación Física"]
    ]
  },

  "6_1a": {
    materias: [
      ["Ambiente, Desarrollo y Sociedad", "BALCARCE, Paola"],
      ["Biología, Genética y Sociedad", "BALCARCE, Paola"],
      ["Educación Física", "GOLD, Victor / CABALLERO, Ezequiel"],
      ["Filosofía e Historia de la Ciencia y Tecnología", "LUCHINI, Silvina"],
      ["Física Clásica y Moderna", "GALLO, Mauricio"],
      ["Inglés", "SAAVEDRA, Victoria"],
      ["Literatura", "BIANCHI, Anabel"],
      ["Matemática", "OLEA, Patricia"],
      ["Química del Carbono", "LATORRE, Cristian"],
      ["Trabajo y Ciudadanía", "ZERETZKI, Aurora"]
    ],

    horarios: [
      ["7:30 a 8:30", "Química del Carbono", "Matemática", "Ambiente, Desarrollo y Sociedad", "Literatura", "Matemática"],
      ["8:30 a 9:30", "Trabajo y Ciudadanía", "Matemática", "Biología, Genética y Sociedad", "Biología, Genética y Sociedad", "Matemática"],
      ["9:40 a 10:40", "Literatura", "Literatura", "Ambiente, Desarrollo y Sociedad", "Inglés", "Filosofía e Historia de la Ciencia y Tecnología"],
      ["10:50 a 11:50", "Educación Física", "Educación Física", "Física Clásica y Moderna", "Química del Carbono", "Filosofía e Historia de la Ciencia y Tecnología"],
      ["11:50 a 12:50", "Inglés", "-----", "Física Clásica y Moderna", "Química del Carbono", "Trabajo y Ciudadanía"]
      ["12:50 a 13:50", "-----", "-----", "Física Clásica y Moderna", "Biología, Genética y Sociedad", "-----"]
    ]
  },

  "1_C": {
    materias: [
      ["Ciencias Naturales", "LUCADEI, Georgina"],
      ["Ciencias Sociales", "ROUSSINEAU, Gisela"],
      ["Construcción de la Ciudadanía", "GOLD, Victor / NUÑEZ, Natalia"],
      ["Educación Artística", "CORN, Lucas"],
      ["Educación Física", "PONCE, Fernando"],
      ["Inglés", "SAAVEDRA, Victoria"],
      ["Matemática", "BISOGNO, Yamila"],
      ["Prácticas del Lenguaje", "RODRÍGUEZ, Laura Mariana"]
    ],

    horarios: [
      ["13:00 a 14:00", "Ciencias Sociales", "Educación Artística", "Prácticas del Lenguaje", "Ciencias Naturales", "Ciencias Naturales"],
      ["14:00 a 15:00", "Ciencias Sociales", "Educación Artística", "Prácticas del Lenguaje", "Ciencias Naturales", "Ciencias Naturales"],
      ["15:10 a 16:10", "Educación Física", "Construcción de la Ciudadanía", "Matemática", "Inglés", "Matemática"],
      ["16:20 a 17:20", "Construcción de la Ciudadanía", "Prácticas del Lenguaje", "Ciencias Sociales", "Inglés", "Matemática"],
      ["17:20 a 18:20", "Matemática", "Educación Física", "Ciencias Sociales", "-----", "Prácticas del Lenguaje"]
    ]
  },

  "2_C": {
    materias: [
      ["Biología", "VALLEJOS, Daiana"],
      ["Construcción de la Ciudadanía", "SILVELA, Pablo"],
      ["Educación Artística", "GONZÁLEZ, José"],
      ["Educación Física", "ZICCHERO, Luciana"],
      ["Físicoquímica", "AGUILAR, Patricia"],
      ["Geografía", "PATISCO, Hebe"],
      ["Historia", "FLORES, Luciana"],
      ["Inglés", "SAAVEDRA, Maria Victoria"],
      ["Matemática", "BISOGNO, Yamila"],
      ["Prácticas del Lenguaje", "BRAVO, Pamela"]
    ],

    horarios: [
      ["13:00 a 14:00", "Prácticas del Lenguaje", "Geografía", "Biología", "Prácticas del Lenguaje", "Educación Física"],
      ["14:00 a 15:00", "Prácticas del Lenguaje", "Geografía", "Biología", "Prácticas del Lenguaje", "Educación Física"],
      ["15:10 a 16:10", "Físicoquímica", "Historia", "Inglés", "Matemática", "Educación Artística"],
      ["16:20 a 17:20", "Físicoquímica", "Historia", "Inglés", "Matemática", "Educación Artística"],
      ["17:20 a 18:20", "-----", "Matemática", "Matemática", "Construcción de la Ciudadanía", "Construcción de la Ciudadanía"]
    ]
  },

  "3_C": {
    materias: [
      ["Biología", "MANCILLA, Cinthya"],
      ["Construcción de la Ciudadanía", "FUENTES, Alina"],
      ["Educación Artística", "GONZÁLEZ, José"],
      ["Educación Física", "PONCE, Fernando"],
      ["Físicoquímica", "PONCE, Marcelo"],
      ["Geografía", "TORRES, Elías"],
      ["Historia", "GARIBOLDI, Daniel"],
      ["Inglés", "CARABAJAL, Pamela"],
      ["Matemática", "BISOGNO, Yamila"],
      ["Prácticas del Lenguaje", "VEGA, Estefanía"]
    ],

    horarios: [
      ["13:00 a 14:00", "Prácticas del Lenguaje", "Prácticas del Lenguaje", "Matemática", "Construcción de la Ciudadanía", "Educación Artística"],
      ["14:00 a 15:00", "Prácticas del Lenguaje", "Prácticas del Lenguaje", "Matemática", "Construcción de la Ciudadanía", "Educación Artística"],
      ["15:10 a 16:10", "Geografía", "Matemática", "Biología", "Historia", "Educación Física"],
      ["16:20 a 17:20", "Inglés", "Matemática", "Físicoquímica", "Historia", "Geografía"],
      ["17:20 a 18:20", "Inglés", "Biología", "Físicoquímica", "Educación Física", "-----"]
    ]
  },

  "4_2a": {
    materias: [
      ["Biología", "ALVAREZ, Victoria"],
      ["Educación Física", "MAGNELLI, Maria"],
      ["Geografía", "LISTA, Gonzalo"],
      ["Historia", "FERREYRA, Javier Roberto"],
      ["Inglés", "SAAVEDRA, VICTORIA"],
      ["Introducción a la Física", "GARRETON, Lautaro"],
      ["Introducción a la Química", "CATUEGNO, Roxana"],
      ["Literatura", "RETA, Paola Andrea"],
      ["Matemática", "ESCUDERO, Claudia"],
      ["NTICX", "PUJOL, Perla"],
      ["Salud y Adolescencia", "BALCARCE, Paola"]
    ],

    horarios: [
      ["13:00 a 14:00", "Inglés", "Matemática", "Biología", "Matemática", "Educación Física"],
      ["14:00 a 15:00", "Inglés", "Matemática", "Biología", "NTICX", "Educación Física"],
      ["15:10 a 16:10", "Historia", "Introducción a la Química", "Introducción a la Física", "NTICX", "Literatura"],
      ["16:20 a 17:20", "Historia", "Introducción a la Química", "Salud y Adolescencia", "Geografía", "Literatura"],
      ["17:20 a 18:20", "Introducción a la Física", "-----", "Salud y Adolescencia", "Geografía", "Literatura"]
    ]
  },

  "5_2a": {
    materias: [
      ["Arte", "CIBILS, Fernando"],
      ["Biología", "LUGO, Noelia"],
      ["Ciencias de la Tierra", "LISTA, Gonzalo"],
      ["Educación Física", "PAVÓN, Giorgina"],
      ["Física", "ARAPA, Walter"],
      ["Fundamentos de la Química", "DE LA CRUZ, Flavia"],
      ["Geografía", "LISTA, Gonzalo"],
      ["Historia", "LISTA, Gonzalo"],
      ["Inglés", "CARABAJAL, Pamela"],
      ["Literatura", "RETA, Paola"],
      ["Matemática", "BISOGNO, Yamila"],
      ["Política y Ciudadanía", "MOLINERIS, Mariana"]
    ],

    horarios: [
      ["12:00 a 13:00", "Matemática", "Educación Física", "-----", "-----", "-----"],
      ["13:00 a 14:00", "Matemática", "Arte", "Física", "Arte", "Literatura"],
      ["14:00 a 15:00", "Geografía", "Historia", "Fundamentos de la Química", "Fundamentos de la Química", "Literatura"],
      ["15:10 a 16:10", "Geografía", "Política y Ciudadanía", "Fundamentos de la Química", "Ciencias de la Tierra", "Física"],
      ["16:20 a 17:20", "Ciencias de la Tierra", "Política y Ciudadanía", "Biología", "Inglés", "Educación Física"],
      ["17:20 a 18:20", "Historia", "Física", "Biología", "Inglés", "Matemática"]
    ]
  },

  "6_2a": {
    materias: [
      ["Ambiente, Desarrollo y Sociedad", "BALCARCE, Paola"],
      ["Biología, Genética y Sociedad", "CORONEL, Florencia"],
      ["Educación Física", "PAZ, Leandro"],
      ["Filosofía e Historia de la Ciencia y Tecnología", "LUCHINI, Silvina"],
      ["Física Clásica y Moderna", "AGUILAR, Patricia"],
      ["Inglés", "CARABAJAL, Pamela"],
      ["Literatura", "FUENTES, Alina"],
      ["Matemática", "MACIEL, Daiana"],
      ["Química del Carbono", "FRITZLER, María Cristina"],
      ["Trabajo y Ciudadanía", "URRIZA, Marcelo"]
    ],

    horarios: [
      ["12:00 a 13:00", "-----", "Física Clásica y Moderna", "-----", "-----", "-----"],
      ["13:00 a 14:00", "Trabajo y Ciudadanía", "Trabajo y Ciudadanía", "Matemática", "Física Clásica y Moderna", "Inglés"],
      ["14:00 a 15:00", "Química del Carbono", "Química del Carbono", "Literatura", "Educación Física", "Inglés"],
      ["15:10 a 16:10", "Biología, Genética y Sociedad", "Ambiente, Desarrollo y Sociedad", "Literatura", "Literatura", "Química del Carbono"],
      ["16:20 a 17:20", "Matemática", "Ambiente, Desarrollo y Sociedad", "Filosofía e Historia de la Ciencia y Tecnología", "Biología, Genética y Sociedad", "Física Clásica y Moderna"],
      ["17:20 a 18:20", "Matemática", "Matemática", "Filosofía e Historia de la Ciencia y Tecnología", "Biología, Genética y Sociedad", "Educación Física"],
    ]
  },
  
}; // ← cierre del objeto "cursos"

/* ============================
    VARIABLES Y ESTADO
============================ */
let cursoActivo = null;

/* ============================
    AJUSTAR ESPACIADOR
============================ */
function ajustarEspaciador() {
    const panel = document.getElementById("panel");
    const espaciador = document.getElementById("espaciadorPanel");

    if (panel.classList.contains("activo")) {
        espaciador.style.height = panel.offsetHeight + 40 + "px";
    } else {
        espaciador.style.height = "0px";
    }
}

/* ============================
    MOSTRAR CURSO
============================ */
function mostrar(curso) {
    const panel = document.getElementById("panel");

    // Si el usuario toca el mismo botón → cerrar panel
    if (cursoActivo === curso) {
        panel.classList.remove("activo");
        setTimeout(() => {
            panel.style.display = "none";
            ajustarEspaciador();
        }, 300);
        cursoActivo = null;
        return;
    }

    // Actualizar curso activo
    cursoActivo = curso;

    const data = cursos[curso];

    // Mostrar el título con formato correcto
    let titulo = curso.replace("_", "° ");
    titulo = titulo.replace("° 1a", "° 1a");
    titulo = titulo.replace("° 2a", "° 2a");
    document.getElementById("tituloCurso").innerText = titulo;

    // Tabla de materias
    let tablaMaterias = `
        <h3>Materias y Profesores</h3>
        <table>
            <tr><th>Materia</th><th>Profesor</th></tr>
    `;
    data.materias.forEach(m => {
        tablaMaterias += `<tr><td>${m[0]}</td><td>${m[1]}</td></tr>`;
    });
    tablaMaterias += `</table>`;
    document.getElementById("materias").innerHTML = tablaMaterias;

    // Tabla de horarios
    let tablaHorarios = `
        <h3>Horarios</h3>
        <table>
            <tr>
                <th>Hora</th>
                <th>Lunes</th>
                <th>Martes</th>
                <th>Miércoles</th>
                <th>Jueves</th>
                <th>Viernes</th>
            </tr>
    `;
    data.horarios.forEach(f => {
        tablaHorarios += `
            <tr>
                <td>${f[0]}</td>
                <td>${f[1]}</td>
                <td>${f[2]}</td>
                <td>${f[3]}</td>
                <td>${f[4]}</td>
                <td>${f[5]}</td>
            </tr>
        `;
    });
    tablaHorarios += `</table>`;
    document.getElementById("horarios").innerHTML = tablaHorarios;

    // Mostrar el panel con animación
    panel.classList.remove("activo");
    void panel.offsetWidth; // reinicia transición
    panel.style.display = "block";
    panel.classList.add("activo");

    // Ajustar espaciador según el alto real del panel
    setTimeout(ajustarEspaciador, 50);
}
