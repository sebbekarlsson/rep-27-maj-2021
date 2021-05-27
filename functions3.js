function doSomething(x) {
    console.log(x);

    return x();
}


const result = doSomething(function(){
    return 1;
});

console.log(result);