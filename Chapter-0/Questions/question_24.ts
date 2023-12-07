function longestConsecutive(nums: number[]): number {
    let n = nums.length;
      if (n === 0) return 0;
    
      let longest = 1;
      let st = new Set<number>(); // Specify the type of elements as 'number'
    
      // put all the array elements into set
      for (let i = 0; i < n; i++) {
        st.add(nums[i]);
      }
    
      // Find the longest sequence
      for (let it of st) {
        // if 'it' is a starting number
        if (!st.has(it - 1)) {
          // find consecutive numbers
          let cnt = 1;
          let x: number = it;
          while (st.has(x + 1)) {
            x = x + 1;
            cnt = cnt + 1;
          }
          longest = Math.max(longest, cnt);
        }
      }
    
      return longest;
    
    };
  
  let a = [100, 200, 1, 2, 3, 4];
  let ans = longestConsecutive(a);
  console.log("The longest consecutive sequence is", ans);
  