// *Check if the Binary Tree is Balanced Binary Tree
// *Problem Statement: Check whether the given Binary Tree is a Balanced Binary Tree or not. A binary tree is balanced if, for all nodes in the tree, the difference between left and right subtree height is not more than 1.

import { BinaryTREENode } from "../traversals/question_1";



class Solution_2_{
    // Brute Force Approach:- 
checkBalanced(root: BinaryTREENode<number> | null): boolean {
    if(root === null) return true;
    let lh = this.height(root.left);
    let rh = this.height(root.right);

    if(Math.abs(lh - rh) <= 1) return true;

    let left = this.checkBalanced(root.left);
    let right = this.checkBalanced(root.right);

    if(!left || !right) return false;

    return true;
}

height(root: BinaryTREENode<number> | null): number {
    if(root === null) return 0;
    let lh = this.height(root.left);
    let rh = this.height(root.right);
    return Math.max(lh, rh) + 1;

}

// TODO:OPTIMIZED APPROACH:-

checkBalancedOptimized(root: BinaryTREENode<number> | null): boolean {
 if(root === null) return true;
    let height = this.checkHeight(root);
    return height !== Number.MIN_SAFE_INTEGER;




}

checkHeight(root: BinaryTREENode<number> | null): number {
    if(root === null) return -1;
    let lh = this.checkHeight(root.left);
    if(lh === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;
    let rh = this.checkHeight(root.right);
    if(rh === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;

    if(Math.abs(lh - rh) > 1) return Number.MIN_SAFE_INTEGER;

    return Math.max(lh, rh) + 1;
}


}