/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * 暴力 | 反转
 */
// var rotate = function(nums, k) {
//   let temp, pre;
//   for (let i = 0; i < k; i++) {
//     pre = nums[nums.length - 1];
//     for (let j = 0; j < nums.length; j++) {
//       temp = nums[j];
//       nums[j] = pre;
//       pre = temp;
//     }
//   }
//   return nums;
// };


var rotate = function(nums, k) {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, k, nums.length - 1);
  reverse(nums, 0, k - 1);
};

var reverse = function(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// @lc code=end

