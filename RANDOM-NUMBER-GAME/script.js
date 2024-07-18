//declare variables
let attempts = 0;
let randomNumber =Math.floor (Math.random()* 100 + 1);
const guess = document.getElementById("guess"); 
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");
//event listeners
submit.addEventListener("click", checkGuess );
function checkGuess(){
    const userValue = Number(guess.value);
    attempts++;
//conditionals
if (userValue===randomNumber) {
    hint.textContent = "Congratulations , you guessed it!";
    
} else if (userValue < randomNumber){
    hint.textContent = "Too low! Try again.";
    
}else{
    hint.textContent = "Too high! Try again.";

} 
attemptsText.textContent = "attempts:" + attempts;
}


