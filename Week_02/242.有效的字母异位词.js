/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map = {};
  s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
  s.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
  return Object.keys(map).every(k => map[k] === 0);
}
// var isAnagram = function(s, t) {
//   let sortedS = s.split('').sort().join('');
//   let sortedT = t.split('').sort().join('');
//   return sortedS === sortedT;
// };

// var isAnagram = function(s, t) {
//   let map = {};
//   for (let n of s) {
//     if (map[n]) {
//       map[n]++;
//     } else {
//       map[n] = 1;
//     }
//   }

//   for (let n of t) {
//     if(map[n]) {
//       map[n]--;
//     } else {
//       return false;
//     }
//   }

//   return Object.keys(map).every(k => map[k] == 0);
// }
// @lc code=end

