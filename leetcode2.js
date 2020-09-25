/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 242. 有效的字母异位词
var isAnagram = function(s, t) {
      if (s.length !== t.length) {
          return false
      }
      return s.split('').sort().join('') === t.split('').sort().join('')
  };

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 257. 二叉树的所有路径
var binaryTreePaths = function(root) {
      let result = [] 
      function helper(root, s) {
           if(root) {
               s += root.val
               if (!root.left && !root.right) {
                   result.push(s)
               } else {
                   s += '->'
                   helper(root.left, s)
                   helper(root.right, s)
               }
           }
       } 
   
       helper(root, '')
       return result
   };

/**
 * @param {number} num
 * @return {number}
 */
// 258. 各位相加
// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。
var addDigits = function(num) {
      return (num - 1) % 9 + 1;
  };

/**
 * @param {number} num
 * @return {boolean}
 */
// 263. 丑数
// 编写一个程序判断给定的数是否为丑数。
// 丑数就是只包含质因数 2, 3, 5 的正整数。(1也是)
var isUgly = function(num) {
      if (num <= 0) {
          return false
      }
      if (num === 1) {
          return true
      }
      if (num % 2 === 0) {
          return isUgly(num / 2)
      }
      if (num % 3 === 0) {
          return isUgly(num / 3)
      }
      if (num % 5 === 0) {
          return isUgly(num / 5)
      }
      return false
  };

  /**
 * @param {number[]} nums
 * @return {number}
 */
// 268. 缺失数字
// 输入: [3,0,1]
// 输出: 2
// 输入: [9,6,4,2,3,5,7,0,1]
// 输出: 8
var missingNumber = function(nums) {
      let n = nums.length
      let sum = (n + 1) * n / 2 
      return nums.reduce((pre, curr) => {
          return pre - curr
      }, sum)
   };

// 278. 第一个错误的版本
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {

      function helper(l,r) {
          
          let mid = parseInt((l + r)/2)
          let bad = isBadVersion(mid)
          let good = isBadVersion(mid + 1)
      
          if (good && !bad) {
              return mid + 1
          } else if (good && bad) {
              return helper(l, mid)
          } else {
              return helper(mid,r)
          }
      }
      /**
       * @param {integer} n Total versions
       * @return {integer} The first bad version
       */
      return function(n) {
         return helper(0,n)
      };
  };

  /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 283. 移动零
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
var moveZeroes = function(nums) {
      for(let j = 0;j < nums.length; j++ )  {
           if (nums[j] !== 0) {
               continue
           }
           for(let i = nums.length - 1; i > j; i--) {
               if (nums[i] === 0) {
                   continue
               }
   
               let temp = nums[j]
               nums[j] = nums[i]
               nums[i] = temp 
           }
       }
   };