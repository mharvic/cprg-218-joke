fetch("https://v2.jokeapi.dev/joke/any?safe-mode")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log(data.setup);
    joke.textContent = data.joke || data.setup + " ... " + data.delivery;
});


function programming() {
 fetch("https://v2.jokeapi.dev/joke/Programming")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log("Programming Joke");
    document.getElementById("title").innerHTML = "A Random Programming Joke";
    joke.textContent = data.joke || data.setup + " ... " + data.delivery;
});
}

function miscellaneous() {
 fetch("https://v2.jokeapi.dev/joke/miscellaneous")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log("Miscellaneous Joke");
    document.getElementById("title").innerHTML = "A Random Miscellaneous Joke";
    joke.textContent = data.joke || data.setup + " ... " + data.delivery;
});
}

function pun() {
 fetch("https://v2.jokeapi.dev/joke/pun")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log("Pun Joke");
    document.getElementById("title").innerHTML = "A Random Pun";
    joke.textContent = data.joke || data.setup + " ... " + data.delivery;
});
}


function spooky() {
 fetch("https://v2.jokeapi.dev/joke/spooky")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log("Spooky Joke");
    document.getElementById("title").innerHTML = "A Random Spooky Joke";
    joke.textContent = data.joke || data.setup + " ... " + data.delivery;
});
}

function christmas() {
 fetch("https://v2.jokeapi.dev/joke/christmas")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    console.log("Christmas Joke");
    document.getElementById("title").innerHTML = "A Random Christmas Joke";
    joke.textContent = data.joke || data.setup + " ... " + data.delivery;
});
}