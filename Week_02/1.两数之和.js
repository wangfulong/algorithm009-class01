/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 暴力 ｜ hash
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    } 
  }
  return [];
};
// var twoSum = function(nums, target) {
//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     let temp = target - nums[i];
//     if (map[temp] != undefined) {
//       return [map[temp], i];
//     }
//     map[nums[i]] = i;
//   }
//   return [];
// };

// @lc code=end

