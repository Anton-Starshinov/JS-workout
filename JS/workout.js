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

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getAllPropValues(propName) {
    const mas = [];

    for (const product of products) {
        if (propName === product.key) {
         mas.push(product.values)
        }
    }
  
  }
  console.log(getAllPropValues("quantity"));
  