  /**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
// 559. N叉树的最大深度
var maxDepth = function(root) {

      if(!root) {
          return 0
      }
  
      if(root.children.length === 0) {
          return 1
      }
  
      let result = []
      for(let node of root.children) {
          result.push(maxDepth(node))
      }
  
      return 1 + Math.max(...result)
  };