const Deck = require('./Deck');

describe('Deck', () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it('can construct', () => {
    expect(deck.cards.length).toBe(52);

    expect(deck.cards[0].suit).toBe('SPADES');
    expect(deck.cards[0].rank).toBe('ACE');
  });

  it('can shuffle?', () => {
    // compare complete order of unshuffled to shuffled
    // there are 52 factorial ways (8.06e+67), so if this test fails make sure to celebrate!
    const unshuffledOrder = deck.cards
      .map(card => card.toShortString())
      .join('');

    const shuffledDeck = new Deck({ shuffle: true });
    const shuffledOrder = shuffledDeck.cards
      .map(card => card.toShortString())
      .join('');

    expect(shuffledOrder).not.toBe(unshuffledOrder);
  });

  it('can peek', () => {
    expect(deck.peek()).toEqual({
      rank: 'ACE',
      suit: 'SPADES',
    });
  });

  it('can dealOne', () => {
    const card = deck.dealOne();

    expect(deck.cards.length).toBe(51);

    expect(card).toEqual({
      rank: 'ACE',
      suit: 'SPADES',
    });
  });

  describe('deal', () => {
    it('can deal a deck 4 ways', () => {
      const hands = deck.deal();

      hands.forEach(hand => {
        expect(hand.length).toBe(13);
      });
    });

    it("can deal 2 cards to 10 for hold'em", () => {
      const hands = deck.deal({ hands: 10, size: 2 });

      hands.forEach(hand => {
        expect(hand.length).toBe(2);
      });
    });

    it('returns an empty array for 0 hands', () => {
      const hands = deck.deal({ hands: 0 });

      expect(hands).toEqual([]);
    });
  });

  it('can peek/deal nothing if the deck has already been delt', () => {
    deck.deal();

    expect(deck.peek()).toBeUndefined();

    expect(deck.dealOne()).toBeUndefined();

    expect(deck.deal({ hands: 2 })).toEqual([[], []]);
  });
});
