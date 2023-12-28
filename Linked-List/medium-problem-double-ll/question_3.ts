// Remove duplicates from sorted DLL




// *Solution

// !. Time Complexity: O(n)
// !. Space Complexity: O(1)

function RemoveDuplicatesFromSortedDLL(head: DNode | null) {
  let temp = head;
  while(temp !==null && temp.next!==null)
  {
    let nextNode = temp.next;
    while(nextNode !==null && temp.data === nextNode.data)
    {
      nextNode = nextNode.next;
    }
    temp.next = nextNode;
    if(nextNode!==null)
    {
      nextNode.back = temp;
    }
  }
    return head;
}