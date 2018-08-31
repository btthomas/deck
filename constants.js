const constants = {};

constants.ACE = 'ACE';
constants.KING = 'KING';
constants.QUEEN = 'QUEEN';
constants.JACK = 'JACK';
constants.TEN = 'TEN';
constants.NINE = 'NINE';
constants.EIGHT = 'EIGHT';
constants.SEVEN = 'SEVEN';
constants.SIX = 'SIX';
constants.FIVE = 'FIVE';
constants.FOUR = 'FOUR';
constants.THREE = 'THREE';
constants.TWO = 'TWO';

constants.ranks = [
  constants.ACE,
  constants.KING,
  constants.QUEEN,
  constants.JACK,
  constants.TEN,
  constants.NINE,
  constants.EIGHT,
  constants.SEVEN,
  constants.SIX,
  constants.FIVE,
  constants.FOUR,
  constants.THREE,
  constants.TWO,
];

constants.faces = [constants.KING, constants.QUEEN, constants.JACK];

constants.tens = [
  constants.KING,
  constants.QUEEN,
  constants.JACK,
  constants.TEN,
];

constants.SPADES = 'SPADES';
constants.DIAMONDS = 'DIAMONDS';
constants.HEARTS = 'HEARTS';
constants.CLUBS = 'CLUBS';

constants.suits = [
  constants.SPADES,
  constants.DIAMONDS,
  constants.HEARTS,
  constants.CLUBS,
];

module.exports = constants;
