const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter your name: ', (name) => {
    readline.question('Enter your weight (in kg): ', (weight) => {
        readline.question('Enter your height (in m): ', (height) => {
            let bmi = weight / (height * height);
            console.log(`${name}, your BMI is ${bmi.toFixed(2)}`);
            readline.close();
        });
    });
});
