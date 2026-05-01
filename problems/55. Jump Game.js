/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  // 1. Grab current goal
  let goal = nums.length - 1;

  // 2. Iterate backwards from goal post.
  for (let i = nums.length - 1; i >= 0; i--) {
    // 3. Attempt to see if current step is able to get to end.
    if (i + nums[i] >= goal) {
      // 3a. Update ONLY when a possible jump is found to the current goal post.
      goal = i;
    } // 4. Go to next possible jump. If goal post is NOT updated, then it will see if it is possible in the next step.
  }
  return goal <= 0;
};
