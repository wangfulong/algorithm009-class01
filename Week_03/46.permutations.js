/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  function backtrack(path) {
    if (path.length == nums.length) {
      res.push([...path]);
      return;
    }
    for (let n of nums) {
      if (!path.includes(n)) {
        path.push(n);
        backtrack(path);
        path.pop();
      }
    }
  }
  backtrack([]);
  return res;
};
// @lc code=end

