// * 2. Maximum and minimum of an array using minimum number of comparisons

// *Solution:
// *Method-1: Linear Search
// *Time complexity: O(n)
// *Space Complexity: O(1)



// *Function to find the minimum and maximum elements in an array -- approach 1
function getMinMax(arr: number[]) {
    // Create an object to store the minimum and maximum values
    const minmax = {};
 
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
 
    // Store the minimum element as the first element of the sorted array
    // @ts-ignore
    minmax.min = arr[0];
    // Store the maximum element as the last element of the sorted array
      // @ts-ignore
    minmax.max = arr[arr.length - 1];
 
    // Return the object containing the minimum and maximum values
    return minmax;
}
 

// *Function to find the minimum and maximum elements in an array -- approach 2;

// *Time complexity: O(n)
// *Space Complexity: O(1)

const getMinMax_2 = (arr: number[]) => {
    let min = arr[0];
    let max = arr[0];
 for(let i=0; i<arr.length; i++){
    if(arr[i]<max){
        min = arr[i];
    }
    if(arr[i]>max){
        max = arr[i];
    }

 }
    return {min, max}

};

// Main function
function main() {
    // Given array
    const arr = [1000, 11, 445, 1, 330, 3000];
     
    // Call the getMinMax function to find the minimum and maximum values
    const minmax = getMinMax(arr);
    const minmax_2 = getMinMax_2(arr);

    console.log(minmax_2);
 
    // Print the minimum element
      // @ts-ignore
    console.log("Minimum element is " + minmax.min);
    // Print the maximum element
      // @ts-ignore
    console.log("Maximum element is " + minmax.max);
}
 
// Call the main function to start the program
main();


