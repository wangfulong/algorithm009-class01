/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 * 
 */
// var preorder = function(root) {
//   let res = [];
//   ;(function tranverse(node) {
//     if (!node) return;
//     res.push(node.val)
//     for (let child of node.children) {
//       tranverse(child);
//     }
//   })(root);
//   return res;
// };
var preorder = function(root) {
  let stack = [], curr = root, res = [];
  if (!root) return [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop();
    res.push(node.val);
    for (let i = node.children.length - 1; i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  return res;
};


// @lc code=end

