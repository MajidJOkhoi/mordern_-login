const formSection = document.getElementById('formSection');
const formTitle = document.getElementById('formTitle');
const formSubtitle = document.getElementById('formSubtitle');
const authForm = document.getElementById('authForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const usernameInput = document.getElementById('usernameInput');
const formLink = document.getElementById('formLink');
const formButton = document.getElementById('formButton');
const toggleTitle = document.getElementById('toggleTitle');
const toggleText = document.getElementById('toggleText');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    if (toggleButton.textContent === 'Sign Up') {
        formTitle.textContent = 'Sign Up';
        formSubtitle.textContent = 'Or use your email for registration';
        usernameInput.classList.remove('hidden');
        formLink.classList.add('hidden');
        formButton.textContent = 'Sign Up';
        toggleTitle.textContent = 'Welcome Back!';
        toggleText.textContent = 'To keep connected with us please login with your personal info';
        toggleButton.textContent = 'Sign In';
    } else {
        formTitle.textContent = 'Sign In';
        formSubtitle.textContent = 'Or use your email account';
        usernameInput.classList.add('hidden');
        formLink.classList.remove('hidden');
        formButton.textContent = 'Sign In';
        toggleTitle.textContent = 'Hello, Friend!';
        toggleText.textContent = 'Register with your personal details to start using all our features';
        toggleButton.textContent = 'Sign Up';
    }
});
