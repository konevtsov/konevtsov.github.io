 js
// Элементы управления
const authTitle = document.getElementById('auth-title');
const submitBtn = document.getElementById('submit-btn');
const toggleLink = document.getElementById('toggle-auth');
const usernameContainer = document.getElementById('username-container');
const confirmContainer = document.getElementById('confirm-container');
const emailContainer = document.getElementById('email-container');

// Состояние формы
let isSignUpMode = false;

// Обработчик переключения режима
toggleLink.addEventListener('click', function(e) {
    e.preventDefault();
    isSignUpMode = !isSignUpMode;

    if (isSignUpMode) {
        // Режим регистрации
        authTitle.textContent = 'Join Us!';
        submitBtn.textContent = 'Sign Up';
        toggleLink.textContent = 'Already have an account? Sign In';

        // Показываем дополнительные поля
        usernameContainer.style.display = 'block';
        confirmContainer.style.display = 'block';

        // Анимация появления новых полей
        [usernameContainer, confirmContainer].forEach((el, i) => {
            setTimeout(() => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(-10px)';
                el.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 10);
            }, i * 100);
        });
    } else {
        // Режим входа
        authTitle.textContent = 'Let\'s Start!';
        submitBtn.textContent = 'Sign In';
        toggleLink.textContent = 'Don\'t have an account? Sign Up';

        // Скрываем дополнительные поля с анимацией
        [usernameContainer, confirmContainer].forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                el.style.display = 'none';
            }, 300);
        });
    }

    // Анимация кнопки
    submitBtn.style.animation = 'pulseBtn 0.5s ease';
    setTimeout(() => {
        submitBtn.style.animation = '';
    }, 500);
});

// Обработчик отправки формы
submitBtn.addEventListener('click', function() {
    // Анимация нажатия
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
        this.style.transform = '';
    }, 200);

    // Получаем значения полей
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (isSignUpMode) {
        // Регистрация
        const username = document.getElementById('username').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Валидация
        if (!email || !username || !password || !confirmPassword) {
            alert('Please fill all fields!');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        console.log('Registration attempt:', { email, username, password });
        alert(`Account created for ${username}! Check your email to verify.`);
    } else {
        // Вход
        if (!email || !password) {
            alert('Please enter email and password!');
            return;
        }

        console.log('Login attempt:', { email, password });
        alert(`Welcome back, ${email.split('@')[0]}!`);
    }
});

// Оптимизация анимаций
window.addEventListener('scroll', () => {}, { passive: true });
