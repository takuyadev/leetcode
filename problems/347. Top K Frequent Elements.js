// Incorrect o(n log n) solution because of the sort. This code still works but unoptimal.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  // Count the frequency of each number in the input array.
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] ?? 0) + 1;
  }

  // Get the unique numbers from the input array and sort them based on their frequency in descending order.
  const numsSet = new Set(nums);

  // Convert the set to an array and sort it based on the frequency of each number in the map.
  const filteredNums = Array.from(numsSet);

  // Sort the unique numbers based on their frequency in the map. We reverse the sorted array to get the most frequent elements first.
  const sortedNums = filteredNums.sort((a, b) => map[a] - map[b]).reverse();

  // Return the first k elements from the sorted array, which are the k most frequent elements.
  return sortedNums.slice(0, k);
};

// Optimal o(n) solution using bucket sort.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequencyMap = {};

  // Count the frequency of each number in the input array.
  for (let i = 0; i < nums.length; i++) {
    frequencyMap[nums[i]] = (frequencyMap[nums[i]] ?? 0) + 1;
  }

  // Create buckets where the index represents the frequency and the value is an array of numbers with that frequency.
  const bucket = [];

  // Fill the bucket with the numbers based on their frequency.
  // Ex. [[], [3], [1, 2], [], [], []] means that 3 appears once, and 1 and 2 appear twice.
  for (const key in frequencyMap) {
    const freq = frequencyMap[key];

    if (bucket[freq] === undefined) {
      bucket[freq] = [];
    }

    bucket[freq].push(key);
  }

  let result = [];
  let breakIndex = 0;

  // Iterate through the bucket in reverse order to get the most frequent elements first.
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i] !== undefined) {
      for (const num of bucket[i]) {
        result[breakIndex++] = Number(num);

        // If we have found k elements, we can return the result.
        if (breakIndex === k) {
          return result;
        }
      }
    }
  }

  // In case there are less than k unique elements, we return all the unique elements.
  return result;
};
