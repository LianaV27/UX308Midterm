import { calculateMembership } from "../gymmembership.js";

describe("calculateMembership", function () {
    it("calculates membership price with base cost of $10 and 2 friends signed up", function () {
        let price = calculateMembership(10, 2);
        expect(price.toFixed(2)).toBe("9.00")
    });

    it("calculates membership price with base cost of $25 and 3 friends signed up", function () {
        let price = calculateMembership(25, 3);
        expect(price.toFixed(2)).toBe("21.25")
    });

    it("calculates membership price with base cost of $15 and 0 friends signed up", function () {
        let price = calculateMembership(15, 0);
        expect(price.toFixed(2)).toBe("15.00")
    });

    it("calculates membership price with base cost of $25 and 4 friends signed up", function () {
        let price = calculateMembership(25, 4);
        expect(price.toFixed(2)).toBe("21.25")
    });

});

