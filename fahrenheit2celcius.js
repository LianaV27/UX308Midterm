// This program *calculates* the **temperature in celcius** based on the **temperature in farenheit**
// Formula: (°F − 32) × 1.8 = °C

function calculateCelcius(fahrenheit) {
    let celcius = (fahrenheit - 32) / 1.8;
    return celcius;
}

console.log(`If it is 70 fahrenheit, it is ${calculateCelcius(70)} degrees celcius.`);

export { calculateCelcius }
