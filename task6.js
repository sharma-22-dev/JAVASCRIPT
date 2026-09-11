// Task 1 - Student Result Analyzer

function studentResult(name, department, marks) {
  let total = 0;
  for (let mark of marks) {
    total = total + mark;
  }

  let average = total / marks.length;

  let result;
  let grade;

  if (average >= 50) {
    result = "Pass";

    if (average >= 90) {
      grade = "A";
    } else if (average >= 75) {
      grade = "B";
    } else if (average >= 60) {
      grade = "C";
    } else {
      grade = "D";
    }
  } else {
    result = "Fail";
    grade = "Fail";
  }

  console.log("Student Result");
  console.log("Name:", name);
  console.log("Department:", department);
  console.log("Total Marks:", total);
  console.log("Average:", average.toFixed(2));
  console.log("Result:", result);
  console.log("Grade:", grade);
}
studentResult("Arun", "Computer Science", [85, 90, 78, 92, 88]);

// Task 2 - Employee Salary Calculator

let employee = {
  name: "Arun",
  role: "Developer",
  salary: 45000,
  experience: 2,
};

function calculateSalary(employee) {
  let basicSalary = employee.salary;
  let bonus = 0;

  if (employee.experience >= 5) {
    bonus = (basicSalary * 15) / 100;
  } else if (employee.experience >= 2) {
    bonus = (basicSalary * 10) / 100;
  }

  let finalSalary = basicSalary + bonus;

  console.log("Salary Details");
  console.log("Name:", employee.name);
  console.log("Role:", employee.role);
  console.log("Basic Salary: ₹" + basicSalary);
  console.log("Bonus: ₹" + bonus);
  console.log("Final Salary: ₹" + finalSalary);
}

calculateSalary(employee);

// Task 3 - Product Filter System

let products = [
  { name: "Laptop", price: 55000, category: "electronics" },
  { name: "Mouse", price: 800, category: "electronics" },
  { name: "Shirt", price: 1200, category: "fashion" },
  { name: "Shoes", price: 2500, category: "fashion" },
  { name: "Phone", price: 30000, category: "electronics" },
];

let expensiveProducts = products.filter((product) => product.price > 2000);
console.log("Products above ₹2,000:");
console.log(expensiveProducts);

let electronicProducts = products.filter(
  (product) => product.category === "electronics",
);
console.log("Electronics:");
console.log(electronicProducts);

let cheapProduct = products.find((product) => product.price < 1000);
console.log("First product below ₹1,000:");
console.log(cheapProduct);

let totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total Price: ₹" + totalPrice);

let hasExpensiveProduct = products.some((product) => product.price > 50000);
console.log("Any product above ₹50,000:", hasExpensiveProduct);

let allAbove500 = products.every((product) => product.price > 500);
console.log("Every product above ₹500:", allAbove500);

// Task 4 - Employee Management

// let employees = [
//   {
//     id: 101,
//     name: "Kavin",
//     role: "Frontend Developer",
//     salary: 40000,
//   },
//   {
//     id: 102,
//     name: "Arun",
//     role: "Backend Developer",
//     salary: 55000,
//   },
//   {
//     id: 103,
//     name: "Priya",
//     role: "HR Manager",
//     salary: 60000,
//   },
//   {
//     id: 104,
//     name: "Dinesh",
//     role: "UI Designer",
//     salary: 35000,
//   },
//   {
//     id: 105,
//     name: "Meena",
//     role: "Project Manager",
//     salary: 70000,
//   },
//   {
//     id: 106,
//     name: "Ravi",
//     role: "Tester",
//     salary: 45000,
//   },
// ];

// let employeeNames = employees.map((employee) => employee.name);
// console.log("Employee Names:");
// console.log(employeeNames);

// let employeesAbove40000 = employees.filter(
//   (employee) => employee.salary > 40000,
// );
// console.log("Employees earning above ₹40,000:");
// console.log(employeesAbove40000);

// let employee = employees.find((employee) => employee.id === 103);
// console.log("Employee with ID 103:");
// console.log(employee);

// let totalSalary = employees.reduce(
//   (total, employee) => total + employee.salary,
//   0,
// );
// console.log("Total Salary: ₹" + totalSalary);

// let highestPaid = employees.reduce((highest, employee) => {
//   if (employee.salary > highest.salary) {
//     return employee;
//   }

//   return highest;
// });

// console.log("Highest Paid Employee:");
// console.log(highestPaid);

// let sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);

// console.log("Employees sorted by salary:");
// console.log(sortedEmployees);

// let namesOnly = employees.map((employee) => employee.name);
// console.log("Names Only:");
// console.log(namesOnly);

// Task 5 - Shopping Cart

let cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2000, quantity: 1 },
];

function calculateCart(cart) {
  let total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  let discount = 0;

  if (total > 50000) {
    discount = (total * 10) / 100;
  }

  let finalAmount = total - discount;

  console.log("Shopping Cart");

  console.log("Items:");

  cart.forEach((item) => {
    let itemTotal = item.price * item.quantity;

    console.log(item.name + " = ₹" + itemTotal);
  });

  console.log("Total Cart Value: ₹" + total);
  console.log("Discount: ₹" + discount);
  console.log("Final Payable Amount: ₹" + finalAmount);
}
calculateCart(cart);

