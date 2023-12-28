// const arrayOfSheeps = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//     false, false, true, true]

// let total = 0;



// function countSheeps(arrayOfSheeps){
//     for (const arrayOfSheep of arrayOfSheeps) {
//     if (arrayOfSheep === true) {
//      total += 1;
//         }
//        console.log(total)
// }
//   // TODO May the force be with you
// }
// console.log(total)


// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);


// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);


// const value = prompt("Яка офіційна назва JavaScript?").toLocaleLowerCase();

// const ecma = 'ECMAScript'
// if (value === ecma.toLocaleLowerCase()) {
//     alert('Good!');
// } else {
// alert('You don`t no? ECMAScript')
// }



// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо в prompt користувач ввів число більше за нуль. Якщо було введено нуль, виводь у консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі має бути рядок "Це від'ємне число".


// const value = Number(prompt('Enter number'))

// if (value > 0) {
//     console.log("Це позитивне число");
// } else if (value === 0) {
//     console.log("Це нуль");
// } else if (value < 0) {
//     console.log("Це від'ємне число")
// } else {
//     console.log("Це не чісло")
// }

// console.log(value);
// console.log(typeof value);



// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ

// let link = 'https://somesite.com/about';

// if (link.endsWith("/") === false) {
//     console.log(link + '/')
// }
// console.log(link.endsWith("/"));



// Напиши скрипт для відображення часу дедлайн здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата в майбутньому"

// const days = Number (prompt("enter days"));
// console.log(days)


// if (days === 0) {
//     console.log("Сьогодні")
// } else if (days === 1) {
//     console.log("Завтра")
// } else if (days === 2) {
//     console.log("Післязавтра")
// } else {
//     console.log("Дата в майбутньому")
// }



// Напиши цикл for який виводить у консоль браузера числа за зростанням від min до max, але якщо число кратне 5.
// const max = 100;
// const min = 20;


// for (let i = min; i <= max; i += 1) {
//     // / оператор ділення
//     // % оператор залишку від ділення
//     if (i % 5 === 0) {
//         console.log(i);
//     }

// }

// const color = prompt('Enter color').toLowerCase()

// switch (color) {
//     case "red":
//         alert("STOP!");
//         break;
//     case "yellow":
//         alert("Atention");
//         break;
//     case 'green':
//         alert("Go!");
//         break;
//     default:
//         alert("i am sorry(")
// }

// if (color === "red") {
//     console.log('Stop!');
// } else if (color === "yellow") {
//     console.log("Atention...")
// } else if (color === "green") {
//     console.log("Go!")
// } else {
//     console.log('I am sorry')
// }
// let number;
// if (number % 2 === 0) {
//   console.log("even")
// } else {
//   console.log("not even");
// }
// number = 7;

// function getAge(inputString){
// return Number.parseInt(inputString)
// }

// console.log(getAge("24 years"));


// function peopleWithAgeDrink(old) {
//     let message
//     if (old <= 14) {
//         message = 'Kids drink toddy.'
//     } else if (old <= 18) {
//         message = 'Teens drink coke.'
//     } else if (old <= 21) {
//         message = 'Young adults drink beer.'
//     } else {
//         message = 'Adults drink whisky.'
//     }
//   return message;
// };
// console.log(peopleWithAgeDrink(19));
