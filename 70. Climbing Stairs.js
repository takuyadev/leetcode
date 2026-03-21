// NOTE: This took over an hour for me to understand the problem with tutorials and examples. We should revisit this as much as we can.

// Recursive Time: (2^n) Space: o(1)
// Since we are recalculating the same values. note that there is nothing being stored in memory to keep track of calculated steps.

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if (n === 1){
        return 1
    }
    if (n === 2) {
        return 2
    }

    return climbStairs(n-2) + climbStairs(n-1)
};

// Top down memoization Time: o(n), Space: o(n)
// This time we are storing the values in memo if a value is found.
// That means the function will early return if memo had already found that value before.
// In below ex. callback(n-1) will have everything stored in memo. Then callback(n-1) will call, which will return memo[n] because it already calculated in first go.

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
    const memo = { 1: 1, 2: 2 }

    const callback = (n) => {
        if (memo[n]) {
            return memo[n];
        } else {

        memo[n] = callback(n - 2) + callback(n - 1);
        return memo[n]
        }
    }

    return callback(n);
};


// Bottom Up - Tabulation Time: o(n) Space: o(n)
// Instead of using a map, we can use an array to store the values. 
// We can also use a loop to fill the array instead of recursion. 
// This is a more iterative approach and is often more efficient in terms of space complexity than the recursive approach with memoization.

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    const dp = [];
    dp[0] = 1;
    dp[1] = 2;

    for (let i = 2; i <= n; i++){
        dp[i] = dp[i-2] + dp[i-1];
    }

    return dp[n-1];
};


// Bottom Up - Constant Space Time: o(n) Space: o(1)
// This is the most efficient way to do this problem. 
// We can create a loop using n, and set the previous number and current number
// for ex. prev will = curr since we are going to next index, and current curr will become prev
// ... and curr will be the value of prev + curr. So we do not even need an array.

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  let prev = 1;
  let curr = 2;

  for (let i = 2; i < n; i++) {
    const memo = prev;
    prev = curr;
    curr += memo;
  }

  return curr;
};
