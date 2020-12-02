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