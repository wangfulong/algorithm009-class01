/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function(root) {
//     let res = [];

//     ;(function tranverse(node) {
//         if (!node) return;
//         res.push(node.val);
//         tranverse(node.left);
//         tranverse(node.right);
//     })(root);
//     return res;
// };

var preorderTraversal = function(root) {
  let res = [], stack = [], curr = root;

  while (curr || stack.length) {
      while (curr) {
          res.push(curr.val);
          stack.push(curr);
          curr = curr.left;
      }
      const node = stack.pop();
      curr = node.right;
  }
  return res;
};
// @lc code=end

