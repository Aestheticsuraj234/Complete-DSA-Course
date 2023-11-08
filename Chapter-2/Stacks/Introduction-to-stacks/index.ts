// Coding Examples

// ?here are some coding examples to illustrate the use of stacks in TypeScript

// 1. Implementing a stack using an array:

class Stack {
  private data: any[] = [];

  public push(item: any): void {
    this.data.push(item);
  }

  public pop(): any {
    return this.data.pop();
  }

  public peek(): any {
    return this.data[this.data.length - 1];
  }

  public isEmpty(): boolean {
    return this.data.length === 0;
  }

  public size(): number {
    return this.data.length;
  }

  public clear(): void {
    this.data = [];
  }

  public print(): void {
    console.log(this.data.toString());
  }
}
