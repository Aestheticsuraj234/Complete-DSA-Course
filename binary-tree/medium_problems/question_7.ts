// *Boundary Traversal of a Binary Tree
// *Problem Statement: BoundaryTraversal of a binary tree. Write a program for the Anti-Clockwise Boundary traversal of a binary tree.

import { BinaryTREENode } from "../traversals/question_1";

// Path: binary-tree/medium_problems/question_8.ts

const printLeftBoundary = (root: BinaryTREENode<number>) => {
    if (root) {
        if (root.left) {
        console.log(root.data);
        printLeftBoundary(root.left);
        } else if (root.right) {
        console.log(root.data);
        printLeftBoundary(root.right);
        }
    }
}

const printRightBoundary = (root: BinaryTREENode<number>) => {
    if (root) {
        if (root.right) {
        printRightBoundary(root.right);
        console.log(root.data);
        } else if (root.left) {
        printRightBoundary(root.left);
        console.log(root.data);
        }
    }
}


function printLeaves(root: BinaryTREENode<number>): void {
    if (root) {
        printLeaves(root.left!);
        if (!root.left && !root.right) {
            // Print the leaf node
            console.log(root.data);
        }
        printLeaves(root.right!);
    }
}


function BoundaryTraversal(root: BinaryTREENode<number>):void {
 if(root)
 {
   console.log(root.data);
    printLeftBoundary(root.left!);
    printLeaves(root.left!);
    printLeaves(root.right!);
    printRightBoundary(root.right!);
 }
}



// Example Usage:
// Create binary tree
const tree = new BinaryTREENode(20);
tree.left = new BinaryTREENode(8);
tree.right = new BinaryTREENode(22);
tree.left.left = new BinaryTREENode(4);
tree.left.right = new BinaryTREENode(12);
tree.left.right.left = new BinaryTREENode(10);
tree.left.right.right = new BinaryTREENode(14);
tree.right.right = new BinaryTREENode(25);

// Check if the trees are identical
BoundaryTraversal(tree);
// Output: 20 8 4 10 14 25 22

