#!/usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to cli-Number-Guessing Game");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed  right number.");
}
else {
    console.log("you guessed wrong number");
}
