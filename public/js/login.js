import { getUsuarios } from "../services/serviciosUser.js";

const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const contraseña = document.getElementById('password').value;


    const usuarios = await getUsuarios();
    const login = usuarios.find(u => u.gmail === email && u.contraseña === contraseña);


    if (!login) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Correo o contraseña incorrecta, por favor intenta de nuevo',
        });
        return;
    }

    if (email.trim() === "" || contraseña.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos',
        });
        return;
    }

    if (login) {

        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido ' + login.nombre + '!',
            text: 'Has iniciado sesión correctamente',

        }).then(() => {
            window.location.href = '/';
        });

        console.log(login);
    }

});
