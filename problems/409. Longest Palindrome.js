// Time complexity: O(n) - we need to loop through the string once
// Space complexity: o(26) or o(52) - depending on the input, we can have at most 26 lowercase letters or 52 if we consider uppercase letters as well
// Concept: Find a pair, then increment by two. If we have remaining characters, then it means to increment by one for middle character.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const pairMap = {};
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    // If find match, then increment two
    if (pairMap[s[i]]) {
      delete pairMap[s[i]];
      count += 2;
    } else {
      // If not match, flag the pairMap as true so that next time it can count
      pairMap[s[i]] = true;
    }
  }

  if (Object.keys(pairMap).length > 0) {
    count += 1;
  }

  return count;
};
