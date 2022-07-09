// ====================== 1 =========================
//              ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ
// const productName = 'Droid';
// console.log(productName);
// // 'Droid'
// const pricePerItem = 2000;
// console.log(pricePerItem);
// // 2000

// ====================== 2 =========================
//      ПЕРЕОПРЕДЕЛЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
// let productName = "Droid";
// let pricePerItem = 2000;

// productName = "Repair droid";
// pricePerItem = 3500;

// ====================== 3 ===========================
//     ТИПЫ ПРИМИТИВОВ (ЧИСЛА, СТРОКИ, БУЛИ)
// let topSpeed = 160;
// let distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// ======================== 4 ==========================
//             МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

// ======================= 5 ===========================
//                ШАБЛОННЫЕ СТРОКИ
// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// ======================= 6 ===========================
//                ЗАДАЧА: ЗАКАЗ ПРОДУКТА
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// ======================= 7 ===========================
//             ОБЪЯВЛЕНИЕ И ВЫЗОВ ФУНКЦИИ
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// ======================= 8 ==========================
//              ПАРАМЕТРЫ И АРГУМЕНТЫ
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// ======================= 9 =========================
//                ВОЗВРАТ ЗНАЧЕНИЯ
// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));
//  ===================== 10 ========================
//         ЗАДАЧА: ШАБЛОННЫЕ СТРОКИ 2.0
// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;

//   return message;
// }
// console.log(makeMessage("Radar", 6150));

// ==================== 11 =========================
//        ЗАДАЧА: МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ 2.0
// function calculateTotalPrice (orderedQuantity, pricePerItem) {

//   const totalPrice = orderedQuantity * pricePerItem;

//   return totalPrice;
// };

// ===================== 12 ============================
//          ЗАДАЧА: ЗАКАЗ ПРОДУКТА 2.0
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

//   let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   return message;
// }
// console.log(makeOrderMessage(10, 70, 200));

// ======================== 13 =======================
//          ОПЕРАТОРЫ СРАВНЕНИЯ >, >=, < И <=
// function isAdult(age) {
//   const passed = age >= 18;

//   return passed;
// }

// ======================== 14 =======================
//          ОПЕРАТОРЫ СРАВНЕНИЯ === И !==
// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";

//   const isMatch = password === SAVED_PASSWORD;

//   return isMatch;
// }

// ======================= 15 ========================
//              ИНСТРУКЦИЯ IF...ELSE
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }

// ===================== 16 =========================
//              ЗАДАЧА: СКЛАД ТОВАРОВ
// function checkStorage(available, ordered) {
//   let message;

//   if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   return message;
// }

// ======================== 17 ========================
//         КОМБИНИРОВАННЫЙ ОПЕРАТОР ПРИСВОЕНИЯ
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// ======================= 18 =========================
//           ЗАДАЧА: ПРОВЕРКА БАЛАНСА
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;

//   if (customerCredits < totalPrice) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));

// ======================== 19 =========================
//                   БЛОК ELSE...IF
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password == null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }

// =========================== 20 ==========================
//                ЗАДАЧА: СКЛАД ТОВАРОВ 2.0
