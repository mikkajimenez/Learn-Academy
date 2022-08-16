// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.


// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
 describe ("aboutThem" = () => {
   const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
   it ("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", ()=>{
    expect(aboutThem(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]);
   })
 })

// b) Create the function that makes the test pass.

// this got me dizzy..
// iterate over the array of objects
// access the values of name and occupation from the objects
// TO CAPITALIZE THE NAME: since there might be 2 sets of strings, i can split the name and access the first index and capitalize it and join the rest of the words with slice... and eventually join the words again
// make a newArray to push the complete sentence in

const aboutThem = (arr) => {
  let newArr = [];
  for (var i = 0; i < arr.length; i++) {
    let occupation = arr[i].occupation;
    let name = arr[i].name.split(" ").map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
    newArr[i] = name.join(" ") + " is " + occupation;
    return newArr;
  }
};

//it only works for the first object, not really sure why... but i can get back to this.



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe ("remainder" = () => {
  it ("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", ()=>{
   expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ]);
   expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ]);
  })
})


// b) Create the function that makes the test pass.

// create a new array
// filter through the given array and determine which ones are numbers
// if the current value is a number, get value % 3 and push it into the new array

const remainder = (arr) => {
  let numArr = [];
  arr.filter((value) => {
    if (typeof value === "number") {
      numArr.push(value % 3);
    }
  });
  return numArr;
};


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe ("sumOfCubed" = () => {
  it ("takes in an array of numbers and returns the sum of all the numbers cubed.", ()=>{
   expect(remainder(cubeAndSum1)).toEqual(99);
   expect(remainder(cubeAndSum2)).toEqual(1125);
  })
})


// b) Create the function that makes the test pass.

// map through the array and cube each value
// had to read about my confusing friend REDUCE again... .reduce((a, b) => a + b, 0) syntax is to add all the elements in the array

const sumOfCubed = (arr) => {
  let cubedArr = arr.map((value) => {
    return value ** 3;
  });
  return cubedArr.reduce((a, b) => a + b, 0);
};