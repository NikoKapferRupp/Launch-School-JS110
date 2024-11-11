const readline = require("readline-sync");
const AMOUNT_OF_CARDS = 52;
const VALUE_LIMIT = 21;
const COMPUTER_LIMIT = 17;

const CARD_NAMES = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
const CARD_SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];


function initializeDeck() { 
  let deck = [];
  for (let suit = 0; suit < CARD_SUITS.length; suit++) {
    for (let value = 0; value < CARD_NAMES.length; value++) {
      deck.push([CARD_NAMES[value], CARD_SUITS[suit]]);
    }
  }
  return deck;
}

function shuffleDeck(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]];
  }
  return array;
}

function firstHand(deck) {
  let playerHand = [];
  let computerHand = [];  
  playerHand.push(deck.shift(), deck.shift());
  computerHand.push(deck.shift(), deck.shift());
  
  return [playerHand, computerHand];
}

function drawCard(deck) {
  return deck.shift();
}

function getNextMove() {
  let nextMove = readline.question('What is your next move? hit or stay? \n');
  while(true) {    
    if(nextMove === 'hit' || nextMove === 'stay') {return nextMove}
    nextMove = readline.question('Invalid response! What is your next move? hit or stay? \n');
  }
}

function calculateTotal(hand) {
  let sum = 0;
  let numberOfValue11Aces = 0;

  hand.forEach(card => {
    let name = card[0];
    if(name.length >= 4) {
      sum += 10;
    } else if (name.length === 3) {
      sum += 11;
      numberOfValue11Aces += 1;
    } else {
      sum += Number(name);
    }
  });

  while(true) {
    if (sum > VALUE_LIMIT && numberOfValue11Aces > 0) {
      sum -= 10;
      numberOfValue11Aces -= 1;
    } else {break}
  }
  return sum;
}

function displayBoard(playerHand, computerHand) {
  console.log('--------------------------------------------------');
  console.log(`\nDealer has: ${computerHand[0][0]} and unknown card.`);
  console.log();  
  console.log(`You have: ${playerHand.map(element => element[0]).join(' and ')}.\n`);
  console.log('--------------------------------------------------\n');
}

function playAgain() {
  while (true) {
    let answer = readline.question("Do you want to play again? ");

    if (answer === 'yes') {
      return true;
    } else if (answer === 'no') {
      return false;
    }
  }
  

}

function main() {
  while(true) {
    let deck = shuffleDeck(initializeDeck());
    let [playerHand, computerHand] = firstHand(deck);
    displayBoard(playerHand, computerHand);  

    while(true) {  

      let nextMove = getNextMove()                                                  
      if (nextMove === "hit") {                                                     
        playerHand.push(drawCard(deck));
        displayBoard(playerHand, computerHand);
      } if (calculateTotal(playerHand) > VALUE_LIMIT || nextMove === "stay") {
        break;
      }     
    }
    
    while(true) {
      if (calculateTotal(computerHand) < COMPUTER_LIMIT) {
        computerHand.push(drawCard(deck));
      } else { break }
    }
    displayBoard(playerHand, computerHand);
    console.log("Dealer has: " + calculateTotal(computerHand) + "\nDealer drew: " + computerHand.map(element => element[0]).join(' and '));
    console.log("Player has: " + calculateTotal(playerHand) + "\n");
    if (calculateTotal(playerHand) > 21) {
      console.log("BUST! The computer is the winner!");
    } else if (calculateTotal(computerHand) > VALUE_LIMIT || calculateTotal(computerHand) <= calculateTotal(playerHand)) {
      console.log("The player is the winner!");
      
    } else {
      console.log("The computer is the winner!");    
    }
    if (!playAgain()) {
      return;
    }
  }
}

main();

console.log("Tanks for playing!");
