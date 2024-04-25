const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#492005db";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = "1";
    registerForm.style.opacity = "0";

    

})

registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#492005db";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = "0";
    registerForm.style.opacity = "1";

    

})
// Función para verificar el inicio de sesión
function checkLogin() {
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
        window.location.href = 'dashboard.html';
    }
}

// Función para iniciar sesión
function login() {
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {

        localStorage.setItem('loggedIn', 'true');
      
        window.location.href = 'inicio.html';
    } else {
        alert('Por favor, ingresa un nombre de usuario y una contraseña.');
    }
}













