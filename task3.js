// TASK 1

var name = "tom";
let age = 21;
const city = "blr";
var college = "ABC College";

console.log(name);
console.log(age);
console.log(city);
console.log(college);

name = "jerry";
console.log(name);

age = 26;
console.log(age);

// changing const
// city = "Chennai";

//  redeclaring var
var name = "motu";
console.log(name);

// redeclaring let
// let age = 30;

// redeclaring const
// const city = "Chennai";

// TASK 2

console.log("Hello JavaScript");

alert("Welcome");

let confirmAnswer = confirm("Do you want to continue?");
console.log(confirmAnswer);

let user = prompt("Enter your name");
console.log(user);
document.writeln("Hello JavaScript");

// TASK 3

let name1 = prompt("Enter your name");
let age1 = prompt("Enter your age");
let city1 = prompt("Enter your city");
let qualification = prompt("Enter your qualification");

console.log(name1);
console.log(age1);
console.log(city1);
console.log(qualification);

// TASK 4

let a = "JavaScript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);
console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);

// TASK 5

let students = ["tom", "jerry", "motu", "shinchan", "krish"];

console.log(students[0]);
console.log(students[1]);
console.log(students[students.length - 1]);
console.log(students.length);

// TASK 6

let employee = {
  name: "tom",
  age: 21,
  role: "Developer",
  skills: ["HTML", "CSS", "JavaScript"],
  isWorking: true,
  qualification: ["B.Tech"],
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.skills[0]);
console.log(employee.qualification[employee.qualification.length - 1]);
console.log(employee.isWorking);

// TASK 7

let x = 20;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);

// TASK 8

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let total = shirt + pant + shoes + bag;

console.log(total);

// TASK 9

let num1 = 10;
let num2 = num1++;
console.log(num1);
console.log(num2);

let num3 = 10;
let num4 = ++num3;
console.log(num3);
console.log(num4);

let num5 = 10;
let num6 = num5--;
console.log(num5);
console.log(num6);

let num7 = 10;
let num8 = --num7;
console.log(num7);
console.log(num8);

let number = 10;
number += 5;
console.log(number);

number = 10;
number -= 3;
console.log(number);

number = 10;
number *= 2;
console.log(number);

number = 10;
number /= 4;
console.log(number);

number = 10;
number %= 3;
console.log(number);

number = 10;
number **= 2;
console.log(number);

// TASK 11

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");

// TASK 12

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// TASK 13

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// TASK 14

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));

// TASK 15

console.log((5 == "5" && !(5 === 5)) || 6 > 7);

console.log((10 > 5 && 8 < 12) || 4 === "4");

console.log((7 === 7 && 10 != "10") || 5 >= 5);

console.log(15 < 10 || (20 > 15 && 5 == "5"));

// TASK 16

let votingAge = 20;

let voting = votingAge >= 18 ? "Eligible to vote" : "Not eligible";

console.log(voting);

// TASK 17

let password = true;

let login = password ? "Login successful" : "Wrong password";

console.log(login);

// TASK 18

let myName = "tom";
let myAge = 22;
let myCity = "blr";

console.log(
  "My name is " +
    myName +
    ". I am " +
    myAge +
    " years old. I live in " +
    myCity +
    ".",
);

console.log(
  `My name is ${myName}. I am ${myAge} years old. I live in ${myCity}.`,
);

// TASK 19

let value1 = String(100);
let value2 = String(true);
let value3 = String(undefined);
let value4 = String(null);
let value5 = String([1, 2]);

console.log(value1, typeof value1);
console.log(value2, typeof value2);
console.log(value3, typeof value3);
console.log(value4, typeof value4);
console.log(value5, typeof value5);

// TASK 20

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

// TASK 21

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));

// TASK 22

let voteAge = Number(prompt("Enter your age"));

if (voteAge >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}

// TASK 23

let number1 = Number(prompt("Enter a number"));

if (number1 > 0) {
  console.log("Positive");
} else if (number1 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// TASK 24

let marks = Number(prompt("Enter your marks"));

if (marks >= 90 && marks <= 100) {
  console.log("A Grade");
} else if (marks >= 80) {
  console.log("B Grade");
} else if (marks >= 70) {
  console.log("C Grade");
} else if (marks >= 60) {
  console.log("D Grade");
} else {
  console.log("Fail");
}

// TASK 25

let jobAge = Number(prompt("Enter your age"));
let height = Number(prompt("Enter your height"));
let weight = Number(prompt("Enter your weight"));

if (jobAge >= 18) {
  if (height >= 160) {
    if (weight >= 60) {
      console.log("Congratulations! You are selected");
    } else {
      console.log("Weight should be 60 or above");
    }
  } else {
    console.log("Height should be 160 or above");
  }
} else {
  console.log("Age should be 18 or above");
}

// TASK 26

let color = prompt("Enter traffic light color");

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid color");
}

// TASK 27

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid day");
}

// TASK 28

let studentName = prompt("Enter your name");
let studentAge = Number(prompt("Enter your age"));
let studentCity = prompt("Enter your city");

let tamil = Number(prompt("Enter Hindi marks"));
let english = Number(prompt("Enter English marks"));
let maths = Number(prompt("Enter Maths marks"));

let totalMarks = Hindi + english + maths;
let average = totalMarks / 3;

let grade;

if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "Fail";
}

let votingStatus;

if (studentAge >= 18) {
  votingStatus = "Eligible";
} else {
  votingStatus = "Not Eligible";
}

console.log(`
Name: ${studentName}
Age: ${studentAge}
City: ${studentCity}
Total: ${totalMarks}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${votingStatus}
`);
