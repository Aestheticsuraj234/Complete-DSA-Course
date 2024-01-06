// Here we are going to write represenation of the Binary Tree in typescript

export class BinaryTREENode<T> {
  data: T;
  left: BinaryTREENode<T> | null;
  right: BinaryTREENode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function main(){
    let root = new BinaryTREENode(1);
    root.left = new BinaryTREENode(2);
    root.right = new BinaryTREENode(3);
    root.left.left = new BinaryTREENode(4);
    root.left.right = new BinaryTREENode(5);
    root.right.left = new BinaryTREENode(6);
    root.right.right = new BinaryTREENode(7);
console.log(root);
}