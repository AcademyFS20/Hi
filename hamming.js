const hamming_distance = (a, b) => {
    let d = 0;
    let h = a ^ b;
    while (h > 0) {
        d ++;
        h &= h - 1;
    }
    return d;
}
console.log (hamming_distance(10,50))