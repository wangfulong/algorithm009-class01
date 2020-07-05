/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  let m = board.length;
  if (m == 0) return;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (board[i][j] == 'O' && (i == 0 || j == 0 || i == m- 1 || j == n - 1)) {
              dfs(board, i, j);
          }
      }
  }

  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (board[i][j] == "O") {
              board[i][j] = "X";
          } else if (board[i][j] == "#") {
              board[i][j] = "O";
          } 
      }
  }
};

function dfs(board, i, j) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] == 'X' || board[i][j] == "#") return;
  board[i][j] = "#";
  dfs(board, i - 1, j);
  dfs(board, i + 1, j);
  dfs(board, i, j - 1);
  dfs(board, i, j + 1);
};
// @lc code=end

