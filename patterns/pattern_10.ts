function print_10(N: number) {
  for (let i = 1; i < 2 * N - 1; i++) {
    let stars = i;
    if (i > N) stars = 2 * N - i;
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

print_10(6);
