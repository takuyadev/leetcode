/**
 * @param {string} s
 * @return {boolean}
 */

// Two Pointers note:
// Note: The concept of using **two indexes** to loop.
// "racecar"
//  ^     ^
//  L     R   → 'r' == 'r' ✅, move inward

// First solution; was able to solve on my own other then the fact that I missed
// the numbers support; only needed 0-9 addition to regex check.
// I could probably do this in one loop by counting the amount of chars skipped, if not alphanumeric.
// Still, this is O(n) time + o(1) memory (memory is not )

var isPalindrome = function (s) {
  let stripped = "";

  // Remove all non-alphanumeric characters
  // lowercase all uppercase
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (/[a-zA-Z0-9]/.test(char)) {
      stripped += char.toLowerCase();
    }
  }

  // We can increase the index, but minus index for the value in the back
  // for ex. first char = 0
  // end string.length - i
  for (let i = 0; i < Math.round(stripped.length / 2); i++) {
    const charOne = stripped[i];
    const charTwo = stripped[stripped.length + (i * -1 - 1)];

    // If char is not the same, then it is not palindrome
    if (charOne !== charTwo) {
      return false;
    }
  }

  return true;
};

// Most optimal solution from: https://leetcode.com/problems/valid-palindrome/solutions/6819917/beats-100-easiest-solution-for-beginners-qaw4

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // So instead of creating two loops, one for stripping the string
    // We can while loop until the next condition is met.
    while (left < right && !isAlphaNum(s[left])) left++;
    while (left < right && !isAlphaNum(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
};

function isAlphaNum(c) {
  return /^[a-z0-9]$/i.test(c);
}

// Latest solution. I was able to solve this in 3min.
// We don't need to check left and right index.


var isPalindrome = function(s) {
    let leftIndex = 0;
    let rightIndex = s.length - 1;

    while(leftIndex < rightIndex) {
        if (!/[a-zA-Z0-9]/.test(s[leftIndex])) {
            leftIndex++
            continue;
        }

        if (!/[a-zA-Z0-9]/.test(s[rightIndex])) {
            rightIndex--
            continue;
        }

        if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) {
            return false;
        }

        leftIndex++;
        rightIndex--;
    }

    return true;
};
