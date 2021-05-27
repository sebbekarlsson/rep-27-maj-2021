/* Globala scopet */

const myName = "Sebastian Karlsson";


function myFunction() {
    /* Lokalt scope */
    //console.log(myName);

    const otherName = "John Doe";

    // detta fungerar
    function otherFunction() {
        //console.log(otherName);
    }

    otherFunction();
}

// kan inte komma at denna
// console.log(otherName);

myFunction();


function doSomething(x, y) {
    x(); // hey funktionen

    console.log(y); // 7
}

function hey() {
    console.log("hey");
}

doSomething(hey, 7);