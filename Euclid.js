const num1 = 300;
const num2 = 600;
const findgcd = (num1, num2) => {
    let a = Math.abs(num1);
    let b = Math.abs(num2);
    while (a && b && a !== b)
    {
        if (a > b) {
            [a, b] = [a - b, b];
        };
    }; return a || b;
};
console.log (findgcd(num2, num2))