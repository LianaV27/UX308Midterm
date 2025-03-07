import { assessDamage } from "../earthquakedamage.js";

describe("assessDamage", function () {
    it("assesses earthquake damage based on Richter scale score 5", function () {
        let damage = assessDamage(5);
        expect(damage).toBe("Some damage");
    });

    it("assesses earthquake damage based on Richter scale score 6.2", function () {
        let damage = assessDamage(6.2);
        expect(damage).toBe("Serious damage: walls may crack or fall");
    });

    it("assesses earthquake damage based on Richter scale score 7.5", function () {
        let damage = assessDamage(7.5);
        expect(damage).toBe("Catastrophe: most buildings destroyed");
    });

});
