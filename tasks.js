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

let link = 'https://somesite.com/about';

if (link.endsWith("/") === false) { 
    console.log(link + '/')
}
// console.log(link.endsWith("/"));


