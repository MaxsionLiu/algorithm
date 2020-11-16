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

  /**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 236. 二叉树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
      if (root == p || root == q) return root;
      let left = null
      let right = null
      if(root.left) {
          left = lowestCommonAncestor(root.left,p,q)
      }
      if(root.right) {
          right = lowestCommonAncestor(root.right,p,q)
      }
      if (left && right) return root;
      return left ? left : right;
  };

  /**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {

      function helper(nums, left, right) {
           if (left === right) {
               return null
           }
           let idx = max(nums,left,right)
           let node = new TreeNode(temp)
   
           node.left = helper(nums, left,idx)
           node.right = helper(nums, idx, right)
           return node
      }
      function max(nums, l,r) {
           let max_i = l;
           for (let i = l; i < r; i++) {
               if (nums[max_i] < nums[i]) {
                   max_i = i;
               }
           }
           return max_i;
      }
      console.log('nums', nums)
      console.log('nums.length', nums.length)
         console.log('nums.length=== 0', nums.length=== 0)
   
   
   
      return node
   };