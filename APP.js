let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice"); // accessing all the choices rock paper and scissor

const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");

const compScorePara = document.querySelector("#comp-score");

// FUNCTION TO GENERATE RANDOM CHOICE FOR COMPUTER
const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"]; // AS SUCH IN JS THERE IS NO METHOD TO GENERATE RANDOM VALUES HENCE WE STORE OUR CHOICES IN ARRAY THEN WE TRY TO ACCESS THE OPTIONS USING MATH .RANDOM WHICH RANDOM NUMBERS WILL THE INDEXES OF THE ARRAQY
    const randomIdx = Math.floor(Math.random() * 3); // MATH.FLOOR AS IT WILL REMOVE ALL PLACES AFTER DECIMAL AND WILL GIVE INTEGER VALUES.//MATH.RANDOM()*3 AS RANDOM GENERATE VALUES BETWEEN 0 AND 1 BUT WE NEED VALUES BETWEEN 0 AND 2.HENCE WE MULTIPLY IF ANY NUMBER BETWEEN 0 AND 1 WITH 3 WE GET THE VALUES RANGING WITHIN 2.9. TO REMOVE ANYTHING AFTER 2 WE USE FLOOR
    return options[randomIdx];
};

// FUNCTIONS TO GENERATE DRAW CONDITIONS
const drawGame = () => {
    // console.log("GAME WAS DRAW.");
    msg.innerText = "GAME WAS DRAW PLEASE TRY AGAIN";
};

// FUNCTION TO SHOW WHETHER THE USER LOSE OR WIN
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("YOU WIN!!!");
        msg.innerText = `YOU WIN !! YOUR ${userChoice} beats ${compChoice}`; // TEXT IN MSG BOX WILL CHANGE
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("YOU LOSE");
        msg.innerText = `YOU LOSE ${compChoice} beats YOUR ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// FUNCTION TO PLAY GAME KNOWING THE USER CHOICE AND RANDOM GENERATED COMPUTER CHOICE
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice); // COMPUTER SHOULD KNOW THE USER CHOICE
    // GENERATE COMPUTER CHOICE
    const compChoice = genComputerChoice();
    console.log("comp choice= ", compChoice);
    if (userChoice == compChoice) {
        drawGame();
    } else {
        let userWin = true; // USERWIN KEEP TRACK WHETHER USER IS WINNING OR NOT
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// FUNCTION TO GET THE USER CHOICE
choices.forEach((choice) => {
    console.log(choice); // ALL INDIVIDUAL DIVS WITH CLASS CHOICE ARE PRINTED
    choice.addEventListener("click", () => { // for tracking every click made by the mouse we use this event listener
        const userChoice = choice.getAttribute("id"); // TO DIFFERENTIATE ALL THE CLASSES WITH SAME NAME BY ACCESSING THE ID 
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
