/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// This is pretty simple. I was able to solve this in about 15-20min.
// There are two pointers; the found count and the loop index.
// If foundCount, which is the pointer for s, hits the same number as 
// s.length, then that means all chars were found.

var isSubsequence = function (s, t) {
  const foundCount = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[foundCount]) {
      foundCount++;
    }

    if (foundCount === s.length) {
      return true;
    }
  }

  return false;
};
