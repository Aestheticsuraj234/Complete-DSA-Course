function pattern_6(N:number)
{
    for(let i = 0;i<N;i++)
    {
        for(let j = 1; j<N-i+1;j++)
        {
            process.stdout.write(j.toString());
        }
        console.log();
    }
}

pattern_6(5);