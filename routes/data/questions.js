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
      ],
    },
  },
];

module.exports = quizzes;