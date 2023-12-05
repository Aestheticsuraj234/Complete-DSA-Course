// Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

// usng the sort method & stack

// time complexity: O(nlogn)
// space complexity: O(n)

function mergeIntervals(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  //    step-1 sort the array based on the first element of each subarray!
  intervals.sort((a, b) => a[0] - b[0]);

  //   step-2 Intialize result Array!
  const result: number[][] = [intervals[0]];

  //   step-3 iterate and merge the intervals;

  for (let i = 1; i < intervals.length; i++) {
    let CurrentInterval = intervals[i];
    let LastMergedInterval = result[result.length - 1];
    if (CurrentInterval[0] <= LastMergedInterval[1]) {
      LastMergedInterval[1] = Math.max(
        CurrentInterval[1],
        LastMergedInterval[1]
      );
    } else {
      result.push(CurrentInterval);
    }
  }
  return result;
}


const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
    ];


console.log(mergeIntervals(intervals));