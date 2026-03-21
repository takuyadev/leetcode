/**
 * @param {number[]} prices
 * @return {number}
 */

 // Wasn't able to solve the soltuion in time, I had two solutions in mind
 // 1. Was more similar to the final solution, just gave up quickly on it
 // 2. Two pointers from left and right. It didn't consider all solutions.
 // I think what got me stuck was that I needed to keep track of the past indexes.
 // You don't need to consider past indexes because the only two numbers we care about are:
 // Max profit made all time (this includes times where buy is not most optimal)
 // If a new lowest number was found (so we can calculate against lowest for all future buys)

var maxProfit = function (prices) {
    let buyPrice = prices[0];
    let profit = 0;

    for (let i = 1; i < prices.length; i++) {
        // Check if currently saved buy price is higher than selected price
        // If it is, replace current buy price with now lowest price
        if (prices[i] < buyPrice) {
            buyPrice = prices[i]
        }

        // Ex. Find the max between 0 and (1 - 7).
        // Preserve 0.
        // Since new lowest was found, change buyPrice to 1

        // Ex. Find the max between 0 and (5 - 1).
        // Newest profit is 4.
        // No new lowest as found. Keep trying to find largest.
        profit = Math.max(profit, prices[i] - buyPrice);
    }

    return profit;
};

// Retry below with new comments, next day refresher. 
// Basically same solution.

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let profit = 0;
    // Find buy price 0 because in loop we skip first index
    let buyPrice = prices[0];

    // Start at 1. If there's only one price, then profit will always be 0 and this loop will be skipped entirely.
    for (let i = 1; i < prices.length; i++) {
        // If buy price is higher than current price
        // (aka. if stock is at good buying price)
        if (buyPrice > prices[i]) {
            buyPrice = prices[i];
        }

        // Re-calculate highest profit using currentPrice - buyPrice = profit formula
        profit = Math.max(profit, (prices[i] - buyPrice));
    }

    return profit;
};