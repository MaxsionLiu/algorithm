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