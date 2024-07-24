document.getElementById('infoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let age = document.getElementById('age').value.trim();
    let message = document.getElementById('message');

    // Data validation
    if (!name) {
        message.textContent = 'Name is required.';
        return;
    }

    if (!email) {
        message.textContent = 'Email is required.';
        return;
    } else {
        // Simple email validation
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            message.textContent = 'Please enter a valid email address.';
            return;
        }
    }

    if (!age) {
        message.textContent = 'Age is required.';
        return;
    } else {
        age = parseInt(age);
        if (isNaN(age) || age < 0 || age > 120) {
            message.textContent = 'Please enter a valid age between 0 and 120.';
            return;
        }
    }

    // If validation passes, show success message and clear the form
    message.style.color = 'green';
    message.textContent = 'Form submitted successfully!';
    document.getElementById('infoForm').reset();
});
