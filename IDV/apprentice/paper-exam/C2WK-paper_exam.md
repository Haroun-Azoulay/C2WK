# [header] Paper Exam

# [module] Modalities

| Type | Description |
| - | - |
| Correction | Exam |
| Duration | 1 h |
| Effective | Alone |

# [project] Consignes
You are tasked with creating a number guessing game in TypeScript. The program generates a random number between 1 and 100. The user needs to guess the number, and the program provides feedback on whether the guess is too high, too low, or correct. The game keeps track of the user's attempts and displays the total number of tries when the user wins.

## [exercice] Step 1
- Generate a random integer between 1 and 100  

```
Math.floor(Math.random() * 100 + 1);
```
## [exercice] Step 2
- Use readline to use pompt

```
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```
Example :

```
rl.question('What is your age? ', (age) => {
    console.log('Your age is: ' + age);
});

```


## [exercice] Step 3
- Check if the user’s input is a valid number.
- If the input is not a valid number prompt the user to enter a valid number.

## [exercice] Step 4
- Compare the user's guess with the generated number and provide feedback:

If the guess is too low, display: "Too low, try again!"
If the guess is too high, display: "Too high, try again!"
If the guess is correct, display: "You win!"

## [exercice] Step 5
- Keep a record of the number of attempts the user has made.
- When the user guesses the correct number, display the total number of attempts.

You must add number of attempts on array



## [exercice] Step 6
- After the user wins, terminate the program gracefully.



# [forbidden] Forbiden
- You don't use your computer !

