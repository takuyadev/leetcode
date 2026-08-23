/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let result = [];

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  result = [];
  traverse(root);
  return result[k - 1];
};

var traverse = function (root) {
  if (root === null) {
    return null;
  }

  traverse(root.left);
  result.push(root.val);
  traverse(root.right);
};
