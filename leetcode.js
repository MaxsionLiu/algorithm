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