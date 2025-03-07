/*Write a function that calculates price cost of a gym membership. A member gets a
discount according to the number of friends they sign up.
0 friends: 0% discount
1 friend: 5% discount
2 friends: 10% discount
3 or more friends: 15% discount
-------------------------------------------------------
Parameters:
cost - a gym membership base cost (float > 0)
friends - number of friends signed up (int >= 0)*/

function calculateMembership(cost, friends) {
    let price;

    if (friends == 0) {
        price = cost;

    } else if (friends == 1) {
        price = cost - (cost * 0.05);

    } else if (friends == 2) {
        price = cost - (cost * 0.10);

    } else if (friends >= 3) {
        price = cost - (cost * 0.15);
    }
    return price;
}

console.log(`If the membership cost $25, and I have 3 friends sign up, I pay $${calculateMembership(25, 3)} for my membership.`);
export { calculateMembership }