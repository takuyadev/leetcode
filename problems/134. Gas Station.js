// Brute force solution
// Time complexity: O(n^2)
// Space complexity: O(1).

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (gas.length === 1) {
    return gas[0] - cost[0] >= 0 ? 0 : -1;
  }

  for (let i = 0; i < gas.length; i++) {
    if (gas[i] > cost[i]) {
      let initialPosition = i;
      let position = i;
      let gasTank = gas[position];

      while (gasTank >= 0) {
        gasTank = gasTank - cost[position];

        if (position >= gas.length - 1) {
          position = 0;
        } else {
          position++;
        }

        if (gasTank >= 0) {
          gasTank += gas[position];
        }

        if (position === initialPosition && gasTank >= 0) {
          return position;
        }
      }
    }
  }

  return -1;
};
