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