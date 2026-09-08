//1. var, let, and const are used to declare variables in JavaScript.
// var can be redeclared and its value can be changed.
// let cannot be redeclared in the same scope, but its value can be changed.
// const cannot be redeclared or reassigned.

// 2. Yes, we can redeclare a variable using var. but we can't redeclare a variable using let and const.

// 3.there will be an error because A const variable cannot be assigned a new value after it is created.

// 4. Declaring a variable means creating the variable.
// Initializing means giving the variable its first value.

// 5. ouput is undefined.

// 6.Hoisting means JavaScript moves variable and function declarations to the top of their scope during execution.

// console.log(x);
// var x = 10;

// 7. undefined means a variable has been declared but no value has been assigned.
// null means we intentionally set the value to nothing.

// 8. output
// object
// undefined
// object
// object

// 9.== checks only the value and can automatically convert the type. and === checks both the value and the data type.

// 10. ++i is called pre-increment. It increases the value first and then uses it. i++ is called post-increment. It uses the current value first and then increases it.

// 11.  output
// 105
// 5
// 50
// 2

// 12. Logical operators are used to combine or reverse conditions.

// There are three main logical operators:

// AND (&&) — both conditions must be true.

// 5 > 3 && 10 > 5 //

// OR (||) — at least one condition must be true.

// 5 > 10 || 10 > 5  

// NOT (!) — changes true to false and false to true.

// !(5 > 3) 

// 13. output
// true
// true
// false

// 14. The ternary operator is a short way of writing an if-else statement.
//  example
// let age = 20;
// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

// 15.Implicit type casting happens automatically by JavaScript.Explicit type casting is when we convert the type ourselves.

// 16. output
// 123
// NaN
// 1
// 0
// false
// true

// 17. NaN means Not a Number.It happens when we try to perform an invalid number conversion or calculation.
// example : let x = Number("hello");
// console.log(x);

// 18. if else is used to compare diffrent types of conditions
// switch is used to compare one value with multiple specific values.

// 19.Adult

// 20. A nested if means having one if statement inside another if statement.
// For example:
// let age = 20;
// let hasID = true;
// if (age >= 18) {
//     if (hasID) {
//         console.log("Allowed");
//     }
// }

// 21
// let num = 7;
// let result = num % 2 === 0 ? "Even" : "Odd";
// console.log(result);

// 22. a while loop, the condition is checked first. So it might not execute even once.
// In a do-while loop, the code runs at least once, and then the condition is checked.

// 23. output
// 1
// 2
// 3
// 4
// 5

// 24. for-of is mainly used to get the values from an array or other iterable. for-in is used to get the keys or indexes.

// 25. let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum);

// 26. slice() is used to take a part of an array, and it does not change the original array.splice() can add or remove elements, and it changes the original array.

// 27.output
// [1, 2, 3]

// 28.A function declaration is written directly using the function keyword.A function expression is a function stored inside a variable.

// 29.An arrow function is a shorter way of writing a function.
//  example:
// const add = (a, b) => {
//     return a + b;
// };
// console.log(add(5, 3));

// 30. output
// Hello
