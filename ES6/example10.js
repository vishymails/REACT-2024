function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Math.random();
            result > 0.5 ? resolve(result) : reject("Opps..... In Cannot Calculate")
        }, 1)
    });
}

for(let i = 0 ; i<10 ; i++) {
    asyncFunc()
    .then(result => console.log('Result : ' + result))
    .catch(result => console.log('Error : ' + result))
}