  /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 501. 二叉搜索树中的众数
var findMode = function(root) {
      if(!root) {
          return []
      }
  
      let answer = []
      let maxCount = 0
      let count = 0
      let base
      const update = (x) => {
          if (x === base) {
              ++count;
          } else {
              count = 1;
              base = x;
          }
          if (count === maxCount) {
              answer.push(base);
          }
          if (count > maxCount) {
              maxCount = count;
              answer = [base];
          }
      }
  
      function midOrderTree(node) {
         if(!node) {
            return
         }
         midOrderTree(node.left)
         update(node.val)
         midOrderTree(node.right)
      }
      midOrderTree(root)
      return answer
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
 * @return {number}
 */
// 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
// 530. 二叉搜索树的最小绝对差
var getMinimumDifference = function(root) {
      let arr = []
      let min = Infinity
      function helper(node) {
          if(!node) {
              return
          }
          helper(node.left)
          arr.push(node.val)
          helper(node.right)
      }
      helper(root)
      for (let i = 0; i < arr.length - 1; i++) {
          const temp = Math.abs(arr[i] - arr[i+1])
          if(temp < min) {
              min = temp
          }
      }
      return min
  };

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