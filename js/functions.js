// const add = function add(a, b) {
//     console.log(a);
//     console.log(b);
//     return a + b;
// }
// const r1 = add(8, 3);
// console.log(r1);
// // add(7, 5);
// console.log(add(7, 9));


// const fn = function () {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     return
// }
// console.log(fn());

/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

for (const value of cart) {
  total += value;
}

console.log('Total: ', total);