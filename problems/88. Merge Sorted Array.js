/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// This is my final solution after looking at the high level solution.
// Instead of iterating through left, we can iterate through the right, since we know the length of the merged array.
// Once all elements in nums2 are merged, we can stop the loop, since the rest of the elements in nums1 are already sorted and in place.

var merge = function (nums1, m, nums2, n) {
    let currentPointer = (m + n) - 1;
    let nums1Index = m - 1;
    let nums2Index = n - 1;

    while (nums2Index >= 0) {
        if (nums1[nums1Index] > nums2[nums2Index]) {
            nums1[currentPointer] = nums1[nums1Index];
            nums1Index--;
        } else {
            nums1[currentPointer] = nums2[nums2Index];
            nums2Index--;
        }
        currentPointer--
    }
};

// You could also just merge the array and then sort using vanilla JS.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, nums1.length - m, ...nums2);
    nums1.sort((a, b) => a - b);
};

// For memory, this was my first implementation. This is not correct at all. The way this is implemented,
// It can only check one prevLargestNum at a time. So if there are multiple found,
// Then the pointer can only remember one at a time.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    let nums2Pointer = 0;
    let prevLargestNum = null;

    for (let i = 0; i < nums1.length; i++) {
        const currentNum = nums1[i];
        const compareNum = nums2[nums2Pointer];

        if (currentNum === 0) {
            if (prevLargestNum) {
                nums1[i] = prevLargestNum;
                prevLargestNum = null;
                continue;
            }

            nums1[i] = compareNum;
            nums2Pointer++
        }

        if (currentNum > compareNum) {
            prevLargestNum = currentNum
            nums1[i] = compareNum;
            nums2Pointer++
        }
    }
};

