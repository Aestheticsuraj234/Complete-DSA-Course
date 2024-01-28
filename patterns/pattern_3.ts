function pattern_3(N:number)
{
    for(let i =0;i<N;i++)
    {
        for(let j = 1; j<=i;j++)
        {
            process.stdout.write(j.toString());
        }
        console.log();
    }
}

pattern_3(6);