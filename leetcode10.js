/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 199. 二叉树的右视图
var rightSideView = function(root) {
      if(!root) {
          return []
      }
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
              if(i === (len - 1)) {
                  result.push(node.val)
              }
          }
      }
      return result
   };


   /**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 230. 二叉搜索树中第K小的元素
var kthSmallest = function(root, k) {
      let result = []
      const helper = (node) => { 
         if(node.left) {
           helper(node.left)
         }
         result.push(node.val)
         if(node.right) {
           helper(node.right)
         }
      }
      helper(root)
      return result[k-1]
  };

  /**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 236. 二叉树的最近公共祖先
var lowestCommonAncestor = function(root, p, q) {
      if (root == p || root == q) return root;
      let left = null
      let right = null
      if(root.left) {
          left = lowestCommonAncestor(root.left,p,q)
      }
      if(root.right) {
          right = lowestCommonAncestor(root.right,p,q)
      }
      if (left && right) return root;
      return left ? left : right;
  };

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 654. 最大二叉树
var constructMaximumBinaryTree = function(nums) {

      function helper(left, right) {
  
          if (left === right) {
              return null
          }
          const idx = max(left,right)
          let node = new TreeNode(nums[idx])
  
          node.left = helper(left,idx)
          node.right = helper(idx + 1, right)
          return node
      }
  
      function max(l,r) {
          let maxIdx = l;
          for (let i = l; i < r; i++) {
              if (nums[maxIdx] < nums[i]) {
                  maxIdx = i;
              }
          }
          return maxIdx;
      }
  
      return helper(0, nums.length)
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
// 513. 找树左下角的值
var findBottomLeftValue = function(root) {
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          result = []
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              result.push(node.val)
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
          }
      }
      return result[0]
  };

  /**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 515. 在每个树行中找最大值
var largestValues = function(root) {
      if(!root) {
          return []
      }
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          let max = -Infinity
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              if(node.val > max) {
                 max = node.val
              }
              if(node.left) {
                  queue.push(node.left)
              }
              if(node.right) {
                  queue.push(node.right)
              }
          }
          result.push(max) 
      }
      return result
  };

  /**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 538. 把二叉搜索树转换为累加树
var convertBST = function(root) {
      if(!root) {
          return null
      }
      let sum = 0
      function helper(node) {
          if(!node) {
              return 0
          }
          helper(node.right)
          node.val =  sum + node.val
          sum = node.val
          helper(node.left)
          return node
      }
  
      return helper(root)
  };

  /**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
// 863. 二叉树中所有距离为 K 的结点
var distanceK = function(root, target, k) {
      if(!root) return [];
      let targetNode = null;
      let res = [];
      let paths = [];
  
      // 找到target节点，存储到targetNode中
      dfs(root, target);
      // 从当前节点向下寻找
      getdownDis(targetNode, k);
      console.log('111111111111111111111111111111111111111111')
      // 从当前节点向上寻找
      while(targetNode.parent && k>0){
          targetNode = targetNode.parent;
          getdownDis(targetNode, --k);
      }
  
      // 辅助函数
      function dfs(_root, target){
          if(!_root || targetNode) return;
          if(_root.val === target.val){
              targetNode = _root;
          }
          if(_root.left){
              _root.left.parent = _root;
              dfs(_root.left, target);
          }
          if(_root.right){
              _root.right.parent = _root;
              dfs(_root.right, target);
          }
      }
  
      // 辅助函数
      function getdownDis(node, k){
          if(node === null || paths.indexOf(node) !== -1) return;
          paths.push(node);
          if(k>0){
              getdownDis(node.left, k-1);
              getdownDis(node.right, k-1);  
          }else if(k === 0){
              res.push(node.val);
          }
      }
  
      return res;
  };

  /**
 * @param {TreeNode} root
 * @return {number}
 */
// 1302. 层数最深叶子节点的和
var deepestLeavesSum = function(root) {
      if(!root) {
          return 0
      }
      let result = []
      let queue = [root]
      while(queue.length > 0) {
          const len = queue.length
          result = []
          for(let i = 0; i < len; i++) {
             const node = queue.shift()
             result.push(node.val)
             if(node.left) {
                 queue.push(node.left)
             }
             if(node.right) {
                 queue.push(node.right)
             }
          }
      }
      return result.reduce((pre,curr) => pre + curr)
 };

 /**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
// 1305. 两棵二叉搜索树中的所有元素
 var getAllElements = function(root1, root2) {
      let num1 = []
      let num2 = []
      function helper(node,num) {
         if(!node) {
             return
         } 
         helper(node.left,num)
         num.push(node.val)
         helper(node.right,num)
      }
      helper(root1,num1)
      helper(root2,num2)
      let result = []
      let i = 0;
      let j = 0
      while(i < num1.length || j < num2.length) {
            if (i < num1.length && (j == num2.length || num1[i] <= num2[j])) {
               result.push(num1[i++]);
            } else {
               result.push(num2[j++]);
            }
      }
      return result 
 };