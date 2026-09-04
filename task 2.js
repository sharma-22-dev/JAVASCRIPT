// TASK 1 — var, let, const

var studentName = "Tom";
let studentAge = 22;
const collegeName = "ABC College";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

studentName = "jerry";
console.log(studentName);

studentAge = 23;
console.log(studentAge);

var studentName = "Arun";
console.log(studentName);

// TASK 2 — User Information

let userName = prompt("Enter your name:");
let userAge = prompt("Enter your age:");
let userCity = prompt("Enter your city:");

console.log("Name: " + userName);
console.log("Age: " + userAge);
console.log("City: " + userCity);

// TASK 3 — Welcome Message

let welcomeName = prompt("Enter your name:");
alert("Welcome " + welcomeName + "!");

// TASK 4 — Age Calculator
let birthYear = prompt("Enter your birth year:");
let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Birth Year: " + birthYear);
console.log("Age: " + age);

// TASK 5 — Identify Data Types

let text = "Hello";
let number = 100;
let decimal = 25.5;
let trueValue = true;
let falseValue = false;
let undefinedValue = undefined;
let nullValue = null;

console.log(typeof text);
console.log(typeof number);
console.log(typeof decimal);
console.log(typeof trueValue);
console.log(typeof falseValue);
console.log(typeof undefinedValue);
console.log(typeof nullValue);

// TASK 6 — Student Data

let student = {
  name: "Tom",
  age: 22,
  city: "blr",
  qualification: "B.Tech",
  isStudent: true,
};

console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

// TASK 7 — Fruit Array

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

// TASK 8 — Basic Calculator

let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// TASK 9 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let totalPrice = shirt + pant + shoes;

console.log("Total = " + totalPrice);

// TASK 10 — Simple Marks Calculation

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log(totalMarks);
console.log(averageMarks);

// TASK 11 — Post Increment

let a11 = 10;

let b11 = a11++;

console.log(a11);
console.log(b11);

// TASK 12 — Pre Increment

let a12 = 10;
let b12 = ++a12;

console.log(a12);
console.log(b12);

// TASK 13 — Post Decrement

let a13 = 20;
let b13 = a13--;

console.log(a13);
console.log(b13);

// TASK 14 — Pre Decrement

let a14 = 20;
let b14 = --a14;

console.log(a14);
console.log(b14);

let a15 = 5;
let b15 = a15++;
let c15 = ++a15;
let d15 = b15--;

console.log(a15);
console.log(b15);
console.log(c15);
console.log(d15);

// TASK 16 — Assignment Operators

let num = 10;

num += 5;
console.log(num);

num -= 3;
console.log(num);

num *= 2;
console.log(num);

num /= 4;
console.log(num);

num %= 3;
console.log(+num);

num **= 2;
console.log(num);

// TASK 17 — Mini Student Profile

let profileName = "Tom";
let profileAge = 22;
let profileCity = "Banglore";
let college = "ABC College";

let subjects = ["Hindi", "English", "Maths", "Science", "Computer"];

let studentProfile = {
  name: profileName,
  age: profileAge,
  city: profileCity,
  subjects: subjects,
  isStudent: true,
};

console.log(studentProfile.name);
console.log(studentProfile.age);
console.log(studentProfile.city);
console.log(studentProfile.subjects[0]);
console.log(studentProfile.subjects[studentProfile.subjects.length - 1]);
console.log(studentProfile.subjects.length);
console.log(studentProfile);

// FINAL CHALLENGE — User + Calculator

let firstNumber = prompt("Enter first number:");
let secondNumber = prompt("Enter second number:");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(+firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);
console.log(firstNumber ** secondNumber);
