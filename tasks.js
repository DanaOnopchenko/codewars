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


function checkForSpam(message) {
  let result;
  // Change code below this line
 
result= message.toLocaleLowerCase().includes("spam") || message.toLocaleLowerCase().includes("sale")
  // Change code above this line
  return result;
}

console.log(checkForSpam("Amazing SalE, only tonight!"));
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// Оголошена функція checkForSpam(message).
// Виклик функції checkForSpam("Latest technology news") повертає false
// Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false
// Виклик функції checkForSpam("Get best sale offers now!") повертає true
// Виклик функції checkForSpam("Amazing SalE, only tonight!") повертає true
// Виклик функції checkForSpam("Trust me, this is not a spam message") повертає true
// Виклик функції checkForSpam("Get rid of sPaM emails. Our book in on sale!") повертає true
// Виклик функції checkForSpam("[SPAM] How to earn fast money?") повертає true

