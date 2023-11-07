# TypeScript Array

In TypeScript, an array is a data structure that allows you to store and manipulate a collection of values of the same or different data types. Arrays are a fundamental part of most programming languages, including TypeScript. They provide a way to store and access multiple elements using "indices".

## Declaration and Initialization

You can declare and initialize an array in TypeScript using two methods:

1. Using square brackets notation:

   ```typescript
   let numbers: number[] = [1, 2, 3, 4, 5];
   ```

2. Using the generic Array type:
   ```typescript
   let fruits: Array<string> = ["apple", "banana", "cherry"];
   ```

## Accessing Elements

Array elements are accessed using indices, starting from 0 for the first element. For example, to access the first element of the `numbers` array:

1. Accesses the first element (1)
   ```typescript
   let firstNumber = numbers[0];
   ```

## Adding Elements

You can add elements to an array using the `push` method. It adds the new element to the end of the array:

1. Adds 6 to the end of the 'numbers' array
   ```typescript
   numbers.push(6);
   ```

## Array Methods

TypeScript arrays come with built-in methods for various operations, such as `push`, `pop`, `shift`, `unshift`, `splice`, `concat`, and more. These methods provide flexibility for manipulating arrays.

## Iterating Through an Array

You can iterate through the elements of an array using loops like `for` and `for...of`. For example:

1. example

   ```typescript
   for (let i = 0; i < numbers.length; i++) {
     console.log(numbers[i]);
   }
   for (let fruit of fruits) {
     console.log(fruit);
   }
   ```

Arrays in TypeScript provide a convenient way to work with collections of data, and understanding how to declare, access, and manipulate arrays is a fundamental skill for any TypeScript developer.

######################################_Coding_Question_#################################################

# Question 1: Sum of Array Elements

`👉Write a TypeScript function that takes an array of numbers as input and returns the sum of all the elements in the array`.

```typescript
const ArrayNumber: number[] = [1, 4, 5, 6, 7, 8];

const SumOfArrayNumber = (array: number[]): number => {
  var sum: number = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

console.log(SumOfArrayNumber(ArrayNumber));
```

# Question 2: Find Maximum Element

` Write a TypeScript function that finds and returns the maximum element in an array of numbers`

```typescript
const NumberArr: number[] = [1, 4, 5, 6, 7, 8, 11, 17, 9];

const FindMaxElement = (array: number[]): number => {
  let MaxElement: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > MaxElement) {
      MaxElement = array[i];
    }
  }
  return MaxElement;
};

console.log(FindMaxElement(NumberArr));
```

# Question 3: Remove Duplicates

`Write a TypeScript function that removes duplicates from an array and returns a new array with unique elements`

```typescript
const DuplicateArray: number[] = [1, 1, 2, 2, 3, 3, 44, 44, 56, 78, 56];

const RemoveDuplicates = (array: number[]): number[] => {
  let UniqueArray: number[] = [];
  for (let i = 0; i < array.length; i++) {
    if (UniqueArray.indexOf(array[i]) == -1) {
      UniqueArray.push(array[i]);
    }
  }
  return UniqueArray;
};

console.log(RemoveDuplicates(DuplicateArray));
```

# Question 4: Array Intersection

`Write a TypeScript function that takes two arrays and returns a new array containing the elements that are common to both input arrays`

```typescript
const Array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const Array2: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

const ArrayIntersect = (array1: number[], array2: number[]): number[] => {
  const IntersectedArray: number[] = [];
  for (let i = 0; i < array1.length; i++) {
    if (Array2.indexOf(array1[i]) != -1) {
      IntersectedArray.push(array1[i]);
    }
  }
  return IntersectedArray;
};

console.log(ArrayIntersect(Array1, Array2));
```


######################################_Thanks_#################################################💪