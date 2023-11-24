// 2. **Implementations:**
//!    - Implement a stack using an array in TypeScript.
//    - Implement a stack using a linked list in TypeScript.

// ? Implementing a stack using an array in typescript

class Stack<T> {
  private stack: T[] = [];
  private n: number = 10;

  //    1. PUSH
  push(item: T): void {
    this.stack.push(item);
  }
  //   2. POP

  pop() {
    return this.stack.pop();
  }

  //   3. PEEK

  peek() {
    return this.stack[this.stack.length - 1];
  }

  // 4. isEmpty

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  // 5. size

  size(): number {
    return this.stack.length;
  }

  //  6.  isFull

  isFull(): boolean {
    return this.stack.length === this.n;
  }
  // 7. print
  printStack(stack: any): any {
    console.log(stack);
  }
}

const arrStack = new Stack<string>();

arrStack.push("A");
arrStack.push("B");
arrStack.push("C");
arrStack.push("D");
console.log(arrStack);

arrStack.pop();
arrStack.printStack(arrStack);

console.log(arrStack.peek());
console.log(arrStack.isEmpty());
console.log(arrStack.size());

// ? Implementing a stack using an LinkedList in typescript

class LinkedList<T> {
  data: T;
  next: LinkedList<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedListStack<T> {
  private head: LinkedList<T> | null = null;
  private n: number = 10;

  // 1. PUSH

  push(item: T): void {
    if (this.head === null) {
      this.head = new LinkedList(item);
      return;
    }
    const newNode = new LinkedList(item);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 2. POP

  pop(): T | null {
    if (this.head === null) {
      return null;
    }
    const item = this.head.data;
    this.head = this.head.next;
    return item;
  }

  // 3. PEEK

  peek(): T | null {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }

  // 4. isEmpty

  isEmpty(): boolean {
    return this.head === null;
  }

  // 5. size

  size(): number {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  // 6. isFull

  isFull(): boolean {
    return this.size() === this.n;
  }

  // 7. print

  printStack(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// - Write a TypeScript function to check if parentheses in an expression are Balanced using a stack.

const isParenthesesBalanced = (str: string): boolean => {
  // Creating a stack
  const stack: string[] = [];
  const OpeningParentheses = ["(", "{", "["];
  const ClosingParentheses = [")", "}", "]"];

  // Iterating through each character of the string
  for (let i = 0; i < str.length; i++) {
    if (OpeningParentheses.includes(str[i])) {
      stack.push(str[i]);
    } else if (ClosingParentheses.includes(str[i])) {
      const topElement = stack.pop();
      if (
        topElement !== OpeningParentheses[ClosingParentheses.indexOf(str[i])]
      ) {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }

  return false;
};

console.log(isParenthesesBalanced("{[()]}")); // true

// Implement a browser history using a stack.

class BrowserHistory {
  private historyStack: string[] = [];
  private currentIndex: number = -1;

  // navigate to a new url
  navigateTo(url: string): void {
    // CLEAR THE  FORWARD HISTORY
    this.historyStack = this.historyStack.slice(0, this.currentIndex + 1);

    // add the new url to the stack
    this.historyStack.push(url);
    this.currentIndex = this.historyStack.length - 1;
  }

  // Navigate back
  navigteBack(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      console.log(`Navigated to ${this.historyStack[this.currentIndex]}`);
    } else {
      console.log(`Can't go back further`);
    }
  }

  // Navigate forward
  navigteForward(): void {
    if (this.currentIndex < this.historyStack.length - 1) {
      this.currentIndex++;
      console.log(`Navigated to ${this.historyStack[this.currentIndex]}`);
    } else {
      console.log(`Can't go forward further`);
    }
  }

  // Display the current page
  getCurrentPage(): string {
    return this.historyStack[this.currentIndex];
  }

  // Display the full history stack
  getFullHistory(): string[] {
    return this.historyStack;
  }
}

const browserHistory = new BrowserHistory();

browserHistory.navigateTo("https://example.com/page1");
browserHistory.navigateTo("https://example.com/page2");
browserHistory.navigteBack();
browserHistory.navigateTo("https://example.com/page3");
browserHistory.navigteForward();

console.log("Current Page:", browserHistory.getCurrentPage());
console.log("Full History:", browserHistory.getFullHistory());

// Next greater element using a stack

// ? Given an array, implement a TypeScript function to find the next greater element for each element in the array using a stack.

function findNextGreaterElements(arr: number[]): number[] {
  const result: number[] = [];
  const stack: number[] = [];

  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // Pop elements from the stack while they are smaller than the current element
    while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
      const smallerElementIndex = stack.pop()!;
      console.log(smallerElementIndex);
      result[smallerElementIndex] = arr[i];
    }

    // Push the current element onto the stack
    stack.push(i);
  }

  // For elements without a next greater element, mark as -1
  while (stack.length > 0) {
    const remainingElementIndex = stack.pop()!;
    result[remainingElementIndex] = -1;
  }

  return result;
}

// Example usage:
const inputArray = [1, 2, 4, 3, 5, 6, 7, 8, 9, 10];
const nextGreaterElements = findNextGreaterElements(inputArray);

console.log("Input Array:", inputArray);
console.log("Next Greater Elements:", nextGreaterElements);

// - Implement a stack that supports push, pop, top, and retrieving the minimum element in constant time.

class MinStack {
  // Define two private arrays to store elements
  private stack: number[] = []; // to store the main elements
  private minStack: number[] = []; // to store the minimum elements

  // ?Step 2: Implement the `push` method
  public push(element: number): void {
    // !Add the new element to the main stack
    this.stack.push(element);

    // !Check if the minStack is empty or the new value is smaller than or equal to the current minimum
    if (
      this.minStack.length === 0 ||
      element <= this.minStack[this.minStack.length - 1]
    ) {
      // !Add the new element to the minStack
      this.minStack.push(element);
    }
  }

  // ?Step 3: Implement the pop method

  public pop() {
    // Check if the main stack is empty
    if (this.stack.length === 0) {
      console.log("Stack is empty. Cannot pop.");
      return null;
    }

    // Pop the top element from the main stack
    const popedElement = this.stack.pop();

    // Check if the popped element is the current minimum
    if (popedElement === this.minStack[this.minStack.length - 1]) {
      // Pop the top element from the minStack
      this.minStack.pop();
    }
  }

  // ?Step 4: Implement the top and getMin methods
  public top(): number | undefined {
    return this.stack[this.stack.length - 1];
  }

  // !Get the minimum element from the stack
  getMin(): number | undefined {
    // Return the current minimum element from the minStack
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();

minStack.push(5);
minStack.push(2);
minStack.push(4);
minStack.push(1);
minStack.push(3);

minStack.push(3);
minStack.push(5);
console.log("Top:", minStack.top()); // Output: 5
console.log("Min:", minStack.getMin()); // Output: 3

minStack.push(2);
console.log("Top:", minStack.top()); // Output: 2
console.log("Min:", minStack.getMin()); // Output: 2

minStack.pop();
console.log("Top:", minStack.top()); // Output: 5
console.log("Min:", minStack.getMin()); // Output: 3

// - Implement a TypeScript function to sort a stack.

class SampleStack {
  private items: number[] = [];

  // Push operation
  push(item: number): void {
    this.items.push(item);
  }

  // Pop operation
  pop(): number | undefined {
    return this.items.pop();
  }

  // Peek operation
  peek(): number | undefined {
    return this.items.length === 0
      ? undefined
      : this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Function to sort a stack in ascending order
function sortStack(inputStack: SampleStack): SampleStack {
  // create a new stack
  const tempStack = new SampleStack();

  // loop through the input stack until it is empty
  while (!inputStack.isEmpty()) {
    const topElement = inputStack.pop()!;
    while (!tempStack.isEmpty() && tempStack.peek()! > topElement) {
      inputStack.push(tempStack.pop()!);
    }
    tempStack.push(topElement!);
  }

  return tempStack;
}



// Stock Span Problem:

// !Given an array representing stock prices on different days, implement a TypeScript function to calculate the span of stock's price for all days

class StockSpanner {
  private prices: number[];
  private spans: number[];

  constructor() {
    this.prices = [];
    this.spans = [];
  }

  next(price: number): number {
    let span = 1;

    // Check the previous days and update the span
    while (
      this.prices.length > 0 &&
      price >= this.prices[this.prices.length - 1]
    ) {
      this.prices.pop();
      span += this.spans.pop()!;
    }

    // Update the current day's price and span
    this.prices.push(price);
    this.spans.push(span);

    return span;
  }
}


const stockSpanner = new StockSpanner();

console.log(stockSpanner.next(90));
console.log(stockSpanner.next(75));
console.log(stockSpanner.next(100));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(30));
console.log(stockSpanner.next(20));


// **Tower of Hanoi:**

// - Explain the Tower of Hanoi problem and how it can be solved using recursion and a stack.


//  class TowerOfHano{
//      solveIteratively(numberOfDisks:number , Source:string , Helper:string , Destination:string){

//          if(numberOfDisks === 1){
//              console.log(`Move disk ${numberOfDisks} from ${Source} to ${Destination}`);
//              return;
//          }

//          this.solveIteratively(numberOfDisks-1 , Source , Destination , Helper);
//          console.log(`Move disk ${numberOfDisks} from ${Source} to ${Destination}`);

//          this.solveIteratively(numberOfDisks-1 , Helper , Source , Destination);

//      }

//  }

// **Special Stack:**

// - Implement a stack that supports push, pop, getMinimum (retrieving the minimum element), and getAverage (retrieving the average element) in constant time.
   

   
class SpecialStack<T>{
  private stack: T[] = [];
  private minStack: T[] = [];
  private avgStack: T[] = [];

  push(item: T): void {
    this.stack.push(item);
    if(this.minStack.length===0 || item<=this.minStack[this.minStack.length-1]){
      this.minStack.push(item);
    }

    if(this.avgStack.length===0){
      this.avgStack.push(item);
    }
    else{
      const avg = this.avgStack[this.avgStack.length-1];
      // @ts-ignore
      this.avgStack.push((avg+item)/2);
    }

  }

  pop(): T | undefined {
    const item = this.stack.pop();
    if(item===this.minStack[this.minStack.length-1]){
      this.minStack.pop();
    }
    this.avgStack.pop();
    return item;
  }

  getMinimum(): T | undefined {
    return this.minStack[this.minStack.length-1];
  }

  getAverage(): T | undefined {
    return this.avgStack[this.avgStack.length-1];
  }

  printStack(stack: any): any {
    console.log(stack);
  }
}

const specialStack = new SpecialStack<number>();

specialStack.push(5);
specialStack.push(2);
specialStack.push(4);
specialStack.push(0);
specialStack.push(3);

specialStack.push(3);

console.log("Minimum:", specialStack.getMinimum()); // Output: 1
console.log("Average:", specialStack.getAverage()); // Output: 2.6



// **Celebrity Problem:**

// - Given a matrix representing people and their known relationships, implement a TypeScript function to find a celebrity if one exists.

function findCelebrity(matrix: boolean[][]): number {
  const n = matrix.length;
  let left = 0;
  let right = n - 1;

  // Step 1: Elimination
  while (left < right) {
    if (matrix[left][right]) {
      left++;
    } else {
      right--;
    }
  }

  // Step 2: Identification
  const potentialCelebrity = left;

  // Step 3: Verification
  for (let i = 0; i < n; i++) {
    if (i !== potentialCelebrity && (matrix[potentialCelebrity][i] || !matrix[i][potentialCelebrity])) {
      // If the potential celebrity knows someone or is not known by someone, they are not a celebrity.
      return -1;
    }
  }

  // Check if the potential celebrity is known by everyone and doesn't know anyone
  for (let i = 0; i < n; i++) {
    if (i !== potentialCelebrity && !matrix[i][potentialCelebrity]) {
      return -1;
    }
  }

  // The person at index 'potentialCelebrity' is our potential celebrity!
  return potentialCelebrity;
}

// Example matrix where a celebrity is person 2
const celebrityMatrix: boolean[][] = [
  [false, true, false, true],
  [false, false, false, true],
  [false, false, false, true],
  [false, false, false, false],
];

const celebrity = findCelebrity(celebrityMatrix);

if (celebrity === -1) {
  console.log("No celebrity found");
} else {
  console.log(`Celebrity found at index ${celebrity}`);
}



// **Decode String:**

//     - Given an encoded string, implement a TypeScript function to decode it using a stack.

function decodeString(s: string): string {
  const stack: string[] = [];
  let currentNum = 0;
  let currentStr = '';

  for (const char of s) {
    if (char >= '0' && char <= '9') {
      // Accumulate the number
      currentNum = currentNum * 10 + parseInt(char, 10);
    } else if (char === '[') {
      // Push the currentNum and currentStr onto the stack, then reset
      stack.push(currentStr);
      stack.push(currentNum.toString());
      currentNum = 0;
      currentStr = '';
    } else if (char === ']') {
      // Pop the number and the previous string from the stack
      const num = parseInt(stack.pop()!, 10);
      const prevStr = stack.pop()!;
      
      // Repeat the current string 'num' times and append it to the previous string
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      // Accumulate characters for the current string
      currentStr += char;
    }
  }

  return currentStr;
}

// Example usage:
const encodedString = "3[a2[bc]]";
const decodedString = decodeString(encodedString);
console.log(decodedString); // Output: "abcbcabcbcabcbc"
