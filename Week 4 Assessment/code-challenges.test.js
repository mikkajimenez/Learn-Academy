// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"];
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron",
];
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("colorShuffler", () => {
  const expected1 = ["yellow", "blue", "pink", "green"];
  const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"];
  it("returns an array with the first index removed with the rest of the values in the array shuffled", () => {
    expect(colors1).toEqual(expect.arrayContaining(expected1));
    expect(colors2).toEqual(expect.arrayContaining(expected2));
  });
});

const colorShuffler = (array) => {
  array.shift();
  let newArray = array.sort((a, b) => a.sort - b.sort);
  array.map(({ value }) => value);
  console.log(newArray);
};

// b) Create the function that makes the test pass.

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6];
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24];
// Expected output: [5, 109]

describe("minMaxNum", () => {
  it("returns an array with the minimum and maximum number", () => {
    expect(minMaxNum(nums1)).toEqual([-8, 90]);
    expect(minMaxNum(nums2)).toEqual([5, 109]);
  });
});

// b) Create the function that makes the test pass.

const minMaxNum = (array) => {
  let newArray = []; // created a new empty array to put the minimum and maximum number
  newArray[0] = Math.min(...array); //using the spread operator to find the smallest number in the arrat and assigning it to the first index
  newArray[1] = Math.max(...array); //using the spread operator to find the largest number in the arrat and assigning it to the first index
  return newArray;
};

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3];
var testArray2 = [7, 8, 2, 3, 1, 5, 4];
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("uniqueNums", () => {
  it("returns a concatenated array with no duplicate values ", () => {
    expect(uniqueNums(testArray1, testArray2)).toEqual([
      3, 7, 10, 5, 4, 8, 2, 1,
    ]);
  });
});

// b) Create the function that makes the test pass.

const uniqueNums = (array1, array2) => {
  let concatArray = array1.concat(array2); //concatenates the two arrays
  let newArray = [...new Set(concatArray)]; //using ...new Set() to get the unique value is the concatenated array
  return newArray;
};
