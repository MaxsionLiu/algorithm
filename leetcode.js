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

// 38. 外观数列
/**
 * @param {number} n
 * @return {string}
 */
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
var countAndSay = function(n) {
      function helper(n) {
         if (n === 1) {
             return '1'
         }
         const pre = helper(n-1)
         let curr = ''
         let i = 0
         for(let j = 1; j <= pre.length; j++) {
             if(j === pre.length) {
                 curr += (j - i) + pre[i]
                 return curr
             }
             if (pre[i] !== pre[j]) {
                 curr += (j - i) + pre[i]
                 i = j
             }
         }
         return curr
      }
      return helper(n)
  };

// 58. 最后一个单词的长度
// 输入: "Hello World"
// 输出: 5
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
      if(!s || s.length === 0){
          return 0
      }
      let str = s.trim()
      let strArr = str.split(' ')
   
      return strArr[strArr.length - 1].length
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 66. 加一
// 输入: [1,2,3]
// 输出: [1,2,4]
// 解释: 输入数组表示数字 123。
var plusOne = function(digits) {
      let have = false
      for(let i = digits.length - 1; i >= 0;i--) {
          let item = digits[i]
          if (i === digits.length - 1 || have) {
              if (item !== 9) {
                  digits[i] = item+1
                  have = false
              } else {
                  digits[i] = 0
                  have = true
              }
          }
      }
  
      if (have) {
          digits.unshift(1)
      }
  
      return digits
};

// 67. 二进制求和
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 输入: a = "11", b = "1"
// 输出: "100"
var addBinary = function(a, b) {
      let flag = 0
  
      if(a.length > b.length) {
         let num = a.length - b.length
           for(let i = 0; i < num; i++){
            b = '0' + b
         }
      }
      if(a.length < b.length) {
         let num = b.length - a.length
         for(let i = 0; i < num; i++){
            a = '0' + a
         }
      }
  
      let j = a.length - 1
      let result = ''
      while(j >= 0) {
  
          let pNum = Number(a[j])
          let qNum = Number(b[j])
          
          if (pNum + qNum + flag === 0) {
              result = '0' + result
              flag = 0
          } else if (pNum + qNum + flag === 1) {
              result = '1' + result
              flag = 0
          }else if (pNum + qNum + flag === 2) {
              result = '0' + result
              flag = 1
          }else if (pNum + qNum + flag === 3) {
              result = '1' + result
              flag = 1
          }
          j--
      }
      if(flag) {
          result = '1' + result
      }
      return result  
};

/**
 * @param {number} n
 * @return {number}
 */
// 70. 爬楼梯
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶
var climbStairs = function(n) {
      let totalMap = {}
      function helper (n) {
        if (n === 1) {
            return 1
        }
        if (n === 2) {
            return 2
        }
        
        let left
        let right
    
        if (totalMap[n - 1]) {
           left = totalMap[n - 1]
        } else {
           totalMap[n - 1] = helper(n - 1)
           left = totalMap[n - 1]
        }
    
        if (totalMap[n - 2]) {
            right = totalMap[n - 2]
        } else {
            totalMap[n - 2] = helper(n - 2)
            right = totalMap[n - 2]
        }
    
        return left + right
      }
      
      return helper(n)
};