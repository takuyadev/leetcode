// First question I semi got on my own within 20min. The only reason it went overtime was because I added realIndex + 1 as return.
// But my thought process was to have a realIndex, and a skipCount intiially. But I realized the skipCount was the realIndex,
// ...So I did not have to add that. I also thought about two pointer, which could be possible but I thought it would be more complicated.
// I believe this is two-pointer + array manipulation.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
    let realIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        // If the current selected num is not equal to the value we want to skip,
        // We will increase the realIndex.
        if (nums[i] !== val) {
            // We will overwrite the current realIndex with the current num, and then increase the realIndex.
            // This will backtrack via realIndex pointer, and overwrite value we want to delete (whihc is val).
            nums[realIndex] = nums[i]
            realIndex++;
        }
    }

    return realIndex ;
};
