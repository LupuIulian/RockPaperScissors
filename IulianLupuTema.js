function play() {
  let posibilities = ["rock", "paper", "scissors"];

  const getRandomInt = (max) => Math.floor(Math.random() * max);

  let computerChoice = posibilities[getRandomInt(3)];
  let userChoice = posibilities[getRandomInt(3)];

  console.log(`Computer Choice: ${computerChoice} `);
  console.log(`User Choice: ${userChoice} `);

  if (computerChoice === userChoice) {
    console.log("It's a tie!");
  } else {
    if (computerChoice === "rock") {
      if (userChoice === "paper") {
        console.log("User Wins!");
      } else {
        console.log("Computer Wins!");
      }
    }
    if (computerChoice === "paper") {
      if (userChoice === "scissors") {
        console.log("User Wins!");
      } else {
        console.log("Computer Wins!");
      }
    }
    if (computerChoice === "scissors") {
      if (userChoice === "rock") {
        console.log("User Wins!");
      } else {
        console.log("Computer Wins!");
      }
    }
  }
}

play();
