import { BinaryTREENode } from "../traversals/question_1";

function inOrderTRAV(
  curr: BinaryTREENode<number | null>,
  count: { value: number }
): void {
  if (curr === null) {
    return;
  }

  count.value++;

  inOrderTRAV(curr.left!, count);
  inOrderTRAV(curr.right!, count);
}

function findHeightLeft(curr: BinaryTREENode<number | null>): number {
  let hght = 0;
  while (curr) {
    hght++;
    curr = curr.left!;
  }
  return hght;
}

function findHeightRight(curr: BinaryTREENode<number | null>): number {
    let hght = 0;
    while (curr) {
      hght++;
      curr = curr.right!;
    }
    return hght;
  }


function countNodes(root:BinaryTREENode<number |null>):number{
    if(root === null) return 0;

    const lh = findHeightLeft(root);
    const rh = findHeightRight(root);

    if(lh===rh) return Math.pow(2,lh) -1;

    const leftNodes = countNodes(root.left!);
    const rightNodes = countNodes(root.right!);

    return 1 + leftNodes + rightNodes;
}



  
