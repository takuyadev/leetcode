// Approach: DFS
// Space complexity: o(n)
// Time complexity: o(n)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let maxHeight = 0;

/**
 * @param {TreeNode} root
 * @return {number}
 */

const diameterOfBinaryTree = (root) => {
  dfs(root);
  let tempMaxHeight = maxHeight;
  maxHeight = 0;
  return tempMaxHeight;
};

/**
 * @param {TreeNode} root
 * @return {number}
 */

const dfs = (root) => {
  if (!root) {
    return 0;
  }

  const leftDepth = dfs(root.left);
  const rightDepth = dfs(root.right);

  // Calculate current max depth from current node
  const currentMaxDepth = leftDepth + rightDepth;

  // If new max depth was found, update the global instance
  maxHeight = Math.max(maxHeight, currentMaxDepth);

  return 1 + Math.max(leftDepth, rightDepth);
}
