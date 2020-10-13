/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
// 606. 根据二叉树创建字符串
var tree2str = function(t) {
      function helper(node) {
         if(!node) {
             return '()'
         }
         let str = ''
         str += '('  + node.val
         if(node.left && node.right) {
          str += helper(node.left) 
          str += helper(node.right)
         } else if(node.left && !node.right) {
            str += helper(node.left) 
         } else if(!node.left && node.right) {
            str += '()'
            str += helper(node.right) 
         }
         str += ')'
         return str
      }
      const str = helper(t)
      return str.substring(1,str.length-1)
  };

  /**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
// 617. 合并二叉树
var mergeTrees = function(t1, t2) {
      if(!t1){
          return t2
      }
      if(!t2){
          return t1
      }
      let node = new TreeNode(t1.val + t2.val)
      node.left = mergeTrees(t1.left, t2.left)
      node.right = mergeTrees(t1.right, t2.right)    
      return node
  };