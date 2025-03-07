import { calculateCoins } from "../valueofcoins.js";

describe("calculateCoins", function() {
    it("tests the calculation with 1 nickle, 2 dimes, 3 quarters, 4 loonies, and 5 toonies", function() {
      let total = calculateCoins(1,2,3,4,5);
      expect(total).toBe("15");
    });

    it("tests the calculation with 1 nickle, 1 dime, 1 quarter, 1 loonie, and 1 toonie", function() {
        let total = calculateCoins(1,1,1,1,1);
        expect(total).toBe("3.4");
      });

      it("tests the calculation with 1 nickle, 2 dimes, 3 quarters, 4 loonies, and 5 toonies", function() {
        let total = calculateCoins(1,2,3,4,5);
        expect(total).toBe("15");
      });
  });
  
  