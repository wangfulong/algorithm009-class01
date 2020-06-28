/*
 * @lc app=leetcode id=363 lang=javascript
 *
 * [363] Max Sum of Rectangle No Larger Than K
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
// var maxSumSubmatrix = function (matrix, k) {
//   let m = matrix.length;
//   if (m == 0) return 0;
//   let n = matrix[0].length;

//   let max = -Infinity;
//   for (let i1 = 1; i1 <= m; i1++) {
//     for (let j1 = 1; j1 <= n; j1++) {
//       let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
//       dp[i1][j1] = matrix[i1 - 1][j1 - 1];
//       for (let i2 = i1; i2 <= m; i2++) {
//         for (let j2 = j1; j2 <= n; j2++) {
//           dp[i2][j2] = dp[i2 - 1][j2] + dp[i2][j2 - 1] - dp[i2 - 1][j2 - 1] + matrix[i2 - 1][j2 - 1];
//           if (dp[i2][j2] > max && dp[i2][j2] <= k) max = dp[i2][j2];
//         }
//       }
//     }
//   }
//   return max;
// };

var maxSumSubmatrix = function (matrix, k) {
  let m = matrix.length;
  if (m == 0) return 0;
  let n = matrix[0].length;

  let max = -Infinity;
  for (let left = 0; left < n; left++) {
    let sums = Array(m).fill(0);
    for (let right = left; right < n; right++) {
      for (let i = 0; i < m; i++) {
        sums[i] += matrix[i][right];
      }
      max = Math.max(max, maxSubArray(sums, k));
      if (max == k) return k;
    }
  }
  return max;
};

function maxSubArray(nums, k) {
  let rollSum = 0;
  let rollMax = nums[0];
  for (let num of nums) {
    rollSum = Math.max(num, num + rollSum);
    if (rollSum > rollMax) rollMax = rollSum;
  }
  if (rollMax <= k) return rollMax;

  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max && sum <= k) max = sum;
      if (sum == k) return k;
    }
  }
  return max;
}
// @lc code=end
