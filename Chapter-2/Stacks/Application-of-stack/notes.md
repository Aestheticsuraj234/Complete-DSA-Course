# Applications of Stacks

- 4.1 Expression Evaluation
- 4.2 Function Call Stack
- 4.3 Backtracking Algorithm

## Expression Evaluation in Stacks

### Introduction

Expression evaluation is a fundamental application of stacks in computer science. In this context, expressions refer to mathematical or logical statements that need to be computed. Stacks play a crucial role in parsing and evaluating these expressions efficiently.

### Basic Concepts

Expressions are often written in infix notation, where operators are placed between operands. For example, the infix expression `3 + 4 * 5` is more human-readable but not directly suitable for evaluation by a computer.

To evaluate expressions, they are typically converted to postfix or prefix notation, which eliminates the need for parentheses and follows a strict order of operations. Stacks are used to achieve this conversion and subsequently evaluate the expression.

### Algorithm for Infix to Postfix Conversion

1. `Initialize an empty stack and an empty result string.`
2. `Scan the infix expression from left to right.`
3. `For each element in the expression:`

   - If it is an operand, append it to the result.
   - If it is an operator:

     - Pop operators from the stack and append to the result until the stack is empty or the top has lower precedence.
     - Push the current operator onto the stack.

   - If it is an opening parenthesis, push it onto the stack.
   - If it is a closing parenthesis:
     - Pop operators from the stack and append to the result until an opening parenthesis is encountered.
     - Pop the opening parenthesis from the stack.

4. Pop any remaining operators from the stack and append them to the result

### Example

Consider the infix expression: `3 + 4 * 5`.

1. Scan the expression: `3`, `+,` `4`, `*`, `5`
2. Convert to postfix: `3 4 5 * +`

### Algorithm for Postfix Expression Evaluation

1. Initialize an empty stack.
2. Scan the postfix expression from left to right.
3. For each element in the expression:
   - If it is an operand, push it onto the stack.
   - If it is an operator, pop the required number of operands from the stack, perform the operation, and push the result back onto the stack.
4. The final result is the only element remaining on the stack.

### Example

onsider the postfix expression: `3 4 5 * +`

1. Scan the expression: `3, 4, 5, *, +`.
2. Evaluate: `4 * 5` results in `20`, then `3 + 20` results in `23`.

Certainly! Here's the implementation of the infix to postfix conversion and postfix expression evaluation in TypeScript:

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

function infixToPostfix(infix: string): string {
  const operators: { [key: string]: number } = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };
  const stack = new Stack<string>();
  const result: string[] = [];

  for (const char of infix) {
    if (char.match(/[a-zA-Z0-9]/)) {
      result.push(char);
    } else if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      while (!stack.isEmpty() && stack.peek() !== "(") {
        result.push(stack.pop()!);
      }
      stack.pop(); // Pop the '('
    } else {
      while (!stack.isEmpty() && operators[stack.peek()!] >= operators[char]) {
        result.push(stack.pop()!);
      }
      stack.push(char);
    }
  }

  while (!stack.isEmpty()) {
    result.push(stack.pop()!);
  }

  return result.join(" ");
}

function evaluatePostfix(postfix: string): number {
  const stack = new Stack<number>();

  for (const char of postfix) {
    if (char.match(/[a-zA-Z0-9]/)) {
      stack.push(parseInt(char, 10));
    } else {
      const operand2 = stack.pop()!;
      const operand1 = stack.pop()!;
      switch (char) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(operand1 / operand2);
          break;
        case "^":
          stack.push(Math.pow(operand1, operand2));
          break;
      }
    }
  }

  return stack.pop()!;
}

// Example usage
const infixExpression = "3 + 4 * 5";
const postfixExpression = infixToPostfix(infixExpression);
const result = evaluatePostfix(postfixExpression);
console.log(`Result of ${infixExpression} is ${result}`);
```

### Function Call Stack

The Function Call Stack is a crucial concept in computer science and programming that plays a fundamental role in managing the `flow of execution` in a program. It is a region of memory that keeps track of the active function calls during the execution of a program. The stack operates on a `Last In, First Out (LIFO) principle`, where the last function called is the first one to finish and be removed from the stack.

### Structure of the Call Stack

The c`all stack is organized as a stack data structure`, with each function call represented by a stack frame. A stack frame contains information about the `function, including local variables, parameters, and the return address` – the location in the code where the program should resume after the function completes.

### How the Call Stack Works

1. **Function Calls:**

- When a function is called, a new stack frame is created and pushed onto the stack.

- The new frame becomes the current frame, and its local variables and parameters are stored in the frame.

2. **Execution:**

- The statements within the function are executed, and if another function is called, the process repeats – a new stack frame is created for the called function.

3. **Return:**

- When a function completes its execution, its stack frame is popped from the stack.

- The control returns to the previous frame, and execution continues from the point where the function was called.

4. **Recursion:**

- Recursion involves a function calling itself. In such cases, multiple instances of the function coexist on the stack, each with its own set of local variables.

### Importance of the Call Stack

1. **Order of Execution:**

- The call stack ensures that function calls are executed in the correct order.

2. **Memory Management:**

- It efficiently manages memory by allocating and deallocating memory for local variables and function calls.

3. **Function Scope:**

- Each function call has its own scope, preventing variable conflicts between different functions.

4. **Error Tracking:**

- The call stack is instrumental in tracking the source of errors by providing a sequence of function calls leading to the error.

# TypeScript examples:

```typescript
// Example 1: Simple Function Calls
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

function sayHello(): void {
  console.log("Greetings from sayHello function!");
}

function main(): void {
  greet("Alice");
  sayHello();
}

main();
```

In this example:

1. `main()` is the entry point, and it calls `greet("Alice")`.
2. The stack looks like:
   - main()
3. `greet("Alice")` is called, creating a new stack frame:
   - greet("Alice")
   - main()
4. Inside `greet`, it logs a message and completes, so its stack frame is popped:
   - main()
5. `sayHello()` is called from `main()`, creating a new stack frame:
   - sayHello()
   - main()
6. Inside `sayHello`, it logs a message and completes, so its stack frame is popped:
   - main()
7. `main()` completes, and the last stack frame is popped, leaving an empty stack.

Now, let's demonstrate a recursive function:

```typescript
// Example 2: Recursive Function
function factorial(n: number): number {
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const result = factorial(5);
console.log(`Factorial of 5 is ${result}`);
```

In this example:

1. `factorial(5)` is called, creating a stack frame:
   - factorial(5)
2. Inside `factorial(5)`, it calls `factorial(4)` and creates a new stack frame:
   - factorial(4)
   - factorial(5)
     ...
     (This continues until `factorial(1)`)
3. `factorial(1)` returns 1, and its stack frame is popped.
4. The rest of the stack frames are popped in reverse order, and the final result is printed.

These examples demonstrate how the Function Call Stack works in TypeScript, managing function calls, local variables, and control flow during program execution.
