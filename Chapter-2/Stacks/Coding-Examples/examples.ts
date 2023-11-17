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

  // creating Open and closing brackets
  const OpeningBrackets = ["[", "{", "("];
  const closingBrackets = ["]", "}", ")"];

  // Looping through each character in the string
  for (let i = 0; i < str.length; i++) {
    if (OpeningBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closingBrackets.includes(str[i])) {
      const topElement = stack.pop();
      // Return false if the element popped doesn’t match the corresponding closing bracket in the map
      if (topElement !== OpeningBrackets[closingBrackets.indexOf(str[i])]) {
        return false;
      }
    }
  }
  // Return true if stack is empty
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
    if(this.currentIndex <this.historyStack.length -1){
      this.currentIndex++;
      console.log(`Navigated to ${this.historyStack[this.currentIndex]}`);
    }
    else {
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
