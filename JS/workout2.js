// ==================== 1 =========================
//               РАННИЙ ВОЗВРАТ
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// ==================== 2 =========================
//    ЗАДАЧА: ПРОВЕРКА ПАРОЛЯ (РАННИЙ ВОЗВРАТ)
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
// }

// ===================== 3 ========================
//          ЗАДАЧА: СКЛАД ТОВАРОВ 3.0
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// ====================== 4 =======================
//              СОЗДАНИЕ МАССИВА
// const fruits = ["apple", "plum", "pear", "orange"];

// ====================== 5 =======================
//        ДОСТУП К ЭЛЕМЕНТАМ ПО ИНДЕКСУ
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// ====================== 6 =======================
//       ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ЭЛЕМЕНТА
// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// ======================= 7 =======================
//                 ДЛИНА МАССИВА
// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// ======================= 8 =======================
//            ИНДЕКС ПОСЛЕДНЕГО ЭЛЕМЕНТА
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);
// console.log(lastElementIndex);

// ====================== 9 =======================
//        ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА
// function getExtremeElements(array) {
//   const add = [];
//   add.push(array[0]);
//   add.push(array[array.length - 1]);

//   return add;
// }

// ==================== 10 ========================
//             МЕТОД СТРОК SPLIT()
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// ==================== 11 ========================
//         ЗАДАЧА: ГРАВИРОВКА УКРАШЕНИЙ
// function calculateEngravingPrice(message, pricePerWord) {
//   let words;

//   words = message.split(" ").length * pricePerWord;

//   return words;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

// ==================== 12 ========================
//              МЕТОД МАССИВА JOIN()
// function makeStringFromArray(array, delimeter) {
//   let string;

//   string = array.join(delimeter);

//   return string;
// }

// ==================== 13 ========================
//           ЗАДАЧА: ГЕНЕРАТОР SLUG
// function slugify(title) {
//   let slug;

//   slug = title.toLowerCase().split(" ").join("-");

//   return slug;
// }

// ==================== 14 ========================
//               МЕТОД SLICE()
// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// ==================== 15 ========================
//               МЕТОД CONCAT()
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);

// ==================== 16 ========================
//        ЗАДАЧА: КОМПОЗИЦИЯ МАССИВОВ
// function makeArray(firstArray, secondArray, maxLength) {
//   let allArray;

//   allArray = firstArray.concat(secondArray).slice(0, maxLength);

//   return allArray;
// }

// ==================== 17 ========================
//                   ЦИКЛ FOR
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// ==================== 18 ========================
//         ЗАДАЧА: СУММА ЧИСЕЛ (ЦИКЛ FOR)
// function calculateTotal(number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// }
// ==================== 19 ========================
//             ИТЕРАЦИЯ ПО МАССИВУ
// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ==================== 20 ========================
//       ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// ==================== 21 ========================
//     ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА
// function findLongestWord(string) {
//   let words = string.split(" ");
//   let result = words[0];

//   for (let i = 0; i < words.length; i += 1)
//     if (words[i].length > result.length) {
//       result = words[i];
//     }

//   return result;
// }

// ==================== 22 ========================
//                МЕТОД PUSH()
// function createArrayOfNumbers(min, max) {
//   const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   return numbers;
// }

// ==================== 23 ========================
// //       ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ
// function filterArray(numbers, value) {
//   const array = [];

//   for (let number of numbers) {
//     if (number > value) {
//       array.push(number);
//     }
//   }

//   return array;
// }

// ==================== 24 ========================
//                  МЕТОД INCLUDES()
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }

// ==================== 25 ========================
//           ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ
// function getCommonElements(array1, array2) {

//   const allArray = [];

//   for (let element of array1) {
//     if (array2.includes(element)) {
//       allArray.push(element);
//     }
//   }

//   return allArray;
// }
// ==================== 26 ========================
//                 ЦИКЛ FOR...OF
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let number of order) {
//     total += number;
//   }

//   return total;
// }

// ==================== 27 ========================
//       ЗАЧАДА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }

// ==================== 28 ========================
//                 ОПЕРАТОР %
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// ==================== 29 ========================
//            ЗАДАЧА: ЧЁТНЫЕ ЧИСЛА
// function getEvenNumbers(start, end) {
//   let total = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       total.push(i);
//     }
//   }

//   return total;
// }

// ==================== 30 ========================
//                ОПЕРАТОР BREAK
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// ==================== 31 ========================
//     ОПЕРАТОР BREAK VS RETURN В ФУНКЦИИ
// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }

//   return number;
// }

// ==================== 32 ========================
//        ЗАДАЧА: ФУНКЦИЯ INCLUDES()
// function includes(array, value) {
//   for (let number of array) {
//     if (value === number) {
//       return true;
//     }
//   }

//   return false;
// }
