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


