/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (root === null) {
    return 0;
  }

  let depth = 1;
  const queue = [root];

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if ((node.val <= p.val && node.val >= q.val) || (node.val >= p.val && node.val <= q.val)) {
        return node;
      }

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    depth++
  }

  return 0;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) {
    return 0;
  }

  return traverse(root, p, q);
};


var traverse = function(root, p, q) {
  if (root === null) {
    return null;
  }

  const leftNode = traverse(root.left, p, q);
  const rightNode = traverse(root.right, p, q);

  /* Think of what LCA is asking of:
  ** If current node is found (either p or q), because of BST structure.
  ** If p is less than node, but q is more than node, then it must be LCA because this formula below indicates split path.
  ** Why? It's because if both were less or more, than it requires further search.
  ** If both were larger, then it's in the right subpath, but not sure where.
  */
  if ((root.val <= p.val && root.val >= q.val) || (root.val >= p.val && root.val <= q.val)) {
    return root;
  }

  return leftNode || rightNode;
}
