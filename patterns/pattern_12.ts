class Main {
    static pattern12(N: number): void {
        // initial no. of spaces in row 1.
        let spaces: number = 2 * (N - 1);

        // Outer loop for the number of rows.
        for (let i = 1; i <= N; i++) {

            // for printing numbers in each row
            for (let j = 1; j <= i; j++) {
                process.stdout.write(j.toString());
            }

            // for printing spaces in each row
            for (let j = 1; j <= spaces; j++) {
                process.stdout.write(" ");
            }

            // for printing numbers in each row
            for (let j = i; j >= 1; j--) {
                process.stdout.write(j.toString());
            }

            // As soon as the numbers for each iteration are printed, we move to the
            // next row and give a line break otherwise all numbers
            // would get printed in 1 line.
            console.log();

            // After each iteration nos. increase by 2, thus
            // spaces will decrement by 2.
            spaces -= 2;
        }
    }

    public static main(): void {
        // Here, we have taken the value of N as 5.
        // We can also take input from the user.
        const N: number = 5;
        Main.pattern12(N);
    }
}

Main.main();
