# Black_Jack
First Game and Repository on GitHub

Player will be able to hit, bid, stay, and add money to the bank, and restart/new game

Buttons: Hit, Bid, stay
	Hit button: will bring a new card to the game
	Stay button: once the player decides to stay it will be the CPU turn
	Bid: insert the money to the text box once the button has been pressed should state 10 

Text box: bid amount
Bank: starts at 100 if player wins add bid, if player loses –bid
Once the bank reaches $0 player lost once the bank reaches to $100000 player wins! 
Cards:
Need to get 52 cards!
Array of 1-13 of each suit of hearts, clubs, spades, and diamonds
Randomize each array with a for loop and math.random? 

had a issue with getting cards printed, 
there is a bug in the console log number does not match the cards, 
and bid button does not stay when i need to subtract or add after each button is pressed 
and went back and forth when i would get stuck with something from css to JS/JQuery 


 $( () => {
  const $openBtn = $('#openModel');
  const $modal = $('#modal');
  const $closeBtn = $('#close');
  const openModel = () => {
    $modal.css('display', 'block');
  }
  const closeModal = () => {
    $modal.css('display', 'none');
  }
  $openBtn.on('click', openModel);
  $closeBtn.on('click', closeModal);
});
  //beginning of game player has $100 to use
  //bid button should be able to add money to the total after a win/loss of deal also starts the game
  //bid text should be disabled during play  //hit button sends one card to the player
  //stay button stops the players turn
  //win\lose by who "busts" and stays up to 21 or under
  //assign each card a value, A=1, 2=2, 3=3,..., J=10, Q=10, K=10
  //to win a game must reach 21
  //prompt for how to play
  // $(".card-heart").append("\u2665"),
  // $(".card-spade").append("\u2660"),
  // $(".card-club").append("\u2663"),
  // $(".card-diamond").append("\u2666")


class Deck {
  constructor() {
    this.deck=[]
    this.dealtCards=[]
  }
  generateDeck() {
    let card = (suit, value, points) => {
      this.name = value + ' of ' + suit + points;
      this.suit = suit;
      this.value = value;
      this.points = points;

      return {name: this.name, suit: this.suit, value: this.value, points: this.points}
      // return {name: this.name, suit: this.suit, value: this.value, points: this.points}
    }

    let value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suit = ['♦','♣','♥','♠']

      for (let s = 0; s < suit.length; s++) {
        for (let v = 0; v < value.length; v++) {
          let points = parseInt(value[v]);
          if (value[v] == 'J' || value[v] == "Q" || value[v] == "K")
          points = 10;
          if (value[v] == "A")
          points = 11;
          this.deck.push(card(suit[s], value[v], points))
        // console.log(suit[s]);
        // console.log(value[v]);
      }

    }
  }
  printDeck() {
    if(this.deck.length == 0) {
      console.log('the deck has been generated');
    } else {
      for (let c = 0; c < this.deck.length; c++) {
        console.log(this.deck[c]);
      }
    }
  }

  // deck = new Deck();
  // console.log(deck);
  // deck.generateDeck();
  // deck.printDeck();
  //for every 104th turn switch the values of two random cards
    shuffle() {
    let currentDeck = this.deck.length, mixVal, randDeck

    while(0 != currentDeck){
      randDeck = Math.floor(Math.random() * currentDeck)
      //take away one card from the array each time
      currentDeck -= 1
      //randomize each value with suit
      mixVal = this.deck[currentDeck]
      this.deck[currentDeck] = this.deck[randDeck]
      this.deck[randDeck] = mixVal
        }
      }
      deal() {
        let dealtCard = this.deck.shift()
        this.dealtCards.push(dealtCard)
        return dealtCard
      }
      replace() {
        this.deck.unshift(this.dealtCard.shift())
      }
      clearDeck(){
        this.deck = []
      }
    }

    deck = new Deck()

    deck.generateDeck();
    deck.shuffle();
  // console.log(deck.deal());


//---------- game logic------------
//player has $100
//player must make a bid to start game
//if player gets 21 points/blackjack on first deal player stays auto then Dealer starts, else player has to decide if they want to hit or stay to reach 21 then dealer starts when player stays
//if player is over 21 he busts/loses money and if dealer busts player wins bet
//
function getAccount()
{
  var bidBank= $("#bid-box").val();
  $("#bank").html(bidBank);
}

$(()=> {
  const $start = ()=>{
    alert("Welcome to Blackjack, You have earned $100 for visiting the webpage!")
  }

  let botHand = [];
  let userHand = [];

    const $hit = ()=>{
      console.log(deck.deal());
      userHand.push(deck.deal());
      // console.log(userHand[i]);
      //initializing sum variable
      let sum = 0;
      //adding points together
      for (var i = 0; i < userHand.length; i++) {
        sum = userHand[i].points + sum;
  }
      console.log(sum);
    if(sum === 21){
        console.log("player wins");
  } else if(sum > 21) {
        console.log("player bust");
  }
}

    const $stay = ()=>{
      console.log(deck.deal());
      botHand.push(deck.deal());
    let botSum = 0;
    for (var i = 0; i < botHand.length; i++) {
      botSum = botHand[i].points + botSum;
  }
      console.log(botSum);
    if(botSum === 21){
      console.log("BotWins");
  } else if (botSum > 21){
        console.log("Bot Destroyed Player Wins");
  } else if (botSum <= 19){
      console.log(deck.deal());
      botHand.push(deck.deal());
  } else if (botSum >= $hit('sum')){
      console.log("Bot beat you, you lost");
  } else{
      console.log("Bot Busted");
  }
  }
    const $bid = ()=>{
      $('.card-placement').append(deck)
      console.log(deck.deal());
      console.log(deck.deal());
      userHand.push(deck.deal());
      userHand.push(deck.deal());
      console.log(deck.deal());
      console.log(deck.deal());
      botHand.push(deck.deal());
      botHand.push(deck.deal());
      $('#bid-box').val('');
      // console.log(userHand[0].points, userHand[1].points);
  }
    const $reset = ()=>{
      $start();
    }
  $("#bid-btn").on('click', $bid);
  $("#stay-btn").on('click', $stay);
  $("#hit-btn").on('click', $hit);
  $("#reset-btn").on('click', $reset);
});
