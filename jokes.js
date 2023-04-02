



const getJokeBtn = document.getElementById("get-joke-btn");

getJokeBtn.addEventListener("click", async () => {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const data = await response.json();
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent = `${data.setup} ${data.punchline}`;
  } catch (error) {
    console.error("Error:", error);
  }
});
