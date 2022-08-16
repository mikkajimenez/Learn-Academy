// ASSESSMENT 3: Coding Practical Questions with Jest

const { first } = require("lodash")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]
// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe ("fibonacci", () => {
    it ("returns an array of the same length as the inputted number containing the numbers of the Fibonacci Sequence", ()=> { //the description of the test
        expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]) 
        expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})

// b) Create the function that makes the test pass.

// formula for fibonacci sequence Fn = (Fn-1) + (Fn -2)

const fibonacci = (num) => {
   let fibArray = [1, 1] //created a new array that I can add numbers to, since the condition requires the inputted number be greater than 2, I populated the first 2 counting/natural numbers in the fibonacci sequence
   for (var i = 2 ; i < num ; i++){ //loop statement that begins on the third element (index 2) and ends at the inputted number
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]) //adds the new number to the back of the array using the formula
   }
   return (fibArray);
}


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


describe ("oddArray", () => {
    it ("returns an array of odd numbers arranged from least to greatest", () =>{
        expect(oddArray(fullArr1)).toEqual([-9, 7, 9, 199]) 
        expect(oddArray(fullArr2)).toEqual([-823, 7, 23])
    })
})

// b) Create the function that makes the test pass.

const oddArray = (array) => {
    let numArr = array.filter (element =>{ //using .filter() to filter the numbers from the mixed data type array naming it numArr
        return typeof element === 'number'
    })
    let onlyOdd = numArr.filter (element =>{ //using .filter() again to filter the odd numbers from numArr
        return element % 2 !== 0
    })
    return onlyOdd.sort((a, b) => a - b) //using this .sort() syntax to arrange the numbers from least to greatest
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

describe ("accSum", () => {
    it ("returns an array of the same length of the accumulating sum of the elements in the array", () => {
        expect(accSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accSum(numbersToAdd3)).toEqual([])
    })
})

// b) Create the function that makes the test pass.

const accSum = (array) => {

    let accArr = [] //creates a new array that i can fill in with the accumulated numbers
    if (array.length === 0){ //returns an empty array if the input array is empty
        return []
    }

        let sum = 0 // need to add the first number to 0 to return the first element of the given array
        array.map(value =>{ //.map() will iterate over each value of the array and returns the same length of the given array
            sum += value // += will accumulate sum as it adds each value of the array to sum
            return accArr.push(sum) // adds the new value of sum to accArr (new array)
        })
        return accArr //since .push() returns the new length of the array, i still had to return accArr array with all the new values in it


    // code below is me playing with reducer... it's confusing but worth reading more on. The code works but not sure what can I use it on that .map() can't be used on
        // let accArr = []
        // array.reduce((prevNum, currNum, i) => 
        // accArr[i] = prevNum + currNum , 0)
        // return accArr
}
