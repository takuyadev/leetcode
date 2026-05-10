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

// Solved within 10 minutes, slightly more efficient as it starts from second to last index instead of last index for position.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let position = nums.length - 2; position >= 0; position--) {
    let maxJump = nums[position] + position;

    if (maxJump >= goal) {
      goal = position;
    }
  }

  return goal <= 0;
};
