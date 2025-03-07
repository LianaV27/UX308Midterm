// This program *calculates* the **volume of a cube** in cubic meters based on the **height** in meters
function calculateCubeVolume(height) {
    // height cubed 
    let volume = Math.pow(height, 3);
    return volume;
}

console.log(`If the cube has a height of 5m, it has a volume of ${calculateCubeVolume(5)}m cubed.`);

export { calculateCubeVolume }