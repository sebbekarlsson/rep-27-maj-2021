const myArray = [
    "Apple",       // 0
    "Pear",        // 1
    "Banana"       // 2
];

function sebbesForEach(callOnItem) {
    for (let i = 0; i < this.length; i++) {
        const item = this[i];

        callOnItem(item);
    }
}

myArray.sebbesForEach = sebbesForEach;

myArray.sebbesForEach(function(item) {
    console.log(item);
});