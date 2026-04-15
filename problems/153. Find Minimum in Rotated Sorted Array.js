/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let low = null;

  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] < nums[i - 1]) {
      low = i;
      break;
    }

    if (i === nums.length - 1 && !low) {
      return nums[0];
    }
  }

  let high = nums.length - 1;

  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);

    if (nums[mid] < nums[high]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return nums[low];
};

// Shorter version. You don't need to figure out center; the smaller number will always be on the right side of the array.
// Time complexity: O(log n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let high = nums.length - 1;
    let low = 0;

    while (low < high) {
        const mid = Math.floor((high + low) / 2);

        if (nums[mid] < nums[high]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return nums[low];
};
