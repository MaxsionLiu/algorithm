// 938. 二叉搜索树的范围和
var rangeSumBST = function(root, L, R) {
      let result = 0
      let stack = [root]
      while(stack.length > 0) {
          let node = stack.pop()
          if(node.left) {
              stack.push(node.left)
          }
          if(L <= node.val && node.val <= R) {
              result += node.val
          }
          if(node.right) {
              stack.push(node.right)
          }
      }
  
      return result
  };

  /**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 965. 单值二叉树
var isUnivalTree = function(root) {
      let temp = root.val
      let stack = [root]
      while(stack.length > 0) {
          const node = stack.pop()
          if(node.val !== temp) {
              return false
          }
          if(node.left) {
              stack.push(node.left)
          }
          if(node.right) {
              stack.push(node.right)
          }
      }
  
  
      return true
  };

  //  993. 二叉树的堂兄弟节点
  var isCousins = function(root, x, y) {
      let xHeight = 0
      let yHeight = 0
  
      let queue = [root]
      let count = 0
      let hashObj = {}
      while(queue.length > 0) {
          const len = queue.length
          for(let i = 0; i < len; i++) {
              const node = queue.shift()
              if(node.val === x) {
                  xHeight = count
              }
              if(node.val === y) {
                  yHeight = count
              }
              if(node.left) {
                  hashObj[node.left.val] = node.val
                  queue.push(node.left)
              }
              if(node.right) {
                  hashObj[node.right.val] = node.val
                  queue.push(node.right)
              }
          }
          count++
      }
      return xHeight === yHeight && hashObj[x] !== hashObj[y]
  };