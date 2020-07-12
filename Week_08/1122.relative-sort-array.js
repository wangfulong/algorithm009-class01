/*
 * @lc app=leetcode id=1122 lang=javascript
 *
 * [1122] Relative Sort Array
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  let lookup = new Map();
  let len = arr2.length;
  for (let i = 0; i < len; i++) {
    lookup.set(arr2[i], i);
  }

  return arr1.sort((a, b) => {
    let a1 = lookup.has(a) ? lookup.get(a) : len + a;
    let b1 = lookup.has(b) ? lookup.get(b) : len + b;
    return a1 - b1;
  })
};
// @lc code=end

