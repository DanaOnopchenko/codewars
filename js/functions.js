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

// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];


// const findLogin = function (allLogins, loginToFind) {
  
//    for (const login of allLogins) {
//     if (login === loginToFind) {
//      return `Пользователь ${loginToFind} найден.`;
//     }
//      }
//   return `Пользователь ${loginToFind} не найден.`
// }


// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'k1widab3st'));
// console.log(findLogin(logins, 'jam4l'));
// console.log(findLogin(logins, 'poly1scute'));

// Task 5

/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */


// const findSmallesNumber = function (numbers) {
//    let smaliesNumber = numbers[0];
//    for (const number of numbers) {
//       if (number < smaliesNumber) {
//          smaliesNumber=number
//       }
//          }
//    return smaliesNumber;
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

// Task 6

/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */


// const changeCase = function (string) {
//    const letters = string.split('');
//    console.log(letters);
//    let invertedStr = '';
//    for (const letter of letters) {
//     invertedStr +=
//         letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase()
//    }
//    return invertedStr;
// }

// console.log(changeCase('qweRTY')); // QWErty
// console.log(changeCase('mAnGo')); // MaNgO
// console.log(changeCase('AjAx')); // aJaX

// Task 7

/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */

// const slugify = function (string) {
//    return string.toLowerCase().split(' ').join('-')
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

// Task 8

/*
 * Псевдомассив arguments и Array.from и ...
 */

// const fn = function () {
//    console.log(arguments);
//    const args = Array.from(arguments);

//   console.log(args);
// };
// fn(1, 2, 3, 4, 5, 6, 7)


// const fn = function (...args) {
   
//   console.log(args);
// };
// fn(1, 2, 3, 4, 5, 6, 7)

// Task 9

/*
 * Напиши функцию add для сложения произвольного количества аргументов (чисел)
 * - Операция ... (rest)
 */
// const add = function (...args) {
//    console.log(args);
//    let total = 0;
//    for (const arg of args) {
//       total+= arg
//    }
//    return total
// }
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

// task 10

/*
 * Напиши функцию filterNumbers(array [, number1, ...]) которая:
 * - первым аргументом принимает массив чисел
 * - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
 * - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
 *   для которых есть аналог в оригинальном массиве.
 */

// const filterNumbers = function (array, ...args) {
    
//     let uniqueElements = [];
//     for (const element of array) {
//         if (args.includes(element)) {
//             uniqueElements.push(element);
//         }
//     }
//     return uniqueElements;
// }


// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); // [200]



// =====================================================
/// Створення та види функцій

// function expression
// викликається тільки після оголошення
// const world = 'world';
// const hello = 'Hello';
// // foo(world, hello); буде помилка!!!


// const foo = function (hello, world) {
//     console.log(hello, world);
// };
// foo(world, hello);




// function declaretion

// boo(hello, world);

// function boo(hello, world) {
//     console.log(hello, world);
// }



// Task 11

// arguments
//  Порахувати суму всіх чисел

// function getSum() {
//     console.log(arguments);
//     let total = 0;
//     // for (const arg of arguments) {
//     //     console.log(arg);
//     //     total += arg;
//     // }

//     // for (let i = 0; i < arguments.length; i += 1) {
//     //     total += arguments[i];
//     //        }
//     return total;
// }

// getSum(1, 2, 3, 4, 5, 6, 7, 8);
// getSum(44, 5, 14, 3);

// console.log(getSum(1, 2, 3, 4, 5, 6, 7, 8));
// console.log(getSum(44, 5, 14, 3));


// Task 12

// Напишіть функції для роботи з колекцією навчальних курсів courses:
// 1 addCourse(name) - додає курс в кінець колекції
// 2 removeCourse(name) - видаляє курс з колекції
// 3 updateCourse(oldName, newName) - замінює назву на нову

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];

// function addCourse(name) {
//     if (!courses.includes(name)) {
//         courses.push(name);
//         return 'Курс успішно додан';
//     }
//     return 'Ви вже маєте данний курс';
    
// }
// const result = addCourse("Express");
// console.log(result);


// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// function removeCourse(name) {
//     if (courses.includes(name)) {
//         const idx = courses.indexOf(name);
//         courses.splice(idx,1);
//         console.log(idx);
//         return `Курс ${name} видален`
//     }
//     return 'Курс з такою назвою не знайдено'
// }

// console.log(removeCourse('React'));
// console.log(courses);

// console.log(removeCourse('Vue'))

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express'];
// function updateCourse(oldName, newName) {
//     if (courses.includes(oldName)) {
//         const idx = courses.indexOf(oldName);
//         //    courses.splice(idx,1,newName)===

//         courses[idx] = newName;
//     }
//     return 'Курс з такою назвою не знайдено';

// }
// // updateCourse('Express')
// console.log(updateCourse('Express', 'NestJS'));
// console.log(courses);
// // console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// console.log(updateCourse('Angular', 'NestJS')); //'Курс з такою назвою не знайдено'

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'Express'];
// // var a;
// // courses[0] = 'React'
// for(let course of courses){
// console.log(course);
// }
// console.log(courses);