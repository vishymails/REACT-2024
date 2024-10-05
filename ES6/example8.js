var array = ["first", "Second", "Third"]
var copyOfArray = [...array]

console.log('Copy of ', array, "is ", copyOfArray)

console.log('Are', array, 'and', copyOfArray, 'same? ', array === copyOfArray)


var array1 = ["first", "Second", "Third"]
var array2 = ["red", "green"]

var merger = [...array1, ...array2]

console.log('Merged Colors', merger

)


function printColors(first, second, third, ...others) {
    console.log(first, " ", second, " ", third, " ", "others will be followed as given below : ")
    console.log(others)
}

printColors('yellow', 'red', 'green', 'blue', 'black', 'white', 'pink')
