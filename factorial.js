
const factorial = (y) => {
    if (y < 0) y = y * -1;
    if (y <= 0) return 1; let factorial = 1; while (y > 1) { factorial = factorial * y; y--; } return factorial;
}
for (let y = 0; y < 10; y++) {
    /*  console.log('factorial de ${ x } es ${ factorial(x) }'); */
}

console.log(factorial(5));

