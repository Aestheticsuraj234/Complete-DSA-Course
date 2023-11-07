// ?Example 1: Declaring and Initializing an Array

// Declare and initialize an array of numbers
let numbers: number[] = [1, 2, 3, 4, 5];

// Declare and initialize an array of strings
let fruits: string[] = ["apple", "banana", "cherry"];

// ?Example 2: Accessing Array Elements

// Accessing the first element of the 'numbers' array
let firstNumber = numbers[0]; // Result: 1

// Accessing the second element of the 'fruits' array
let secondFruit = fruits[1]; // Result: "banana"

// ?Example 3: Modifying Arrays

// Adding elements to an array
numbers.push(6); // Adds 6 to the end of the 'numbers' array

// Modifying elements in an array
fruits[2] = "strawberry"; // Changes the third element to "strawberry"

// TODO:`Coding Questions:`

// Question 1: Sum of Array Elements
// 👉Write a TypeScript function that takes an array of numbers as input and returns the sum of all the elements in the array.

const ArrayNumber: number[] = [1, 4, 5, 6, 7, 8];

const SumOfArrayNumber = (array: number[]): number => {
  var sum: number = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
};

console.log(SumOfArrayNumber(ArrayNumber));

// Question 2: Find Maximum Element
// Write a TypeScript function that finds and returns the maximum element in an array of numbers
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

// Question 3: Remove Duplicates
// Write a TypeScript function that removes duplicates from an array and returns a new array with unique elements
const DuplicateArray: number[] = [1, 1, 2, 2, 3, 3, 44, 44, 56, 78, 56];

const RemoveDuplicates = (array: number[]): number[] => {
  let UniqueArray:number[] = [];
  for(let i=0;i<array.length;i++){
    if(UniqueArray.indexOf(array[i])==-1){
      UniqueArray.push(array[i]);
    }
 
  }
    return UniqueArray;

  
};

console.log(RemoveDuplicates(DuplicateArray));

// Question 4: Array Intersection
// Write a TypeScript function that takes two arrays and returns a new array containing the elements that are common to both input arrays.

const Array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
const Array2: number[] = [2, 4, 6, 8, 10, 12, 14, 16];

const ArrayIntersect = (array1:number[] , array2:number[]):number[]=>{
    const IntersectedArray:number[] = [];
    for(let i=0;i<array1.length;i++){
        if(Array2.indexOf(array1[i])!=-1){
            IntersectedArray.push(array1[i]);
        }
    }
    return IntersectedArray;


   
}

console.log(ArrayIntersect(Array1,Array2));
