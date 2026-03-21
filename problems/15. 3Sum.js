// Time: o(n^2) Space: o(n)
// This is the most challenging question so far. I spent over two hours just to understand (previously Climbing stairs).
// The logic is to sort array first.
// This has multiple benefits such as if current pointer is above 0, then we can break loop because sum will equate above 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    const sorted = nums.sort((a, b) => a - b)

    for (let i = 0; i < sorted.length; i++) {
        // Over 0 check
        // Since we are looking for sum of 0, if current number is above 0, then we can break loop because sum will equate above 0.
        if (sorted[i] > 0) break;

        // Duplicate check
        // i > 0 meaning that we can't do i -1 if i is 0, so only check duplicate if passed first index.
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;

        // Set up left pointer and right pointer
        // See below. We want to point left pointer to the next index of i, and right pointer to the end of the array.
        //  i    l               r
        // [-3, -2, -1, 0, 1, 2, 3]
        let leftIndex = i + 1;
        let rightIndex = sorted.length - 1;

        
        // Do two pointers at this point
        while (leftIndex < rightIndex) {
            const sum = sorted[leftIndex] + sorted[rightIndex] + sorted[i];

            // This is why we want to sort the array first.
            // If sum is more than 0, we need to find smaller number (move right pointer)
            if (sum > 0) rightIndex--;

            // if sum is less than 0, we we need to find larger number (move left pointer)
            if (sum < 0) leftIndex++;

            // If the sum is 0, we found triplet.
            if (sum === 0) {
                // Push result to array
                result.push([sorted[i], sorted[leftIndex], sorted[rightIndex]])

                // Skip duplicate values for leftIndex and right pointers
                while (leftIndex < rightIndex && sorted[leftIndex] === sorted[leftIndex + 1]) leftIndex++;
                while (leftIndex < rightIndex && sorted[rightIndex] === sorted[rightIndex - 1]) rightIndex--;

                // Once all duplicates have been skipped, iterate both pointers as we are looking for new triplet.
                leftIndex++;
                rightIndex--;
            }
        }
    }

    return result
};

// Time: o(n^2) Space: o(n)
// Alternate solution while techincally correct, will fail.
// Uses Set and hashmap to store values and indices.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums) {
    const map = {};
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = -nums[i] - nums[j];

            if (map[sum] && (map[sum] !== i && map[sum] !== j && i !== j)) {
                const triplet = [nums[i], nums[j], sum].sort((a, b) => a - b);
                set.add(triplet.join(','));
            }
        }
    }

    // Convert the strings back into arrays of numbers
    return Array.from(set).map(str => str.split(',').map(Number));
};