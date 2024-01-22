// Pattern-1: Rectangular Star Pattern
// Problem Statement: Given an integer N, print the following pattern.

function pattern_1(N: number) {
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            process.stdout.write("*");
        }
        console.log(); // Move this line outside the inner loop
    }
}

pattern_1(5);
