// function factorialDigits(N: number): number {

function factorialDigits(N: number): number {
// Find factorial
const result = findFactorial(N);

// Convert the result array to an integer
const factorialResult = parseInt(result.reverse().join(''));

return factorialResult;
}

// Helper Functoin Multiply;

function Multiply ( x: number, res: number[], res_size: number): number {
  let carry = 0;
  for (let i = 0; i < res_size; i++) {
    let prod = res[i] * x + carry;
    res[i] = prod % 10;
    carry = Math.floor(prod / 10);
  }
  while (carry) {
    res[res_size] = carry % 10;
    carry = Math.floor(carry / 10);
    res_size++;
  }
  return res_size;
}

// Helper Function Factorial

function findFactorial(n: number): number[] {
    const res: number[] = new Array(5000).fill(0);
    res[0] = 1;
    let resSize = 1;

    for (let x = 2; x <= n; x++) {
        resSize = Multiply(x, res, resSize);
    }

    return res.slice(0, resSize);
}


// Example usage:
console.log(factorialDigits(5));  // Output: 120
console.log(factorialDigits(10)); // Output: 3628800