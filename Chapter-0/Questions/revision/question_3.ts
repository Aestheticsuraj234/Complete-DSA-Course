function isArrayIsSorted(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}


// Path: Chapter-0/Questions/revision/question_4.ts

console.log(isArrayIsSorted([90,21,3,99]))