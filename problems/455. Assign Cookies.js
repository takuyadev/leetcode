// Time complexity: o(n log n + m log m)
// Space complexity: o(1)

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let sortedGreed = g.sort((a, b) => a - b);
  let sortedSize = s.sort((a, b) => a - b);
  let greedIndex = 0;

  for (let i = 0; i < sortedSize.length; i++) {
    if (sortedGreed[greedIndex] <= sortedSize[i]) {
      greedIndex++;
    }
  }

  return greedIndex;
};
