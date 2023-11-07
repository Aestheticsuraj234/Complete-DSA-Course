// These are 10 common aggregate array operations in TypeScript along with examples for each operation:

// 1.Sum of Array Elements:
// Calculate the sum of all elements in an array.

// 👉👉👉Array.Prototype.reduce();

let number: number[] = [1, 2, 3, 4, 5];
let sum = number.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(`Sum of elements: ${sum}`); // Result: Sum of elements: 15

// Calculate the average of elements in an array.
let number2: number[] = [1, 2, 3, 4, 5];
let average =
  number2.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
  number2.length;
console.log(`Average: ${average}`); // Result: Average: 3

// 2. Find Maximum Element:
// Find the maximum element in an array.

// 👉👉👉Array.Prototype.max();

let number3: number[] = [1, 3, 5, 2, 4];
let max = Math.max(...number3);
console.log(`Maximum value: ${max}`); // Result: Maximum value: 5

// 3. Minimum Value in Array:

// Find the minimum element in an array.

// 👉👉👉Array.Prototype.min();

let number4: number[] = [1, 3, 5, 2, 4];
let min = Math.min(...number4);
console.log(`Minimum value: ${min}`); // Result: Minimum value: 1

// 4. Counting Elements Meeting Criteria:

// Count the number of elements in an array that meet specific criteria.

// 👉👉👉Array.Prototype.filter();

let number5: number[] = [1, 2, 3, 4, 5];
let count = number5.filter((number) => number % 2 === 0).length;
console.log(`Count of even numbers: ${count}`); // Result: Count of even numbers: 2

// 5. Finding the First Occurrence:

// Find the first occurrence of an element that meets a specific condition.

// 👉👉👉Array.Prototype.find();

let fruit: string[] = ["apple", "banana", "cherry", "blueberry"];
let firstFruit = fruit.find((fruit) => fruit.length > 5);
console.log(`First fruit with more than 5 letters: ${firstFruit}`); // Result: First fruit with more than 5 letters: "cherry"

// 6. Concatenating Arrays:

// Concatenate multiple arrays into a single array.

// 👉👉👉Array.Prototype.concat();

let firstArray: number[] = [1, 2, 3];
let secondArray: number[] = [4, 5, 6];
let concatenatedArray = firstArray.concat(secondArray);
console.log(`Concatenated array: ${concatenatedArray}`); // Result: Concatenated array: 1,2,3,4,5,6

// 7. Grouping Array Elements:
// Group elements in an array by a specific criteria using `reduce`.

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
let groupedByAge = people.reduce((result, person) => {
  (result[person.age] = result[person.age] || []).push(person);
  return result;
}, {});
console.log(groupedByAge);
/* Result:
  {
    "25": [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }],
    "30": [{ name: "Bob", age: 30 }]
  }
  */

// 8. Flattening Nested Arrays:

// Flatten a nested array into a single array.

let nestedArray: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flattenedArray = nestedArray.reduce(
  (accumulator, currentArray) => accumulator.concat(currentArray),
  []
);
console.log(`Flattened array: ${flattenedArray}`); // Result: Flattened array: 1,2,3,4,5,6
