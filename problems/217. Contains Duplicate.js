/**
 * @param {number[]} nums
 * @return {boolean}
 */

// For fun, I solved this solution  that I done a few years back. For reference this was my first attempt.

var containsDuplicate = function (nums) {
  let result = false;
  let checkArr = [...nums];
  nums.forEach((num) => {
    checkArr.shift();
    if (checkArr.includes(num)) {
      result = true;
    }
  });
  return result;
};

// ... Pretty disgusting, I know.
// This is now my new solution below, solved in about 2 minutes.
// Use hashmap to figure out if a numebr has been seen. If so, just return.

var containsDuplicate = function (nums) {
  let duplicateMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (duplicateMap[nums[i]] === true) {
      return true;
    }

    duplicateMap[nums[i]] = true;
  }

  return false;
};

// We can also do this. Same time and space complexity in JavaScript world.

var containsDuplicate = function (nums) {
  const removeDuplicateSet = new Set(nums);
  return removeDuplicateSet.size !== nums.length;
};

// You could also do this by sorting the array and checking if the next value is the same as the current value. 
// This is O(n log n) time complexity, but O(1) space complexity.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let result = false

    nums.sort((a, b) => a - b).forEach((num, i) => {
        if (nums[i] === nums[i + 1]) {
            result = true
        }
    })

    return result;
};