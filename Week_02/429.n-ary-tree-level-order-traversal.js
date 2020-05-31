/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 * BSF | queue
 */
// var levelOrder = function(root) {
//     if (!root) return [];
//     let res = [], q = [];
//     q.push(root);
//     while (q.length) {
//       let len = q.length; 
//       let level = [];
//       for (let i = 0; i < len; i++) {
//         const node = q.shift();
//         level.push(node.val);
//         q.push(...node.children);
//       }
//       res.push(level);
//     }
//     return res;
// };

var levelOrder = function(root) {
  let res = [];
  ;(function BFS(node, depth) {
    if (!node) return;
    if (res.length === depth) {
      res.push([]);
    }
    res[depth].push(node.val);
    for (let child of node.children) {
      BFS(child, depth + 1);
    }
  })(root, 0);
  return res;
}
// @lc code=end

