Certainly! Here are 20 questions related to the Stack data structure along with algorithms, concepts, and practical applications. These questions cover a range of difficulty levels and can help you strengthen your understanding of stacks in TypeScript:

1. **Basics of Stacks:**✅✅✅
   - What is a stack? Explain its fundamental principles.
   - Describe the LIFO (Last In, First Out) property of a stack.
   - How is a stack different from an array?

- // !1. **Basics of Stacks:**
  // ! - What is a stack? Explain its fundamental principles.

// * A stack is a linear data structure that follows the LIFO (Last in firt out ) Pattern. While performing operations on a stack, the last element inserted is the first element to be removed. it inlude various Operations Like push , pop , peek , isEmpty , isFull , size , clear , toArray , toString etc.
// *Its fundamental principles are:
// *1. push(item) - Add an item to the top of the stack.
// *2. pop() - Remove item from the top of the stack.
// *3. peek() - Return the top element of the stack.
// *4. isEmpty() - Return true if and only if the stack is empty.

// ! - Describe the LIFO (Last In, First Out) property of a stack.

// \* The LIFO (Last In, First Out) property of a stack means that the last element added to the stack is the first one to be removed.

// !- How is a stack different from an array?

// * A stack is different from an array in the following ways:
// *1. A stack is a LIFO (Last In, First Out) data structure, whereas an array is a linear data structure.
// *2. In a stack, elements are added and removed from the top, whereas in an array, elements are added and removed from arbitrary positions.
// *3. In a stack, the size is fixed, whereas in an array, the size is dynamic.
// *4. In a stack, the operations are push and pop, whereas in an array, the operations are insert, delete, and random access.
// *5. In a stack, the operations are O(1), whereas in an array, the operations are O(n).

2. **Implementations:**

   - Implement a stack using an array in TypeScript.✅
   - Implement a stack using a linked list in TypeScript.🟨

3. **Operations on Stacks:**

   - Explain the push and pop operations on a stack.

   * 1. **Push Operation:** : `It is the Operation that is perform on a stack to Adding element in at the top pointer of the stack in LIFO Order.`

🥇 coding example

```typescript

class Stack {
    private data:any[] = [];

     1. `Push`
    public push(item:any):void{
        this.data.push(item);
    }

}

const newStack = new Stack()
newStack.push("Hello world this is suraj!")
newStack.push(19)


```

- 2. **Pop Operation:** : `It is the Operation that is perform on a stack to Removing element from the top of the stack.`

🥇 coding example

```typescript

class Stack {
    private data:any[] = [];



     2. `Pop`
    public pop():any{
        return this.data.pop();
    }
}

const newStack = new Stack()
newStack.pop



```

- Write a TypeScript function to check if parentheses in an expression are balanced using a stack.

```typescript
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
  } else {
    return false;
  }
};

console.log(isParenthesesBalanced("{[()]}")); // true

```

4. **Expression Evaluation:**

   - Implement a TypeScript function to convert an infix expression to a postfix expression using a stack.✅
   - Write a TypeScript function to evaluate a postfix expression using a stack.✅

5. **Function Call Stack:**

   - Explain how the function call stack works.

   The function call stack is a crucial concept in computer science and programming that helps manage the execution of functions in a program. It is a region of a computer's memory that stores information about the active functions in a program, including their local variables, parameters, and the address to return to after the function completes its execution. Here's a step-by-step explanation of how the function call stack works:

1. **Function Calls:**
   - When a program starts, the main function is typically called.
   - Each time a function is called, a new stack frame is created and pushed onto the call stack.

2. **Stack Frames:**
   - A stack frame is a data structure that contains information about a function call. It includes the function's parameters, local variables, and the address to return to after the function finishes.
   - The stack frame for the currently executing function is at the top of the stack.

3. **Pushing and Popping:**
   - As functions are called, their stack frames are pushed onto the stack.
   - When a function completes its execution, its stack frame is popped off the stack.
   - This process continues as functions are called and return, creating a stack of nested function calls.

