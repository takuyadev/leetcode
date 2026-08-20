/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) {
    return [];
  }

  const result = [root.val];
  traverse(root, result)
  return result;
};

var traverse = function(root, result) {
  if (root === null) {
    return null;
  }

  // Each child should recurse call to traverse each node iteratively
  for (let i = 0; i < root.children.length; i++) {
    // Push current node into result array 
    result.push(root.children[i].val);
    traverse(root.children[i], result);
  }
}
