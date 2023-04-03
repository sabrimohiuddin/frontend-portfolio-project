




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
      postTitleElement.classList.add("loaded");

    } catch (error) {
      console.error("Error:", error);
      postTitleElement.textContent = "Failed to fetch post title";
    }
  });




document.addEventListener("DOMContentLoaded", async () => {
  const movieTitleElement = document.getElementById("movie-title");

  try {
    const response = await fetch("https://www.omdbapi.com/?apikey=433d823&t=Blade+Runner");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    movieTitleElement.textContent = `Movie Title: ${data.Title}`;
    movieTitleElement.classList.add("loaded");

  } catch (error) {
    console.error("Error:", error);
    movieTitleElement.textContent = "Failed to fetch movie title";
  }
});




  // document.addEventListener('DOMContentLoaded', () => {
  //   const form = document.getElementById('my-form');
  
  //   form.addEventListener('submit', (event) => {
  //     event.preventDefault(); // Prevent the default form submission behavior
  
  //     // Do something else, e.g., display an alert message
  //     alert('Form submitted successfully!');
  //   });
  // });
  

