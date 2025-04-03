//1. Variable & Data Types

let age = 23;
let name =  "yeshwant";
let isStudent = true;
console.log(age);
console.log(name);
console.log(isStudent);

//2. Arrays and Ascending elements

let fruits = ["Apple", "Banana", "PineApple", "Orange", "Mango"];

console.log(fruits[0]);
console.log(fruits[4]);

fruits[1] = "WaterMelon";

console.log(fruits)

//3. Array Manipulation

let numbers = [22,100,12,54,9]

numbers.push(7);
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.unshift(11)
console.log(numbers);

//4.

let numeros = [5,12,8,130,44]

let numbergreterthan10 = numeros.filter(num => (num>10));
console.log(numbergreterthan10);

let multipesof2 = numeros.map(num => (num*2));
console.log(multipesof2);

//5.

let person = {
    name : "yeshwant",
    age : 23,
    city : "chennai"
}
console.log(person.name);
console.log(person.city);

person.age = 20
console.log(person.age);

//6.

let car = {
    brand : "bmw",
    model : "xseries",
    year : 2019
}

car.color = "blue";

car.model = "zseries";

delete car.year;

console.log(car)

//7.

let books = [
    { title: "Ponniyin Selvan", author: "kalki", yearPublished: 1837 },
    { title: "Harry Potter", author: "J.K. Rowling", yearPublished: 1997 },
    { title: "The Da Vinci Code", author: "Dan Brown", yearPublished: 2003 }
];

for (let i=0; i < books.length; i++) {
    console.log(books[i].title);
}

let recentBooks = books.filter(book => book.yearPublished > 2000);
console.log(recentBooks);

//8.
let employees = [
    { name: "Alice", department: "IT", salary: 50000 },
    { name: "Bob", department: "HR", salary: 70000 },
    { name: "Charlie", department: "Finance", salary: 60000 }
    ];

let highSalaryEmployees = employees.filter(emp => emp.salary > 55000);
console.log(highSalaryEmployees);

let employeeNames = employees.map(emp => emp.name);
console.log(employeeNames);

let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);











