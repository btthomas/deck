const Card = require('./Card');

let card;

describe('Card', () => {
  beforeEach(() => {
    card = new Card({ suit: 'SPADES', rank: 'TEN' });
  });

  it('can construct a card', () => {
    expect(card.suit).toBe('SPADES');
    expect(card.rank).toBe('TEN');
  });

  it('can convert a card to string', () => {
    expect(card.toString()).toBe('TEN of SPADES');
  });

  it('can convert a card to short string', () => {
    expect(card.toShortString()).toBe('TS');
  });

  describe('getVal', () => {
    it('can calculate the value of a card', () => {
      expect(card.getVal()).toBe(10);

      card = new Card({ suit: 'SPADES', rank: 'THREE' });
      expect(card.getVal()).toBe(3);
    });

    it('can calculate the value of a high Ace when facesAreTen', () => {
      card = new Card({ suit: 'SPADES', rank: 'ACE' });
      expect(card.getVal({ aceHigh: true, facesAreTen: true })).toBe(11);
    });

    it('can calculate the value of a high Ace when NOT facesAreTen', () => {
      card = new Card({ suit: 'SPADES', rank: 'ACE' });
      expect(card.getVal({ aceHigh: true })).toBe(14);
    });

    it('can calculate the value of a low Ace', () => {
      card = new Card({ suit: 'SPADES', rank: 'ACE' });
      expect(card.getVal({ aceHigh: false })).toBe(1);
    });

    it('can calculate the value of a king where facesAreTen', () => {
      card = new Card({ suit: 'SPADES', rank: 'KING' });
      expect(card.getVal({ facesAreTen: true })).toBe(10);
    });

    it('can calculate the value of a king where NOT facesAreTen', () => {
      card = new Card({ suit: 'SPADES', rank: 'KING' });
      expect(card.getVal({ facesAreTen: false })).toBe(13);
    });
  });
});
