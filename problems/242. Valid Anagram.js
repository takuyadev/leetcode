
// First solution, using two maps. Solved in about 15 minutes.
// Time complexity: o(2n)
// space complexity: o(26) -> o (1) (only 26 characters in English)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sMap = {};
  const tMap = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] ?? 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!sMap[t[i]]) {
      return false;
    }

    tMap[t[i]] = (tMap[t[i]] ?? 0) + 1;

    if (tMap[t[i]] > sMap[t[i]]) {
        return false;
      }
  }

  return true;
};


// Instead of comparing two objects, you can also just count the tCount as well. 
// Time complexity: o(2n)
// space complexity: o(26) -> o (1) (only 26 characters in English)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = {};
    let tCount = t.length

    for (let i = 0; i < s.length; i++) {
        if (!sMap[s[i]]) {
            sMap[s[i]] = 1;
        } else {
            sMap[s[i]]++;
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (sMap[t[i]] || sMap[t[i] > 0]) {
            tCount--
            sMap[t[i]]--;
        } else {
            return false
        }
    }

    return true;
};