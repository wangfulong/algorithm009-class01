/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  (function backtrack(start, curr) {
    if (curr.length == k) {
      return res.push(curr);
    }
    let len = curr.length;
    for (let i = start; i <= n - (k - len) + 1; i++) {
      curr.push(i);
      backtrack(i + 1, [...curr]);
      curr.pop();
    }
  })(1, []);
  return res;
};
// @lc code=end
