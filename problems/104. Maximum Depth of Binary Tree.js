/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// Space complexity: O(h), height of node
// Time complexity: O(n), node count
// The way I like to think this problem is that we are traversing down the tree all the way down,
// then from bottom up we are getting the starting point of when we are counting up.
// If the max depth is 3, it will start from 0 (base case) then calculate from bottom up, seeing max calculation for both routes

var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  const leftDepth = this.maxDepth(root.left);
  const rightDepth = this.maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
};

// Space complexity: O(h), height of node
// Time complexity: O(n), node count

var maxDepth = function(root) {
  const queue = [];

  if (root) {
    queue.push(root);
  }

  let level = 0;

  while (queue.length > 0) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      // For every iteration, remove previously processed node
      const prevNode = queue.shift();

      // If left/right node exists, push to queue so both can be processed on the same level
      if (prevNode.right) {
        queue.push(prevNode.right);
      }

      if (prevNode.left) {
        queue.push(prevNode.left);
      }
    }

    level++;
  }

  return level;
}
