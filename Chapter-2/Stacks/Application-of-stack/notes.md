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
    * If it is an operand, push it onto the stack.
    * If it is an operator, pop the required number of operands from the stack, perform the operation, and push the result back onto the stack.
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
  const operators: { [key: string]: number } = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
  const stack = new Stack<string>();
  const result: string[] = [];

  for (const char of infix) {
    if (char.match(/[a-zA-Z0-9]/)) {
      result.push(char);
    } else if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      while (!stack.isEmpty() && stack.peek() !== '(') {
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

  return result.join(' ');
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
        case '+':
          stack.push(operand1 + operand2);
          break;
        case '-':
          stack.push(operand1 - operand2);
          break;
        case '*':
          stack.push(operand1 * operand2);
          break;
        case '/':
          stack.push(operand1 / operand2);
          break;
        case '^':
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
