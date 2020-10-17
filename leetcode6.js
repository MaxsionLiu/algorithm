/**
 * @param {TreeNode} root
 * @return {number}
 */
// 783. 二叉搜索树节点最小距离
var minDiffInBST = function(root) {   
      let arr = []
      function helper(node) {
          if(!node) {
              return
          }
          helper(node.left)
          arr.push(node.val)
          helper(node.right)
      }
      helper(root)
  
      let min = Infinity
  
      for(let i = 0; i < arr.length - 1; i++) {
         if((arr[i + 1] - arr[i]) < min) {
           min = arr[i + 1] - arr[i]
         }
      }
  
      return min
  };