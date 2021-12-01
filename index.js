function add(number) {
    return (number += 2);
}
console.log(add(5));

function subtract(number) {
    return (number -=2);
}
console.log(subtract(5));

function multiply(number) {
    return (number *= 5);
}
console.log(multiply(5));

function divide(number) {
    return (number /= 5);
}
console.log(divide(5));


function add(a, b) {
    return (a + b);
}
console.log(add(5, 6));

function subtract(a, b) {
    return (a -b);
}
console.log(subtract(10, 5));

function multiply(a, b) {
    return (a * b);
}
console.log(multiply(3, 5));

function divide(a,b) {
    return (a / b);
}
console.log(divide(20, 5));


function increment(n) {
    return (++n);
}
console.log(increment(5));


function decrement(n) {
    return (--n);
}
console.log(decrement(5));


function makeInt(n) {
    return (parseInt(n, 10));
}
console.log(makeInt('6.9236'));
console.log(makeInt("banana"));


function preserveDecimal(n) {
    return (parseFloat(n));
}
console.log(preserveDecimal('3.2871'));
console.log(preserveDecimal("apple"));
