/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  (function permute(curr, remaining) {
    if (remaining.length == 0) {
      res.push(curr);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      if (i > 0 && remaining[i] == remaining[i - 1]) {
        continue;
      } else {
        curr.push(remaining[i]);
        permute([...curr], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
        curr.pop();
      }
    }
  })([], nums);
  return res;
};
// @lc code=end
