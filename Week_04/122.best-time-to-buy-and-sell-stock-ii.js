/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    let count = prices[i + 1] - prices[i];
    if (count > 0) {
      profit += count;
    }
  }
  return profit;
};
// @lc code=end

