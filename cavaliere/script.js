document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');

    function switchToLogin() {
        registrationForm.classList.add('fade-out');
        setTimeout(() => {
            registrationForm.style.display = 'none';
            loginForm.style.display = 'block';
            setTimeout(() => {
                loginForm.classList.add('fade-in');
            }, 10);
        }, 300);
    }

    function switchToRegister() {
        loginForm.classList.add('fade-out');
        setTimeout(() => {
            loginForm.style.display = 'none';
            registrationForm.style.display = 'block';
            setTimeout(() => {
                registrationForm.classList.add('fade-in');
            }, 10);
        }, 300);
    }

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        switchToLogin();
    });

    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        switchToRegister();
    });

    // Remove fade-in class after animation completes
    registrationForm.addEventListener('animationend', function(e) {
        if (e.animationName === 'fadeIn') {
            registrationForm.classList.remove('fade-in');
        }
    });

    loginForm.addEventListener('animationend', function(e) {
        if (e.animationName === 'fadeIn') {
            loginForm.classList.remove('fade-in');
        }
    });
}); 