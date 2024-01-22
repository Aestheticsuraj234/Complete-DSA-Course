// Dynamic Programming: Frog Jump with k Distances (DP 4)
// In this article, we will learn about “Dynamic Programming: Frog Jump with k Distances (DP 4)”

// Problem Statement:  Frog Jump with K Distance/ Learn to write 1D DP


function _frogJump(index:number , height:number[] , k:number , dp:number[]):number
{
    if(index ===0) return 0;
    if(dp[index] !== -1) return dp[index];
    let mmSteps = Number.MAX_VALUE;

    for(let j=1;j<k;j++)
    {
        if(index-j>=0)
        {
            mmSteps = Math.min(mmSteps , _frogJump(index-j , height , k , ) + Math.abs(height[index] - height[index-j]));
        }

    }
    dp[index] = mmSteps;
    return dp[index];
}


// tabulation solution

function frogJumpTab()
{
    const height = [10,30,40,20];
    let k = 3;
    let n = height.length;
    let dp = new Array(n).fill(-1);
    dp[0] = 0;

    for(let i=1;i<n;i++)
    {
        let mmSteps = Number.MAX_VALUE;

        for(let j=1;j<k;j++)
        {
            if(i-j>=0)
            {
                mmSteps = Math.min(mmSteps , dp[i-j] + Math.abs(height[i] - height[i-j]));
            }

        }

        dp[i] = mmSteps;
    }

    console.log(dp[n-1]);
}

