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

  const $blackJack = () => {
    alert("Welcome to Blackjack you have $100 to bid, spend it wisely");
  }
    checkWinner = () => {
      if(human.bank <= 0) {
        console.log("player has lost");
        $blackJack();
    } else if (deck.deal() == null){
        console.log("player has won");
        $blackJack();
    }
  }
    // user can bid on how much they would like depending on their account and win lose situation
    const $betMoney = () => {
      if(sum < botSum){
        console.log(human.bank - $money())
        console.log("bank account is " + human.bank);
        checkWinner();
    } else if( sum >= botSum ){
        console.log(human.bank + $money());
        console.log("bank account is " + human.bank);
        checkWinner();
      }
    }

  const $money = () => {
    console.log("You bid ");
  }

class User {
  constructor(name, bank){
    this.name = name;
    this.bank = 100;
  }
}
const human = new User('Player1');

class Deck {
  constructor() {
    this.deck=[]
    this.dealtCards=[]
  }
  generateDeck() {
    let card = (suit, value, points) => {
      this.name = value + ' of ' + suit;
      this.suit = suit;
      this.value = value;
      this.points = points;

      return {name: this.name, suit: this.suit, value: this.value, points: this.points}
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
    console.log(human);
    $blackJack();
    checkWinner();

$(()=>{
  let botHand = [];

  let userHand = [];

  let sum = 0

  let botSum = 0

  // const humanHand = ()=>{
  //   let sum = 0;
  //   for (var i = 0; i < userHand.length; i++) {
      // sum = userHand[i].points + sum;
  //     }
  // }
  // const dealerHand = ()=>{
  //   let botSum = 0
  //   for (var i = 0; i < botHand.length; i++) {
  //     botSum = botHand[i].points + botSum
  //   }
  // }
    const $bid = ()=> {
        // $money();
        userHand.push(deck.deal());
        userHand.push(deck.deal());

        for (var i = 0; i < userHand.length; i++) {
          sum = userHand[i].points + sum;
        }

        console.log("Player has " + sum);

        botHand.push(deck.deal());
        botHand.push(deck.deal());

        for (var i = 0; i < botHand.length; i++) {
          botSum = botHand[i].points + botSum;
        }

        console.log("AI has " + botSum);

        // $money();

      }
      // const $hit = ()=> {
      //   let sum = 0;
      //     for (var i = 0; i < userHand.length; i++) {
      //       sum = userHand[i].points + sum;
      //   userHand.push(deck.deal());
      // }
    $('#bid-btn').on("click", $bid);
    // $('#hit-btn').on("click", $hit);
  });



      // $('#bid-box').attr(disabled);
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    // console.log(deck.deal());
    //
    // checkWinner();

    class Deck {
       constructor() {
         this.deck = [];
         this.drawnCards = [];
         this.userHand = [];
         this.dealerHand = [];

         const suits = ['♦','♣','♥','♠'];
         const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

       //   const $suits = ['♦','♣','♥','♠']
       //
       //   for (let i = 0; i < $suits.length; i++) {
       //     if ($suits === '♦' || $suits ==='♥') {
       //     $suits.css('red');
       //   }
       // }

           // Ran a for - in loop to iterate over array and
           // add each value to a suit.

           // Not sure why a for - in loop works in this case
           // as opposed to a for - of loop.

           // For - in  loop generally works on properties of an object in an arbitrary order.
           // For - of loops generally used for arrays that have order of access importance.

         }
           for (let suit in suits) {
             for (let value in values) {
               this.deck.push(`${values[value]}${suits[suit]}`);
                 let points = parseInt(values[value]);
                   if (values[value] === 'J' || values[value] === 'Q' || values[value] === 'K')
                     points = 10;
                   if (values[value] === 'A')
                     points = 11;
             }
           }
         printDeck () {
           if(!this.deck.length){
             console.log('Need new deck');
           } else {
             for (let i = 0; i < this.deck.length; i++) {
                 console.log(this.deck[i]);
             }
           }
         }

         // Used Fisher-Yates shuffle to randomize card selection

         // Assigned this.deck to the variable deck
         // Assigned m to deck length and also defined i

         // While there are remaining elements to shuffle

         // Choose a random remaining element

         // Swap it with the current element

         shuffle() {
           const deck = this.deck;
           let m = deck.length, i;

           while(m){
             i = Math.floor(Math.random() * m--);

             [deck[m], deck[i]] = [deck[i], deck[m]];
           }

           return this;
         }

         // Deal method

         // Iterate through the array
         // Take a card out of the deck and store into variable

         // Push that card into drawncards array defined at top

         deal () {
       let m = Array.length;
  ​
      for (let i = 0; i <= m; i++) {
         let drawnCard = this.deck.shift()
         this.drawnCards.push(drawnCard)
        }
        return this.drawnCards
       }
     hit () {
        return this.drawnCards
     }
    }


//   let botHand = [];
//   let userHand = [];
//
//
//   const $hit = ()=>{
//     console.log(deck.deal());
//     userHand.push(deck.deal());
//     //initializing sum variable
//     let sum = 0;
//     //adding points together
//     for (var i = 0; i < userHand.length; i++) {
//       sum = userHand[i].points + sum;
//     }
//     console.log(sum);
//     if(sum === 21){
//       console.log("player wins");
//       console.log("Bot beat you, you lost");
//     } else if(sum > 21) {
//       console.log("player bust");
// //     }
// //   }
// //
// //   const $stay = ()=>{
//     console.log(deck.deal());
//     botHand.push(deck.deal());
//     let botSum = 0;
//     for (var i = 0; i < botHand.length; i++) {
//       botSum = botHand[i].points + botSum;
//     }
//     console.log(botSum);
    // if(botSum === 21){
    //   $stay()
    // } else if (botSum > 21){
    //   console.log("Bot Destroyed Player Wins");
    // } else if (botSum <= 17){
    //   botHand.push(deck.deal());
    //   console.log("AI has " + botSum);
    // } else if (botSum >= sum)
    // } else{
    //   console.log("Bot Busted");
    // }
//   }
// const $bid = ()=>{
//   $('.card-placement').append(deck)
//   console.log(deck.deal());
//   console.log(deck.deal());
//   userHand.push(deck.deal());
//   userHand.push(deck.deal());
//   console.log(deck.deal());
//   console.log(deck.deal());
//   botHand.push(deck.deal());
//   botHand.push(deck.deal());
// };
  // console.log(userHand[0].points, userHand[1].points);

//   }
//   $("#bid-btn").on('click', $bid);
//   $("#stay-btn").on('click', $stay);
//   $("#hit-btn").on('click', $hit);
//   $("#reset-btn").on('click', $reset);
// });

//---------- game logic------------
//player has $100
//player must make a bid to start game
//if player gets 21 points/blackjack on first deal player stays auto then Dealer starts, else player has to decide if they want to hit or stay to reach 21 then dealer starts when player stays
//if player is over 21 he busts/loses money and if dealer busts player wins bet
//
// function getAccount()
// {
//   var bidBank= $("#bid-box").val();
//   $("#bank").html(bidBank);
// }

//   $("#bid-btn").on('click', $bid);
//   $("#stay-btn").on('click', $stay);
//   $("#hit-btn").on('click', $hit);
//   $("#reset-btn").on('click', $reset);

// $(()=> {
//   const $start = ()=>{
//     alert("Welcome to Blackjack, You have earned $100 for visiting the webpage!")
//   }
//
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
