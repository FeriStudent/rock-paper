function playRound(playerSelection, computerSelection) {
    let playerPick = playerSelection.toLowerCase();
    console.log ("Player pick : " + playerPick);
    console.log ("Computer pick is : " + computerSelection);

    if (playerPick == "rock" || playerPick == "paper" || playerPick == "scissors")
    {

        if (playerPick == computerSelection)
        return "It's even! You both picked a " + playerPick;
    else if (playerPick === "rock" && computerSelection === "paper")
        return "Computer wins! It picked a paper and you picked a rock";
    else if (playerPick === "paper" && computerSelection === "rock")
        return "PlayerWins! You picked a paper and computer picked a rock!";
    
    // cases bi bilo bolje :D da vidimo ovo 
    else if ((playerPick === "scissors" || playerPick === "paper") && (computerSelection === "scissors" || computerSelection === "paper"))
    {
        if (playerPick === "scissors")
            return "GG WP Player wins because scissors > paper";
        else
            return "GG WP Computer wins because scissors > paper";
    }

    else
    {
        if (playerPick === "rock")
            return "GG WP Player wins because rock > scissors";
        else
            return "GG WP Computer wins because rock > scissors";
    }

    return "Ako si ovde zajebo si brate :D";
    }
    else
        return "Not ok! Pick rock, paper or scissors";
    }

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    if (rand === 1)
        return "rock";
    else if (rand === 2)
        return "paper";
    else
        return "scissors";
}
   
  let i = 0;
  while (i<5)
  {
    let playerSelection = prompt("Sta biras rock, paper, scissors ?");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    i++;
  }
  