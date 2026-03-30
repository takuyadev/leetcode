// Vibe finished this on the couch in 10 minutes.
// The hardest part of the question is when the loop should end, (even though the questions stated that it could loop infinitely)
// To answer the question, you can add to duplicateMap and if the same value is found it is assumed that we have looped back to first sum. (DP)

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let currentValue = n;
  const duplicateMap = {};

  // Stop loop when previous value is found in duplicateMap, indicating a loop has completed
  while (!duplicateMap[currentValue]) {
    // Square each value after separating, and calculate the sum
    const sum = String(currentValue)
      .split("")
      .reduce((acc, curr) => {
        acc += Math.pow(curr, 2);
        return acc;
      }, 0);

    // Stop loop if happy number, or sum of 1 is found.
    if (sum === 1) {
      return true;
    }

    // If not, then add current value to duplicateMap
    duplicateMap[currentValue] = true;

    // Update currentValue with new sum
    currentValue = sum;
  }

  return false;
};
