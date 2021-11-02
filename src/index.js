/*
  In this lab session, students are required to convert an existing code 
  to use the four array functions that we have covered. 
  - .forEach()
  - .filter()
  - .map()
  - .reduce()

  Note: Refer to MDN or search the web to get help!

  How to run JS file:

  Option 1: If you are using VS Code, you can install "Code Runner" extension. So
  that you are able to right click on this file and select "Run Code".

  Option 2: If you have install Node, simply type 'node index.js' on the terminal.
*/

// Challenge 1: Refactor the following code using .forEach()

const numbers = [1, 2, 3, 4];
// // let total = 0;
// // for (let i = 0; i < numbers.length; i++) {
// //   total += numbers[i];
// // }
// // console.log("total", total); // 10

// //forEach 
let total = 0;
numbers.forEach ( (value) => {
  total += value;
    });
    console.log(total);
  
  

// // Challenge 2: Refactor the following code using .filter()

// const alphabets = ["a", "b", "a", "b", "b"];
// const alphaB = [];
// alphabets.forEach((alpha) => {
//   if (alpha === "b") alphaB.push(alpha);
// });
// console.log("alphaB", alphaB); // [ 'b', 'b', 'b' ]


// //.filter()

// const alphaB = alphabets.filter( (item) => {
//   return item === "b";
//   });
//   console.log(alphaB); // [ 'b', 'b', 'b' ]
  

// // Challenge 3: Refactor the following code using .map()
// const genderShortForm = ["m", "f", "m", "f"];
// // let genderSpelledForm = [];

// // genderShortForm.forEach((x) => {
// //   if (x === "m") genderSpelledForm.push("Male");
// //   if (x === "f") genderSpelledForm.push("Female");
// // });
// // console.log("genderSpelledForm", genderSpelledForm);

// //use of .map() 
//const genderShortForm = ["m", "f", "m", "f"];
// const genderSpelledForm = genderShortForm.map((x) => {
//   if(x === "m"){
//     genderSpelledForm.push("Male");   
//     if (x === "f") genderSpelledForm.push("Female");  
//   }
//   return x;
// })
// console.log(genderSpelledForm);

// const genderSpelledForm = genderShortForm.map((x) => {
//   if (x === "m") {
//     return "Male";
//   } else {
//     return "Female";
//   }
// });
// console.log(genderSpelledForm);

// Challenge 4: Add 'currentSweetsInJug' into the reduce function so that
// totalSweetsInJug would become 10

// const currentSweetsInJug = 4;
// const putNewSweetsInJug = [1, 2, 3];

// const totalSweetsInJug = putNewSweetsInJug.reduce(
//   (accumulator, currentValue) => accumulator + currentValue
// );
// console.log("totalSweetsInJug", totalSweetsInJug); // 6


const currentSweetsInJug = 4;
const putNewSweetsInJug = [1, 2, 3];

const totalSweetsInJug = putNewSweetsInJug.reduce(
   (accumulator, currentValue) => accumulator + currentValue, currentSweetsInJug
  );
console.log(totalSweetsInJug);