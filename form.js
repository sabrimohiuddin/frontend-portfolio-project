document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('my-form');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      const errorContainer = document.getElementById('error-container');
      
      // Check if any input field is empty
      if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        // Add an error message to the DOM
        errorContainer.innerHTML = 'Please fill out all the fields.';
        return;
      }
  
      // Clear the error message
      errorContainer.innerHTML = '';
  
      // Do something else, e.g., submit the form data to a server
      // ...
      alert('Form submitted successfully!');
    });
  });
  


