import { calculateCoins } from '../valueofcoins.js'

describe("calculateCoins", function() {
    it("tests the calculation with 1 nickle, 2 dimes, 3 quarters, 4 loonies, and 5 toonies", function() {
      let total = calculateCoins(1,2,3,4,5);
      expect(total).toBe("15.00");
    });
  });
  
  