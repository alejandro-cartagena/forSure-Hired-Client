export const generateQuiz = (
  quizName,
  quizQuestions,
  quizAnswers,
  quizIncorrectAnswers
) => {
  const quizObject = {
    quizTitle: quizName,
    quizSynopsis: `This quiz is designed to assess the skills and knowledge required for the ${quizName} role. The questions cover various aspects relevant to the position, including industry-specific knowledge, problem-solving abilities, and practical skills. The goal is to evaluate your proficiency and ensure you have the necessary competencies to succeed in this role.`,
    nrOfQuestions: "10",
    questions: [],
  };

  for (let i = 0; i < quizQuestions.length; i++) {
    let answerChoices = quizIncorrectAnswers[i].concat(quizAnswers[i]);

    quizObject.questions.push({
      question: quizQuestions[i],
      questionType: "text",
      answerSelectionType: "single",
      answers: answerChoices,
      correctAnswer: "4",
      messageForCorrectAnswer: "Correct answer. Good job.",
      messageForIncorrectAnswer: "Incorrect answer. Please try again.",
      point: "10",
    });
  }

  return quizObject;
};
