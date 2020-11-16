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
// 654. 最大二叉树
var constructMaximumBinaryTree = function(nums) {

      function helper(left, right) {
  
          if (left === right) {
              return null
          }
          const idx = max(left,right)
          let node = new TreeNode(nums[idx])
  
          node.left = helper(left,idx)
          node.right = helper(idx + 1, right)
          return node
      }
  
      function max(l,r) {
          let maxIdx = l;
          for (let i = l; i < r; i++) {
              if (nums[maxIdx] < nums[i]) {
                  maxIdx = i;
              }
          }
          return maxIdx;
      }
  
      return helper(0, nums.length)
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 513. 找树左下角的值
var findBottomLeftValue = function(root) {
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          result = []
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              result.push(node.val)
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
          }
      }
      return result[0]
  };

  /**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 515. 在每个树行中找最大值
var largestValues = function(root) {
      if(!root) {
          return []
      }
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          let max = -Infinity
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              if(node.val > max) {
                 max = node.val
              }
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
          }
          result.push(max) 
      }
      return result
  };

  /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 538. 把二叉搜索树转换为累加树
var convertBST = function(root) {
      if(!root) {
          return null
      }
      let sum = 0
      function helper(node) {
          if(!node) {
              return 0
          }
          helper(node.right)
          node.val =  sum + node.val
          sum = node.val
          helper(node.left)
          return node
      }
  
      return helper(root)
  };