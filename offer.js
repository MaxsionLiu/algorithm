/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 剑指 Offer 32 - II. 从上到下打印二叉树 II
var levelOrder = function(root) {
      if(!root){
          return [];
      }
      let result = []
      let arr = [root]
   
      while(arr.length > 0) {
       let temp = []
       for(let i = arr.length-1; i >= 0;i--) {
           const node =  arr.shift()
           temp.push(node.val)
           // 入栈
           if(node.left){
               arr.push(node.left)
           }
           if(node.right){
               arr.push(node.right)
           }
       }
       result.push(temp)
      }
      return result;
   };