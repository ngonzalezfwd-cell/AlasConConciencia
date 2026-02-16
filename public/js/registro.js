document.getElementById('form-registro').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mensajeError = document.getElementById('mensaje-error');

    if (password.length < 6) {
        mensajeError.textContent = "La contraseña debe tener al menos 6 caracteres.";
        mensajeError.style.display = "block";
        return;
    }

    // Obtener usuarios existentes
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificar si el correo ya existe
    if (usuarios.find(u => u.email === email)) {
        mensajeError.textContent = "Este correo ya está registrado.";
        mensajeError.style.display = "block";
        return;
    }

    // Guardar nuevo usuario
    usuarios.push({ nombre, email, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "/login";
});
