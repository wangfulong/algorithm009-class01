/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let m = grid.length;
  if (m == 0) return 0;
  let n = grid[0].length;

  let dp = grid;
  for (let i = 1; i < m; i++) {
    dp[i][0] += dp[i - 1][0];
  }

  for (let j = 1; j < n; j++) {
    dp[0][j] += dp[0][j - 1];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] += Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
};
// @lc code=end

