  //beginning of game player has $100 to use
  //bid button should be able to add money to the total after a win/loss of deal also starts the game
  //bid text should be disabled during play  //hit button sends one card to the player
  //stay button stops the players turn
  //win/lose by who "busts" and stays up to 21 or under
  //assign each card a value, A=1, 2=2, 3=3,..., J=11, Q=12, K=13
  //to win a game must reach 21
  //prompt for how to play
class Deck {
  constructor() {
    this.deck=[]
    this.dealt_cards=[]
  }
  generateDeck() {
    let card = (suit, value) => {
      this.name = value + ' of ' + suit
      this.suit = suit
      this.value = value

      return {name: this.name, suit: this.suit, value: this.value}
    }
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K',]
    let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']

    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        this.deck.push(card([s], values[v]))
      }
    }
  }
  printDeck () {
    if(this.deck.length == 0) {
      console.log('the deck has been generated');
    } else {
      for (let c = 0; c < this.deck.length; c++) {
        console.log(this.deck[c]);
      }
    }
  }
}
deck = new Deck()
deck.generateDeck()
deck.printDeck()
