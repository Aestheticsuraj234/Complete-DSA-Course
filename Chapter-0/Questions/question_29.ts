// Given an array arr[] of N non-negative integers representing the height of blocks. If width of each block is 1, compute how much water can be trapped between the blocks during the rainy season.

// *1. Brute force solution

function traprainwater(numbers: number[]): number {
  let water = 0;
  let n = numbers.length;
  for (let i = 0; i < n; i++) {
    let leftMax = numbers[i];
    let rightMax = numbers[n - 1];

    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, numbers[j]);
    }
    for (let j = n - 1; j > i; j--) {
      rightMax = Math.max(rightMax, numbers[j]);
    }
    let currentWater = Math.min(leftMax, rightMax) - numbers[i];
    if (currentWater > 0) {
      water += currentWater;
    }
  }
  return water;
}

console.log("Trapped water Brute🐢:",traprainwater([3, 0, 1, 2, 5])); // 6

// *2. Optimized solution - TWO POINTER APPROACH

function trapRainwater(heights: number[]): number {
    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;
    let currentWater = 0;
    while (left < right) {
      // Update leftMax and rightMax before calculating current water
      leftMax = Math.max(leftMax, heights[left]);
      rightMax = Math.max(rightMax, heights[right]);
  
      // Calculate current water based on the minimum of leftMax and rightMax
      if (leftMax < rightMax) {
        currentWater = Math.min(leftMax, heights[right]) - heights[left];
        left++;
      } else {
        currentWater = Math.min(rightMax, heights[left]) - heights[right];
        right--;
      }
  
      // Add current water to total water
      totalWater += currentWater;
    }
  
    return totalWater;
  }
  
  // Example usage
  const heights = [3, 0, 1, 2, 5];
  const trappedWater = trapRainwater(heights);
  
  console.log("Trapped water Optimized🐇:", trappedWater); 
  