 /**
 * @param {number[]} prices
 * @return {number}
 */
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。
// 121. 买卖股票的最佳时机
var maxProfit = function(prices) {
      let max = 0 
      let min = Infinity
      for(let i = 0; i < prices.length; i++) {
          if (prices[i] < min) {
              min = prices[i]
          }
          max = prices[i] - min > max  ?  prices[i] - min : max
      }
      return max
};

/**
 * @param {number[]} prices
 * @return {number}
 */
// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
// 122. 买卖股票的最佳时机 II
var maxProfit = function(prices) {
      let max = 0
      let min = prices[0]
      for(let i = 0; i < prices.length - 1; i++) {
         if ( prices[i+1] - prices[i] > 0 ) {
             max = max + prices[i+1] - prices[i]
         }
      }
      return max 
};


/**
 * @param {string} s
 * @return {boolean}
 */
// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 125. 验证回文串
var isPalindrome = function(s) {
      if(s.length <= 1) {
          return true
      }
      let j = s.length - 1
      let i = 0
      while (i < j) {
  
          while(!(/^[0-9a-zA-Z]+$/.test(s[i])) && i < j) {
              i++
          }
          while(!(/^[0-9a-zA-Z]+$/.test(s[j])) && i < j) {
              j--
          }
          if (s[i].toLowerCase() !== s[j].toLowerCase()) {
              return false
          }
  
          i++
          j--
      }
      return true
};

// 任何数和 0 做异或运算，结果仍然是原来的数，即 a ^ 0 = a。
// 任何数和其自身做异或运算，结果是 0，即 a ^ a = 0。
// 异或运算满足交换律和结合律
/**
 * @param {number[]} nums
 * @return {number}
 */
// 输入: [2,2,1]
// 输出: 1
// 136. 只出现一次的数字
var singleNumber = function(nums) {
      let result = 0
      for(const n of nums) {
          result ^= n
      }
      return result
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 141. 环形链表
var hasCycle = function(head) {
    
      if (!head || !head.next) {
          return false
      }
      let low = head
      let fast = head.next
  
      while(low !== fast ) {
          if(!fast  || !fast.next) {
              return false
          }
          low = low.next
          fast = fast.next.next
      }
  
      return true
};

/**
 * initialize your data structure here.
 */
// 155. 最小栈
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

   var MinStack = function() {
      this.stack = []
      this.minStack = [Infinity]
   };
   
   /** 
    * @param {number} x
    * @return {void}
    */
   MinStack.prototype.push = function(x) {
       this.stack.push(x)
       this.minStack.push(Math.min(x,this.minStack[this.minStack.length - 1]))
   };
   
   /**
    * @return {void}
    */
   MinStack.prototype.pop = function() {
     this.stack.pop()
     this.minStack.pop()
   };
   
   /**
    * @return {number}
    */
   MinStack.prototype.top = function() {
       return this.stack[this.stack.length - 1]
   };
   
   /**
    * @return {number}
    */
   MinStack.prototype.getMin = function() {
       return this.minStack[this.minStack.length - 1]
   };

   /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 160. 相交链表
var getIntersectionNode = function(headA, headB) {
      // 清除高度差
      let pA = headA, pB = headB
      while(pA || pB) {
          if(pA === pB) return pA
          pA = pA === null ? headB : pA.next
          pB = pB === null ? headA : pB.next
      }
      return null
  };

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 167. 两数之和 II - 输入有序数组
// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
var twoSum = function(numbers, target) {
      let head = 0
      let foot = numbers.length - 1
      while(head < foot){
          if (numbers[head] + numbers[foot] === target) {
             return [head+1, foot+1]
          } else if (numbers[head] + numbers[foot] > target) {
              foot--
          } else {
              head++
          }
      }
      return []
};

/**
 * @param {number} n
 * @return {string}
 */
// 168. Excel表列名称
// 给定一个正整数，返回它在 Excel 表中相对应的列名称。

// 输入: 28
// 输出: "AB"

// 输入: 52
// 输出: "AA"
var convertToTitle = function(n) {
      let result = ''
 
      while(n !== 0) {
         n--
         result =  String.fromCharCode(parseInt(n % 26) + 65) + result
         n = parseInt(n / 26)
      }
 
      return result
 };