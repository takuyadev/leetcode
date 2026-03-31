// Couldn't quite solve this one after about a hour. Should try an easy sliding window question next time, I'm definitely not strong in this area.
// (Although it was pretty close though 7.8/10 a good fight)

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    // minLength tracks the shortest valid subarray we've found.
    // We start at 0, which also serves as our "not found" return value.
    let minLength = 0;

    // currentTotal is the sum of all elements currently inside our window.
    let currentTotal = 0;

    // leftIndex is the left boundary of our window.
    // rightIndex (in the for loop) is the right boundary.
    // Together they define the window [leftIndex, rightIndex].
    let leftIndex = 0;

    // We expand the window by advancing rightIndex one step at a time.
    // Think of rightIndex as "pulling in" new elements on the right side.
    for (let rightIndex = 0; rightIndex < nums.length; rightIndex++) {
        currentTotal += nums[rightIndex]; // grow the window to the right

        // Once our window's sum meets the target, we've found a valid subarray.
        // Now we try to shrink it from the left to find the minimum length.
        // We keep shrinking as long as the sum stays valid — there's no point
        // in keeping the window larger than it needs to be.
        while (currentTotal >= target) {
            const windowLength = rightIndex - leftIndex + 1; // +1 because indices are inclusive

            // Update minLength — if this is our first valid window, just store it.
            // Otherwise, keep whichever window is shorter.
            minLength = minLength ? Math.min(minLength, windowLength) : windowLength;

            // Shrink the window from the left by removing the leftmost element.
            currentTotal -= nums[leftIndex];
            leftIndex++; // move the left boundary inward
        }
        // At this point currentTotal < target, so we go back to expanding
        // the window on the right via the for loop.
    }

    // If minLength is still 0, no valid subarray was ever found.
    return minLength;
};