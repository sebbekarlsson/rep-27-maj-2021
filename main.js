const myUl = document.getElementById("myUl");

const myArray = [
    "Apple",       // 0
    "Pear",        // 1
    "Banana"       // 2
]

myArray.forEach(function(item) {
    const myLiTag = document.createElement("li");
    myLiTag.innerText = item;
    myUl.appendChild(myLiTag);
});