// I could not solve this question. I clearly overthought this question.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

// It was originally something like this.
// I left a comment to fix the algorithm, I had the right idea.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function (haystack, needle) {
  let charIndex = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[charIndex]) {
      if (needle.length - 1 === charIndex) {
        return i - charIndex;
      }

      charIndex++;
      continue;
    }

    if (haystack[i] !== needle[charIndex]) {
      if (i > 0 && haystack[i - 1] === needle[0]) {
        charIndex = 2;
      } else {
        charIndex = 0;
      }
      continue;
    }

    // It should've looked like this.
    // else if (haystack[i] !== needle[charIndex]) {
    //     i = i - charIndex;
    //     charIndex = 0;
    // }
  }

  return -1;
};
