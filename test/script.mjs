// const test = require("is-wds");

// console.log(test.isWds("WDbdS"));

// console.log(test.addNumbers(5, 7));

// const test = require("inquirer");
// console.log(test.displayQuizResult());

// import("inquirer").then((inquirer) => {
//   console.log("11111111", inquirer.prompt);
// });

// const quizModule = require("inquirer");
import quizModule from "../create_module/app.js";

quizModule.inquirer
  .prompt(quizModule.quizQuestions)
  .then(quizModule.displayQuizResult);
