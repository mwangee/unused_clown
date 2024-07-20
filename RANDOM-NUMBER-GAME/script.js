// Declare variables outside the function for better scope
let attempts = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number once
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const hintText = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

// Event listener for the submit button
submitButton.addEventListener("click", checkGuess);

function checkGuess() {
  const userValue = Number(guessInput.value);
  attempts++;

  // Use a ternary operator for concise conditional logic
  hintText.textContent =
    userValue === randomNumber
      ? "Congratulations, you guessed it!"
      : userValue < randomNumber
      ? "Too low! Try again."
      : "Too high! Try again.";

  attemptsText.textContent = "attempts: " + attempts;
}
