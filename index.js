//1. for Loop
//The for loop is used when the number of iterations is known. It consists of three parts: initialization, condition, and increment/decrement.


/*/
for (let i = 0; i < 5; i++) {
    console.log(i);
}
/*/


//while Loop
//The while loop is used when the number of iterations is not known and depends on a condition. The code inside the loop is executed as long as the condition is true.

/*
let i = 0 

while (i<8){
    console.log(i)
    i++
}
/*/

//do...while Loop
//The do...while loop is similar to the while loop, but it guarantees that the code inside the loop is executed at least once.

/*/
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

/*/

//for...in Loop
//The for...in loop is used to iterate over the properties of an object.

/*/
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
/*/

//for...of Loop
//The for...of loop is used to iterate over iterable objects (like arrays, strings, maps, sets, etc.).

/*/const fruits = ["banana", "cherry","kiwi"]

for (i of fruits ){
    console.log(i)
}
/*/
//Nested Loops
//Loops can be nested within each other, allowing for more complex iteration patterns.
/*/
for (i = 0 ; i<4 ; i++){
    for (j = 0 ; j<4 ; j++){
        console.log(`i = ${i} j = ${j}`)
    }

}
/*/


//Breaking out of Loops
//The break statement can be used to exit a loop prematurely, while the continue statement skips the current iteration and moves to the next one.


// Using break
/*/
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i); // Output: 0, 1, 2
}

// Using continue
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i); // Output: 0, 1, 2, 4
}
/*/




//Looping through an Array

/*/
const arr = [1, 2, 3, 4, 5];

// Using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Using for...of loop
for (let num of arr) {
    console.log(num);
}

// Using forEach method
arr.forEach(num => console.log(num));
/*/




// function declaration 
//A function declaration defines a named function
 /*function pavan(name){

    return "Hello, "+name+ "!" }

    console.log(pavan("pavan"))

/*/


//function expression

//A function expression defines a function as part of a larger expression. It can be anonymous (without a name) or named

/*const greet = function(name){

    return "Hello, "+name+ "!" 

}

console.log(greet("bob"))/*/


//arrow functions 
/*/
let functionName = (para)=>{

    let a = `my name is ${para}`

    return a

}
console.log(functionName("pavan"))

const multiply = (a, b) => a + b;
console.log(multiply(2, 3)); // Output: 6
/*/


//Immediately Invoked Function Expression (IIFE)
//An IIFE is a function that runs as soon as it is defined.

/*/
(function() {
  console.log("This is an IIFE");
})();
/*/

//Default Parameters
//You can set default values for parameters in a function.
/*/
function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  console.log(greet()); // Output: Hello, Guest!
  console.log(greet("Alice")); // Output: Hello, Alice!
  /*/

  //Rest Parameters 
  //Rest parameters allow you to represent an indefinite number of arguments as an array.
  /*/
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sum(1, 2, 3, 4)); // Output: 10
 /*/
 
 
 //Function Scope and Closures
 //Functions create their own scope. A closure is a function that retains access to its outer (enclosing) function's scope even after the outer function has returned.

/*/
 function outer() {
    let count = 0;
    return function inner() {
      count++;
      return count;
    };
  }
  const counter = outer();
  console.log(counter()); // Output: 1
  console.log(counter()); // Output: 2
  console.log(counter()); // Output: 3
  
/*/ 









//Objects 
//Definition
//An object in JavaScript is a standalone entity, with properties and methods. It's essentially a collection of key-value pairs.
//he simplest way to create an object is by using an object literal:

/*/

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30
};
console.log(person)
/*/

//Properties
//Properties are values associated with a JavaScript object. A property can be a variable of any data type.
//Defining Properties
//You can define properties when creating an object, or add them later.
/*/
const car = {
    make: "Toyota",
    model: "Camry"
  };
  
  // Adding a new property
  car.year = 2020;
  console.log(car)
  /*/ 

 // Methods
//Methods are functions stored as object properties.
//Defining Methods
//You can define methods inside an object.
/*/
const person = {
    firstName : "pavan",
    LastName : "marati",
    age : "23" ,
  fullName : function(){
        return `${this.firstName} ${this.LastName}`

    }

}

console.log(person.fullName())
/*/  


let time = new Date()

console.log(time.getFullYear())
console.log()
