/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 * dp[i] s[i]结尾的最长有效括号数
 * if (s[i] == "(")
 *   dp[i] == 0
 * if (s[i] == ")") 
 *    if (s[i - 1] == "(")
 *        dp[i] = dp[i - 2] + 2;
 *    if (s[i - 1] == ")" && s[i - dp[i - 1] - 1] == "(")
 *        dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2;
 */
var longestValidParentheses = function(s) {
    let dp = Array(s.length).fill(0);
    let max = 0;
    for (let i = 1; i < s.length; i++) {
      if (s[i] == ")") {
        if (s[i - 1] == "(") {
          dp[i] = i - 2 >= 0 ? dp[i - 2] + 2 : 2;
        } else if (s[i - 1] == ")" && i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] == "(") {
          dp[i] = dp[i - 1] + 2 + (i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0);
        }
        max = Math.max(max, dp[i])
      }
    }
    return max;
};
// @lc code=end

