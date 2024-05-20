document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var password = document.getElementById('password').value;
    var result = checkPasswordStrength(password);
    document.getElementById('result').innerText = result;
});

document.getElementById('show-password').addEventListener('change', function(event) {
    var passwordInput = document.getElementById('password');
    if (event.target.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});

function checkPasswordStrength(password) {
    const result = zxcvbn(password);
    const score = result.score; // Điểm từ 0 đến 4

    switch (score) {
        case 0:
        case 1:
            return 'Strength: Weak';
        case 2:
            return 'Strength: Medium';
        case 3:
        case 4:
            return 'Strength: Strong';
        default:
            return 'Strength: Unknown';
    }
}


