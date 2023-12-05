
// *16. Best time to buy and Sell stock


function maxProfit(prices: number[]): number {
    let mini = prices[0];
    let maxProfit = 0;
    let n = prices.length;

    for(let i = 1; i<n;i++)
    {
        let cost = prices[i] - mini;
        maxProfit = Math.max(maxProfit , cost);
        mini = Math.min(mini, prices[i]);
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));