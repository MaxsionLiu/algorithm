// 367. 有效的完全平方数
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
      if (num <= 1) {
          return true
      }
      function helper(num, l,r) {
             let mid = parseInt((l + r)/2)
             if (mid * mid === num) {
                 return  true
             } else if(r - l == 1) {
                 return  false
             } else if(mid * mid < num) {
                 return helper(num,mid,r)
             } else {
                 return helper(num,l,mid)
             } 
      }
 
      return helper(num, 0, num)
   
 };