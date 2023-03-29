


document.addEventListener('DOMContentLoaded', () => {
    // Replace with your chosen API URL
    const apiUrl = 'https://api.example.com/data';

    // Fetch API data on page load
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const apiDataContainer = document.getElementById('api-data-container');
            apiDataContainer.innerText = JSON.stringify(data);
        });

    // Handle form submission
    const dataForm = document.getElementById('data-form');
    const errorMessage = document.getElementById('error-message');

    dataForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputField = document.getElementById('input-field');

        if (inputField.value.trim() === '') {
            errorMessage.innerText = 'Please enter a value.';
            errorMessage.classList.remove('hidden');
        } else {
            errorMessage.classList.add('hidden');
            // Add your logic to process the form data and make an API request
            console.log('Form data:', inputField.value);
        }
    });
});
