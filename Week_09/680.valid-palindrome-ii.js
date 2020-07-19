/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, flag = true) {
  let l = 0, r = s.length - 1;
  while (l < r) {
      if (s[l] == s[r]) {
          l++; r--;
          continue;
      }
      if (flag == false) return false;
      return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false);
  }
  return true; 
};
// @lc code=end

