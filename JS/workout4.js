//                   ФУНКЦИЯ КАК ЗНАЧЕНИЕ
// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
//   }
  
//   const result = makePizza();
//   const pointer = makePizza;

//   console.log(result);

// ======================= 2 ==========================
//                   КОЛБЭК-ФУНКЦИИ
// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
//   }
  
//   function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
//   }
  
//   function makeMessage(pizzaName, callback) {
     
//     return callback(pizzaName);
//   }
//   console.log (makeMessage("Royal Grand", makePizza));

// ====================== 3 ============================
//                  ИНЛАЙН-КОЛБЭКИ
// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
//   }
  
//   makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
//   });
  
  
//   makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
//   });
  
// ====================== 4 ===========================
//                НЕСКОЛЬКО КОЛБЭКОВ
// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {

//             if (!this.pizzas.includes(pizzaName)) {
//                 return onError(pizzaName);
//             } else {
//                 return onSuccess(pizzaName);
//             }
//     },
//   };

//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   };

//   function onOrderError(error) {
//     return `Error! There is no pizza with a name ${error} in the assortment.`;
//   };
  
//   console.log (pizzaPalace.order('Ultracheese', makePizza, onOrderError));
//   pizzaPalace.order('Four meats', makePizza, onOrderError);
//   pizzaPalace.order('Big Mike', makePizza, onOrderError);
//   console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
  
// ====================== 4.1 ==========================

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {

//             if (!this.pizzas.includes(pizzaName)) {
//                 return onOrderError(pizzaName);
//             } else {
//                 return makePizza(pizzaName);
//             }
//     },
//   };

//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   };

//   function onOrderError(error) {
//     return `Error! There is no pizza with a name ${error} in the assortment.`;
//   };
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// ========================= 5 =============================
//                   МЕТОД FOREACH(CALLBACK)
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line
  
//     orderedItems.forEach(element => {
//         totalPrice +=element;
//     });
//     // Change code above this line
//     return totalPrice;
//   }
//   console.log(calculateTotalPrice([164, 48, 291]));

// ========================== 6 ==============================
//              ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(element => {
//         if (element > value) {
//             filteredNumbers.push(element);
//           }
//     });
  
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));

// ========================= 7 =================================
//                ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
   
//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
    

//     return commonElements;
    
//   }
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
  
// ============================= 8 ==============================
//                       СТРЕЛОЧНЫЕ ФУНКЦИИ.
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
//   }
  
// ============================= 9 ==============================
//                        НЕЯВНЫЙ ВОЗВРАТ
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// ============================ 10 ==============================
//                СТРЕЛОЧНЫЕ ФУНКЦИИ КАК КОЛЛБЕКИ

// const calculateTotalPrice = (orderedItems) => { 
//     let totalPrice = 0;
//     orderedItems.forEach(item => {
//       totalPrice += item;
//     });
    
//     return totalPrice;
// };
// console.log(calculateTotalPrice([164, 48, 291]));

// ============================= 11 =============================
//              ЗАДАЧА. ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));

// =========================== 12 ==============================
//               ЗАДАЧА. ОБЩИЕ ЭЛЕМЕНТЫ 2.0
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     return commonElements;
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));

// =========================== 13 =============================
//                    ЧИСТЫЕ ФУНКЦИИ
// function changeEven(numbers, value) {
//     const even = [];
//     numbers.forEach(element => {   
//       if (element % 2 === 0) {
//         even.push(element + value);
//     } else {
//         even.push(element);}
//     });
//       return even;
//   }

// console.log(changeEven([1, 2, 3, 4, 5], 10));  

// ======================== 14 ===============================

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// ======================== 15 ==============================
//               МЕТОД MAP() И МАССИВ ОБЪЕКТОВ
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   const bookTitle = books.map(book => book.title);
//   console.log(bookTitle);

// =========================== 16 ============================
//                      МЕТОД FLATMAP()
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
  
//   const genres = books.flatMap(book => book.genres);

//   console.log(genres);

// ============================ 17 ===============================
//                 ЗАДАЧА. ИМЕНА ПОЛЬЗОВАТЕЛЕЙ
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       skills: ["non", "amet", "ipsum"],
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       skills: ["lorem", "veniam", "culpa"],
//       gender: "female",
//       age: 39,
//     },
//   ];

//   const getUserNames = users => users.map(user => user.name);
    
//   console.log(getUserNames(users));
    
