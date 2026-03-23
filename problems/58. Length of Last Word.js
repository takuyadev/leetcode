// I solved in about 40min, a bit slower than expected but yeah pretty late in the day.
// I think it was easy once I figured out first, find the index of the last word, then iterate again from there.
// There is one loop solution but it's essentially the same complexity as we're breaking properly in both loops.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {
    const regex = /[a-zA-Z]/;
    let rightIndex = null;
    let result = 0;

    // First, find the index where a valid word first appears
    for (let i = s.length - 1; i >= 0; i--) {
        if (regex.test(s[i])) {
            rightIndex = i;
            break;
        }
    }

    // Second, starting from located index from above loop, iterate until non-word is found
    while (rightIndex >= 0) {
        if (regex.test(s[rightIndex])) {
            result++;
            rightIndex--;
        } else {
            rightIndex = -1
        }
    }

    // Return result fallback as 0
    return result;
};