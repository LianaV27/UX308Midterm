/*1)  Write a function that calculates the total value of a set of coins in dollars.
Each coin is worth:
nickel:  $0.05
dime:    $0.10
quarter: $0.25
loonie:  $1.00
toonie:  $2.00

Parameters:
        nickels - number of nickels
        dimes - number of dimes
        quarters - number of quarters
        loonies - number of loonies
        toonies - number of toonies
Returns:
        total - total value of coins in dollars

Write at least 3 tests. Don't forget to test 0.*/

function calculateCoins(nickle, dime, quarter, loonie, toonie) {
        let total = nickle * 0.05 + dime * 0.10 + quarter * 0.25 + loonie * 1.00 + toonie * 2.00;
        return total;
}

console.log(`If I have 1 nickle, 2 dimes, 3 quarters, 4 loonies, and 5 toonies, I have $${calculateCoins(1, 2, 3, 4, 5)}.`);

export { calculateCoins }

