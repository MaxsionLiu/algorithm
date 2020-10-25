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