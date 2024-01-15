// Check for Children Sum Property in a Binary Tree
// Problem Statement: Children Sum Property in a Binary Tree. Write a program that converts any binary tree to one that follows the children sum property.


import { BinaryTREENode } from "../traversals/question_1";


function reorder(root:BinaryTREENode<number | null>):void{

    if(root === null) return;

    let child = 0;

    if(root.left !==null){
        child += root.left.data!;
    }

    if(root.right !==null){
        child += root.right.data!;   
    }

    if(child <root.data!)
    {
        if(root.left !==null){
            root.left.data = root.data! - child;
        }
        else if(root.right !==null){
            root.right.data = root.data! - child;
        }
    }

    reorder(root.left!);
    reorder(root.right!);

    let tot = 0;

    if(root.left !==null){
        tot += root?.left?.data!;
    }
    if(root.right !==null){
        tot += root?.right?.data!;
    }
    if(root.left !==null || root.right !==null){
        root.data = tot;
    }


}

function changeTree(root:BinaryTREENode<number | null>):void{

    reorder(root);
}