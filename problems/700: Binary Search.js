// First time writing Binary search.
// Researched and left comments; this is the most basic form of Binary Search.
// Time complexity: O(log n)
// Space Complexity: O(1) 

function search(nums, target) {
  // Start the search window at the full array
  let low = 0;
  let high = nums.length - 1;

  // Keep searching while the window has at least one element.
  // Once low > high, the window is empty and the target doesn't exist.
  while (low <= high) {
    // Midpoint written as low + (high - low) / 2 instead of (high + low) / 2
    // to avoid integer overflow in languages with fixed-size integers.
    // Math.floor is needed because division may produce a decimal index.
    const mid = Math.floor(low + (high - low) / 2); // ⚠️ was: high + low / 2

    // Target found — return its index immediately
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      // mid is too small, so target must be to the right.
      // +1 skips mid (already checked) and shrinks the window,
      // preventing an infinite loop when low and high are adjacent.
      low = mid + 1;
    } else {
      // mid is too large, so target must be to the left.
      // -1 skips mid (already checked) and shrinks the window.
      high = mid - 1;
    }
  }

  // The window collapsed without finding the target
  return -1;
}
