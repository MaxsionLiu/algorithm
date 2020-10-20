/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 剑指 Offer 27. 二叉树的镜像
var mirrorTree = function(root) {
      if (!root) {
          return root
      }
       const temp = mirrorTree(root.left)
       root.left = mirrorTree(root.right)
       root.right = temp
   
      return root
   };