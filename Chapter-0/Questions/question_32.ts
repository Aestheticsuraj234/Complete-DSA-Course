function isPalinDrome(nums: number[]) {
   return nums.toString() === nums.toString().split("").reverse().join("");
}

function palinArray(nums: number[]) {
   for (let i = 0; i < nums.length; i++) {
      if (!isPalinDrome(nums)) {
         return 0;
      }
   }
   return 1;
}

console.log(palinArray([121, 131, 20])); // false
console.log(palinArray([121, 131, 131])); // true
console.log(palinArray([121, 131, 131, 121])); // true