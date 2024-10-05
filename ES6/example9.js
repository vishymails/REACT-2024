function printFirstAndSecondElement([first, second]) {
    console.log(first , " ", second)
}

function printSecondAndFourthelement([ , second, , fourth]){
    console.log(second , ' ' , fourth)
}

var array = [1,2,3,4,5,6]

printFirstAndSecondElement(array)

printSecondAndFourthelement(array)


function printBasicInfo({firstName, secondName, profession}) {
    console.log(firstName, " " , secondName, " ", profession)
}

var person = {
    firstName : "Ram",
    age : 38,
    secondName : "Kumar",
    children : 2,
    profession : 'Developer'
}

printBasicInfo(person)