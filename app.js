let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);//Math.random() *3--- select random no. from 0.somthing to 2.somthing.And Math.floor remove decimal no. and make it whole no.
    return options[randIdx];
};

const gameDraw = () =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw, Play Again.";
    msg.style.backgroundColor= "rgb(24, 24, 91)";
};

const showWinner = (userWin , userChoice , compChoice) => {
     if(userWin){
        console.log ("you Win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win!, Your ${userChoice} beats ${compChoice}`;
        msg.style.  backgroundColor = "green";
     }
     else{
        console.log("You Lose");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost, ${compChoice} beats Your${userChoice}`;
        msg.style.backgroundColor ="red";
     }
};

const playGame = (userChoice) => {
    console.log ("user choices =", userChoice);
    //Generate computer choice.
    const compChoice = genCompChoice();
    console.log ("comp choice = ", compChoice);
     
    if(userChoice === compChoice){
       //Draw Game.
       gameDraw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin =compChoice === "paper" ? false :true; 
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }
        else {
            userWin = compChoice === "rock" ? false :true ;
        }
        showWinner(userWin , userChoice ,compChoice);
    }

};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
       
    });
});