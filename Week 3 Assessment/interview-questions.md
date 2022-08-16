# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: 'this' returns the value at key in the object

  Researched answer: 'this' refers to the object it belongs to. It has different values depending on where it is used. In methods, 'this' refers to the owner object. Alon, it refers to the global object. In a function, it refers to the global object. In a function, in strict mode, it is undefined. In an event, it refers to the element that received the event. Methods like call() and apply() can refer this to any object.



2. What is React? Why would you use it?

  Your answer: React is a JS library for building user interfaces. Each components in React is indepected and have re-usable pieces of code. We can put together these components together to form applications

  Researched answer: React can be used as a base for single-page and mobile applications. It is free and an open-source library maintained by Meta/Facebook.



3. Which lifecycle method is required in a React class component?

  Your answer: render(). This displays the code to the webpage

  Researched answer: render() function renders HTML to the webpage. The purpose of the render function is to display the specified HTML code inside the specified HTML element. In the render() methos, we can read props and state and return our JSX code to the root component of the app. In render methos, we cannot change the state, and we cannot cause side effects



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: JSX is a syntax extension of JS that operates like HTML. There are syntax reservations in HTML like using "class" and for JSX we use "className"

  Researched answer: JSX is an extension of JS that allows developers to write HTML into JS. So it's lke writing both languages together. JS has "for" as a syntax reservation since it's commonly used in JS; HTML will use HTMLFor. You can only return a single parent element with JSX but in HTML you do not have to return a single parent element. In HTML, "class" is a syntax reservation so for JSX we use "className". Tags can self close in JSX with "</" while in HTML most tags come in pairs of closing and opening tags



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a package manager that makes it easier to share pieces of code between developers. it eliminates the need for re-writing basic components. If I understood the question, the files that get updated are the yarn.lock and package.json files.

  Researched answer: Yarn (Yet Another Resource Manager) is a package manager that help manage a project's dependencies. It is developed by Meta/Facebook and is now open-source, and it's goal is to fix performance and security concerns. When yarn is installed or ran, the dependencies get updated



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: My guess is a function that is not declared? 

  Researched answer: Anonymous Functions are not bound to an identifier. These functions are dynamically declared at runtime. Anonymous functions can accept inputs and return outputs just as standard functions. An anonymous function is usually not acceptable after it's creation. Variables cna be assigned to an anonymous function, called function expressions


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional Rendering  works the same way as the conditional operators in JS to create elements representing the current state and let REACT update the UI to match them

2. Props: Or properties are passed through React Components via HTML attributes. Kind of how components connect and interact with each other. Props are immutable unlike state, so components cannot change the value of its props.

3. JavaScript Events: JS's interaction with HTML is handled through events that occus when the user or the browser manipulates the page. This happens when a page loads, user clicks buttons, resizong windows, etc.

4. Object-oriented programming: OOP is a computer programming model that organizes software design around data, or objects, rather than functions and logic. Benefits of OOP are: it's better for cooperative development (projects can be divided in groups), codes are reusable, scalable, and efficient.

5. Ruby: Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. Designed with an emphasis on programming productivity and simplicity. 
