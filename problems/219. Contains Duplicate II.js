// Solved this on my Samsung S7 Tablet lol. It took about 30 minutes, a bit longer because it keeps lagging and have to buffer my inputs lol.
// Initial solution was brute force, failed because of time exception.
// I noticed that later on if it's in hashmap we can track unique index via that + loop, and then compare using the provided formula.
// Since we calculated lower number already, since it's <= k, we want to update new hashmap index because <= implies that it's expecting a smaller number, not a larger one, so we want to subtract number with larger index instead of smaller one.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const hashmap = {};

  // Loop through once, we can verify that every indesxwill be unique from now on
  for (let i = 0; i < nums.length; i++) {
    // If number exists in hashmap, then attempt formula
    if (typeof hashmap[nums[i]] === "number") {
      if (Math.abs(hashmap[nums[i]] - i) <= k) {
        return true;
      }
      //  Update previous smaller index with larger one
      hashmap[nums[i]] = i;
    } else {
      // If not exist, then create property
      hashmap[nums[i]] = i;
    }
  }

  // If nothing found, then retrun false by default.
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let leftIndex = i + 1;

    while (leftIndex < nums.length) {
      if (nums[i] === nums[leftIndex] && Math.abs(i - leftIndex) <= k) {
        return true;
      }

      leftIndex++;
    }
  }

  return false;
};
