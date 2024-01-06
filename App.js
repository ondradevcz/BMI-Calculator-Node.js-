// BMI Calculator

// Redline Setup
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// variables
let weight;
let height;

rl.question("What is your current weight? In KG please. \n Write here: ", (enteredWeight) => {
    weight = parseFloat(enteredWeight);

    rl.question("What is your current height? Please write like this - meters (E.g.: 1.75) \n Write here: ", (enteredHeight) => {
        height = parseFloat(enteredHeight);

        rl.close();

        const BMI = Math.round(weight / (height * height));

        let weightStatus;

        if (BMI <= 18.5) {
            weightStatus = "You might be underweight.";
        } else if (BMI > 18.5 && BMI <= 25) {
            weightStatus = "You have a normal weight.";
        } else if (BMI > 25 && BMI <= 30) {
            weightStatus = "You might be overweight.";
        } else if (BMI > 30 && BMI <= 35) {
            weightStatus = "You might have obesity, you should consult this with your doctor.";
        } else if (BMI > 35) {
            weightStatus = "You're heavily obese, seek professional help immediately.";
        }

        console.log(`Your BMI is ${BMI}, ${weightStatus}`);
    });
});
