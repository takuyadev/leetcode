
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
   * @param {TreeNode} subRoot
   * @return {boolean}
   */
  isSubtree(root, subRoot) {
    const queue = [];

    if (root) {
      queue.push(root);
    }

    while (queue.length) {
      const size = queue.length;

      for (let i = 0; i < size; i++) {
        const currentNode = queue.shift();
        const isValEqual = currentNode && subRoot && currentNode.val === subRoot.val;

        if (isValEqual) {
          const isSubRootSame = this.isSameTree(currentNode, subRoot);

          if (isSubRootSame) {
            return true;
          }
        }

        if (currentNode?.left !== undefined) {
          queue.push(currentNode.left);
        }

        if (currentNode?.right !== undefined) {
          queue.push(currentNode.right);
        }
      }
    }

    return false;
  }

  isSameTree(root, subRoot) {
    const queue = [[root, subRoot]];

    while (queue.length) {
      const size = queue.length;

      for (let i = 0; i < size; i++) {
        const [node1, node2] = queue.shift();

        if (node1?.val !== node2?.val) {
          return false;
        }

        if (node1?.left !== undefined || node2?.left !== undefined) {
          queue.push([node1.left, node2.left]);
        }

        if (node1?.right !== undefined || node2?.right !== undefined) {
          queue.push([node1.right, node2.right]);
        }
      }
    }

    return true;
  }
}
