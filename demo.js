const TheDeck = require('./index');

const myDeck = new TheDeck.Deck();

// console.log(myDeck.cards.length);

// myDeck.cards.forEach(card => {
//   console.log(card.toString());
//   console.log(card.toShortString());
// })

const shuffledDeck = new TheDeck.Deck({ shuffle: true });

// shuffledDeck.cards.forEach(card => {
//   console.log(card.toShortString());
// });

// console.log(shuffledDeck.dealOne());
// console.log(shuffledDeck.cards.length);

const hands = shuffledDeck.deal({ hands: 4, size: 5 });

hands.forEach((hand, index) => {
  console.log('hand: ', index);
  console.log(hand.join(', '));

  console.log(hand.map(card => card.getVal()).join(', '));
});
console.log(shuffledDeck.cards.length);
