//589. N叉树的前序遍历
// Definition for a Node.
function Node(val, children) {
   this.val = val;
   this.children = children;
};

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if(!root) {
          return [];
    }
    let result = [];
    function getFistNode(node) {
       result.push(node.val);
       for (const child of node.children) {
             getFistNode(child);
       }
    }
    getFistNode(root)
    return result
}

// 26. 删除排序数组中的重复项
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   if(!nums) return 0
   if(nums.length === 1) return 1

   let pre = 0
   for (let i = 0; i < nums.length;) {
         if(nums[pre] !== nums[i]) {
               nums[++pre] = nums[i]
         }
   }
   return pre + 1
}

// 11. 盛最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
      let i = 0
      let j = height.length - 1
      let max = 0
      while(i < j) {
  
          const currTotal = (j - i ) * Math.min(height[i],height[j])
          max = currTotal > max ?  currTotal : max
          if(height[i] > height[j]) {
              j--
          } else {
              i++
          } 
      }
      return max
  };


// 144. 二叉树的前序遍历

 // Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var preorderTraversal = function(root) {
      let result  = []
 
 
      function helper (node) {
         if(!node){
             return
         }
         result.push(node.val)
         helper(node.left)
         helper(node.right)
      }
 
      helper(root)
   
      return result
 };

//  28. 实现 strStr()
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      if(!needle) return 0
      const needleLen = needle.length
  
      for(let i = 0; i < haystack.length;i++) {
  
          if(haystack[i] === needle[0] &&  (i + needleLen - 1) < haystack.length  ) {
  
              let same = true
              for(let j = 0; j < needle.length; j++){
                  if(needle[j] != haystack[i+j]){
                      same = false
                      break
                  }
              }
              if(same) {
               return i
              }
          }
      }
      return -1
  };

//   104. 二叉树的最大深度
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
      if (!root || typeof root.val === 'undefined') {
          return 0
      }
      if (root.left && root.root) {
          return 1
      }
  
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

// 98. 验证二叉搜索树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
      function helper(node, min, max) {
          if(node === null) {
             return true
          }
          if (node.val <= min ||  node.val >= max) {
              return false
          }
  
          return helper(node.left, min, node.val) && helper(node.right, node.val, max)
      }
  
      return helper(root, -Infinity, Infinity)
};

//53. 最大子序和
/**
 * @param {number[]} nums
 * @return {number}
 */
// 输入: [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
// 比如求一个家族最大的财富
// 假如第一代的财富就是最大 
// 如果第二代发现上代是负的 那么重头再来 自己打天下 如果是正的 则继承过来 到这代终点如果 超过了之前最大的财富则就是最大
// 否则最大的财富还是上次积累的
var maxSubArray = function(nums) {
      let max = nums[0]
      let pre = 0
      for(num of nums) {
          pre = pre > 0 ? num + pre : num
          max = max > pre ? max : pre
      }
      return max
};

// 101. 对称二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
      if (!root) {
          return true
      }
      function helper(leftNode,rightNode) {
          if(!leftNode && !rightNode) {
              return true
          }
          if(!leftNode || !rightNode) {
              return false
          }
          return leftNode.val === rightNode.val && helper(leftNode.left,rightNode.right) && helper(leftNode.right,rightNode.left)
      }
      return helper(root.left,root.right)
  };