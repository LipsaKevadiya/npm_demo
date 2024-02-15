// Inquirer uses the JS reactive extension to handle events and async flows
import inquirer from "inquirer";
//const inquirer = require('inquirer');

const quizQuestions = [
  {
    type: "list",
    name: "q1",
    message: "What is the capital of India?",
    choices: ["New Delhi", "Rajasthan", "Gujarat", "UP"],
  },
  {
    type: "list",
    name: "q2",
    message: "Right to emergency medical aid is a..?",
    choices: [
      "LegalRight",
      "IllegalRight",
      "ConstitutionalRight",
      "FundamentalRight",
    ],
  },
  {
    type: "list",
    name: "q3",
    message: "What is the largest mammal?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
  {
    type: "list",
    name: "q4",
    message: 'Which animal is known as the "Ship of the Desert"?',
    choices: ["Camel", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
  {
    type: "list",
    name: "q5",
    message: "How many vowels are there in the English alphabet?",
    choices: ["five", "four", "six", "seven"],
  },
];

// to calculate and display the quiz result
function displayQuizResult(answers) {
  let counter = 0;

  // Check each answer and increment the counter count
  if (answers.q1 === "New Delhi") counter++;
  if (answers.q2 === "FundamentalRight") counter++;
  if (answers.q3 === "Blue Whale") counter++;
  if (answers.q4 === "Camel") counter++;
  if (answers.q5 === "five") counter++;

  // Display the result
  console.log("\nQuiz Result:");
  console.log(`Correct Answers: ${counter} out of ${quizQuestions.length}`);
}

inquirer.prompt(quizQuestions).then(displayQuizResult);
