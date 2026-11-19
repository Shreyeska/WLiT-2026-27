// let x = 15;

// console.log(x);

// console.log(typeof x);
// console.log(typeof typeof x);

// let y = true;
// console.log(y);

// let a = null;
// console.log(a);
// console.log(b);

// console.log(null == undefined);
// console.log(null === undefined);

// let vs var vs const

// var x = 15;
// console.log(x);

// var x = 10;
// console.log(x);

// const y = 10;
// console.log(y);

// var y = 20;
// console.log(y);

// doSomething();

// function doSomething() {
//   //function declared.

//   var x = 6;
//   console.log(x);
//   //   return x;
// }

// var x = 7;
// // var y = doSomething();
// // console.log(y);
// console.log(x);

// hoisting

// doSomething();

// function doSomething() {
//   console.log("Accessed this function");
// }

// let 7x = 9;
// let 8y = 7;
// console.log(7x);
// console.log(8y);

// let 10x = 19
// let console=10

// let X = 5;
// let x = 50;

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// // i=i+1

// // 0 1 2 3 4

// let x = 75;
// console.log(x > 50 ? "A" : "B");

let grade = 10;
// 90 or above A
// 80 or above B
// 70 or above C

// if (grade >= 90) {
//   console.log("Grade: A");
// } else if (grade >= 80) {
//   console.log("Grade: B");
// } else if (grade >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: Fail");
// }

// console.log(grade > 80 ? "A" : "B");

// SWITCH CASE

// let x = 10;

// switch (x) {
//   case 1:
//     console.log("Printed 1");
//     break;
//   case 2:
//     console.log("Printed 2");
//     break;
//   case 3:
//     console.log("Printed 3");
//     break;
//   case 6:
//     console.log("Printed 6");
//     break;
//   default:
//     console.log("Number not found");
//     break;
// }

// for (let x = 0; x < 8; x+=2) {
//   console.log(x);
// }

// while(condition){
//     statements
// }

// let x = 22;
// while (x < 28) {
//   console.log(x);
//   x++;
// }

// do {
//   statements;
//   increment;
// } while (condition);

// let x = 0;
// do {
//   console.log("This is do while loop" + x);
//   x++;
// } while (x < 5);

// FUNCTION is important

// function doSomething() {
//   console.log("This function does something");
// }

// doSomething();

// function multiply(x, y) {
//   //   console.log(x * y);
//   return x * y;
// }

// var x = multiply(5, 4);
// console.log(x);

// arrow function
// shorter syntax

// var x = () => {
//   console.log("Ujashna taught arrow function");
// };

// x();

// function doSomething() {
//   console.log("This function did something");
// }

// doSomething();

// // Parameters: name, age
// function showInfo(name, age) {
//   console.log(name + " is " + age + " years old.");
// }
// // Arguments: "Alice", 22
// showInfo("Alice", 22);

// const greet = () => {
//   //operations of the function
// };

// function greet() {}

// const multiply = (x, y) => {
//   return x * y;
// };

// console.log(multiply(4, 5));

// const multiplyby10 = (num) => num * 10;

// console.log(multiplyby10(9));

// Q2

// let x = [1, 2, 5, 7, 9];

// const largest = (x) => {
//   let max = x[0];
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] > max) {
//       max = x[i];
//     }
//   }
//   console.log("Maximum is " + max);
// };

// largest(x);

// let arr = [11, 7, 23, 66, 2, 23];
// let lar = arr[0];
// const findLargest = (arr) => {
//   //   console.log(...arr); //spread operator
//   // for (let i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);
//   // }
//   console.log(Math.max(...arr));
// };
// findLargest(arr);

// //OBJECT
// instance of class
// real life entity with attributes and methods

// let person = {
//   name: "Alice",
//   address: "Wonderland",
//   isStudent: true,
// };

// person.age = "22";
// console.log(person.age);

// person.address = "inWonderland";
// console.log(person);
// person.name = "Alicin";
// console.log(person);

// const car = {
//   brand: "Toyota",
//   speed: 110,
//   drive: function () {
//     // console.log("Driving at " + 100 + " km/h");
//     console.log("Driving at " + this.speed + " km/h");
//   },
// };
// car.drive(); // Driving at 100 km/h

// function hello() {
//   console.log("Hello " + this.name);
// }

// const user = { name: "Alice" }; 

// hello.apply(user);



// 1. Create a common function that uses the 'this' keyword
function calculateArea() {
  return this.length * this.breadth;
}
// 2. Create a rectangle object
const rectangle = {
  length: 10,
  breadth: 5,
  area: calculateArea, // Sharing the common function
};
// 3. Create a square object
const square = {
  length: 6,
  breadth: 6, // Squares have equal length and breadth
  area: calculateArea, // Sharing the exact same function
};
// 4. Display the results
console.log("Rectangle Area:", rectangle.area()); // Prints: 50
console.log("Square Area:", square.area()); // Prints: 36

