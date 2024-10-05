console.log `helllllo`

// WAR card game
// WHat do we need?
//Deck
//  52 cards
//  each card has rank(name value)
//  suit (heart, club)
//  Values: Ace=1 Jack=11
//  a way to shuffle the deck
//  a way to pass the cards to players
//  a way to keep track of points
//  a way to assign points in turns
//  need some players (players class?)

//Players
//-Name -Score - Hand

//Logic to actually play the game

//create cards
// Four suits to represent the appearance (user interface - ui) for your cards
let cardSuits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
console.log("Card Suits Example:", cardSuits);

class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
  }
//create the deck
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ["Spades 🗡️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
      const values = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',];
      for (let suit of suits) {
        for (let value of values) {
          this.cards.push(new Card(suit, value));
        }
      }
    }
  //has to be random
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  //create the actual drawing of the game
    deal() {
      return this.cards.splice(0, this.cards.length / 2);
    }
  }
  //player class, needs to start at 0
  class Player {
    constructor(name, cards) {
      
      this.name = name;
      this.cards = cards;
      this.points = 0;
    }
  
    makePlayer() {
      let hand = this.deck.splice(0,26);
      this.player1.push (new Player(hand));
    }
    playCard() {
      return this.cards.shift();
    }
  
    addPoints(points) {
      this.points += points;
    }
  }
//the actual functionality
  class WarGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
    
    playTurn() {
      const card1 = this.player1.playCard();
      const card2 = this.player2.playCard();
      console.log(`${this.player1.name} plays ${card1.value} of ${card1.suit}`);
      console.log(`${this.player2.name} plays ${card2.value} of ${card2.suit}`);
  
      const cardValues = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14};
      if (cardValues[card1.value] > cardValues[card2.value]) {
        this.player1.addPoints(1);
        console.log(`${this.player1.name} wins this turn`);
      } else if (cardValues[card1.value] < cardValues[card2.value]) {
        this.player2.addPoints(1);
        console.log(`${this.player2.name} wins this turn`);
      } else {
        console.log("It's a tie!");
      }
  
      console.log(`${this.player1.name} has ${this.player1.points} points`);
      console.log(`${this.player2.name} has ${this.player2.points} points`);
    }
  //actual function to run the game
    playGame() {
      while (this.player1.cards.length > 0 && this.player2.cards.length > 0) {
        this.playTurn();
      }
  
      if (this.player1.points > this.player2.points) {
        console.log(`${this.player1.name} wins the game!`);
      } else if (this.player1.points < this.player2.points) {
        console.log(`${this.player2.name} wins the game!`);
      } else {
        console.log("The game is a tie!");
      }
    }
  }
  
  const deck = new Deck();
  deck.shuffle();
  const player1 = new Player('Player 1', deck.deal());
  const player2 = new Player('Player 2', deck.deal());
  const game = new WarGame(player1, player2);

 

game.playGame();
game.playGame();
