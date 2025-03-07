import { calculateCelcius } from "../fahrenheit2celcius.js";

describe("calculateCelsius", function () {

    // FREEZING
    it("tests calculation with 32 degrees fahrenheit", function () {
        let celcius = calculateCelcius(32);
        expect(celcius.toFixed(2)).toBe("0.00");
    });

    //BOILING
    it("tests calculation with 212 degrees fahrenheit", function () {
        let celcius = calculateCelcius(212);
        expect(celcius.toFixed(2)).toBe("100.00");
    });

    //ROOM TEMP
    it("tests calculation with 70 degrees fahrenheit", function () {
        let celcius = calculateCelcius(70);
        expect(celcius.toFixed(2)).toBe("21.11");
    });

});

