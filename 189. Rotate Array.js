// Initial pseudo code. I had the right idea coming into it but was not able to come up with a correct solution in time. (over 30min)
// I had missed the k = k % nums.length part. I did not consider it could overflow twice.
// This is something I should review back, but essentially they reason why we want to do 

// i - k  = step
// length of array + step

// Neutral scenario
// ex. 3 - 3 = 0
// 0
// So 3rd index goes to 0th index

// Negative scenario
// ex. 0 - 3 = -3
// 7 + (-3) = 4
// So 4th index goes to 0th index

// ex. 2 - 3 = -1
// 7 + (-1) = 6
// So 6th index goes to 2nd index

// Positive scenario
// ex. 5 - 3 = 2
// 2
// So 2nd index goes to 5th index

// ex. 6 - 3 = 3
// 3
// So 6th index goes to 3rd index

// My part of missing logic:
// k = 7 % 2 = 1

// ex. nums = [1,2], k = 7
// This will make sure that we consider that the array wil be rotated once, as the remainder should be how much it should be rotating.
// ex. rotate 2 times = full rotation. so if it rotates 6 times, then it will be the same as rotating 0 times. so we only care about the remainder of the rotation.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const duplicateArray = [...nums];
    k = k % nums.length;

    for (let i = 0; i < nums.length; i++) {
        const step = (i - k)
        
        if (step >= 0) {
            nums[i] = duplicateArray[step]
        } else {
            const negativeRotate = nums.length + step;
            nums[i] = duplicateArray[negativeRotate]
        }
    }
};

// Note: Alternate solution using reverse function. o(n) time complexity and o(1) space complexity.
//      k
// [7,6,5,4,3,2,1]
//  # # * * * * *

var rotate = function(nums, k) {
    k %= nums.length;

    // Reverses the whole array. 
    const reverse = (left, right) => {
        while (left < right) {

            // Note that below is the same as 3 lines of code.
            // let temp = nums[left];    // Store the left value safely
            // nums[left] = nums[right]; // Overwrite left with right
            // nums[right] = temp;       // Put the stored value into right
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    };

    // Before function ran:
    // ↓
    // [7,6,5,4,3,2,1]

    // First reverse function ran:
    //      k
    // [7,6,5,4,3,2,1]
    //  # # * * * * *
    reverse(0, nums.length - 1);
    
    // Second reverse function ran:
    // Notice only the first two numbers are reversed.
    //      ↓
    //      k
    // [6,7,5,4,3,2,1]
    //  # # * * * * *
    reverse(0, k - 1);

    // Third reverse function ran:
    // Notice that the last 5 numbers are reversed.
    //      ↓
    //      k
    // [6,7,1,2,3,4,5]
    //  # # * * * * *
    reverse(k, nums.length - 1);    
};