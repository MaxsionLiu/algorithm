/**
 * @param {string} s
 * @return {string}
 */
// 1544. 整理字符串
var makeGood = function(s) {
      let stack = []
      for(let i = 0; i < s.length; i++) {
          const c = s[i]
          const st = stack[stack.length - 1]
          if(!st){
              stack.push(c)  
          }else if(Math.abs(c.charCodeAt() - st.charCodeAt()) === 32) {
              stack.pop()
          }else{
              stack.push(c)
          }
      }
      return stack.join('')
    };

/**
 * @param {string[]} ops
 * @return {number}
 */
// 682. 棒球比赛
var calPoints = function(ops) {
      let stack = []
      for(let i = 0; i < ops.length; i++) {
          const ch = ops[i]
          if(ch === 'C') {
              stack.pop()
          }else if(ch === 'D') {
              const pre = stack[stack.length - 1]
              stack.push(pre * 2)
          }else if(ch === '+') {
              const  pre = stack[stack.length - 1]
              const prePre = stack[stack.length - 2]
              stack.push(pre + prePre)
          }else {
              stack.push(Number(ch))
          }
      }
      return stack.reduce((pre,curr) => pre + curr)
  };

  /**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// 844. 比较含退格的字符串
var backspaceCompare = function(S, T) {
      let sStack = []
      let tStack = []
      function helper(s,stack) {
          for(let i = 0; i < s.length; i++) {
              const ch = s[i]
              if(ch === '#') {
                  stack.pop()
              }else{
                  stack.push(ch)
              }
          }
      }
      helper(S,sStack)
      helper(T,tStack)
      return sStack.join('') === tStack.join('')
  };

  /**
 * initialize your data structure here.
 */
// 面试题 03.02. 栈的最小值
var MinStack = function() {
      this.stack = []
      this.minStack = []
   };
   
   /** 
    * @param {number} x
    * @return {void}
    */
   MinStack.prototype.push = function(x) {
       this.stack.push(x)
       if(this.minStack.length === 0){
           this.minStack.push(x)
       }else {
           const p = this.minStack[this.minStack.length - 1]
           if(p > x) {
               this.minStack.push(x)
           }else{
               this.minStack.push(p)
           }
       }
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
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
// 1441. 用栈操作构建数组
var buildArray = function(target, n) {
      let count = 0
      let result = []
      for(let i = 1; i <= target[target.length - 1];i++) {
          if(i === target[count]) {
              count++
              result.push('Push')
          } else {
              result.push('Push')
              result.push('Pop')
          }
      }
      return result
  };


  /**
 * @param {string[]} logs
 * @return {number}
 */
// 1598. 文件夹操作日志搜集器
var minOperations = function(logs) {
      let rootCount = 0
      for(let i = 0; i < logs.length;i++) {
          const op = logs[i]
          if(op === './') {
              continue
          }else if(op === '../') {
              rootCount--
          }else{
              rootCount++
          }
          rootCount = rootCount <= 0 ? 0 : rootCount
      }
   
      return rootCount
   };