
// opponent's random choice
    function computerPlay() {
        let choice = ["rock", "paper", "scissor"]
        let random_choice = choice[Math.floor(Math.random() * choice.length)]; 
        return random_choice
} 

//Decides winner of each match  
function selectWin(user1, user2) { 
if (user1 == user2) {
    return tie; // Tie game
} else if (user1 == "rock" && user2 == "scissor") {
    playerScore++;
    return win; //Win, rock beats scissor
} else if (user1 =="scissor" && user2 == "paper") {
    playerScore++;
    return win; //Win, scissor beats paper
} else if (user1 == "paper" && user2 == "rock") {
    playerScore++;
    return win; //Win, paper beats rock
} else if (user1 == "scissor" && user2 == "rock") {
    computerScore++;
    return lose; // loss, user2 rock beats scissor
} else if (user1== "paper" && user2 == "scissor") {
    computerScore++;
    return lose; //loss, user 2 scissor beats paper
} else if (user1== "rock" && user2 == "paper") {
    computerScore++;
    return lose; //loss, user 2 paper beats rock
}
}

//decide winner of round
function round_win() {
    if (playerScore == computerScore) {
        return  "Round is a draw";
    } else if (playerScore > computerScore) {
        return "You Won this round";
    } else if (playerScore < computerScore) {
        return "You lose this round";
    }
}


    // global variables
    let playerScore = parseInt(0);
    let computerScore = parseInt(0);
    let win = "You win, Amazing!!!";
    let lose = "You lose, get good!"
    let tie = "Its a draw";


for(let i = 0; i < 5; i++) {
    let ask_choice = prompt("Best out of 5, Choose Your Weapon Nick:  Rock, Paper or Scissor"); //player 1
    let user1 = ask_choice.toLowerCase(); //player choice case insensitive
    let user2 = computerPlay(); //opponent random choice
    console.log(selectWin(user1, user2));
    console.log("your score = " + playerScore);
    console.log("Computer's Score = " + computerScore);
    alert(selectWin(user1, user2));
    alert("your score =" + playerScore + "/" + "Computer's Score =" + computerScore); //doesn't show same score as console, each point is worth 2 instead of one
 } // Loop run 5 games, keeping score of each player