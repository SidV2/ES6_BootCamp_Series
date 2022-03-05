//All ES6 features with examples

//Template literals
let word1 = 'Sid';
let word2 = 'Verma';
const fullName = `${word1} ${word2}`
console.log(fullName);

//Multi line strings
let fullNameNewLine = `${word1}
${word2}
`
console.log(fullNameNewLine);

//Destructuring objects
const person = {
    firstName: 'Sid',
    lastName: 'Verma',
    address: 'abc'
}
const {firstName, lastName} = person;
console.log(`${firstName} ${lastName}`);

const personName = {
    firstName: 'Sid',
    lastName: 'Verma',
    address: 'abc'
}
const {firstName: fn, lastName: ln} = person;
console.log(`${fn} ${ln}`);

//Destructuring Arrays
let names = ['Sid', 'Saket', 'Kaydo', 'Itachi'];
let [name1, name2, name3] = names;
console.log(name1);
console.log(name2);
console.log(name3);
name3 = 'modified';
console.log(name3);

//Object Literals
function nameSetter(firstName, lastName) {
    const name = {
        firstName,
        lastName
    };
    console.log(name);
}
nameSetter('Sid', 'Verma');

//for of loop with arrays
let incomes = [100, 200, 300];
let total = 0;

for(const income of incomes) {
    total += income;
}
console.log(total);

//for of loop with arrays
let  qerty = 'Sid Verma'
for(const char of qerty) {
    console.log(char);
}

//spread operator with arrays
let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
//does not modify the original array instead creates a new reference
example2.push(7);
console.log(example2);
console.log(example1);

//spread operator with objects
let object1 = {
    firstName: 'Sid'
}
let object2 = {
    ...object1
}
console.log(object2);

//spread operator array inside an object
let object3 = {
    ...example1
}
console.log(object3);

//rest operator 
function add(...numbers) {
    let sum = 0;
    numbers.forEach((number) => {
        sum += number;
    });
    return sum;
}
let result = add(3, 4, 5, 6);
let result1 = add(1, 4, 5);
console.log(result);
console.log(result1);

//includes method simple array
let array1 = [1, 2, 3, 4, 5, 6];
console.log(array1.includes(2));