class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tuple {
    node: TreeNode;
    row: number;
    col: number;

    constructor(node: TreeNode, row: number, col: number) {
        this.node = node;
        this.row = row;
        this.col = col;
    }
}

function findVertical(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const map = new Map<number, Map<number, number[]>>(); // Map for storing nodes at each vertical line
    const queue: Tuple[] = []; // Queue for level-order traversal
    queue.push(new Tuple(root, 0, 0));

    while (queue.length > 0) {
        const tuple = queue.shift()!;
        const node = tuple.node;
        const x = tuple.row;
        const y = tuple.col;

        if (!map.has(x)) {
            map.set(x, new Map());
        }
        if (!map.get(x)!.has(y)) {
            map.get(x)!.set(y, []);
        }
        map.get(x)!.get(y)!.push(node.data);

        if (node.left) {
            queue.push(new Tuple(node.left, x - 1, y + 1));
        }
        if (node.right) {
            queue.push(new Tuple(node.right, x + 1, y + 1));
        }
    }

    const result: number[][] = []; // Array to store the final vertical traversal
    for (const [, ys] of map) {
        for (const [, nodes] of ys) {
            result.push(nodes); // Correctly push nodes array into result
        }
    }

    return result;
}

// Create a sample binary tree
const root = new TreeNode(1);
// ... (rest of the tree creation code)

// Perform vertical traversal
const verticalTraversal = findVertical(root);

console.log("The Vertical Traversal is:");
for (const row of verticalTraversal) {
    console.log(row.join(" "));
}
