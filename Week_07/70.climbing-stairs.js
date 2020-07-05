/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   let dp = [1, 2];
//   for (let i = 2; i < n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   } 
//   return dp[n - 1];
// };

// var climbStairs = function(n) {
//   if (n < 2) return n;
//   let first = 1;
//   let second = 2;
//   for (let i = 2; i < n; i++) {
//     let third = first + second;
//     first = second;
//     second = third;
//   }
//   return second;
// }

// var climbStairs = function(n) {
//   let memo = [];
//   function climb(i) {
//     if (i > n) return 0;
//     if (i == n) return 1;
//     if (memo[i]) return memo[i];
//     memo[i] = climb(i + 1) + climb(i + 2);
//     return memo[i];
//   };
//   return climb(0);
// }

var climbStairs = function(n) {
  let memo = [];
  function climb(i) {
    if (i == 1) return 1;
    if (i == 2) return 2;
    if (memo[i]) return memo[i]
    memo[i] = climb(i - 1) + climb(i - 2);
    return memo[i];
  }

  return climb(n)  
}

// @lc code=end

