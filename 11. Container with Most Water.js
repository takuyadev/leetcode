/**
 * @param {number[]} height
 * @return {number}
 */

// I solved this under 20min, very first medium question done without any prior solution or help.
// First, my thought process was that the area can be calculated via x * y.
// X we can gather from the distance between the left and right pointer, and Y we can gather from the minimum height of the two pointers.
// Why the minimum height is because container will always overflow even if larger height exists.
// So all we have to do is calculate the x * min_height.
// Below is my first implementation.

var maxArea = function (height) {
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let largestSumWater = 0;

    while (leftIndex < rightIndex) {
        //  Rememeber, x * y = volume here, so we want to calc the x and largest height as
        //  ... The largest height will determine how much container can hold.
        const xAxis = (rightIndex - leftIndex);
        const minContainerHeight = height[leftIndex] < height[rightIndex] ? height[leftIndex] : height[rightIndex];
        const waterCalc = xAxis * minContainerHeight;

        if (waterCalc >= largestSumWater) {
            largestSumWater = waterCalc;
        }

        if (height[leftIndex] < height[rightIndex]) {
            leftIndex++
        } else {
            rightIndex--
        }
    }

    return largestSumWater;
};

// We can simplify it a bit more as below:

var maxArea = function (height) {
    let leftIndex = 0;
    let rightIndex = height.length - 1;
    let largestSumWater = 0;

    while (leftIndex < rightIndex) {
        //  Rememeber, x * y = volume here, so we want to calc the x and largest height as
        //  ... The largest height will determine how much container can hold.
        const xAxis = rightIndex - leftIndex;
        largestSumWater = Math.max(largestSumWater, xAxis * Math.min(height[leftIndex], height[rightIndex]));

        if (height[leftIndex] < height[rightIndex]) {
            leftIndex++
        } else {
            rightIndex--
        }
    }

    return largestSumWater;
};