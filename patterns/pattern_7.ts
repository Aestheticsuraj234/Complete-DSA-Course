function pattern_7(N:number) {
  for (let i = 0; i < N; i++) {
    //space
    for(let j = 0;j<N-i-1;j++)
    {
        process.stdout.write(" ");
    }
    // pattern
    for(let j = 0;j<2*i+1;j++)
    {
        process.stdout.write("*");
    }

    // space
    for(let j = 0;j<N-i-1;j++)
    {
        process.stdout.write(" ");
    }
    console.log();
    
  }
}

pattern_7(10);