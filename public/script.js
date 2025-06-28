document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const showLoginLink = document.getElementById('show-login');
    const showRegisterLink = document.getElementById('show-register');
    const newsGrid = document.getElementById('news-grid');
    const token = localStorage.getItem('token');

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

    // Registration
    document.querySelector('.registration-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: username, email, password })
            });
            const data = await res.json();
            if (res.ok) {
                alert('Registration successful! Please log in.');
                document.getElementById('show-login').click();
            } else {
                alert(data.message || 'Registration failed');
            }
        } catch (err) {
            alert('Registration error');
        }
    });

    // Login
    document.querySelector('.login-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok && data.token) {
                localStorage.setItem('token', data.token);
                window.location.href = 'home.html';
            } else {
                alert(data.message || 'Login failed');
            }
        } catch (err) {
            alert('Login error');
        }
    });

    // Fetch and display news
    fetch('/api/news')
        .then(res => res.json())
        .then(newsList => {
            newsGrid.innerHTML = '';
            newsList.forEach(news => {
                const card = document.createElement('div');
                card.className = 'news-card';
                card.innerHTML = `
                    <img src="${news.image || 'images/default.jpg'}" alt="News image">
                    <h2>${news.title}</h2>
                    <p>${news.content ? news.content.substring(0, 120) + '...' : ''}</p>
                    <div class="news-actions">
                        <button class="like-btn" data-id="${news.id}" ${!token ? 'disabled' : ''}><i class="fa fa-heart"></i></button>
                        <button class="save-btn" data-id="${news.id}" ${!token ? 'disabled' : ''}><i class="fa fa-bookmark"></i></button>
                    </div>
                `;
                newsGrid.appendChild(card);
            });
        });

    // Like and Save handlers (only for logged-in users)
    newsGrid.addEventListener('click', async function(e) {
        if (!token) return;
        if (e.target.closest('.like-btn')) {
            const newsId = e.target.closest('.like-btn').dataset.id;
            await fetch(`/api/news/${newsId}/react`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                body: JSON.stringify({ type: 'like' })
            });
            alert('Liked!');
        }
        if (e.target.closest('.save-btn')) {
            const newsId = e.target.closest('.save-btn').dataset.id;
            await fetch(`/api/news/${newsId}/favorite`, {
                method: 'POST',
                headers: { 'Authorization': 'Bearer ' + token }
            });
            alert('Saved!');
        }
    });
}); 