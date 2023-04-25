let scoreSpan = document.getElementById("score");
let scoreInput = document.getElementById("scoreInput");
let messageSpan = document.getElementById("message");

function handleUpdateScore() {
    scoreInput.textContent = scoreInput.value
    let score = scoreInput.value;

    if (score > 6) {
        messageSpan.textContent = "Congratulations! You passed";
    } else {
        messageSpan.textContent = "Sorry, try again";
    }

    scoreSpan.textContent = score;
}
