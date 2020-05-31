/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
   let map = new Map();
   for (let n of nums) {
     map.set(n, map.has(n) ? map.get(n) + 1 : 1);
   } 

   return [...map].sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0]);
};
// @lc code=end

