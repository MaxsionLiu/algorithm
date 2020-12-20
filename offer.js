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

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 剑指 Offer 22. 链表中倒数第k个节点
var getKthFromEnd = function(head, k) {
      if (!head) {
            return null
      }

      let nodeCount = 0
      let curr = head
      while(curr) {
            nodeCount++
            curr = curr.next
      }

      let pre = head
      let len = nodeCount - k + 1
      let n = 0

      while(pre) {
            n++
            if(n === len ) {
            return pre
            }
            pre = pre.next
      }
      return null
};

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 1669. 合并两个链表
var mergeInBetween = function(list1, a, b, list2) {
      let l2 = list2
      while(l2.next) {
          l2 = l2.next
      }
      let pre = list1
      let curr = list1.next
      let i = 1
      while(curr) {
         if(i === a) {
             pre.next = list2
         }
         if(i === b) {
             l2.next = curr.next
         }
         i++
         pre = curr
         curr = pre.next
      }
      return list1
  };

  /**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
// 面试题 02.02. 返回倒数第 k 个节点
var kthToLast = function(head, k) {
      let len = 0
      let curr = head
      while(curr) {
          len++
          curr = curr.next
      }
      let link = head
      let j = 0
      let count = len - k + 1
      while(link) {
          j++
          if(j === count) {
              return link.val
          }
          link = link.next
      }
      return -1
   };

   /**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 109. 有序链表转换二叉搜索树
var sortedListToBST = function(head) {
      let list = []
      let curr = head
      while(curr) {
          list.push(curr.val)
          curr = curr.next
      }
      function helper(arr) {
          const len = arr.length
          if(len === 0) {
              return null
          }
          if(len === 1) {
              return new TreeNode(arr[0])
          }
          const mid = Math.floor(len / 2)
          const node = new TreeNode(arr[mid])
          node.left = helper(arr.slice(0,mid))
          node.right = helper(arr.slice(mid+1))
          return node
      }
      return helper(list)
  };

  /**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 剑指 Offer 52. 两个链表的第一个公共节点
var getIntersectionNode = function(headA, headB) {
      let stackA = []
      let stackB = []
      let nodeA = headA
      let nodeB = headB
      while(nodeA) {
          stackA.push(nodeA)
          nodeA = nodeA.next
      }
      while(nodeB) {
          stackB.push(nodeB)
          nodeB = nodeB.next
      }
      let n = Math.abs(stackA.length - stackB.length)
      if(stackA.length > stackB.length) {
         stackA = stackA.slice(n)
      }else{
         stackB = stackB.slice(n)
      }
      for(let i = 0; i < stackB.length; i++) {
          if(stackA[i] === stackB[i]) {
              return stackB[i]
          }
      }
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 剑指 Offer 18. 删除链表的节点
var deleteNode = function(head, val) {
      if(!head) {
          return null
      }
      if(head.val === val) {
          return head.next
      }
      let pre = head
      let curr = head.next
      while(curr) {
          if(curr.val === val) {
              pre.next = curr.next
              break
          }
          pre = curr
          curr = curr.next
      }
      return head
   };

   /**
 * @param {number} n
 * @return {number}
 */
// 剑指 Offer 10- I. 斐波那契数列
var fib = function(n) {
      let arr = [0,0,1]
      for(let i = 3; i <= n + 1; i++) {
          arr[i] = arr[i-1] + arr[i-2]
                      arr[i] %= 1000000007;
      }
      return arr[n+1]
  };