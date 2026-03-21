// NOTE TO SELF: SUBTRACT THE VALUE INSTEAD OF ADDING.
// First solution, took me 1 hour... not great.
// But i was on the right track the whole time; I was stuck on how we could track the result after map
// I forgot you could just subtract the value instead in magazineMap, and check if less than 0

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  const constructStringMap = (string) => {
    const map = {};

    for (let i = 0; i < string.length; i++) {
      if (!map[string[i]]) {
        map[string[i]] = 1;
      } else {
        map[string[i]] += 1;
      }
    }

    return map;
  };

  const magazineMap = constructStringMap(magazine);
  const ransomMap = constructStringMap(ransomNote);

  for (const letter in ransomMap) {
    if (!magazineMap[letter] || ransomMap[letter] > magazineMap[letter]) {
      return false;
    }
  }

  return true;
};

// This is ideal solution
// Time complexity: O(m+n)
// m: the length of magazine.
// n: the length of ransomNote.
// Space complexity: O(26) → O(1)

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  const magazineMap = {};

  // Create map of magazine with characters
  for (let c of magazine) {
    magazineMap[c] = (magazineMap[c] || 0) + 1;
  }

  // Only break loop and return false, if we find more ransomChars than magazine chars, or if it didn't exist in magazine at all.
  for (let c of ransomNote) {
    if (!magazineMap[c] || magazineMap[c] <= 0) {
      return false;
    }
    magazineMap[c]--;
  }

  return true;
};
