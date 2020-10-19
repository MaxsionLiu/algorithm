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