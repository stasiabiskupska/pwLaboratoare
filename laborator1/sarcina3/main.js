let a = 3;
let b = 1;
let c = 5;

if (a > b) {
    if (a > c) {
        alert('"a" самое большое число');
    } else {
        alert('"c" самое большое число');
    }
} else {
    alert('"b" самое большое число');
}

console.log('самое большое число - ', a > b ? a > c ? a : c : b); // ternarnii operator reshenie 1 strokoi