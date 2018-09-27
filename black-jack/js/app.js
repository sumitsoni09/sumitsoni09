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
  let value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  let suit = ['♦','♣','♥','♠']
  // $(".card-heart").append("\u2665"),
  // $(".card-spade").append("\u2660"),
  // $(".card-club").append("\u2663"),
  // $(".card-diamond").append("\u2666")


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
        // let points = parseInt(value[v]);
        //   if (value[v] == "J" || value[v] == "Q" || value == "K")
        //     points = 10;
        //   if (value[v] == "A")
        //     points = 11;
        let card = (suit, value) => {
          this.name = value + ' of ' + suit
          this.suit = suit
          this.value = value
          return {name: this.name, suit: this.suit, value: this.value}
        }
      this.deck.push(card(suit[s], value[v]))
        console.log(suit[s]);
        console.log(value[v]);
      }
    }
  }
  printDeck () {
    if(this.deck.length == 52) {
      console.log('the deck has been generated');
    } else {
      for (let c = 0; c < this.deck.length; c++) {
        // console.log(this.deck[c]);
      }
    }
  }
}
deck = new Deck();
console.log(deck);
deck.generateDeck();
// deck.printDeck();




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
  const $start = ()=>{}
    const $hit = ()=>{
      $('.card-diamond:nth-child(2)').css('visibility', 'visible');
      $('.card-spade:nth-child(3)').css('visibility', 'visible');
      console.log("Hit");
  }
  const $stay = ()=>{
    console.log("Stay");
  }
  const $bid = ()=>{
    $('#bid-box').val('');
    $('.card-heart:nth-child(1)').css('visibility', 'visible');
    $('.card-club:nth-child(4)').css('visibility', 'visible');
  }

  $("#bid-btn").on('click', $bid);
  $("#stay-btn").on('click', $stay);
  $("#hit-btn").on('click', $hit);

  const $heart = $(".card-heart").append("\u2665");
  console.log($heart);
  const $spade = $(".card-spade").append("\u2660");
  console.log($spade);
  const $club = $(".card-club").append("\u2663");
  console.log($club);
  const $diamond = $(".card-diamond").append("\u2666");
  console.log($diamond);

  $heart.css('visibility', 'hidden');
  $club.css('visibility', 'hidden');
  $diamond.css('visibility', 'hidden');
  $spade.css('visibility', 'hidden');
});
