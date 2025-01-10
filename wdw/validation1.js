document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const phone = document.querySelector('input[name="phone"]').value.trim();

    const nameError = document.getElementById('nameError') || createErrorSpan('nameError', document.getElementById('name'));
    const passwordError = document.getElementById('passwordError');
    const emailError = document.getElementById('emailError') || createErrorSpan('emailError', document.querySelector('input[name="email"]'));
    const phoneError = document.getElementById('phoneError') || createErrorSpan('phoneError', document.querySelector('input[name="phone"]'));

    nameError.textContent = '';
    passwordError.textContent = '';
    emailError.textContent = '';
    phoneError.textContent = '';

    let isValid = true;

    if (name.length < 6 || !/^[a-zA-Z]+$/.test(name)) {
        nameError.textContent = 'Name must contain only alphabets and be at least 6 characters long.';
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email address. Please follow the format name@domain.com.';
        isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        phoneError.textContent = 'Phone number must contain exactly 10 digits.';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
    }
});


function createErrorSpan(id, referenceElement) {
    const span = document.createElement('span');
    span.id = id;
    span.style.color = 'red';
    referenceElement.insertAdjacentElement('afterend', span);
    return span;
}
