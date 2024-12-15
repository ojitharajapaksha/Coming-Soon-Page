document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput');
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', () => {
        const email = emailInput.value.trim();
        if (email) {
            alert(`Thank you for subscribing! We’ll keep you updated at: ${email}`);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
});
