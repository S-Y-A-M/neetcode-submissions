class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = prices[0];
        let MaxProfit = 0;
   
    
    for (let i=1; i<prices.length; i++){

        if (prices[i] < min){
            min = prices[i];
            
        }

        let profit = prices[i] - min
      

        if (profit > MaxProfit) {
            MaxProfit = profit;
        }
    }
return MaxProfit
    }
}
let solution = new Solution();
console.log(solution.maxProfit([10,1,5,6,7,1]))