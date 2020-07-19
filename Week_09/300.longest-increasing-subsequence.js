/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * dp[i] 前i个元素最长上升子序列
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;
  let dp = Array(nums.length).fill(1);
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
    res = Math.max(res, dp[i]);
  }
  return res;
};
// @lc code=end
