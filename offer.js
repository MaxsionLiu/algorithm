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