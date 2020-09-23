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