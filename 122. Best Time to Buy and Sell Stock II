/**
 * @param {number[]} prices
 * @return {number}
 */

// I was able to solve this without any solutions lookup! (about 1hr)
// Since I had worked on #121 I know that profit = sellPrice - buyPrice.
// The easy way to describe this solution and the difference between is that 
// We want to figure out a way to never see a negative profit vs finding the max profit.

// To keep track of negative profit, keep track of highest profit found so far.
// If one time, it goes down, that is the highest possible profit for that buy price. So we want to "sell" and "buy" at the same time.
// Using new buy price, repeat process above until we reach end of array.

var maxProfit = function (prices) {
    let profit = 0;
    let buyPrice = prices[0];
    let highestProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        // If at any point sell returns lower than highest potential profit:
        // 1. Sell by adding to profit
        // 2. Buy by changing buyPrice to current price
        // 3. Reset highestProfit to 0 because we just "sold" and "bought" at the same time
        if (highestProfit > (prices[i] - buyPrice)) {
            buyPrice = prices[i];
            profit += highestProfit;
            highestProfit = 0;
        } else {
            // If there is a newest highest profit day, then update highestProfit. 
            // Note at this point we still haven't sold as we haven't found the best day to sell.
            highestProfit = prices[i] - buyPrice;
        }
    }

    // If any highestProfit is left over, add to profit.
    return profit + highestProfit;
};