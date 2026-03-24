/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let duplicateCount = 0;
    let currentPointer = 0
    let skipPointer = 0

    while (skipPointer < nums.length) {
        // Replace either
        // 1. In place, no change
        // 2. If currentPointer and skipPointer different, then overwrite left with right
        nums[currentPointer] = nums[skipPointer];

        if (nums[currentPointer] === nums[currentPointer - 1]) {          
            // If on the same number and more than 2 of the same number found, do not increment 
            // currentPointer (left pointer)
            if (duplicateCount < 2) {
                currentPointer++;
            }

            // If on the same number, increment duplicateCount and skipCounter    
            skipPointer++;
            duplicateCount++;
        } else {
            // Once different number found, reset duplicateCount to 1 (to account for new number)
            // ...and both pointers
            currentPointer++;
            skipPointer++;
            duplicateCount = 1;
        }
    }

    return currentPointer ;
};