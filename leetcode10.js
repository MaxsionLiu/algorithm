/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 199. 二叉树的右视图
var rightSideView = function(root) {
      if(!root) {
          return []
      }
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
              if(i === (len - 1)) {
                  result.push(node.val)
              }
          }
      }
      return result
   };


   /**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 230. 二叉搜索树中第K小的元素
var kthSmallest = function(root, k) {
      let result = []
      const helper = (node) => { 
         if(node.left) {
           helper(node.left)
         }
         result.push(node.val)
         if(node.right) {
           helper(node.right)
         }
      }
      helper(root)
      return result[k-1]
  };