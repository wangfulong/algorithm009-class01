/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;
  let i = 0, j = 0;
  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      count++;
      i++;
    }
    j++;
  }
  return count;
};
// @lc code=end
