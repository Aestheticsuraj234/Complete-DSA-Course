// Dynamic Programming : Frog Jump (DP 3)
// Problem Statement:

// Given a number of stairs and a frog, the frog wants to climb from the 0th stair to the (N-1)th stair. At a time the frog can climb either one or two steps. A height[N] array is also given. Whenever the frog jumps from a stair i to stair j, the energy consumed in the jump is abs(height[i]- height[j]), where abs() means the absolute difference. We need to return the minimum energy that can be used by the frog to jump from stair 0 to stair N-1.


function frogJump(index: number, height: number[], dp: number[]): number {
    if (index === 0) return dp[0] = 0;  // Initialize dp[0] and return 0.
    if (dp[index] !== -1) return dp[index];

    let jumpTwo = Infinity;
    let jumpOne = frogJump(index - 1, height, dp) + Math.abs(height[index] - height[index - 1]);

    if (index > 1) {
        jumpTwo = frogJump(index - 2, height, dp) + Math.abs(height[index] - height[index - 2]);
    }

    return (dp[index] = Math.min(jumpOne, jumpTwo));
}



function main(){

    const height = [10,30,40,20];
    const dp = new Array(height.length).fill(-1);
    console.log(frogJump(height.length-1 , height , dp));
    console.log(dp);


}

main();


// tabulation solution

function frogJumpTab(){
    
  const height = [30, 10, 60, 10, 60, 50];
  let n = height.length;
  let dp = new Array(n).fill(-1);
  dp[0] = 0;

  for(let i = 1;i<n;i++)
  {
    let jumpTwo = Infinity;

    let jumpOne = dp[i-1] + Math.abs(height[i] - height[i-1]);

    if(i>1)
    {
        jumpTwo = dp[i-2] + Math.abs(height[i] - height[i-2]);
    }

    dp[i] = Math.min(jumpOne , jumpTwo);

  }
  console.log(dp[n-1]);
}

frogJumpTab();



function frogJumpOptiTab(){
    
    const height = [30, 10, 60, 10, 60, 50];
    let n = height.length;
    let prev = 0;
    let prev2 = 0;
  
    for(let i = 1;i<n;i++)
    {
      let jumpTwo = Infinity;
  
      let jumpOne = prev + Math.abs(height[i] - height[i-1]);
  
      if(i>1)
      {
          jumpTwo = prev2 + Math.abs(height[i] - height[i-2]);
      }
  
      let cur_i = Math.min(jumpOne, jumpTwo);
      prev2 = prev;
      prev = cur_i;
  
    }
    console.log(prev);
  }
  