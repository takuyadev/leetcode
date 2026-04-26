// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let result = 0;
  const set = new Set(nums);

  for (let key of set.keys()) {
    const numKey = Number(key);

    // "sequence start detection" Algorithm
    // We want to only count the start of a sequence by checking if previous number does not exist.
    if (!set.has(key - 1)) {
      let length = 0;

      // Start counting from start of sequence until the end of one of the many potential boundaries/sequences.
      while (set.has(numKey + length)) {
        length++;
      }

      // Update result with largest number.
      result = Math.max(result, length);
    }
  }

  return result;
};
