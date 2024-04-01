#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 2105;
// Show current balance:
console.log(`Your Current Balance is:${myBalance}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct, login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance",]
        }
    ]);
    //for withdraw:
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficent Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Amount withdrawn Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
        // for checkbalance:
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Current Account Balance is ${myBalance}`);
    }
}
else {
    console.log("pin is incorrect, Please Try Again!");
}
