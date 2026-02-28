// Our goal of Two Sum is to find the two numbers in the numbers array that add up to the passed target.
// If the two numbers were found, return the indexes as array ([1, 2]), or empty ([]).
// We have three possible solutions, Brute force (go one by one) or One/Two Pass methods(find solution in hashmap).
// Following Algebra, think of target = x + y. We can alternatively use target - y = x.
// So we can store the other number in a Hashmap. target - y = x finds a match in the nums, then return value and index.
// We can store that in a Hashmap as key (sum) value (index) pair, then if that match was found, return [complement, i].

// 1. Brute force method o(n2), o(1)
// We can also alternatively brute force by looking one at a time. This is not favorable, however it does decrease space complexity.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      const sum = nums[i] + nums[j];
      if (i !== j && sum === target) {
        return [i, j];
      }
    }
  }

  return [];
};

// 2. Two pass method o(n), o(n), use two loops, one map
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSumTwoPass = function (nums, target) {
  const map = {};

  // Think of this block doing the following: map[x] = index.
  // So later we can do target - y = x, and use x to find index of the correct value.
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (typeof map[complement] === "number" && map[complement] !== i) {
      return [map[complement], i];
    }
  }

  return [];
};

// 3. One pass method o(n), o(n), use one loop, one map
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSumOnePass = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (typeof map[complement] === "number" && map[complement] !== i) {
      return [map[complement], i];
    } else {
      map[nums[i]] = i;
    }
  }

  return [];
};
