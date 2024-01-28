function pattern_5(N:number) {
    for (var i = 1; i <= N; i++) {
        for (var j = 0; j <N-i+1; j++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

pattern_5(5);