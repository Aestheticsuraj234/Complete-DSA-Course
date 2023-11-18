Certainly! Let me format the information in a more organized and readable way:

### **1. Basics of Stacks:**

- **What is a stack?**

  - A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Operations include push, pop, peek, isEmpty, etc.

- **LIFO Property:**

  - Last In, First Out means the last element added is the first one to be removed.

- **Stack vs. Array:**
  - In a stack, elements are added and removed from the top. It has a fixed size. Operations are push, pop, and are O(1).

### **2. Implementations:**

- **Using Array:**

  ```typescript
  class Stack {
    private data: any[] = [];
    public push(item: any): void {
      this.data.push(item);
    }
    public pop(): any {
      return this.data.pop();
    }
  }
  ```

- **Using Linked List:**
  _(Implementation not provided)_

### **3. Operations on Stacks:**

- **Push Operation:**

  ```typescript
  class Stack {
    private data: any[] = [];
    public push(item: any): void {
      this.data.push(item);
    }
  }
  ```

- **Pop Operation:**

  ```typescript
  class Stack {
    private data: any[] = [];
    public pop(): any {
      return this.data.pop();
    }
  }
  ```

- **Balanced Parentheses Check:**
  ```typescript
  function isParenthesesBalanced(str: string): boolean {
    // Implementation...
  }
  ```

### **4. Expression Evaluation:**

- **Infix to Postfix:**
  _(Implementation not provided)_

- **Evaluate Postfix Expression:**
  _(Implementation not provided)_

### **5. Function Call Stack:**

- **Explanation:**

  - The function call stack manages the execution of functions in a program. It operates on the Last-In-First-Out (LIFO) principle.

- **Recursion Example:**
  ```typescript
  function factorial(n: number): number {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  ```

### **6. Applications:**

- **Browser History:**

  - Using a stack to manage the back button history in web browsers.

- **Implementation:**
  ```typescript
  class BrowserHistory {
    // Implementation...
  }
  ```

### **7. Next Greater Element:**

- _(Implementation not provided)_

### **8. Min Stack:**

- _(Implementation not provided)_

### **9. Sorting a Stack:**

- **Sort Function:**
  ```typescript
  function sortStack(inputStack: Stack): Stack {
    // Implementation...
  }
  ```

### **10. Balanced Parentheses:**

- **Function:**
  ```typescript
  function isParenthesesBalanced(str: string): boolean {
    // Implementation...
  }
  ```

Feel free to ask if you have specific questions or need further explanations on any topic!

10. **Balanced Parentheses:**

    - Write a TypeScript function to check if a given string of parentheses is balanced using a stack.

11. **Stock Span Problem:**

    - Given an array representing stock prices on different days, implement a TypeScript function to calculate the span of stock's price for all days.

12. **Tower of Hanoi:**

    - Explain the Tower of Hanoi problem and how it can be solved using recursion and a stack.

13. **Infix to Prefix Conversion:**

    - Implement a TypeScript function to convert an infix expression to a prefix expression using a stack.

14. **Postfix Expression Evaluation:**

    - Write a TypeScript function to evaluate a postfix expression that contains multiple-digit numbers.

15. **Expression Tree:**

    - Explain how an expression tree can be constructed from a postfix expression.

16. **Special Stack:**

    - Implement a stack that supports push, pop, getMinimum (retrieving the minimum element), and getAverage (retrieving the average element) in constant time.

17. **Celebrity Problem:**

    - Given a matrix representing people and their known relationships, implement a TypeScript function to find a celebrity if one exists.

18. **Queue Using Stacks:**

    - Implement a queue using two stacks.

19. **Decode String:**

    - Given an encoded string, implement a TypeScript function to decode it using a stack.

20. **Implement a Browser Back Button:**
    - Simulate the behavior of a browser's back button using a stack to keep track of visited pages.

Feel free to use these questions as a guide to enhance your understanding of stacks and their applications in TypeScript!
