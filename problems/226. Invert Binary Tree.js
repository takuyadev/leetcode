/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * First attempt at both using Neovim and attempting tree problem. 
 * Space complexity: o(1)
 * Time complexity: o(n), requires traverse of every node
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
  // If root does not exist, that is our base case and return nothing to signal end of node
  if (!root) {
    return null;
  }

  // Keep temporary variable because we are swapping two trees and we will lose reference without it
  let leftTemp = root.left;

  // Swap the two trees
  root.left = root.right;
  root.right = leftTemp;

  // This is sync call, so it will hold off on running rest of code until all recursive functions are completed
  invertTree(root.left);
  invertTree(root.right);

  return root;
};
