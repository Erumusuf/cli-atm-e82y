#! /usr/bin/env node
import inquirer from "inquirer";
import chalk  from "chalk";

let myBalance = 25000;
let myPin = 2244;
let userpin = await inquirer.prompt([
    {
        message: "Enter your pin number",
        type: "number",
        name: "pinNumber"   
    }
]);
if (userpin.pinNumber === myPin) {
    console.log(chalk.greenBright.bold.italic ("Your pin is correct"));
    let operationAns = await inquirer.prompt(
    {
    message: "Please Chose An Option",
    type: "list",
    name: "operation",
    choices: ["cashWithdraw", "balanceInquiry", "depositCash"]
    }
    )
    if (operationAns.operation === "balanceInquiry")
        {console.log(chalk.magentaBright(myBalance))}

    else if (operationAns.operation === "depositCash")
    { let depositAmu = await inquirer.prompt(
    {
        message: "Enter Amount to  deposit",
        type: "number",
        name: "amountDep"
    })
    console.log(chalk.magentaBright(myBalance += depositAmu.amountDep))}

    else if (operationAns.operation === "cashWithdraw")
    { let withdrawAmu = await inquirer.prompt(
    {
        message: "Enter Amount to  Withdraw",
        type: "list",
        name: "amountwithdraw",
        choices: ["10000", "5000", "2000", "1000", "Other"]
    })
    
        if (withdrawAmu.amountwithdraw === "Other")
        { let otherAmu = await inquirer.prompt(
        {
            message: "Enter Other Amount to  Withdraw",
            type: "number",
            name: "otherWithdraw",
        })
            if(myBalance >= otherAmu.otherWithdraw){       
                console.log(chalk.magentaBright(myBalance -= otherAmu.otherWithdraw))}
            
            else {console.log (chalk.redBright("Insuficient Balance, Your current balance is Rs. " + myBalance))}
        }
        else{  if(myBalance >= withdrawAmu.amountwithdraw){       
               console.log(chalk.magentaBright(myBalance -= withdrawAmu.amountwithdraw))}
                
                else {console.log (chalk.redBright("Insuficient Balance, Your current balance is Rs. " + myBalance))}
            } 
}
    
    else {console.log(chalk.redBright("Invalid Option"))}

}    

else {
    console.log(chalk.redBright("Your pin is wrong"))
}
;