/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//    let k = 0;
//    for (let i = 0; i < nums.length; i++) {
//      if (k < i) return false; //可以到的最远距离
//      k = Math.max(k, nums[i] + i);
//    } 
//    return true;
// };
var canJump = function(nums) {
  let endReachable = nums.length - 1;
  for (let i = endReachable; i >= 0; i--) {
    if (endReachable <= nums[i] + i ) {
      endReachable = i; 
    }
  }
  return endReachable == 0;
};
// @lc code=end

