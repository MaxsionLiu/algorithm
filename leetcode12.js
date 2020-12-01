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