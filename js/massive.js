
// const friends = ['Mango', 'Kiwi', 'Poli', 'Ajax'];

// // for (let i = 0; i <= friends.length - 1; i += 1) {
// //     console.log(friends[i]);
// // }
// for (const friend of friends) {
//     console.log(friend);
// }



const cart = [54, 28, 105, 70, 92, 17, 120,12,96];
// перебрать массив
// получить доступ к каждому элементу масива
// переменная тотал - до цикла
// каждый элемент добавить к тотал

// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
    
// for (value of cart) {
//     total += value;
// }
// console.log(total);

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round( cart[i] * 1.1)
// }


// console.log(cart);


// Task 3
// сложить все четные числа в массиве

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// сделать переменную, в которую складывать все числа
// перебрать массив
// на каждой итерации проверить элемент на четность
// если четный - добавить в тотал

// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] % 2 === 0) {
//         console.log("xетное!!!");
//         total += numbers[i];
//     }
// }

// for (number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
//     }
// }
// console.log(total);


// Task 4

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';

// let message = `Пользователь ${loginToFind} не найден.`;


// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден.`;
//         break
//     } else {
//         message = `Пользователь ${loginToFind} не найден.`
//     }
//    }

// for (const login of logins) {
//     if (login === loginToFind) {
// message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }
// console.log(message);


// console.log(logins.includes(loginToFind));


// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

//   console.log(message);

// Task 5

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smaliesNumber = numbers[0];
for (const number of numbers) { 
    
    if (number < smaliesNumber) { 
        smaliesNumber = number;
    }
}

console.log(smaliesNumber);