// ======================== 18 =============================
//              ЗАДАЧА. ПОЧТЫ ПОЛЬЗОВАТЕЛЕЙ

// const getUserEmails = users => users.map(user => user.email);
    
//   console.log(getUserEmails(users));

// ========================= 19 ============================
//                 МЕТОДЫ FILTER И FIND

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ======================== 20 =============================
//            ФИЛЬТРАЦИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
 
//   const allGenres = books.flatMap(book => book.genres);
//   const uniqueGenres = allGenres.filter(
//     (genres, index, array) => array.indexOf(genres) === index);

//   console.log(allGenres);
//   console.log(uniqueGenres);

// ========================= 21 ===============================
//              МЕТОД FILTER() И МАССИВ ОБЪЕКТОВ
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
  
//   const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
//   const booksByAuthor = books.filter(book => book.author === AUTHOR);

//   console.log(topRatedBooks);
//   console.log(booksByAuthor);

// ============================ 22 ===============================
//              ЗАДАЧА. ПОЛЬЗОВАТЕЛИ С ЦВЕТОМ ГЛАЗ
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];

//   const getUsersWithEyeColor = (users, color) => {
//     const getUser = users.filter(user => user.eyeColor === color);

//     return getUser;
// };

// ============================= 23 ==============================
//        ЗАДАЧА. ПОЛЬЗОВАТЕЛИ В ВОЗРАСТНОЙ КАТЕГОРИИ

// const getUsersWithAge = (users, minAge, maxAge) => {
//     const getUsers = users.filter(user => user.age > minAge && user.age <maxAge);
    
//     return getUsers;
//     };

// =========================== 24 ==============================
//               ЗАДАЧА. ПОЛЬЗОВАТЕЛИ С ДРУГОМ

//   const getUsersWithFriend = (users, friendName) => 
//       users.filter(user => user.friends.includes(friendName));
    
//  console.log(getUsersWithFriend(users, "Briana Decker"));

//  ============================ 25 =============================
//                     ЗАДАЧА. СПИСОК ДРУЗЕЙ
// const getFriends = (users) => {

//    const allFriends = users.flatMap(user => user.friends);
//    const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);

//    return uniqueFriends;
// };

// console.log(getFriends(users));

// ============================ 26 =============================
//               ЗАДАЧА. АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ
// const getActiveUsers = (users) => {
//   const get = users.filter(({ isActive }) => isActive === true);

//   return get;
// };

// console.log(getActiveUsers(users));

// =========================== 27 ==============================
//               ЗАДАЧА. НЕАКТИВНЫЕ ПОЛЬЗОВАТЕЛИ
// const getInactiveUsers = (users) => {
//     const get = users.filter(({ isActive }) => isActive !== true);

//       return get;
// };

// console.log(getInactiveUsers(users));

// ========================== 28 ==============================
//                       МЕТОД FIND()
// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
  
//   const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
//   const bookByAuthor = books.find(book => book.author === AUTHOR);

//   console.log(bookWithTitle);
//   console.log(bookByAuthor);

// ============================== 29 ==============================
//                   ЗАДАЧА. ПОЛЬЗОВАТЕЛЬ С ПОЧТОЙ

//   const getUserWithEmail = (users, email) => users.find(user => user.email === email);

// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// =========================== 30 ============================
//                        МЕТОД EVERY()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(array => array % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(array => array % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(array => array % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(array => array % 2 !== 0);;

// const eachElementInThirdIsEven = thirdArray.every(array => array % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(array => array % 2 !== 0);;

// ============================== 31 ============================
//             ЗАДАЧА. ВСЕ ЛИ ПОЛЬЗОВАТЕЛИ АКТИВНЫ

//   const isEveryUserActive = (users) => users.every(user => user.isActive === true);

//     console.log(isEveryUserActive(users));

