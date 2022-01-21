let sum = 0;
let a = 2;
let b = 6;
for (let i = a; i <= b; i++) {
    if (i % 2 == 0) {
        console.log(i);
        sum = sum + i;
    }
}
console.log('sum = ', sum);
