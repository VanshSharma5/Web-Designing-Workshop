document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const password = document.getElementById('password').value.trim();

    const nameError = document.createElement('span');
    const passwordError = document.getElementById('passwordError');

    if (!document.getElementById('nameError')) {
        const nameInput = document.getElementById('name');
        nameInput.insertAdjacentElement('afterend', nameError);
        nameError.id = 'nameError';
        nameError.style.color = 'red';
    }

    nameError.textContent = '';
    passwordError.textContent = '';

    let isValid = true;

    if (name.length < 6 || !/^[a-zA-Z]+$/.test(name)) {
        nameError.textContent = 'Name must contain only alphabets and be at least 6 characters long.';
        isValid = false;
    }

    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    if (isValid) {
        alert('Registration successful!');
    }
});
