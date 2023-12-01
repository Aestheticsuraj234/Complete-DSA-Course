// ## 6. Find the Union and Intersection of the two sorted arrays.

// Path: Chapter-0/Questions/question_6.ts
// *approach 1
// time complexity: O(m+n)
// space complexity: O(m+n)

class Union_Intersection_1 {
  // TODO:  1. Find the union of the two sorted arrays.

  public union(arr1: Number[], n: Number, arr2: Number[], m: Number): Number[] {
    let unionArray: Number[] = [];
    let i: any = 0;
    let j: any = 0;
    while (i < n && j < m) {
      // Comapre element in three edges cases
      if (arr1[i] < arr2[j]) {
        unionArray.push(arr1[i]);
        i++;
      } else if (arr1[i] > arr2[j]) {
        unionArray.push(arr2[j]);
        j++;
      } else {
        unionArray.push(arr1[i]);
        i++;
        j++;
      }
    }

    // Push remaining elements of arr1
    while (i < n) {
      unionArray.push(arr1[i]);
      i++;
    }
    // Push remaining elements of arr2
    while (j < m) {
      unionArray.push(arr2[j]);
      j++;
    }

    return unionArray;
  }



//   TODO:  2. Find the intersection of the two sorted arrays.

public intersection(arr1: Number[], n: Number, arr2: Number[], m: Number): Number[] {
    let intersectedArray: Number[] = [];    
    let i:any = 0;
    let j:any = 0;

    while ( i < n && j < m)
    {
        if ( arr1[i] < arr2[j])
        {
            i++
        }
        else if ( arr2[i]> arr2[j])
        {
            j++
        }
        else {
            intersectedArray.push(arr1[i])
            i++;
            j++
        }
    }

    return intersectedArray;

}



}

const Union_Intersection_1_Obj = new Union_Intersection_1();

const arr1 = [1, 2, 3, 4, 5];
const n = arr1.length;
const arr2 = [1, 2, 3];
const m = arr2.length;

console.log(Union_Intersection_1_Obj.union(arr1, n, arr2, m));
console.log(Union_Intersection_1_Obj.intersection(arr1, n, arr2, m));

// *approach 2
// time complexity: O(m+n)
// space complexity: O(m+n)

class Union_Intersection_2 {
  public union(arr1: Number[], arr2: Number[]): Number {
    let unionSet = new Set([...arr1, ...arr2]);
    return unionSet.size;
  }
  public intersection(arr1: Number[], arr2: Number[]): Number {
    let intersectionSet = new Set(
      arr1.filter((element) => arr2.includes(element))
    );
    return intersectionSet.size;
  }
}

const Union_Intersection_2_Obj = new Union_Intersection_2();

const arr3 = [1, 2, 3, 4, 5];

const arr4 = [1, 2, 3];

console.log(Union_Intersection_2_Obj.union(arr3, arr4));
console.log(Union_Intersection_2_Obj.intersection(arr3, arr4));