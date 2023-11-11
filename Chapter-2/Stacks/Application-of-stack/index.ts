// ### Algorithm for Infix to Postfix Conversion

// 1. `Initialize an empty stack and an empty result string.`
// 2. `Scan the infix expression from left to right.`
// 3. `For each element in the expression:`

//    - If it is an operand, append it to the result.
//    - If it is an operator:

//      - Pop operators from the stack and append to the result until the stack is empty or the top has lower precedence.
//      - Push the current operator onto the stack.

//    - If it is an opening parenthesis, push it onto the stack.
//    - If it is a closing parenthesis:
//      - Pop operators from the stack and append to the result until an opening parenthesis is encountered.
//      - Pop the opening parenthesis from the stack.

// 4. Pop any remaining operators from the stack and append them to the result

class Stack<T> {
  private _data: T[] = [];

  push(item: T) {
    this._data.push(item);
  }

  pop() {
    return this._data.pop();
  }

  peek() {
    return this._data[this._data.length - 1];
  }

  isEmpty() {
    return this._data.length === 0;
  }
}
const infixToPostfix = (infix: string): string => {
    const stack = new Stack<string>();
    const result: string[] = [];
    const precedence: { [key: string]: number } = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };

    // Use a variable to track multi-digit numbers
    let currentNumber = '';

    for (const char of infix) {
        if (char === ' ') {
            continue; // Skip spaces
        }

        if (char.match(/[0-9]/)) {
            // If the character is a digit, accumulate it to form a multi-digit number
            currentNumber += char;
        } else {
            // If the character is not a digit, and we have a pending multi-digit number, add it to the result
            if (currentNumber !== '') {
                result.push(currentNumber);
                currentNumber = ''; // Reset the currentNumber
            }

            if (char === '(') {
                stack.push(char);
            } else if (char === ')') {
                while (!stack.isEmpty() && stack.peek() !== '(') {
                    result.push(stack.pop()!);
                }
                stack.pop();
            } else {
                while (!stack.isEmpty() && precedence[stack.peek()!] >= precedence[char]) {
                    result.push(stack.pop()!);
                }
                stack.push(char);
            }
        }
    }

    // If there's a pending multi-digit number, add it to the result
    if (currentNumber !== '') {
        result.push(currentNumber);
    }

    while (!stack.isEmpty()) {
        result.push(stack.pop()!);
    }

    return result.join(" ");
};

console.log(infixToPostfix("3 + 4 * 5 ^ 2 / 7 - 1 ^ 3 ^ 4"));



// ### Algorithm for Postfix Evaluation
// 1. Initialize an empty stack.
// 2. Scan the postfix expression from left to right.
// 3. For each element in the expression:
//     * If it is an operand, push it onto the stack.
//     * If it is an operator, pop the required number of operands from the stack, perform the operation, and push the result back onto the stack.
// 4. The final result is the only element remaining on the stack.

function evaluatePostfix(postfix: string): number {
    const stack = new Stack<number>();
    const operands = postfix.split(' ');

    for (const operand of operands) {
        if (operand.match(/[0-9]/)) {
            stack.push(parseInt(operand, 10));
        } else {
            const operand2 = stack.pop()!;
            const operand1 = stack.pop()!;
            switch (operand) {
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
const infixExpression = "3 + 4 * 5 ^ 2 / 7 - 1 ^ 3 ^ 4";
const postfixExpression = infixToPostfix(infixExpression);
const result = evaluatePostfix(postfixExpression);
console.log(`Result of ${infixExpression} is ${result}`);
