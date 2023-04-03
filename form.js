function handleSubmitForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const errorContainer = document.getElementById("error-container");

  // Clear the error message
  errorContainer.textContent = "";

  // Do something else, e.g., submit the form data to a server
  // ...
  alert("Form submitted successfully!");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("my-form");

  form.addEventListener("submit", handleSubmitForm);
});

