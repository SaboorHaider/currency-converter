#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //Base currency
    EUR: 0.93,
    GBP: 0.79,
    INR: 83.57,
    PKR: 278,
    SAR: 3.75,
    KWD: 0.31,
    BHD: 0.38,
    IRR: 42087.50,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Select From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "SAR", "KWD", "BHD", "IRR"]
    },
    {
        name: "to",
        message: "Select To Currtsc  ency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR", "SAR", "KWD", "BHD", "IRR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number"
    }
]);
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmount = currency[userFromCurrency]; // exchange rate
let toAmount = currency[userToCurrency]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency // 4
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
