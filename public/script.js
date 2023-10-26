const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "EsJQu5VbtdmJEVoZqia+4Q==dfW0Y1yAmBHI9gn1";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/chucknorris";

async function getJoke() {
  try {
    jokeEl.innerText = "Chucking...";
    btnEl.disabled = true;
    btnEl.innerText = "Getting Chuck...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Get Chucking";

    jokeEl.innerText = data.joke;
  } catch (error) {
    jokeEl.innerText = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Get Chucking";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
