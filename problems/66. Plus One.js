// I didn't find this hard
// Reverse the array, two pointer solution.

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] >= 9) {
      digits[i] = 0;

      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    } else {
      digits[i] += 1;
      return digits;
    }
  }

  return digits;
};
