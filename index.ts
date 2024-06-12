#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("\n\tWelcome to Currency Converter \n"))

// Define the list of currencies & their exchange rates
let exchangeRate:any = {
    "USD" :1,  //Base Currency
    "EUR":0.9, //European Currency(Euro)
    "JYP":113, //Japanese Currency(Yen)
    "CAD":1.3, //Canadian Dollar
    "AUD":1.65, //Australian Dollar
    "PKR":278.55, //Pakistan Rupees
    // Add more currencies and their exchange rates
}

// Prompt the user to select currencies to convert from and to
let userAnswer = await inquirer.prompt([
    {
        name:"from_currency",
        type:"list",
        message:"Select the Currency to Convert from:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"to_currency",
        type:"list",
        message:chalk.cyan("✔Select the Currency to Convert into:"),
        choices:["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:chalk.cyan("✔Enter the Amount to Convert:")
    }
]);

// Perform currency conversion by using Formula
let fromAmount = exchangeRate[userAnswer.from_currency];
let toAmount = exchangeRate[userAnswer.to_currency];
let amount = userAnswer.amount;

// FormulaFOr Conversion
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

// Display the converted amount
console.log(`Converted Amount = ${chalk.green(convertedAmount.toFixed(2))}`);