// Task 6 - Student Search System

let students = [
  { name: "Arun", age: 21, mark: 85 },
  { name: "Priya", age: 22, mark: 92 },
  { name: "Karthi", age: 20, mark: 67 },
  { name: "Dinesh", age: 23, mark: 45 },
];

let studentNames = students.map((student) => student.name);
console.log("Student Names:");
console.log(studentNames);

let topStudents = students.filter((student) => student.mark > 80);
console.log("Students who scored above 80:");
console.log(topStudents);

let student = students.find((student) => student.name === "Priya");
console.log("Student named Priya:");
console.log(student);

let totalMarks = students.reduce((total, student) => total + student.mark, 0);

let averageMark = totalMarks / students.length;

console.log("Average Mark:", averageMark.toFixed(2));

let failedStudent = students.some((student) => student.mark < 50);
console.log("Anyone failed:", failedStudent);

let everyonePassed40 = students.every((student) => student.mark > 40);
console.log("Everyone scored above 40:", everyonePassed40);

let sortedStudents = [...students].sort((a, b) => b.mark - a.mark);

console.log("Students sorted by marks:");
console.log(sortedStudents);

// Task 7 - Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

let doubledNumbers = numbers.map((number) => number * 2);
console.log("Numbers multiplied by 2:");
console.log(doubledNumbers);

let evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log("Even Numbers:");
console.log(evenNumbers);

let numbersAbove15 = numbers.filter((number) => number > 15);
console.log("Numbers greater than 15:");
console.log(numbersAbove15);

let firstNumber = numbers.find((number) => number > 20);
console.log("First number greater than 20:", firstNumber);

let total = numbers.reduce((sum, number) => sum + number, 0);
console.log("Total:", total);

let hasNumberAbove40 = numbers.some((number) => number > 40);
console.log("Any number greater than 40:", hasNumberAbove40);

let allPositive = numbers.every((number) => number > 0);
console.log("Every number is positive:", allPositive);

let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Highest to Lowest:");
console.log(sortedNumbers);

// Task 8 - String Analyzer

let sentence = prompt("Enter a sentence:");

console.log("String Analyzer");

console.log("Total Characters:", sentence.length);

console.log("Uppercase:", sentence.toUpperCase());

console.log("Lowercase:", sentence.toLowerCase());

console.log("Contains JavaScript:", sentence.includes("JavaScript"));

console.log("First Character:", sentence.slice(0, 1));

console.log("Last Character:", sentence.slice(-1));

let words = sentence.trim().split(/\s+/);
console.log("Number of Words:", words.length);

let newSentence = sentence.replace("JavaScript", "Python");
console.log("After Replacement:", newSentence);

let sentenceArray = sentence.split(" ");
console.log("Sentence Array:", sentenceArray);

// Final Project - Employee Dashboard

let employees = [
  {
    id: 101,
    name: "Arun",
    department: "IT",
    salary: 45000,
    experience: 2,
  },
  {
    id: 102,
    name: "Priya",
    department: "HR",
    salary: 50000,
    experience: 4,
  },
  {
    id: 103,
    name: "Karthi",
    department: "IT",
    salary: 65000,
    experience: 6,
  },
];

console.log("Employee List");

employees.forEach((employee) => {
  console.log(
    employee.id,
    employee.name,
    employee.department,
    "₹" + employee.salary,
    employee.experience + " years",
  );
});

function searchEmployee(name) {
  let result = employees.find(
    (employee) => employee.name.toLowerCase() === name.toLowerCase(),
  );

  console.log("Search Result:");
  console.log(result);
}

searchEmployee("Priya");

function departmentFilter(department) {
  let result = employees.filter(
    (employee) =>
      employee.department.toLowerCase() === department.toLowerCase(),
  );

  console.log("Employees in " + department + ":");
  console.log(result);
}

departmentFilter("IT");

let salaryFilter = employees.filter((employee) => employee.salary > 50000);

console.log("Employees earning more than ₹50,000:");
console.log(salaryFilter);

let totalSalary = employees.reduce(
  (total, employee) => total + employee.salary,
  0,
);

console.log("Total Company Salary: ₹" + totalSalary);

let highestPaid = employees.reduce((highest, employee) => {
  if (employee.salary > highest.salary) {
    return employee;
  }

  return highest;
});

console.log("Highest Paid Employee:");
console.log(highestPaid);

let experiencedEmployees = employees.filter(
  (employee) => employee.experience > 3,
);

console.log("Employees with more than 3 years experience:");
console.log(experiencedEmployees);

let lowToHigh = [...employees].sort((a, b) => a.salary - b.salary);

console.log("Salary - Low to High:");
console.log(lowToHigh);

let highToLow = [...employees].sort((a, b) => b.salary - a.salary);

console.log("Salary - High to Low:");
console.log(highToLow);

let totalEmployees = employees.length;

let averageSalary = totalSalary / totalEmployees;

console.log("Employee Statistics");
console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalSalary);
console.log("Highest Salary: ₹" + highestPaid.salary);
console.log("Average Salary: ₹" + Math.round(averageSalary));
