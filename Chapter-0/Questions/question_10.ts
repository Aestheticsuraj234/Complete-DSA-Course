// Minimum no. of Jumps to reach end of an array

function jump(arr: number[]): number {
    let max = arr[0];
    let steps = arr[0];
    let jumps = 1;

    for(let i = 1; i <arr.length;i++)
    {
        if( i + arr[i]>max){
            max = i + arr[i];
            steps--;
        }
        if ( steps === 0){
            jumps++;
            steps = max - i;
        }



    }
    return jumps;
  
}

const arr = [1, 2, 3, 2, 6, 7];
const result = jump(arr);
console.log(result);
