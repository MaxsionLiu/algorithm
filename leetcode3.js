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

//  371. 两整数之和
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
      while(b !== 0) {
          let temp = a ^ b
          b =  (a & b ) << 1
          a = temp
      }
      return a
  };

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
// 374. 猜数字大小
var guessNumber = function(n) {
      function helper(l,r) {
          if (guess(l) === 0) {
              return l
          }
          if (guess(r) === 0) {
              return r
          }
          let mid = parseInt((l + r)/2)
          if(guess(mid) === 0) {
              return mid
          } else if(guess(mid) === -1) {
              return helper(l,mid)
          } else {
              return helper(mid,r)
          }
      }
      return helper(0,n)
  };