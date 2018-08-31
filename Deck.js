const { ranks, suits } = require('./constants');
const Card = require('./Card');

class Deck {
  // [0] is the "top" of the deck!
  constructor(options = {}) {
    this.cards = [];

    // TODO let the user pick a smaller/larger deck
    // e.g. Pinochle is 8 each of nines to aces

    // TODO let the user include 1 or 2 jokers

    ranks.forEach(rank => {
      suits.forEach(suit => {
        this.cards.push(new Card({ suit, rank }));
      });
    });

    if (options.shuffle) {
      this.shuffle();
    }
  }

  // shuffles the deck
  shuffle() {
    // fisher-yates implementation
    const len = this.cards.length;
    for (let i = len - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const copy = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = copy;
    }
  }

  // show the top card, don't deal it
  peek() {
    if (this.cards.length) {
      return this.cards[0];
    }
    return undefined
  }

  // returns the next card
  dealOne() {
    if (this.cards.length) {
      const card = this.cards.shift();
      return card;
    }
    return undefined;
  }

  // returns an array of arrays of Card
  deal({ hands = 4, size } = {}) {
    if (hands <= 0) {
      return [];
    }

    const handsArray = [];
    for (let i = 0; i < hands; i++) {
      handsArray[i] = [];
    }

    let i = 0;
    while (this.cards.length && (!size || i / hands < size)) {
      handsArray[i % hands].push(this.dealOne());
      i++;
    }

    return handsArray;
  }
}

module.exports = Deck;
