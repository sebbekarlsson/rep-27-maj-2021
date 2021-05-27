function* myInfiniteList() {
    for (let i = 0; i < 100; i++) {
        yield Math.floor(Math.random() * 1000);
    }
}

const generator = myInfiniteList();

const wholeList = Array.from(generator);

console.log(wholeList);