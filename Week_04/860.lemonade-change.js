/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
   let five = 0, ten = 0;
   for (let bill of bills) {
     if (bill == 5) {
       five++;
     } else if (bill == 10) {
       if (five == 0) return false;
       five--;
       ten++;
     } else {
       if (five > 0 && ten > 0) {
         five--;
         ten--;
       } else if (five >= 3) {
         five -= 3;
       } else {
         return false;
       }
     }
   } 
   return true;
};
// @lc code=end

