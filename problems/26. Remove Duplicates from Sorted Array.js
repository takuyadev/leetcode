/**
 * @param {number[]} nums
 * @return {number}
 */

// I was able so solve entirely on my own.
// I should look at an alternate solution to this problem, but it's late today.
// So intiially this is very similar to Remove elements, only that we have to have an map.
// We want to replace and increment second pointer, only when duplicateMap does not find a duplicate.

var removeDuplicates = function (nums) {
  const duplicateMap = {};
  let realIndex = 0;

  // Loop through current nums
  for (let i = 0; i < nums.length; i++) {
    // Only overwrite and increment, ONLY when there is no duplicate in the map. 
    // Check if nums exist and is of type of number. Remember falsy does not work here because 0 === falsy.
    if (typeof duplicateMap[nums[i]] !== "number") {
      duplicateMap[nums[i]] = i;
      nums[realIndex] = nums[i];
      realIndex++;
    }
  }

  return realIndex;
};
