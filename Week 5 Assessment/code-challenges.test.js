// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical";
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook";
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric";
// Expected output: "3cc3ntr1c"

describe("leet", () => {
  it("returns the word as a coded message", () => {
    expect(leet(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(leet(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(leet(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// b) Create the function that makes the test pass.

const leet = (str) => {
  let strArray = str.split("").map((value) => {
    //splits the string into an array and maps over that array
    if (value === "a" || value === "A") {
      // replaces Aa, Ee and Ii to 4, 3 and 1
      return "4";
    } else if (value === "e" || value === "E") {
      return "3";
    } else if (value === "i" || value == "I") {
      return "1";
    } else return value;
  });
  return strArray.join(""); //joins the array into a string
};

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"];
const letterA = "a";
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"];
const letterE = "e";
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("wordsWith", () => {
  it("returns the words in the array containing the letter given", () => {
    expect(wordsWith(arrayOfWords1, letterA)).toEqual([
      "Apple",
      "Banana",
      "Orange",
    ]);
    expect(wordsWith(arrayOfWords2, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// b) Create the function that makes the test pass.

//create an empty array to push the words that includes the letter into...wait i can just use filter since it returns a new array
//if the current value includes the given letter, add it to the empty array
//return the new array with the words included

const wordsWith = (arr, str) => {
  newArr = arr.filter((value) => {
    if (value.includes(str)) {
      return value;
    }
  });
  return newArr;
};

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]; // wait, this is not a full house?
// Expected output: false

describe("fullHouse", () => {
  it("returns a boolean if the array is a full house or not", () => {
    expect(leet(hand1)).toEqual(true);
    expect(leet(hand2)).toEqual(false);
    expect(leet(hand3)).toEqual(false);
  });
});

// b) Create the function that makes the test pass.

// i dont know how to play cards, i googled and i think this is the rules in poker
// full house is 3 of the same kind and a pair
// what if the hand is more than 5???

const fullHouse = (arr) => {
  let count = {};

  for (var value of arr) {
    //iterating over the array
    if (count[value]) {
      count[value] += 1;
    } else {
      count[value] = 1;
    }
  }
};
