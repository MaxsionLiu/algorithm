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