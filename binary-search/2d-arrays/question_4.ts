// Find Peak Element (2D Matrix)

// Optimized Approach: O(n+m)

function MaxElem(
  matrix: number[][],
  n: number,
  m: number,
  mid: number
): number {
  let max = 0,
    index = -1;
  for (let i = 0; i < n; i++) {
    if (matrix[i][mid] > max) {
      max = matrix[i][mid];
      index = i;
    }
  }
  return index;
}

function Peak(matrix: number[][], n: number, m: number): any {
  let low = 0,
    high = m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = MaxElem(matrix, n, m, mid);
    let left = mid - 1 >= 0 ? matrix[row][mid - 1] : Number.MIN_VALUE;
    let right = mid + 1 < m ? matrix[row][mid + 1] : Number.MIN_VALUE;

    if (matrix[row][mid] > left && matrix[row][mid] > right) return [row, mid];
    else if (matrix[row][mid] < left) high = mid - 1;
    else low = mid + 1;
  }
  return [-1, -1];
}
