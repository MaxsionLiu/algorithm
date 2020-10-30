/**
 * @param {number[]} A
 * @return {number}
 */
// 845. 数组中的最长山脉
var longestMountain = function(A) {
      let result = []     // 返回的数组
      let idx = 0  // 返回
      let len = A.length - 1
  
      while(idx < len){
          const temp = getMountain()
          if(temp.length > result.length) {
              result = temp
          }
      }
  
      function getMountain() {
          let temp = [A[idx]]
          // 如果第一个节点就是下坡 则返回空数组
          if(A[idx] > A[idx + 1] && temp.length === 1) {
              idx++
              return []
          }
  
          let down = false
          while(idx < len){
              // 如果是上坡
              if(A[idx] < A[idx + 1] ) {
                  //如果一直是上坡的话(没有下坡)的话 则继续添加  否则返回找到的山脉
                  if(!down) {
                      temp.push(A[idx + 1])
                  }else {
                      return temp
                  }
              }else if(A[idx] === A[idx + 1]){
                  // 如果已经是下坡的话返回找到的山脉 否则返回空数组
                  idx++
                  return !down ? [] : temp
              }else{
                  down = true
                  temp.push(A[idx + 1])
              }
  
              idx++
          }
  
          // 如果全部节点都是上坡 则返回为空数组
          return down ? temp : []
      }
  
      return result.length
  };

  /**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
// 剑指 Offer 26. 树的子结构
var isSubStructure = function(A, B) {

      if(!A || !B) {
          return false;
      }
  
      function helper(A1,B1) {
          if(!B1) {
              return true
          }
          if(!A1) {
              return false
          }
          return A1.val === B1.val && helper(A1.left,B1.left) && helper(A1.right,B1.right)
      }
  
      return helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
  };

  /**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 剑指 Offer 32 - I. 从上到下打印二叉树
var levelOrder = function(root) {
      if(!root) {
          return []
      }
      let stack = [root]
      let result = []
      while(stack.length > 0) {
          let len = stack.length
          for(let i = 0; i < len; i++) {
              const node = stack.shift()
              result.push(node.val)
              if(node.left) {
                  stack.push(node.left)
              }
              if(node.right) {
                  stack.push(node.right)
              }
          }
      }
      return result
  };

  /**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 剑指 Offer 32 - III. 从上到下打印二叉树 III
var levelOrder = function(root) {
      if(!root) {
          return []
      }
      let stack = [root]
      let result = []
      let odd = true
      while(stack.length > 0) {
          const len = stack.length
          let temp = []
          for(let i = 0; i < len; i++) {
              const node = stack.shift()
              temp.push(node.val)
              if(node.left) {
                  stack.push(node.left)
              }
              if(node.right) {
                  stack.push(node.right)
              }
          }
          if(!odd) {
              temp = temp.reverse()
          }
          result.push(temp)
          odd = !odd
      }
      return result
   };

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// 剑指 Offer 34. 二叉树中和为某一值的路径
var pathSum = function(root, sum) {
      if(!root) {
          return []
      }
      // 一个值是否等于一个节点的值
      // 如果一个节点为空则返回
      // 如果等于则将临时数组加入总数组
      // 如果不等于则递归调用
      //root.left, sum - root.val
      //root.right, sum - root.val
      let result = []
      let temp = [] 
      function help(node, num) {
          if(!node){
              return
          }
          temp.push(node.val)
          if(node.val === num && !node.left && !node.right) {
              result.push([...temp])
          }
          help(node.left, num - node.val)
          help(node.right, num - node.val,temp)
          temp.pop()
      }
      help(root,sum) 
      return result
  };

  /**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
// 面试题 04.03. 特定深度节点链表
var listOfDepth = function(tree) {
      if(!tree) {
          return []
      }
      let result = []
      let stack = [tree]
      while(stack.length > 0 ) {
          const len = stack.length
          let tempNode = new ListNode(-1)
          let curr = tempNode
          for(let i = 0; i < len; i++) {
              const node = stack.shift()
              curr.next = new ListNode(node.val)
              curr = curr.next
              if(node.left) {
                  stack.push(node.left)
              }
              if(node.right) {
                  stack.push(node.right)
              }
          }
          result.push(tempNode.next)
      }
      return result
   };

   /**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 面试题 04.05. 合法二叉搜索树
var isValidBST = function(root) {
      if(!root) {
          return true
      }
      let temp = -Infinity
      let result = true
      function helper(node) {
          if(!node) {
             return
          } 
  
          if(node.left) {
             helper(node.left)
          }
         
          if(node.val > temp) {
             temp = node.val
          } else {
             result = false
             return
          }
  
          if(node.right) {
             helper(node.right)
          }
      }
      helper(root)
  
      return result
  };

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// 面试题 04.06. 后继者
var inorderSuccessor = function(root, p) {
      if(!root || !p) {
          return false
      }
      let result = []
      function helper(node) {
        if(!node) {
            return
        }
        if(node.left) {
            helper(node.left)
        }
        result.push(node)
        if(node.right) {
            helper(node.right)
        }
      }
      helper(root)
      const index =  result.findIndex( item => item.val === p.val)
      return index === (result.length - 1) ? null : result[index + 1]
  };