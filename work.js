
// global variables
let playerScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win, Amazing!!!";
let lose = "You lose, get good!"
let tie = "Its a draw";
let user2 = computerPlay();
const rockButton = document.querySelector('.btn');
const paperButton = document.querySelector('.btn2');
const scissorButton = document.querySelector('.btn3');
const playButton = document.querySelector('.btn4');
const displayBox = document.querySelector('.display');







rockButton.addEventListener("click", e => { //user clicks rock button
    user1 = 'rock';  //user selection will be rock
    let user2 = computerPlay(); //computer selection will be random
    console.log(user1);  //console log user selection
    console.log(user2); // console log computer selection
    let result = selectWin(user1, user2);   //decide winner of round
    displayMessage(result); //display result below selection
}); // need to figure out how to remove result

paperButton.addEventListener("click", e => { //user clicks paper button
    user1 = 'paper'; //user selection will be paper
    let user2 = computerPlay(); //computer selection will be random
    console.log(user1);     //console log user selection
    console.log(user2);   // console log computer selection
    let result = selectWin(user1, user2);  //decide winner of round
    displayMessage(result); //display result below selection
}); // need to figure out how to remove result

scissorButton.addEventListener("click", e => {  //user clicks scissor button
    user1 = 'scissor';  //user selection will be scissor
    let user2 = computerPlay(); //computer selection will be random
    console.log(user1);     //console log user selection
    console.log(user2);  // console log computer selection
    let result = selectWin(user1, user2);   //decide winner of round
    displayMessage(result);     //display result below selection
});

// opponent's random choice
    function computerPlay() {   //randomly select rock, paper, or scissor
        let choice = ["rock", "paper", "scissor"]   //array of choices
        let random_choice = choice[Math.floor(Math.random() * choice.length)];  //randomly select choice
        return random_choice //return random choice
} 

//Decides winner of each match  
function selectWin(user1, user2) {  //user1 is user selection, user2 is computer selection
if (user1 == user2) { //if user1 and user2 are the same
    return tie; // Tie game
} else if (user1 == "rock" && user2 == "scissor") { //if user1 is rock and user2 is scissor
    playerScore++; //increase player score
    return win; //Win, rock beats scissor
} else if (user1 =="scissor" && user2 == "paper") { //if user1 is scissor and user2 is paper
    playerScore++; //increase player score
    return win; //Win, scissor beats paper
} else if (user1 == "paper" && user2 == "rock") {   //if user1 is paper and user2 is rock
    playerScore++; //increase player score
    return win; //Win, paper beats rock
} else if (user1 == "scissor" && user2 == "rock") {     //if user1 is scissor and user2 is rock
    computerScore++; //increase computer score
    return lose; // loss, user2 rock beats scissor
} else if (user1== "paper" && user2 == "scissor") {    //if user1 is paper and user2 is scissor
    computerScore++; //increase computer score
    return lose; //loss, user 2 scissor beats paper
} else if (user1== "rock" && user2 == "paper") {    //if user1 is rock and user2 is paper
    computerScore++; //increase computer score
    return lose; //loss, user 2 paper beats rock
}   //need to figure out how to keep score accurately, numbers keep jumping up extra one
}

//decide winner of round
function round_win() { //user1 is user selection, user2 is computer selection
    if (playerScore == computerScore) { //if player score is equal to computer score
        return  "Round is a draw";  //draw
    } else if (playerScore > computerScore) { //if player score is greater than computer score
        return "You Won this round"; //player wins round
    } else if (playerScore < computerScore) { //if player score is less than computer score
        return "You lose this round";   //player loses round
    }
}

function displayMessage(result) { //display result of round
    let message = document.createElement('p'); //create p element
    message.innerHTML = result; //display result
    displayBox.appendChild(message); //append message to display box
}

//create funnction that will display user choice and computer choice




// for(let i = 0; i < 5; i++) {
//     let ask_choice = prompt("Best out of 5, Choose Your Weapon Nick:  Rock, Paper or Scissor"); //player 1
//     let user1 = ask_choice.toLowerCase(); //player choice case insensitive
//     let user2 = computerPlay(); //opponent random choice
//     console.log(selectWin(user1, user2));
//     console.log("your score = " + playerScore);
//     console.log("Computer's Score = " + computerScore);
//     alert(selectWin(user1, user2));
//     alert("your score =" + playerScore + "/" + "Computer's Score =" + computerScore); //doesn't show same score as console, each point is worth 2 instead of one
//  } // Loop run 5 games, keeping score of each playerb