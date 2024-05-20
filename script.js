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
    // Bạn sẽ thêm thuật toán kiểm tra mật khẩu ở đây.
    // Tạm thời, hàm này sẽ trả về "Strength: Weak".
    return 'Strength: Weak';
}
