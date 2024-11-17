var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var historicalArray = [];
var numberRandom = (Math.random() * 100 + 1);
console.log("Guess the number between 1 and 100!");
console.log(numberRandom);
function askQuestion() {
    rl.question("What's the guess number? ", function (numberProposition) {
        var guessedNumber = parseInt(numberProposition, 10);
        historicalArray.push(guessedNumber);
        if (isNaN(guessedNumber)) {
            console.log("Please enter a valid number.");
            askQuestion();
        }
        else if (guessedNumber === numberRandom) {
            console.log("You win!");
            console.log("number of try: " + historicalArray.length);
            rl.close();
        }
        else if (guessedNumber < numberRandom) {
            console.log("Too low, try again!");
            askQuestion();
        }
        else {
            console.log("Too high, try again!");
            askQuestion();
        }
    });
}
askQuestion();