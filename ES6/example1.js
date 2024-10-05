function f() {
    var x = 1;
    let y = 2;
    const z = 3;

    {
        var x = 100;
        let y = 200;
        const z = 300;

        console.log('x in block scope is ', x);
        console.log('x in block scope is ', y);
        console.log('x in block scope is ', z);
    }

    console.log('x outside of  block scope is ', x);
    console.log('x outside of  block scope is ', y);
    console.log('x outside of  block scope is ', z);

}


f();