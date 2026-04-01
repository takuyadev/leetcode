// Looked at conceptual first before coding. Took me about 25min to code out after conceptual
// Seems like Sliding window is good when dealing with subarray or substring.
// Use hashmap and Math.max to update max achievable length
// Neetcode: https://www.youtube.com/watch?v=wiGpQwVHdE0

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  const visited = {};

  // Base case, if only of 0 or 1 string it is guaranteed to be unique.
  if (s.length <= 1) {
    return s.length;
  }

  let leftIndex = 0;
  let rightIndex = 0;

  while (rightIndex < s.length) {
    // If a visited index is reached, update maxLength and start indexing left
    if (visited[s[rightIndex]]) {
      maxLength = Math.max(maxLength, rightIndex - leftIndex);

      // We only need to delete one off of leftIndex as only one dupe is found at this point
      delete visited[s[leftIndex]];
      leftIndex++;
    } else {
      // If char was not visited of yet, put into hashmap and increment right to keep searching
      visited[s[rightIndex]] = s[rightIndex];
      rightIndex++;
    }
  }

  // Calculate maxLength again of current status in case last update was not done
  maxLength = Math.max(maxLength, rightIndex - leftIndex);
  return maxLength;
};
