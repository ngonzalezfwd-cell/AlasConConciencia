document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensaje-error');

    // Obtener usuarios
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Validar credenciales
    const usuario = usuarios.find(u => u.email === email && u.password === password);

    if (usuario) {
        // Guardar sesión activa (simple)
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuario));
        window.location.href = "/";
    } else {
        mensajeError.textContent = "Correo o contraseña incorrectos.";
        mensajeError.style.display = "block";
    }
});
