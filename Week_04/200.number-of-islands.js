/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  let row = grid.length;
  if (row == 0) return 0;
  let col = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] == "1") {
        count++;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] == "0") return;
    grid[i][j] = 0;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
  return count;
};
// @lc code=end
