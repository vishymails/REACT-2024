// for each 

console.log("\n\n foreach \n")

var colors = ['green', 'blue', 'red', 'pink'];

function print(val) {
    console.log(val);
}

colors.forEach(print);



console.log("\n\n map \n")

function capitalize(val) {
    return val.toUpperCase();
}

var capitalizedColors = colors.map(capitalize);

console.log(capitalizedColors);




console.log("\n\n filter \n")

var values = [1, 60, 34, 30, 20, 5]

function lessThan20(val) {
    return val < 20;
}

var valuesLessThan20 = values.filter(lessThan20);

console.log(valuesLessThan20);



console.log("\n\n find \n")

var people = [
    {name : "jack", age : 50 },
    {name : "Ram", age : 40 },
    {name : "John", age : 25 },
    {name : "Anna", age : 19 },
    {name : "Raj", age : 16 }
    
]

function teenager(person) {
    return person.age > 10 && person.age < 20
}

var firstTeenager = people.find(teenager);

console.log('first Found Teenager : ', firstTeenager.name);



console.log("\n\n every \n")

var everyTeenager = people.every(teenager);

console.log('Every Teenager : ', everyTeenager);



console.log("\n\n some \n")

var someTeenager = people.some(teenager);

console.log('Every Teenager : ', someTeenager);



console.log("\n\n reduce \n")

var array = [1, 2, 3, 4]

function sum (acc, value) {
    return acc + value;
}

var sumOfArrayElements = array.reduce(sum, 0)
console.log("Sum of array values ", sumOfArrayElements)

function product (acc, value) {
    return acc * value;
}

var mulOfArrayElements = array.reduce(product, 1)
console.log("Multiply of array values ", mulOfArrayElements)

