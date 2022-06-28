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
const changeEven = (numbers, value) => {
    
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
        numbers[i] = numbers[i] + value;
      }
    }
    
  }
console.log(changeEven([1, 2, 3, 4, 5], 10));  