export const quiz = (
  quizName,
  quizQuestions,
  quizAnswers,
  quizIncorrectAnswers
) => {
  const quizObject = {
    quizTitle: quizName,
    quizSynopsis:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
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
      explanation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      point: "10",
    });
  }

  return quizObject;
};
