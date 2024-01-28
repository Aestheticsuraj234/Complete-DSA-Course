// Pattern – 4: Right-Angled Number Pyramid – II
// Problem Statement: Given an integer N, print the following pattern : 

function pattern_4(N: number) {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(i.toString());
        }
        console.log();
    }
}

pattern_4(5);