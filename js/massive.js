
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

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smaliesNumber = numbers[0];
// for (const number of numbers) {
    
//     if (number < smaliesNumber) {
//         smaliesNumber = number;
//     }
// }

// console.log(smaliesNumber);


// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let biggestNumber = numbers[0];
// for (const number of numbers) {
//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }
// console.log(biggestNumber);


// Task 6
// Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
//   Элементов может быть произвольное кол-во.
//   Пусть элементы массива  в строке будут разделены запятой.

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// // let string = '';
// // for (const friend of friends) {
// //     string += friend + ', ';
// // }
// // string = string.slice(0, string.length - 2);
// // console.log(string);
// const string = friends.join(', ');
// console.log(string);


// Task 7

/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'JavaScript';
// const letters = string.split('');

// let invertedStr = '';
// for (const letter of letters) {
//     if (letter === letter.toLowerCase()) {
        
//         invertedStr += letter.toUpperCase();
//     } else {
//         invertedStr += letter.toLowerCase();
//     }
//     console.log(letter);
// }

// for (const letter of letters) {
//     invertedStr +=
//         letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()
// }

// console.log(invertedStr);


// Task 8

/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework';

// const normTitle = title.toLowerCase().split(' ');
// const slugStr = normTitle.join('-');

// const slug = title.toLowerCase().split(' ').join('-')
// console.log(slugStr);
// console.log(slug);

// Task 9
/*
 * Напиши скрипт который считает сумму элементов двух массивов.
 */

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const numbers = array1.concat(array2);
// let total = 0;

// // for (let i = 0; i < numbers.length; i += 1) {
// //     console.log(numbers[i]);
// //     total += numbers[i];
// // }

// for (const number of numbers) {
//     total += number;
// }

// console.log(total);

// Task 10
/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);


// console.table(cards)
// console.log(index);
// cards.splice(index, 3);

// console.table(cards);

/*
 * Добавление (по индексу)
 */

// const cardToInsert = 'Карточка-6';
// const index = 5;
// cards.splice(index,0, cardToInsert);
// console.table(cards);

/*
 * Обновление (по индексу)
 */


// const cardToUpdate = 'Карточка-4';


// // const index = cards.indexOf(cardToUpdate);

// const index = cards.indexOf(cardToUpdate);
// console.log(index)
// cards.splice(index,1,"updatecard")

// console.table(cards);

// Task 11

//  Базові операції з масивом
// Створіть масив genres з елементами Jazz і Blues.
// Додайте "Rock'n'roll" в кінець.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код має працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// Методи push unshift shift splice

const genres = ["Jazz", "Blues","Rock'n'roll"];
genres.push("Rock'n'roll");

console.log(genres[0]);

// const lastEl = genres[genres.length - 1];
// console.log(lastEl);

// const deletFstEl = genres.shift();
// console.log(deletFstEl);

// genres.unshift('Country', 'Reggae');
// console.log(genres);


genres.splice(0, 0, 'Country', 'Reggae');

console.log(genres);