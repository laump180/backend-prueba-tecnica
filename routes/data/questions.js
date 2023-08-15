const quizzes = [
  {
    id: 1,
    quizz: {
      name: "spider-man",
      img: "https://w0.peakpx.com/wallpaper/542/896/HD-wallpaper-spiderman-in-broken-glasses-background-spiderman.jpg",
      description: "preguntas varias sobre spider-man",
      solver: false,
      questions: [
        {
          id: 1,
          question: "¿cual es el verdadero nombre de spider-man?",
          answers: [
            { id: 1, answer: "Peter Parker", correct: true },
            { id: 2, answer: "Peter Pan", correct: false },
            { id: 3, answer: "Peter Sellers", correct: false },
            { id: 4, answer: "Peter Sellers", correct: false },
            { id: 5, answer: "Peter Poker", correct: false },
          ],
        },
        {
          id: 2,
          question: "¿que lanza spiderman de sus muñecas?",
          answers: [
            { id: 1, answer: "veneno", correct: false },
            { id: 2, answer: "electricidad", correct: false },
            { id: 3, answer: "agua", correct: false },
            { id: 4, answer: "jugo", correct: false },
            { id: 5, answer: "telaraña", correct: true },
          ],
        },
        {
            id: 3,
            question: "¿cual es el verdadero nombre de spider-man 2099?",
            answers: [
                { id: 1, answer: "miguel o'hara", correct: true },
                { id: 2, answer: "miguel morales", correct: false },
                { id: 3, answer: "michael keaton", correct: false },
                { id: 4, answer: "miguel jackson", correct: false },
                { id: 5, answer: "miguel chalo", correct: false },
            ],
          },
          {
            id: 4,
            question: "¿como se llama la pelicula animada de spider-man estrenada en 2023?",
            answers: [
                { id: 1, answer: "spider-man un nuevo universo", correct: false },
                { id: 2, answer: "spider-man a través del Spider-Verso", correct: true },
                { id: 3, answer: "spider-man en el futuro", correct: false },
                { id: 4, answer: "spider-man lejos de casa", correct: false },
                { id: 5, answer: "spider-man 3", correct: false },
            ],
          },
          {
            id: 5,
            question: "¿cual es el nombre completo de MJ?",
            answers: [
                { id: 1, answer: "Mary Jane  Watson", correct: true },
                { id: 2, answer: "Mary wane  Watson", correct: false },
                { id: 3, answer: "Mary Jane  Tanson", correct: false },
                { id: 4, answer: "Mary Jane  Huston", correct: false },
                { id: 5, answer: "Mary Jane Parker", correct: false },
            ],
          },
      ],
    },
  },
  {
    id: 2,
    quizz: {
        name: "x-men",
        img: "https://images3.alphacoders.com/104/1042294.jpg",
        description: "preguntas varias sobre x-men",
        solver: false,
      questions: [
        {
          id: 1,
          question: "¿que poder tiene ciclope?",
          answers: [
            { id: 1, answer: "lanzar rayos de los ojos", correct: true },
            { id: 2, answer: "super fuerza", correct: false },
            { id: 3, answer: "super velocidad", correct: false },
            { id: 4, answer: "volar", correct: false },
            { id: 5, answer: "invisibilidad", correct: false },
          ],
        },
        {
          id: 2,
          question: "¿como se llama la fuerza especial de jean grey?",
          answers: [
            { id: 1, answer: "fuerza de la oscuridad", correct: false },
            { id: 2, answer: "fuerza estres", correct: false },
            { id: 3, answer: "fuerza de la luz", correct: false },
            { id: 4, answer: "fuerza de la tierra", correct: false },
            { id: 5, answer: "fuerza fenix", correct: true },
          ],
        },
        {
            id: 3,
            question: "¿como se llama el enemigo mas fuerte de los x-men?",
            answers: [
                { id: 1, answer: "apocalipto", correct: false },
                { id: 2, answer: "apocalipsis", correct: true },
                { id: 3, answer: "juggernaut", correct: false },
                { id: 4, answer: "cassandra Nova", correct: false },
                { id: 5, answer: "mystique", correct: false },
            ],
          },
          {
            id: 4,
            question: "¿que x-men tiene garras retratiles?",
            answers: [
                { id: 1, answer: "ciclope", correct: false },
                { id: 2, answer: "wolverine", correct: true },
                { id: 3, answer: "storm", correct: false },
                { id: 4, answer: "mystique", correct: false },
                { id: 5, answer: "gambito", correct: false },
            ],
          },
          {
            id: 5,
            question: "¿cual es el verdadero nombre del profesor x?",
            answers: [
                { id: 1, answer: "Charles x", correct: false },
                { id: 2, answer: "Charles mason", correct: false },
                { id: 3, answer: "Charles fransisco", correct: false },
                { id: 4, answer: "Charles Xavier", correct: true },
                { id: 5, answer: "Charles w", correct: false },
            ],
          },
      ],
    },
  },

  {
    id: 3,
    quizz: {
        name: "Pkemon",
        img: "https://images7.alphacoders.com/592/592678.jpg",
        description: "preguntas varias sobre Pokemon",
        solver: false,
      questions: [
        {
          id: 1,
          question: "¿En el juego, ¿cuántas evoluciones tiene Eevee?",
          answers: [
            { id: 1, answer: "4", correct: false },
            { id: 2, answer: "5", correct: true },
            { id: 3, answer: "8", correct: false },
            { id: 4, answer: "7", correct: false },
            { id: 5, answer: "2", correct: false },
          ],
        },
        {
          id: 2,
          question: " ¿Cómo se llama la evolución de Larvitar?",
          answers: [
            { id: 1, answer: "Snorlax", correct: false },
            { id: 2, answer: "Bayleef", correct: false },
            { id: 3, answer: "Tyranitar", correct: false },
            { id: 4, answer: "Pupitar", correct: false },
            { id: 5, answer: "charizard", correct: true },
          ],
        },
        {
            id: 3,
            question: "¿Cuál de estos movimientos nunca ha podido aprender Pikachu en videojuegos?",
            answers: [
                { id: 1, answer: "surf", correct: false },
                { id: 2, answer: "lanzallamas", correct: true },
                { id: 3, answer: "tacleada de voltios", correct: false },
                { id: 4, answer: "cola de hierro", correct: false },
                { id: 5, answer: "rayo", correct: false },
            ],
          },
          {
            id: 4,
            question: "Cual es el pokemon inicial de Ash/Satoshi",
            answers: [
                { id: 1, answer: "manaphy", correct: false },
                { id: 2, answer: "wedeel", correct: false },
                { id: 3, answer: "pikachu", correct: true },
                { id: 4, answer: "charmander", correct: false },
                { id: 5, answer: "snorlax", correct: false },
            ],
          },
          {
            id: 5,
            question: "Como se llama la evolucion de Dratini?",
            answers: [
                { id: 1, answer: "Dragonair", correct: false },
                { id: 2, answer: "Dragonite", correct: true },
                { id: 3, answer: "pikachu", correct: false },
                { id: 4, answer: "charmander", correct: false },
                { id: 5, answer: "Todos los mencionados", correct: false },
            ],
          },
      ],
    },
  },
  {
    id: 4,
    quizz: {
        name: "Test de anime",
        img: "https://img3.wallspic.com/crops/6/9/0/4/7/174096/174096-manga_shonen-anime-salto_semanal_de_shnen-naruto_uzumaki-manga-1920x1080.jpg",
        description: "preguntas varias sobre Anime",
        solver: false,
      questions: [
        {
          id: 1,
          question: "¿Qué poder tiene desde su nacimiento Izuku Midoriya en My Hero Academia?",
          answers: [
            { id: 1, answer: "one for all", correct: false },
            { id: 2, answer: "ninguno", correct: true },
            { id: 3, answer: "All for one", correct: false },
            { id: 4, answer: "fiego / hielo", correct: false },
            { id: 5, answer: "impulso", correct: false },
          ],
        },
        {
          id: 2,
          question: "¿Cuántos  distritos podemos encontrar en total en Shingeki no kyojin?",
          answers: [
            { id: 1, answer: "25", correct: false },
            { id: 2, answer: "8", correct: false },
            { id: 3, answer: "13", correct: true },
            { id: 4, answer: "6", correct: false },
            { id: 5, answer: "3", correct: false },
          ],
        },
        {
            id: 3,
            question: "¿Quién es lider y fundador de SSS Shinda Sekai Sensen en Angel Beats?",
            answers: [
                { id: 1, answer: "Yuri nakamura", correct: true },
                { id: 2, answer: "eri Shinna", correct: false },
                { id: 3, answer: "miyuki irei", correct: false },
                { id: 4, answer: "saskuke uchiha", correct: false },
                { id: 5, answer: "naruto uzumaki", correct: false },
            ],
          },
          {
            id: 4,
            question: "¿Cómo se llaman los ojos de un Ghoul, en Tokyo Ghoul?",
            answers: [
                { id: 1, answer: "kakugan", correct: true },
                { id: 2, answer: "bakugan", correct: false },
                { id: 3, answer: "bokugan", correct: false },
                { id: 4, answer: "sharinga", correct: false },
                { id: 5, answer: "biakugan", correct: false },
            ],
          },
          {
            id: 5,
            question: "¿Dónde vive Naruto?",
            answers: [
                { id: 1, answer: "konoha", correct: true },
                { id: 2, answer: "alabasta", correct: false },
                { id: 3, answer: "namek", correct: false },
                { id: 4, answer: "tokio", correct: false },
                { id: 5, answer: "shinguku", correct: false },
            ],
          },
      ],
    },
  },
];

module.exports = quizzes;