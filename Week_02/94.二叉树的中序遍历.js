/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  let curr = root,  res = [], stack = [];
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    let node = stack.pop();
    res.push(node.val);
    curr = node.right;
  }
  return res;
};

// var inorderTraversal = function (root) {
//   let res = [];

//   ;(function tranverse(node) {
//     if (!node) return;
//     tranverse(node.left);
//     res.push(node.val);
//     tranverse(node.right)
//   })(root);
//   return res;
// }


// @lc code=end

