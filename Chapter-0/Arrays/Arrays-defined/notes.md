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


######################################_Thank you_#################################################