// ============================= 32 =============================
//                          МЕТОД SOME()
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const anyElementInFirstIsEven = firstArray.some(array => array % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(array => array % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(array => array % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(array => array % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(array => array % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(array => array % 2 !== 0);

// ============================ 33 ================================
//             ЗАДАЧА. ЕСТЬ ЛИ АКТИВНЫЕ ПОЛЬЗОВАТЕЛИ
// const isAnyUserActive = users => users.some(user => user.isActive === true);

// console.log(isAnyUserActive(users));

// ============================ 34 ================================
//                       МЕТОД REDUCE()
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
  
//   const totalPlayTime = playtimes.reduce((acc,time) => (acc += time), 0);
  
//   const averagePlayTime = totalPlayTime / playtimes.length;

//   console.log(averagePlayTime);

// ========================= 35 ==============================
//               МЕТОД REDUCE() И МАССИВ ОБЪЕКТОВ
// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
  
//   const totalAveragePlaytimePerGame = players.reduce((acc,player) => {
//   return acc += player.playtime / player.gamesPlayed;
//   }, 0);

//   console.log(totalAveragePlaytimePerGame);

// ============================ 36 ============================
//             ЗАДАЧА. ОБЩИЙ БАЛАНС ПОЛЬЗОВАТЕЛЕЙ

// const calculateTotalBalance = users => users.reduce((total,user) => {
//     return total += user.balance;
// }, 0);
// console.log(calculateTotalBalance(users));

// ============================= 37 ==============================
//              ЗАДАЧА. ОБЩЕЕ КОЛИЧЕСТВО ДРУЗЕЙ

// const getTotalFriendCount = users => users.reduce((total,user) => {
//     return total += user.friends.length;
// }, 0);

// console.log(getTotalFriendCount(users));

// ============================= 38 ===============================
//                          МЕТОД SORT()
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = [...releaseDates].sort();
// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// ============================ 39 ================================
//                СВОЙ ПОРЯДОК СОРТИРОВКИ ЧИСЕЛ
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// ============================ 40 ===============================
//                 СВОЙ ПОРЯДОК СОРТИРОВКИ СТРОК
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

//   console.log(authorsInAlphabetOrder);
//   console.log(authorsInReversedOrder);

// ============================= 41 ==================================
//                      СОРТИРОВКА ОБЪЕКТОВ
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
//   const sortedByAuthorName = [...books].sort((firstBook, secondBook) => 
//   firstBook.author.localeCompare(secondBook.author));
  
//   const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => 
//   secondBook.author.localeCompare(firstBook.author));
  
//   const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => 
//   firstBook.rating - secondBook.rating);
  
//   const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => 
//   secondBook.rating - firstBook.rating);

//   console.log(sortedByAuthorName);
//   console.log(sortedByReversedAuthorName);
//   console.log(sortedByAscendingRating);
//   console.log(sortedByDescentingRating);

// =========================== 42 ===============================
//                ЗАДАЧА. СОРТИРОВКА ПО БАЛАНСУ
// const sortByAscendingBalance = users => {
//    return [...users].sort((firstUser, secondUser) => 
//    firstUser.balance - secondUser.balance)};

// console.log(sortByAscendingBalance(users));

// =========================== 43 ================================
//           ЗАДАЧА. СОРТИРОВКА ПО КОЛИЧЕСТВУ ДРУЗЕЙ
// const sortByDescendingFriendCount = users => {
//    return [...users].sort((firstUser, secondUser) =>
//    secondUser.friends.length - firstUser.friends.length
// )};
// console.log(sortByDescendingFriendCount(users));

// ========================== 44 =================================
//                ЗАДАЧА. СОРТИРОВКА ПО ИМЕНИ
// const sortByName = users => {
//    return [...users].sort((firstUser, secondUser) => 
//    firstUser.name.localeCompare(secondUser.name)
// )};
// console.log(sortByName);

// ========================= 45 ================================
//          ЦЕПОЧКИ МЕТОДОВ (ЧЕЙНИНГ, CHAINING)
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
  
//   const names = books
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .sort();

// console.log(names);

// =========================== 46 ============================
//               ЗАДАЧА. ПОЛЬЗОВАТЕЛИ И ДРУЗЬЯ

// const getNamesSortedByFriendCount = users => [...users]
// .sort((firstUser, secondUser) =>
// firstUser.friends.length - secondUser.friends.length)
// .map(user => user.name);

// console.log(getNamesSortedByFriendCount(users));

// ========================== 47 =============================
//                  ЗАДАЧА. ИМЕНА ДРУЗЕЙ

// const getSortedFriends = users => [...users]
// .flatMap(user => user.friends)
// .filter((user, index, array) => array.indexOf(user) === index)
// .sort();

// console.log(getSortedFriends(users));

// ========================= 48 =============================
//                  ЗАДАЧА. ОБЩИЙ БАЛАНС
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];

// const getTotalBalanceByGender = (users, gender) => [...users]
// .filter(user => user.gender === gender)
// .reduce((total, user) => total += user.balance, 0);

// console.log(getTotalBalanceByGender(users, 'male'));



