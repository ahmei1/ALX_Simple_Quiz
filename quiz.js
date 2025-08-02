// 1. Define the function
function checkAnswer() {
    const correctAnswer = "4"; // 2. Set the correct answer

    // 3. Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 4. Handle case when nothing is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    // 5. Compare with correct answer
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"; // green
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "#dc3545"; // red
    }
}

// 6. Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
