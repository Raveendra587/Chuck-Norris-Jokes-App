const loadJoke = async () => {
    const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', {
        headers: {
            Accept: "application/json"
          }
    })

    const jokeData = await chuckNorrisFetch.json()

    document.getElementById('joke').textContent= jokeData.value
  }
  
document.querySelector(".load-another-btn").addEventListener("click", loadJoke)