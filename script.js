'use strict';

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "correct number!";



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    //When there is not input:
    if (!guess) {
        displayMessage("⛔ No number!");

        // console.log(document.querySelector(".message").textContent = "⛔ No number!");
    }

    //When the player wins:
    else if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;

        // document.querySelector(".message").textContent = "😁 Correct Number!!";
        displayMessage("😁 Correct Number!!");

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }

    else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector(".message").textContent = guess > secretNumber ? "📈 Too high!!" : "📉 Too low!!";
            displayMessage(guess > secretNumber ? "📈 Too high!!" : "📉 Too low!!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "💥you lost the game!😑";
            document.querySelector(".score").textContent = 0;
        }
        // }

        // // When the guess is too high:
        // else if (guess > secretNumber) {
        //     if (score > 1) {
        //         document.querySelector(".message").textContent = "📈 Too high!!";
        //         score--;
        //         document.querySelector(".score").textContent = score;

        //     } else {
        //         document.querySelector(".message").textContent = "💥you lost the game!😑";
        //     }

        // }

        // // When the gues is too low:
        // else if (guess < secretNumber) {
        //     if (score > 1) {
        //         document.querySelector(".message").textContent = "📉 Too low!!";
        //         score--;
        //         document.querySelector(".score").textContent = score;

        //     } else {
        //         document.querySelector(".message").textContent = "💥you lost the game!😑";
        //     }

    }
});


/*JavaScript in the Browser: DOM and Events
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀*/

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".score").textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

})

