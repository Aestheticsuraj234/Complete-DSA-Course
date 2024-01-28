function pattern_8(N:number) {
    for(let i = 0; i < N; i++){
        for(let j = 0; j < i; j++){
            process.stdout.write(" ");
        }
        for(let j = 0; j < 2 * N - (2 * i + 1); j++){
            process.stdout.write("*");
        }
        for(let j = 0; j < i; j++){
            process.stdout.write(" ");
        }
        console.log();  
    }
}

pattern_8(10);
