// Task 1

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Task 3

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Task 4

for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// Task 5

let number = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i);
}

// Task 6

let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}

// Task 7

let i = 1;
let sum = 0;

while (i <= 10) {
  sum = sum + i;
  i++;
}

console.log(sum);

// Task 8

let num = 1;

do {
  console.log(num);
  num++;
} while (num <= 5);

// Task 9

let a = 10;

do {
  console.log(a);
  a++;
} while (a <= 5);

// Task 10

let name = "javascript";

for (let character of name) {
  console.log(character);
}

// Task 11

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
  console.log(fruit);
}

// Task 12

let students = ["tom", "jerry", "motu", "shinchan", "bheem"];

for (let student of students) {
  console.log("Student: " + student);
}

// Task 13

let employee = {
  name: "tom",
  age: 25,
  role: "Developer",
  city: "Chennai",
};

for (let key in employee) {
  console.log(key, employee[key]);
}

// Task 14

let product = {
  productName: "Laptop",
  price: 50000,
  brand: "Dell",
  category: "Electronics",
  stock: 10,
};

for (let key in product) {
  console.log(key, product[key]);
}

// Task 15

function welcome() {
  console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

// Task 16

function greet(name) {
  console.log("Hello " + name);
}

greet("motu");
greet("tom");
greet("jerry");

// Task 17

function student(name, age, department) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Department:", department);
}

student("tom", 22, "IT");
student("jerry", 21, "HR");
student("motu", 23, "Computer Science");

// Task 18

function add(a, b) {
  return a + b;
}

let result = add(10, 20);

console.log(result);

// Task 19

function salary(amount) {
  return amount;
}

let employeeSalary = salary(50000);

console.log(employeeSalary);

// Task 20

function bonus(salary, bonusAmount) {
  return salary + bonusAmount;
}

let totalSalary = bonus(50000, 5000);

console.log(totalSalary);

// Task 21

function employeeDetails(name, role = "Developer") {
  console.log("Name:", name);
  console.log("Role:", role);
}

employeeDetails("tom");
employeeDetails("jerry", "Designer");

// Task 22

function square(number) {
  return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(10));

// Task 23

let calculate = function (a, b) {
  return a + b;
};

console.log(calculate(10, 20));

// Task 24

let multiply = (a, b) => {
  return a * b;
};

console.log(multiply(5, 10));

// Task 25

function test() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
  }

  console.log(a);
}

test();

// Task 26

// console.log(hoistedA);

// var hoistedA = 10;

// // Task 27

// console.log(b);
// let b = 20;

// // Task 28

// console.log(c);
// const c = 30;

// // Task 29

(function () {
  console.log("Welcome to JavaScript");
})();

(function (product, discount) {
  console.log(product + " has " + discount + "% discount");
})("Laptop", 20);

// Task 30

function welcomeMessage() {
  console.log("Welcome");
}

function execute(callback) {
  callback();
}

execute(welcomeMessage);

// Task 31

function* cashback() {
  yield "10% cashback";
  yield "20% cashback";
  yield "30% cashback";
  yield "Better luck next time";
}

let cashbackResult = cashback();

for (let value of cashbackResult) {
  console.log(value);
}

// Task 32

let employees = [
  {
    name: "tom",
    age: 25,
    department: "IT",
    role: "Developer",
    salary: 40000,
  },
  {
    name: "jerry",
    age: 24,
    department: "HR",
    role: "HR Executive",
    salary: 35000,
  },
  {
    name: "motu",
    age: 28,
    department: "IT",
    role: "Senior Developer",
    salary: 60000,
  },
  {
    name: "bheem",
    age: 26,
    department: "Finance",
    role: "Accountant",
    salary: 45000,
  },
];

for (let employee of employees) {
  console.log(employee);
}

for (let employee of employees) {
  for (let key in employee) {
    console.log(key, employee[key]);
  }

  //   console.log("----------------");
}

function displayEmployee(name, age, department, role, salary) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Department:", department);
  console.log("Role:", role);
  console.log("Salary:", salary);
}

for (let employee of employees) {
  displayEmployee(
    employee.name,
    employee.age,
    employee.department,
    employee.role,
    employee.salary,
  );
}

function getSalary(employee) {
  return employee.salary;
}

let tomSalary = getSalary(employees[0]);

console.log("tom Salary:", tomSalary);

for (let employee of employees) {
  if (employee.salary >= 40000) {
    console.log(employee.name);
  }
}

let addBonus = (salary) => {
  return salary + 5000;
};

console.log("Salary after bonus:", addBonus(40000));

function* employeeBenefits() {
  yield "Medical Insurance";
  yield "Transport";
  yield "Food Allowance";
  yield "Bonus";
}

let benefits = employeeBenefits();

for (let benefit of benefits) {
  console.log(benefit);
}
