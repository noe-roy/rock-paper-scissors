/*
What inputs will your program have?
  User can enter "rock”, “paper” or “scissors” in a prompt window

What’s the desired output?
  A console message which shows:
  - computers choice
  - winner
  - humans score
  - computers score

What are the steps necessary to return the desired output?
  Get the human choice
  Get the computer choice
  Evaluate the winner
  Update the score
  Display the results

  Possible actions
  - rock beats scissors
  - scissors beats paper
  - paper beats rock
  - if both choose the same, it's a tie
  


Pseudocode

  Prompt user for their choice and store it in a variable
  Get a random number between 0 and 2
  Assign a choice to the random number
  Compare the choices
  - if human chooses rock
    - if computer chooses rock, it's a tie
    - if computer chooses paper, computer wins
    - if computer chooses scissors, human wins
  - if human chooses paper
    - if computer chooses rock, human wins
    - if computer chooses paper, it's a tie
    - if computer chooses scissors, computer wins
  - if human chooses scissors
    - if computer chooses rock, computer wins
    - if computer chooses paper, human wins
    - if computer chooses scissors, it's a tie
  Update the score
  Display the results

*/


let humanScore = 0;
let computerScore = 0;

playGame(5);





function getUserInput() {
  let input;
  do {
      input = prompt('Enter rock, paper, or scissors');
      if (input === null || input.trim() === "") {
          alert("Invalid input. Please try again.");
      }
  } while (input === null || input.trim() === "");
  
  return input.toLowerCase();
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    displayRoundWinner('tie', humanChoice, computerChoice);
  } else if(humanChoice === 'rock') {
    if(computerChoice === 'paper') {
      displayRoundWinner('computer', humanChoice, computerChoice);
    } else {
      displayRoundWinner('human', humanChoice, computerChoice);
    }
  } else if(humanChoice === 'paper') {
    if(computerChoice === 'rock') {
      displayRoundWinner('human', humanChoice, computerChoice);
    } else {
      displayRoundWinner('computer', humanChoice, computerChoice);
    }
  } else if(humanChoice === 'scissors') {
    if(computerChoice === 'rock') {
      displayRoundWinner('computer', humanChoice, computerChoice);
    } else {
      displayRoundWinner('human', humanChoice, computerChoice);
    }
  }
}

function displayRoundWinner(winner, humanChoice, computerChoice) {
  // Display the results
  if(winner === 'tie') {
    console.log('It\'s a tie!');
  } else if(winner === 'human') {
    humanScore++;
    console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
  }

  // Update the score
  console.info(`Human: ${humanScore} Computer: ${computerScore}`);
}

function playGame(rounds) {
  for(let i = 0; i < rounds; i++) {
    console.log(`Round ${i + 1}`);
    playRound(getUserInput(), getComputerChoice());
  }
  
  if(humanScore > computerScore) {
    console.log('Human wins!');
  } else if(humanScore < computerScore) {
    console.log('Computer wins!');
  } else {
    console.log('It\'s a tie!');
  }
}