// function calculateEngravingPrice(message, pricePerWord) {
//     let words;
    
//     words = message.split(' ').length * pricePerWord;
    
//     return words;
//  }
//  console.log(calculateEngravingPrice("JavaScript is in my blood", 10))

// ====================================================================

// function makeStringFromArray(array, delimeter) {
//     let string;

//     string = array.join(delimeter);

//     return string;
//   }
//   console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ("")))

// ======================================================================

// function slugify(title) {
   
//   let slug;
//    slug = title.toLowerCase().split(' ').join('-');
  
//   return slug;
    
//   }
//   console.log(slugify("Arrays for begginers"));

// ======================================================================

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(fruits);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// =====================================================================

// function makeArray(firstArray, secondArray, maxLength) {
//     let allArray;

//     allArray = firstArray.concat(secondArray).slice(0, maxLength);
    
//     return allArray;

//   }
//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))

// ====================================================================

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

// ====================================================================

// function calculateTotal(number) {
//     let total = 0;
    
//     for (let i = 0; i <= number; i += 1) {
//         total += i;
//       }
    
//      return total;
//    }
//    console.log(calculateTotal(3))

// ===================================================================

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ====================================================================

// function findLongestWord(string) {
//   let words = string.split(' ');
//   let result = words[0];

//   for (let i = 0; i < words.length; i += 1)
//   if (words[i].length > result.length) {
//      result = words[i];
//   }   


//  return result;
// }
// console.log(findLongestWord("May the force be with you"));

// =====================================================================

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
  
//   for ( let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
  
//   return numbers;
// }
// console.log(createArrayOfNumbers(28, 45));

// ====================================================================

// function filterArray(numbers, value) {
//   const array = []; 

//   for (let number of numbers) {
//   if (number > value) {
//     array.push(number);
//   }
//   }

//   return array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// ====================================================================

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];


//   return console.log(fruits.includes(fruit));
// }
// console.log(checkFruit("plum"));

// ===================================================================

// function getCommonElements(array1, array2) {
//  const allArray = [];

// for (let element of array1) {
//   if (array2.includes(element)) {
//      allArray.push(element)
//   }
// }

// return allArray;

// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));

// ==================================================================

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let number of order) {
//     total += number;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ==================================================================

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let number of numbers) {
   
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
  
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))

// =================================================================

// function getEvenNumbers(start, end) {
//   let total = [];

// for (let i = start; i <= end; i += 1) { 
//   if (i % 2 ===0) {
//     total.push(i)
//   }
// }

//    return total;
//  }
//  console.log(getEvenNumbers(2, 5))

// ===============================================================

// function includes(array, value) {
  
//   for (let number of array) {
//   if (value === number) {
//     return true;
//   }
//   }
//   return false;
// }  
// console.log(includes([1, 2, 3, 4, 5], 6));

// ==============================================================

// function countProps(object) {
//     let propCount = 0;
 
//     for (const key in object) {
//        if (object.hasOwnProperty(key)) {
//        propCount += 1;
//     }
//     }


//     return propCount;
//   }
//   console.log(countProps({ name: "Mango", age: 2 }));

// =============================================================

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const values = [];
  
//   const keys = Object.keys(apartment);
//     for (const key of keys) {
//         values.push(apartment[key])
//     }
// console.log(values);

// =============================================================

// function countProps(object) {
    
//     let propCount = 0;
  
//     const keys = Object.keys(object);
//     for (const key of keys) {
//         propCount = keys.length;
//     }
  
//     return propCount;
//   }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); 

// =============================================================

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   const values = Object.values(apartment);
  
//   console.log(keys);
//   console.log(values);

// =============================================================

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
   
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
    
//     return totalSalary;
//   }
//   console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// =============================================================

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
    
//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price;
//         } 
//     }
//     return null;
//   }
//   console.log(getProductPrice("Grip"));

// ============================================================

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     const value = [];

//     for (const product of products) {
//         if (product.hasOwnProperty([propName])) {
//          value.push(product[propName])
//         }
//     }
//     return value;
  
//   }
//   console.log(getAllPropValues("quantity"));

// ============================================================

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
  
//     for (const product of products) {
//       if (product.name === productName) {
//        return (product.price * product.quantity);
//       }
//     }
//  return 0;

// }
// console.log(calculateTotalPrice("Radar"));

// ===========================================================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const { yesterday, today, tomorrow } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
//   console.log(meanTemperature);

// ==========================================================

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// ===========================================================

// const scores = [89, 64, 42, 17, 93, 51, 26];

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);

// ===========================================================

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
  
//   const finalSettings = {...defaultSettings, ...overrideSettings};
//   console.log(finalSettings);

// ============================================================

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";

// const finalData = { completed, category, priority, ...data };
// return finalData;

// }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));

// ===========================================================

// function add(...args) {
//     let total = 0;
//     console.log(args);
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(15, 27));

// ===========================================================

// function addOverNum(firstNumber, ...args) {
//     let total = 0;
//   console.log(args);
//     for (const arg of args) {
//       if (arg > firstNumber){
//         total += arg;
//       }  
//     }
  
//     return total;
//   }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// ==========================================================

// function findMatches(array, ...args) {
//     const matches = []; 

//    for (const arr of array) 
//    for (const arg of args) {
//     if (arr === arg) {
//         matches.push(arg);
//     }
//    }

//     return matches;
//   }
//   console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// ===========================================================

// const bookShelf = {
  
//     books: ["The last kingdom", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       return `Updating book ${oldName} to ${newName}`;
//     },
//     removeBook(bookName) {
//       return `Deleting book ${bookName}`;
//     }
    
//   };

// ==========================================================

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
      
//         const bookIndex = this.books.indexOf(oldName);
//         console.log(bookIndex);
//         this.books.splice(bookIndex, 1, newName);

//         return this.books;
//     },
//   };
// //   console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
//   console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// ==========================================================

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     getPotions() {
//      return this.potions;
//     }
//   };
//   console.log(atTheOldToad.getPotions());

// ==========================================================

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
   
//     addPotion(potionName) {

//      return this.potions.push(potionName);
//     }
    
//   };
//   console.log(atTheOldToad.addPotion("Invisibility"));

// ==========================================================

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         const potionIndex = this.potions.indexOf(potionName);
//         this.potions.splice(potionIndex, 1);
//         return this.potions;
//     },
//   };
//   console.log(atTheOldToad.removePotion("Dragon breath"));

// ==========================================================

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {

//         const potionIndex = this.potions.indexOf(oldName);
//         this.potions.splice(potionIndex, 1, newName);

//         return this.potions;
//     },
//   };
//   console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
  
// ==========================================================

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
  
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(newPotion) {

//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//       return this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
        
//        for (let i = 0; i < this.potions.length; i += 1) {
    
//         if (potionName === this.potions[i].name) {
//             console.log(potionName);
//          return this.potions.splice(i, 1);
//         }
//        }; 
//     },
//     updatePotionName(oldName, newName) {

//         for (let i = 0; i < this.potions.length; i += 1) {
//             console.log(this.potions[i]);
//             if (oldName === this.potions[i].name){
//               return this.potions[i].name = newName;  
//             }
//         }
//     },
   
//   };
// //   console.log(atTheOldToad.getPotions());
// //   console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// //   console.log(atTheOldToad.removePotion("Dragon breath"));
//   console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));