let word = "rock";

let words = ["rock", "paper", "scissors"];

let index = 0;
let found = false;
while(words[index] !== undefined) {
    if (word === words[index]) {
        found = true;
    }
    index += 1;
}

if (found) {
    console.log(word + " appears in the words array.");
} else {
    console.log(word + " does not appear in the words array.");
}