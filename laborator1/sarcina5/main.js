function extractCurrencyValue(str) {
    return +str.substring(1, str.length);
}
console.log(extractCurrencyValue('$120') === 120);
