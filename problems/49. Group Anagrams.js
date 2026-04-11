// Simple solution, wrote solutionn in about 5 minutes, then coded for about 20min.
// Other solution is to use ASCII solution; add by ASCII numbers, then return added values.
// Time complexity: O(n * k log k) (number of strings + sorting algorithm)
// Space complexity O(n * k) number of strings and length of each string

function groupAnagrams(strs) {
  let result = [];
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedString = [...strs[i]].sort().join("");

    if (typeof map[sortedString] !== "number") {
      map[sortedString] = result.length;
    }

    if (!result[map[sortedString]]) {
      result[map[sortedString]] = [strs[i]];
    } else {
      result[map[sortedString]].push(strs[i]);
    }
  }

  return result;
}

// Instead of having array and object instance, we can keep singular map

function groupAnagrams(strs) {
  const map = {};

  for (const str of strs) {
    const key = [...str].sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }

  return Object.values(map);
}
