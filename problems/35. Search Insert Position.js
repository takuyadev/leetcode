// Solved within about 10min, not too hard just binary search.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length;

  while (leftIndex < rightIndex) {
    if (nums[leftIndex] === target) {
      return leftIndex;
    }

    if (nums[rightIndex] === target) {
      return rightIndex;
    }

    if (nums[leftIndex] < target) {
      leftIndex++;
    } else {
      rightIndex--;
    }
  }

  return leftIndex;
};
