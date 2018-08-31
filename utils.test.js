const { shortSuit, shortRank, isSameSuit, isSameRank } = require('./utils');

const KING_OF_CLUBS = {
  rank: 'KING',
  suit: 'CLUBS',
};

const ACE_OF_CLUBS = {
  rank: 'ACE',
  suit: 'CLUBS',
};

const KING_OF_DIAMONDS = {
  rank: 'KING',
  suit: 'DIAMONDS',
};

const TEN_OF_DIAMONDS = {
  rank: 'TEN',
  suit: 'DIAMONDS',
};

describe('utils', () => {
  describe('shortSuit', () => {
    it('returns the first letter of the suit', () => {
      expect(shortSuit('DIAMONDS')).toBe('D');
    });

    it('returns undefined if you pass an empty string', () => {
      expect(shortSuit('')).toBeUndefined();
    });

    it("returns undefined if you don't pass a string", () => {
      expect(shortSuit(1)).toBeUndefined();
    });
  });

  describe('shortRank', () => {
    it('returns A for ACE', () => {
      expect(shortRank('ACE')).toBe('A');
    });

    it('returns 8 for EIGHT', () => {
      expect(shortRank('EIGHT')).toBe('8');
    });

    it("returns undefined if it isn't a rank", () => {
      expect(shortRank('NOT_A_RANK')).toBeUndefined();
    });
  });

  describe('isSameSuit', () => {
    it('returns true for the same suit', () => {
      expect(isSameSuit(KING_OF_CLUBS, ACE_OF_CLUBS)).toBeTruthy();
    });

    it('returns false for not same suit', () => {
      expect(isSameSuit(KING_OF_CLUBS, KING_OF_DIAMONDS)).toBeFalsy();
    });
  });

  describe('isSameRank', () => {
    it('returns true for the same rank', () => {
      expect(isSameRank(KING_OF_CLUBS, KING_OF_DIAMONDS)).toBeTruthy();
    });

    it('returns true for different "tens" if options.facesAreTen', () => {
      expect(
        isSameRank(KING_OF_CLUBS, TEN_OF_DIAMONDS, { facesAreTen: true })
      ).toBeTruthy();
    });

    it('returns false for different "tens" if NOT options.facesAreTen', () => {
      expect(
        isSameRank(KING_OF_CLUBS, TEN_OF_DIAMONDS, { facesAreTen: false })
      ).toBeFalsy();
    });

    it('returns false for different ranks', () => {
      expect(isSameRank(KING_OF_CLUBS, ACE_OF_CLUBS)).toBeFalsy();
    });

    it('returns false for different ranks if options.facesAreTen', () => {
      expect(isSameRank(KING_OF_CLUBS, ACE_OF_CLUBS, { facesAreTen: true })).toBeFalsy();
    });
  });
});
