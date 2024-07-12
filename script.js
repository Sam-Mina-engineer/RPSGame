const R = 1;
const P = 2;
const S = 3;
const choices = ["R", "P", "S"];
let userInput = prompt("Please enter R, P, or S");
let randomNumber = Math.floor(Math.random() * choices.length);
const computerInput = choices[randomNumber];
console.log(computerInput);
alert(`The computer chose ${computerInput}`);
if (userInput === computerInput) {
    alert("You and the computer tied!")
} else if (userInput === "R" && computerInput === "S") {
    alert("You win!");
} else if (userInput === "P" && computerInput ==="R"){
    alert("You win");
} else if (userInput === "S" && computerInput === "P") {
    alert("You win!");
} else {
    alert("You lose and you should feel bad! Just kidding. But you did lose though.")
}

