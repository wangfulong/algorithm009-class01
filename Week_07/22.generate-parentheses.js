/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  (function backtrack(track, l, r) {
    if (l == n && r == n) {
      return res.push(track);
    }

    if (l < n) backtrack(track + "(", l + 1, r);
    if (r < l) backtrack(track + ")", l, r + 1);
  })("", 0, 0);
  return res;
};
// @lc code=end
