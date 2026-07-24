/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * First time using Neovim for coding and tree problem.
 * Space: o(1)
 * Time: o(n), requires traversal of every node
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var invertTree = function(root) {
  // If reached the end of the tree, return null to indicate end of recursion. Nothing needs to be returned as we are updating object reference.
  if (!root) {
    return null;
  };

  // Create temporary left node as we are swapping two variables
  let tempLeft = root.left;

  // Swap two variables so current node level is inverted
  root.left = root.right;
  root.right = tempLeft;

  // Attempt recursion of all nodes until null/base case is found
  invertTree(root.left);
  invertTree(root.right);
  return root;
}
