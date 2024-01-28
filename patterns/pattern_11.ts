const print_11 = (n:number)=>{
    let start = 1;
    for(let i = 0;i<n;i++)
    {
        if(i%2==0) start = 1;
        else start = 0;
        for(let j = 0;j<=i;j+=2)
        {
            process.stdout.write(start.toString());
            start = 1-start;
        }
        console.log();
    }
}

print_11(10);