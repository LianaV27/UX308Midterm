import { calculateCubeVolume } from "../cubeheight2volume.js";

describe("calculateCubeVolume", function () {
    it("tests a height of 5m", function () {
        let volume = calculateCubeVolume(5);
        expect(volume.toFixed(2)).toBe("125.00");
    });

    it("tests a height of 7m", function () {
        let volume = calculateCubeVolume(7);
        expect(volume.toFixed(2)).toBe("343.00");
    });

    it("tests a height of 11m", function () {
        let volume = calculateCubeVolume(11);
        expect(volume.toFixed(2)).toBe("1331.00");
    });
});