4. **Last-In-First-Out (LIFO):**
   - The stack operates on the Last-In-First-Out principle, meaning the last function that was called is the first one to finish and be removed from the stack.
   - This is analogous to a stack of plates – you add a plate to the top, and you remove the top plate.

5. **Local Variables and Parameters:**
   - Each function call has its own set of local variables and parameters stored in its stack frame.
   - These variables are only accessible within the scope of that specific function call.

6. **Return Addresses:**
   - The return address is the memory address to which the control should return after the current function call completes.
   - When a function is called, the return address is pushed onto the stack. When the function finishes, the program jumps to this address.

7. **Recursion:**
   - Recursive function calls add multiple instances of the same function to the stack, each with its own set of local variables and parameters.

8. **Stack Overflow:**
   - If the call stack becomes too deep due to excessive function calls without returning, a stack overflow can occur, leading to a runtime error.

Understanding the function call stack is fundamental for debugging, as it helps programmers trace the flow of execution through a program and identify issues such as incorrect variable values or unexpected behavior.

```typescript
// Function that calculates the factorial of a number using recursion
function factorial(n: number): number {
  if (n <= 1) {
    return 1;
  } else {
    // Recursive call
    return n * factorial(n - 1);
  }
}

// Function that adds two numbers and calls the factorial function
function addAndFactorial(a: number, b: number): number {
  const sum = a + b;

  // Function call to calculate the factorial
  const result = factorial(sum);

  return result;
}

// Main function
function main() {
  const num1 = 3;
  const num2 = 4;

  // Function call that involves adding and calculating factorial
  const finalResult = addAndFactorial(num1, num2);

  console.log(`The final result is: ${finalResult}`);
}

// Calling the main function to start the program
main();


```

   - Demonstrate the concept of recursion using the function call stack.✅

Certainly! Recursion is a programming concept where a function calls itself in its definition. This often leads to a natural demonstration of the function call stack. Let's consider the classic example of calculating the factorial of a number using recursion:

```typescript
function factorial(n: number): number {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1;
  } else {
    // Recursive call: n! = n * (n-1)!
    const result = n * factorial(n - 1);
    return result;
  }
}

// Example usage
const num = 5;
const result = factorial(num);
console.log(`The factorial of ${num} is: ${result}`);
```

Now, let's go through how the function call stack works during the execution of `factorial(5)`:

1. **Call `factorial(5)`**
   - `factorial(5)` is added to the call stack.

   ```
   Stack: [factorial(5)]
   ```

2. **Call `factorial(4)`**
   - Inside the `factorial(5)` function, a call to `factorial(4)` is made.
   - `factorial(4)` is added to the call stack.

   ```
   Stack: [factorial(5), factorial(4)]
   ```

3. **Call `factorial(3)`**
   - Inside the `factorial(4)` function, a call to `factorial(3)` is made.
   - `factorial(3)` is added to the call stack.

   ```
   Stack: [factorial(5), factorial(4), factorial(3)]
   ```

4. **Call `factorial(2)`**
   - Inside the `factorial(3)` function, a call to `factorial(2)` is made.
   - `factorial(2)` is added to the call stack.

   ```
   Stack: [factorial(5), factorial(4), factorial(3), factorial(2)]
   ```

5. **Call `factorial(1)`**
   - Inside the `factorial(2)` function, a call to `factorial(1)` is made.
   - `factorial(1)` is added to the call stack.

   ```
   Stack: [factorial(5), factorial(4), factorial(3), factorial(2), factorial(1)]
   ```

6. **Base Case Reached**
   - `factorial(1)` returns 1 (base case).
   - The stack unwinds.

   ```
   Stack: [factorial(5), factorial(4), factorial(3), factorial(2)]
   ```

