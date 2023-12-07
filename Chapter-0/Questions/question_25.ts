function morethanNdK(a: number[], n: number, k: number): void {
    let x: number = n / k;
    // Hash map initialization
    let y: Map<number, number> = new Map<number, number>();
    // count the frequency of each element.
    for (let i = 0; i < n; i++) {
      // is element doesn't exist in hash table
      if (!y.has(a[i])) {
        y.set(a[i], 1);
      } else {
        let count: number | undefined = y.get(a[i]);
        if (count !== undefined) {
          y.set(a[i], count++);
        }
      }
    }
  
    // iterate over each element in the hash table
    // and check their frequency, if it is more than
    // n/k, print it.
    for (let [key, value] of y.entries()) {
      let temp: number = value;
      if (temp > x) {
        console.log(key);
      }
    }
  }
  
  // Example Usage:
  let arr: number[] = [4, 5, 6, 7, 8, 4, 4];
  let n: number = arr.length;
  let k: number = 3;
  
  morethanNdK(arr, n, k);
  