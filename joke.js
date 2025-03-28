fetch("https://v2.jokeapi.dev/joke/any?safe-mode")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    joke.textContent = data.joke || data.setup + " ... " + data.delivery;
});

    function btnJokee(clicked_id) {
    fetch('https://v2.jokeapi.dev/joke/'+ clicked_id + '?safe-mode')
    .then(Response => Response.json())
    .then(data =>{
        console.log(data);
        if (clicked_id == "Pun"){
            document.getElementById("title").innerHTML = "A Random Pun";
            joke.textContent = data.joke || data.setup + " ... " + data.delivery;
        }
        else{
            document.getElementById("title").innerHTML = "A Random " + clicked_id + " Joke";
            joke.textContent = data.joke || data.setup + " ... " + data.delivery;
        }
    }
    );
    }