/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  if (!root) {
    return [];
  }

  const result = [];
  traverse(root, result);
  result.push(root.val);
  return result;
};

var traverse = function(root, result) {
  if (root === null) {
    return null;
  }

  for (let i = 0; i < root.children.length; i++) {
    traverse(root.children[i], result);
    result.push(root.children[i].val);
  }
}
