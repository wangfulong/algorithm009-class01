/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1;
  let majority = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count == 0) majority = nums[i];
    if (nums[i] == majority) {
      count++;
    } else {
      count--;
    }
  }
};
// @lc code=end
