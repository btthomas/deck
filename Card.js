const { shortSuit, shortRank } = require('./utils');
const {
  ACE,
  KING,
  QUEEN,
  JACK,
  TEN,
  NINE,
  EIGHT,
  SEVEN,
  SIX,
  FIVE,
  FOUR,
  THREE,
  TWO,
} = require('./constants');

class Card {
  constructor({ suit, rank }) {
    this.suit = suit;
    this.rank = rank;
  }

  getVal(options = { rankOnly: true, faces: true, aceHigh: true }) {
    if (options.rankOnly) {
      switch (this.rank) {
        case TEN:
          return 10;
        case NINE:
          return 9;
        case EIGHT:
          return 8;
        case SEVEN:
          return 7;
        case SIX:
          return 6;
        case FIVE:
          return 5;
        case FOUR:
          return 4;
        case THREE:
          return 3;
        case TWO:
          return 2;
      }
      if (this.rank === ACE && !options.aceHigh) {
        return 1;
      }
      if (options.faces) {
        // face cards in order
        switch (this.rank) {
          case ACE:
            return 14;
          case KING:
            return 13;
          case QUEEN:
            return 12;
          case JACK:
            return 11;
        }
      } else {
        // face cards are 10
        switch (this.rank) {
          case ACE:
            return 11;
          case KING:
            return 10;
          case QUEEN:
            return 10;
          case JACK:
            return 10;  
        }
      }
    }
  }

  toString() {
    return `${this.rank} of ${this.suit}`;
  }

  toShortString() {
    const rank = shortRank(this.rank);
    const suit = shortSuit(this.suit);

    return `${rank}${suit}`;
  }
}

module.exports = Card;