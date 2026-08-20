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

var minDepth = function(root) {
  return traverse(root, 0);
};

var traverse = function(root) {
  if (root === null) {
    return 0;
  }

  const leftDepth = traverse(root.left);
  const rightDepth = traverse(root.right);

  // If left is non-existant, just add right depth
  if (root.left === null) {
    return rightDepth + 1;
    // Vice versa
  } else if (root.right === null) {
    return leftDepth + 1;
  } else {
    // If in recursion left is not a value, do not Math.min() because 0 will always overwrite
    return 1 + Math.min(rightDepth, leftDepth)
  }
}

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

var minDepth = function(root) {
  if (!root) {
    return 0;
  }

  const queue = [root]
  let depth = 1;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node.left === null && node.right === null) {
        return depth;
      }

      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
    }

    depth++;
  }

  return depth
};
