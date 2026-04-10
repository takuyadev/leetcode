// Neetcode: https://www.youtube.com/watch?v=gqXU1UyA8pk&t=2s
// Could not solve on my own, but I've figured out a pattern to write dynamic sliding windows.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let result = 0;
  let left = 0;
  let charMap = {};
  let maxFreq = 0;

  for (let right = 0; right < s.length; right++) {
    charMap[s[right]] = (charMap[s[right]] ?? 0) + 1;
    maxFreq = Math.max(maxFreq, charMap[s[right]]);

    while (right - left + 1 - maxFreq > k) {
      charMap[s[left]]--;
      left++;
    }

    result = Math.max(right - left + 1, result);
  }

  return result;
};
