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

const start = 3;
const end = 7;

for (let i = 3; i <= 7; i += 1) { // Change this line
  console.log(i);
}
