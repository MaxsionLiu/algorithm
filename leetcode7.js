// 938. 二叉搜索树的范围和
var rangeSumBST = function(root, L, R) {
      let result = 0
      let stack = [root]
      while(stack.length > 0) {
          let node = stack.pop()
          if(node.left) {
              stack.push(node.left)
          }
          if(L <= node.val && node.val <= R) {
              result += node.val
          }
          if(node.right) {
              stack.push(node.right)
          }
      }
  
      return result
  };

  /**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 965. 单值二叉树
var isUnivalTree = function(root) {
      let temp = root.val
      let stack = [root]
      while(stack.length > 0) {
          const node = stack.pop()
          if(node.val !== temp) {
              return false
          }
          if(node.left) {
              stack.push(node.left)
          }
          if(node.right) {
              stack.push(node.right)
          }
      }
  
  
      return true
  };