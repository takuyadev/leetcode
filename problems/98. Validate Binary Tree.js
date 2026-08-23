/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  isValidBST(root) {
    return this.traverse(root, null, null);
  }

  traverse(root, min, max) {
    if (!root) {
      return true;
    }

    if (min !== null && root.val <= min.val) {
      return false;
    }

    if (max !== null && root.val >= max.val) {
      return false;
    }

    return (
      this.traverse(root.left, min, root) &&
      this.traverse(root.right, root, max)
    );
  }
}
