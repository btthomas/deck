### Deck of Cards

## installation

works with node 10.7 and npm 6.1

`git clone`
`npm install`

## Usage

deck uses common.js modules (no import yet)

`const { Deck, Card } = require('./');`
`const deck = new Deck();`
`const card = new Card({ suit: 'SPADES', rank: 'ACE' });`

## API

# Deck
Models a deck.

`Deck.shuffle()`
Shuffles the deck.

`Deck.peek()`
Returns the top Card, but does not deal it.

`Deck.dealOne()`
Deals the top Card.

`Deck.deal({ hands, size })`
Deals the deck out in `hands` many hands. Returns an array of array of Card If size is undefined, it will deal whatever is remaining in the deck. If size is defined, it will deal `size` many cards to `hands` many hands. 

# Card
Models a card.

`Card.toString()`
Returns a string representation of a card, e.g. `'ACE of SPADES'`.

`Card.toShortString()`
Returns a shortened string representation of a card, e.g. `'AS'`.

`Card.getVal({ aceIsHigh, facesAreTen })`
Returns the "value" of a card.
E.g. A TWO is 2. An ACE may return 1, 11, or 14. a KING may return 10 or 13.

# utils
helpful utilities

`utils.shortSuit()`
Returns the first character of the suit string.

`utils.shortRank()`
Returns a one character representation of the rank. E.g. SEVEN returns `'7'`; KING returns `'K'`.

`utils.isSameSuit(Card, Card)`
Returns true if the cards are the same suit.

`utils.isSameRank(Card, Card, { facesAreTen })`
Returns true if the cards are of the same rank. If `facesAreTen` is true, then face cards (JACK, QUEEN, KING) are equal to each other and TEN.

## Test Coverage

`npm test` will run the tests

Tests are written with jest:

--------------|----------|----------|----------|----------|-------------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
--------------|----------|----------|----------|----------|-------------------|
All files     |     90.6 |    82.26 |      100 |     90.6 |                   |
 Card.js      |    65.63 |    54.17 |      100 |    65.63 |... 43,56,58,68,70 |
 Deck.js      |      100 |      100 |      100 |      100 |                   |
 constants.js |      100 |      100 |      100 |      100 |                   |
 utils.js     |      100 |      100 |      100 |      100 |                   |
--------------|----------|----------|----------|----------|-------------------|
Test Suites: 3 passed, 3 total
Tests:       30 passed, 30 total
