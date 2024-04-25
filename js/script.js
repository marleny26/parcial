const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = "1";
    registerForm.style.opacity = "0";

    document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0";

})

registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = "0";
    registerForm.style.opacity = "1";

    document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0";

})
// Función para verificar el inicio de sesión
function checkLogin() {
    // Obtiene el valor almacenado en localStorage
    const loggedIn = localStorage.getItem('loggedIn');

    // Verifica si está iniciada la sesión
    if (loggedIn === 'true') {
        // Si está iniciada la sesión, redirige a la página de inicio
        window.location.href = 'dashboard.html';
    }
}

// Función para iniciar sesión
function login() {
    // Simulación de inicio de sesión exitoso
    // Aquí podrías tener una lógica para verificar credenciales, etc.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Por simplicidad, solo comprobaremos si se han ingresado valores
    if (username && password) {
        // Establece el valor de loggedIn en true en localStorage
        localStorage.setItem('loggedIn', 'true');
        // Redirige a la página de inicio
        window.location.href = 'inicio.html';
    } else {
        alert('Por favor, ingresa un nombre de usuario y una contraseña.');
    }
}













