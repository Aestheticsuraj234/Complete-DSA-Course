class NodeWithBottom<T> {
    data: number;
    next: NodeWithBottom<number | null>;
    bottom: NodeWithBottom<number | null>;

    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.bottom = null;
    }
}

class Sigma {
    merge(a: NodeWithBottom<number | null>, b: NodeWithBottom<number | null>): NodeWithBottom<number | null> {
        if (a === null) return b;
        if (b === null) return a;

        let temp = new NodeWithBottom(0);
        let res = temp;

        while (a !== null && b !== null) {
            if (a.data < b.data) {
                temp.bottom = a;
                temp = temp.bottom;
                a = a.bottom;
            } else {
                temp.bottom = b;
                temp = temp.bottom;
                b = b.bottom;
            }
        }

        if (a !== null) temp.bottom = a;
        else temp.bottom = b;

        return res.bottom;
    }

    Flatten(root: NodeWithBottom<number | null>): NodeWithBottom<number | null> {
        if (root === null || root.next === null) return root;

        root.next = this.Flatten(root.next);
        root = this.merge(root, root.next);

        return root;
    }
}

let head = new NodeWithBottom(5);
head.bottom = new NodeWithBottom(7);
head.bottom.bottom = new NodeWithBottom(8);
head.bottom.bottom.bottom = new NodeWithBottom(30);

head.next = new NodeWithBottom(10);
head.next.bottom = new NodeWithBottom(20);

head.next.next = new NodeWithBottom(19);
head.next.next.bottom = new NodeWithBottom(22);
head.next.next.bottom.bottom = new NodeWithBottom(50);

head.next.next.next = new NodeWithBottom(28);
head.next.next.next.bottom = new NodeWithBottom(35);
head.next.next.next.bottom.bottom = new NodeWithBottom(40);
head.next.next.next.bottom.bottom.bottom = new NodeWithBottom(45);

let sigma = new Sigma();
let res = sigma.Flatten(head);

// Print the flattened linked list
while (res !== null) {
    console.log(res.data);
    res = res.bottom;
}
