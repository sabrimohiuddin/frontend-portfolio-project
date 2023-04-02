


// const url = "https://pokeapi.co/api/v2/pokemon/6"
// const p = document.querySelector(".fav-Pokemon")

// fetch(url).then((response) => response.json())
// .then((data) => {
//     p.innerHTML = `My favorite pokemon is ${data.name}<br> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="${data.name}">`
// })


// scripts.js
document.addEventListener("DOMContentLoaded", async () => {
    const postTitleElement = document.getElementById("post-title");
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const data = await response.json();
      postTitleElement.textContent = `Post title: ${data.title}`;
    } catch (error) {
      console.error("Error:", error);
      postTitleElement.textContent = "Failed to fetch post title";
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('my-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Do something else, e.g., display an alert message
      alert('Form submitted successfully!');
    });
  });
  