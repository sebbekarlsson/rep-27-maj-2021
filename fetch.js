const URL = "https://api.publicapis.org/entries";

fetch(URL).then(function(response){
    response.json().then(function(data){
        const myArray = data.entries;
        const myUl = document.getElementById("myUl");
        
        myArray.forEach(function(item){
            const myLiTag = document.createElement("li");
            myLiTag.innerText = item.Description;
            myUl.appendChild(myLiTag);
        });
    });
})