7. **Return Results**
   - Each function in the stack returns its result, and the stack continues to unwind.

   ```
   Stack: [factorial(5), factorial(4), factorial(3)]
   ```

   ```
   Stack: [factorial(5), factorial(4)]
   ```

   ```
   Stack: [factorial(5)]
   ```

   ```
   Stack: []
   ```

The final result is calculated as each function returns, and the call stack eventually becomes empty. This example demonstrates how recursion uses the call stack to manage multiple instances of the same function with different parameter values.


6. **Applications:**

   - ### Describe a real-world scenario where a stack can be used effectively.

   A real-world scenario where a stack can be used effectively is in the management of a web browser's back button history. The back button allows users to navigate to the previously visited web pages in reverse chronological order. A stack data structure is well-suited for implementing this functionality.

Here's how it works:

1. **Initial Page Load:**
   - When a user opens a web browser and navigates to a webpage, the initial page is pushed onto the stack.

2. **Navigation:**
   - As the user clicks links or visits new pages, the current page is pushed onto the stack.
   - The stack now represents the navigation history, with the most recently visited page at the top.

3. **Back Button Click:**
   - When the user clicks the back button, the browser pops the top page from the stack and loads the previous page.
   - The stack effectively maintains the order of pages visited, allowing for easy navigation in reverse order.

4. **Forward Button Click:**
   - If the user clicks the forward button, the browser can push the current page back onto the stack (if it was popped during a back button click) and load the next page.

Using a stack for the back button history ensures a straightforward and efficient way to manage page navigation. It aligns with the Last-In-First-Out (LIFO) nature of the stack, where the most recently visited page is the first to be retrieved when the user goes back. This implementation is both intuitive for users and efficient for developers to manage navigation history in web browsers.

   - Implement a browser history using a stack.✅
   
   Certainly! Below is a simple TypeScript implementation of a browser history using a stack. In this example, I'll create a `BrowserHistory` class with methods to navigate forward, backward, and add new pages to the history stack.

```typescript
class BrowserHistory {
  private historyStack: string[] = [];
  private currentIndex: number = -1;

  // Navigate to a new page
  navigateTo(url: string): void {
    // Clear the forward history when navigating to a new page
    this.historyStack = this.historyStack.slice(0, this.currentIndex + 1);

    // Add the new page to the history stack
    this.historyStack.push(url);
    this.currentIndex = this.historyStack.length - 1;
  }

  // Navigate back
  navigateBack(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      console.log(`Navigated back to: ${this.historyStack[this.currentIndex]}`);
    } else {
      console.log("Cannot go back further.");
    }
  }

  // Navigate forward
  navigateForward(): void {
    if (this.currentIndex < this.historyStack.length - 1) {
      this.currentIndex++;
      console.log(`Navigated forward to: ${this.historyStack[this.currentIndex]}`);
    } else {
      console.log("Cannot go forward further.");
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

// Example usage:
const browserHistory = new BrowserHistory();

browserHistory.navigateTo("https://example.com/page1");
browserHistory.navigateTo("https://example.com/page2");
browserHistory.navigateBack();
browserHistory.navigateTo("https://example.com/page3");
browserHistory.navigateForward();

console.log("Current Page:", browserHistory.getCurrentPage());
console.log("Full History:", browserHistory.getFullHistory());
```

In this example:

- The `navigateTo` method adds a new page to the history stack.
- The `navigateBack` and `navigateForward` methods allow the user to move backward and forward in the history.
- The `getCurrentPage` method returns the current page, and `getFullHistory` returns the entire history stack.

Please note that this is a simplified example, and in a real-world scenario, you might want to handle more complex scenarios, such as handling user input, managing session history, or handling browser tab behaviors.

7. **Next Greater Element:**

   - Given an array, implement a TypeScript function to find the next greater element for each element in the array using a stack.

8. **Min Stack:**

   - Implement a stack that supports push, pop, top, and retrieving the minimum element in constant time.

9. **Sorting a Stack:**

   - Implement a TypeScript function to sort a stack.

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
