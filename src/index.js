

// Challenge 1: Refactor the following code using .forEach()

const numbers = [1, 2, 3, 4];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log("total", total); // 10

// Challenge 2: Refactor the following code using .filter()

const alphabets = ["a", "b", "a", "b", "b"];
const alphaB = [];
alphabets.forEach((alpha) => {
  if (alpha === "b") alphaB.push(alpha);
});
console.log("alphaB", alphaB); // [ 'b', 'b', 'b' ]

// Challenge 3: Refactor the following code using .map()
const genderShortForm = ["m", "f", "m", "f"];
let genderSpelledForm = [];

genderShortForm.forEach((x) => {
  if (x === "m") genderSpelledForm.push("Male");
  if (x === "f") genderSpelledForm.push("Female");
});
console.log("genderSpelledForm", genderSpelledForm);

// Challenge 4: Add 'currentSweetsInJug' into the reduce function so that
// totalSweetsInJug would become 10

const currentSweetsInJug = 4;
const putNewSweetsInJug = [1, 2, 3];

const totalSweetsInJug = putNewSweetsInJug.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log("totalSweetsInJug", totalSweetsInJug); // 6
