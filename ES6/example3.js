var array = [1,2,3,4]

const sum = (acc, value) => acc + value;
const product = (acc, value) => acc * value;

var sumOfArrayElements = array.reduce(sum, 0);
var mulOfArrayElements = array.reduce(product, 1);

console.log("SUM", sumOfArrayElements);
console.log("MULTIPLY", mulOfArrayElements);

var sumOfArrayElements1 = array.reduce((acc, value) => acc + value, 0);
var mulOfArrayElements1 = array.reduce((acc, value) => acc * value, 1);

console.log("SUM", sumOfArrayElements1);
console.log("MULTIPLY", mulOfArrayElements1);


const sum1 = (acc, value) => {
    const result = acc + value;
    console.log(acc, ' plus ', value, " is ", result)
    return result;
}

var sumOfArrayElements = array.reduce(sum1, 0);
