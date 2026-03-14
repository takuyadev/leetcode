/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Essentially we want to do two pointers from left and right
// Then check if sum is less or equal to target. If it target less than sum, move left index because target needs larger number, and since it's sorted we are guaranteed that the next sum will be larger.
// Vice versa for the other way.

// Initial thoughts lol
// 2 + 7 = 9
// is it bigger than next index?
// 11 > 9 = true
// Use second numnber
// 5 + 7 = 12
// 11 > 12 = false
// Preserve first number?

var twoSum = function (numbers, target) {
    // Setup index for left and right pointers
    let leftIndex = 0
    let rightIndex = numbers.length;

    // Condition for left and right loop
    while (leftIndex < rightIndex) {
        const sum = numbers[leftIndex] + numbers[rightIndex];

        // End loop when target is met
        if (sum === target) {
            return [leftIndex + 1, rightIndex + 1];
        }

        // Otherwise, increment or decrement index based on if sum is greater or smaller than sum
        if (sum < target) {
            leftIndex++
        } else {
            rightIndex--
        }
    }

    return [];
}

