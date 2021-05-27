function doSomething(x, y) {
    const abc = x();
    console.log(y);
    console.log(abc);
}


doSomething(function() {
    return 100;
}, "hej");

doSomething(() => 100, "hej");

//function undefined() {}


function tja(x) {
    if (x !== undefined) {
        x();
    }
}

tja();