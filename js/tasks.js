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

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits.splice(1, 1, "peach");
// fruits.splice(3,1,"banana")
// console.log(fruits);



// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);



// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);


// function getExtremeElements(array) {
//     // Change code below this line
    
//     array = [array[0], array[array.length - 1]];

//     // const firstEl = array[0];
//     // const lastEl = array[array.length - 1];
//     // const newArray = [];
//     // newArray.push(firstEl);
//     // newArray.push(lastEl);
//     // return newArray;
//      return array
//   // Change code above this line
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));




// function splitMessage(message, delimiter) {
//   let words;
//     // Change code below this line
//     words = message.split(delimiter);
//     // Change code above this line
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));



// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     let words = message.split(' ');
//     let totalPrice = 0;
//     for (let i = 0; i < words.length; i += 1) {
//         totalPrice += pricePerWord;
//     }
// return totalPrice

//     }

    // Change code above this line
    


// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));



// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//     string = array.splice(delimiter).join(delimiter);


//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "));
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));


// function slugify(title) {
//   // Change code below this line

//     let string = title.toLocaleLowerCase().split(' ').join('-');
//        return string

//     // Change code above this line
   
// }
// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
 

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls =fruits.slice(-3) ;


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);



// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const newArray = firstArray.concat(secondArray).slice(0,maxLength)
//     return newArray;

//     // Change code above this line
// }
  
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));



// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }


// function calculateTotal(number) {
//  // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i+=1) {
//     total += i;
//       }
// return total;

//   // Change code above this line
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));


// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i ++) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }



// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let element of order) {
//     total += element;
//       }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));




// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.split(' ');
//   let longWord = '';
//   for (const word of words) {
//     if (word.length > longWord.length) {
//       longWord = word;
//     }
//   }
//       return longWord
  
//     // Change code above this line
  
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));


// function filterArray(numbers, value) {
//    // Change code below this line
//   let numberArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     // const element = numbers[i];
//     if (numbers[i]> value) {
//      numberArr.push(numbers[i])
//     }
//       }
//   return numberArr

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));


// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("pear"));
// console.log(checkFruit("Pear"));
// console.log(checkFruit("apple"));


// function getCommonElements(array1, array2) {
//   // Change code below this line

//   const numbers = array1;
//   let uniqueNumbers = [];
//   for (let number of numbers) {
//     if (array2.includes(number)) {
//       uniqueNumbers.push(number)
//     }
//   }
// return uniqueNumbers
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }

//   for (let el of order) {
//     total += el;
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));


// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];

  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }
  // }

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));



// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);



// function getEvenNumbers(start, end) {
//    // Change code below this line
//   const allEventNumber = [];
//   for (let i = start; i <= end; i++) {
//     // const element = i;
//     // console.log(element);
//     if (i % 2 === 0) {
//       allEventNumber.push(i)
//     }
//       }
// return allEventNumber

//     // Change code above this line
// }
  
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));


// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//    if (i % 5 === 0 ) {
//     number = i;
// break
//     }
//   }
// console.log(number);


// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i
//       }
//   }

//   // return number;
//   // Change code above this line
// }


// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));



function includes(array, value) {
  // Change code below this line

  // const array = array;
  for (const el of array) { 
    if (el === value) { 
      return true
    }
  }
  return false
  // Change code above this line
}




console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));