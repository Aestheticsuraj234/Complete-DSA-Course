function patter_2(N:number)
{
for(let i =0;i<N;i++)
{
    for(let j=0;j<=i;j++)
    {
        process.stdout.write("*");
    }
    console.log();
}
}

patter_2(5);