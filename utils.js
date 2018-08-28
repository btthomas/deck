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

const utils = {};

utils.shortSuit = suit => {
  if (typeof suit === 'string' && suit.length) {
    return suit.substring(0, 1);
  }
  return undefined;
};

utils.shortRank = rank => {
  switch (rank) {
    case ACE:
      return 'A';
    case KING:
      return 'K';
    case QUEEN:
      return 'Q';
    case JACK:
      return 'J';
    case TEN:
      return 'T';
    case NINE:
      return '9';
    case EIGHT:
      return '8';
    case SEVEN:
      return '7';
    case SIX:
      return '6';
    case FIVE:
      return '5';
    case FOUR:
      return '4';
    case THREE:
      return '3';
    case TWO:
      return '2';
  }
  return undefined;
};

module.exports = utils;
