# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def preorderTraversal(self, root):
        self.result = []
        self.traverse(root)
        return self.result

    def traverse(self, root):
        if root is None:
            return

        self.result.append(root.val)
        self.traverse(root.left)
        self.traverse(root.right) 
