// Task 1
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


// Task 2
/*
 * Напиши функцию calculateTotalPrice(items)
 * которая принимает массив цен (чисел) и возвращает их сумму
 */

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total: ', total);

// const calculateTotalPrice = function (items) {
//   console.log(items);
//   let total = 0;
//   for (const item of items) {
//     total += item;
//   }
//   return total;

// }

// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20])); // 50
// console.log(calculateTotalPrice([100, 200, 300])); // 600

// Task 3
/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */


// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// }

// logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
// logItems([1, 2, 3, 4, 5]);
// logItems(['клавиатура', 'наушники', 'часы']);

// Task 4

/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];


const findLogin = function (allLogins, loginToFind) { 
  
   for (const login of allLogins) { 
    if (login === loginToFind) { 
     return `Пользователь ${loginToFind} найден.`;
    }
     }
  return `Пользователь ${loginToFind} не найден.`
}


console.log(findLogin(logins, 'avocod3r'));
console.log(findLogin(logins, 'k1widab3st'));
console.log(findLogin(logins, 'jam4l'));
console.log(findLogin(logins, 'poly1scute'));