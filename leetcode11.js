/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
// 437. 路径总和 III
var pathSum = function(root, sum) {
      function helper(node,n) {
          if(!node) {
              return 0
          }
          return (node.val === n ? 1 : 0) + helper(node.left, n - node.val) + helper(node.right, n - node.val)
      }
      if(!root) {
          return 0
      }
      let rootNum = helper(root,sum)
      return rootNum + pathSum(root.left,sum) +  pathSum(root.right,sum)
  };