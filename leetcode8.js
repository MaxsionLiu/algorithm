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

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 剑指 Offer 28. 对称的二叉树
var isSymmetric = function(root) {
      if(!root) {
          return true
      }
      function helper(L,R) {
          if(!L && !R) {
              return true
          }
          if(!L || !R || L.val !== R.val) {
              return false
          }
          return helper(L.left,R.right) && helper(L.right,R.left)
      }
      return helper(root.left,root.right)
  };