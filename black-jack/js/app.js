  //beginning of game player has $100 to use
  //bid button should be able to add money to the total after a win/loss of deal also starts the game
  //bid text should be disabled during play  //hit button sends one card to the player
  //stay button stops the players turn
  //win\lose by who "busts" and stays up to 21 or under
  //assign each card a value, A=1, 2=2, 3=3,..., J=10, Q=10, K=10
  //to win a game must reach 21
  //prompt for how to play
  let value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let suit = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
  let deck = new Array ();

class Deck {
  constructor() {
    this.deck=[]
    this.dealt_cards=[]


  }
  singlecard() {
    return this.deck[0]
  }
  generateDeck() {
    // let card = (suit, value) => {
    //   this.name = value + ' of ' + suit
    //   this.suit = suit
    //   this.value = value
    //
    // }

    for (let s = 0; s < suit.length; s++) {
      for (let v = 0; v < value.length; v++) {
        let card = (suit, value) => {
          this.name = value + ' of ' + suit
          this.suit = suit
          this.value = value
          return {name: this.name, suit: this.suit, value: this.value}

        }
        this.deck.push(card(suit[s], value[v]))
        console.log(suit[s])
        console.log(value[v])
      }
    }
  }
  printDeck () {
    if(this.deck.length == 52) {
      console.log('the deck has been generated');
    } else {
      for (let c = 0; c < this.deck.length; c++) {
        console.log(this.deck[c]);
      }
    }
  }
}
deck = new Deck()
console.log(deck);
deck.generateDeck()
deck.printDeck()

//---------- game logic------------
//player has $100
//player must make a bid to start game
//if player gets 21 points/blackjack on first deal player stays auto then Dealer starts, else player has to decide if they want to hit or stay to reach 21 then dealer starts when player stays
//if player is over 21 he busts/loses money and if dealer busts player wins bet
//
$(()=> {
  const $start = ()=>{
  }
  const $hit = ()=>{
    console.log("Hit");
  }

  const $stay = ()=>{
    console.log("Stay");
  }

  const $bid = ()=>{
    console.log("Bid");
  }

  $("#bid-btn").on('click', $bid);
  $("#stay-btn").on('click', $stay);
  $("#hit-btn").on('click', $hit);
});
