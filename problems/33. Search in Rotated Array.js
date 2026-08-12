
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    const numsLength = nums.length;

    if (numsLength === 0) {
      return -1;
    }

    if (numsLength === 1 && nums[0] === target) {
      return 0;
    }

    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    while (leftIndex <= rightIndex) {
      const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
      const middleNum = nums[middleIndex];
      const leftNum = nums[leftIndex];
      const rightNum = nums[rightIndex];

      if (middleNum === target) {
        return middleIndex;
      }

      // 1. Check if left sorted or right sorted
      if (leftNum <= middleNum) {
        // 2a. So in this case, it's left sorted (natural sort),
        // ... and if target is less than middle num and left num, then naturally it should be left side.
        if (leftNum <= target && target < middleNum) {
          rightIndex = middleIndex - 1;
        } else {
          leftIndex = middleIndex + 1;
        }
      } else {
        // 3a. In this case, it's a right sorted,
        // ... so this case below just checks target if it should exist between the right or left side
        if (target <= rightNum && middleNum < target) {
          leftIndex = middleIndex + 1;
        } else {
          rightIndex = middleIndex - 1;
        }
      }
    }

    return -1;
  }
}
