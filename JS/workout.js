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

function getCommonElements(array1, array2) {
 const elements = [];
 const get =0;

 for (let i = 0; i <= array1.length; i += 1) {
  console.log(array1[i]);
 }
 for (let i = 0; i <= array2.length; i += 1) {

 }
  get = array1.includes(array2);
  console.log(get); 
}
console.log(getCommonElements([1, 2, 3], [2, 4]));