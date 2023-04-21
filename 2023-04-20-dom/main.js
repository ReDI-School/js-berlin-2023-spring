let score = 10;
let message = "";

if (score > 6) {
    message = "Congratulations! You passed";
} else {
    message = "Sorry, try again";
}

let scoreSpan = document.getElementById("score");
let messageSpan = document.getElementById("message");

scoreSpan.textContent = score;
messageSpan.textContent = message;
