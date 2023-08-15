const express = require("express");
const quizzes = require("./data/questions");
const router = express.Router();

/* GET users listing. */
router.get("/all-quizzes", function (req, res, next) {
  const quizzesData = quizzes.map((data) => {
    return {
      id: data.id,
      name: data.quizz.name,
      img: data.quizz.img,
      description: data.quizz.description,
      solver: data.quizz.solver,
    };
  });
  res.send(quizzesData);
});

router.get("/quiz-questions/:id", function (req, res, next) {
  const { id } = req.params;
  const quizz = quizzes.find((data) => data.id === parseInt(id));

  res.send(quizz);
});

router.post("/quiz-result", function (req, res, next) {
  const body = req.body;
  
  // id fir quizz - questions have all the users quiz answers
  const { id, questions } = body;
  // get the quizz result
  const data = quizzes.find((data) => data?.id === parseInt(id));
  // get the quiz questions
  const quizzQuestions = data?.quizz?.questions;
  // map the quiz questions to get the correct answer
  const results = quizzQuestions?.map((data) => {
    //get the answers by questions
    const answer  = questions[data.id];
    // get the if the answers its correct  
    const correct = data?.answers?.find((data) => {
      return data.id === parseInt(answer);
    });

    return correct?.correct;
  });
   
  const correctAnwer = results?.filter((data) => data === true)?.length;
  const totalQuestions = results?.length;

  res.send({ correct: correctAnwer, total: totalQuestions });
});

module.exports = router;
