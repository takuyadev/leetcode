/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// BFS Approach
// Space Complexity: O(p+q)
// Time Complexity: O(p+q)
// Compare while executing BFS search. If one is found without 
// Note: Null is equal to empty node, but not non-existing node.

var isSameTree = function(p, q) {
  if ((p?.val && !q?.val) || (q?.val && !p?.val)) {
    return false;
  }

  const queue = [p, q];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const currentPNode = queue.shift();
      const currentQNode = queue.shift();

      if (
        (currentPNode && !currentQNode) ||
        (currentQNode && !currentPNode)
      ) {
        return false;
      }

      if (currentPNode?.val !== currentQNode?.val) {
        return false;
      }

      if (currentPNode?.left !== undefined) {
        queue.push(currentPNode.left);
      }

      if (currentQNode?.left !== undefined) {
        queue.push(currentQNode.left);
      }

      if (currentPNode?.right !== undefined) {
        queue.push(currentPNode.right);
      }

      if (currentQNode?.right !== undefined) {
        queue.push(currentQNode.right);
      }
    }
  }

  return true;
};

class Solution {
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p, q) {
    const queue = [[p, q]];

    while (queue.length) {
      const size = queue.length;

      for (let i = 0; i < size; i++) {
        const [currentPNode, currentQNode] = queue.shift();

        if (!currentPNode && !currentQNode) {
          continue;
        }

        if (currentPNode?.val !== currentQNode?.val) {
          return false;
        }

        queue.push([currentPNode.left, currentQNode.left]);
        queue.push([currentPNode.right, currentQNode.right]);
      }
    }

    return true;
  }
}

// DFS Approach
// Tracks global isEqual variable. 
// Space complexity: O(p + q)
// Time complexity: O(p + q)

class Solution {
  constructor() {
    this.isEqual = true;
  }

  isSameTree(p, q) {
    this.dfs(p, q);
    return this.isEqual;
  }

  dfs(p, q) {
    if (!p && !q) {
      return null;
    }

    if (!p || !q || p.val !== q.val) {
      this.isEqual = false;
      return true;
    }

    this.dfs(p.left, q.left);
    this.dfs(p.right, q.right);

    return true;
  }
}
