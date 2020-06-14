/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
   let maxPos = 0;
   let step = 0;
   let end = 0;
   for (let i = 0; i < nums.length - 1; i++) {
     maxPos = Math.max(maxPos, nums[i] + i);
     if (i == end) {
       step++;
       end = maxPos;
     }
   }
   return step;
};
// @lc code=end

