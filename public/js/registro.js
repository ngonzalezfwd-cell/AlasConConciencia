import { getUsuarios, postUsuarios } from "../services/serviciosUser.js";

const btnRegistro = document.getElementById('btnRegistro');

btnRegistro.addEventListener('click', async function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const pais = document.getElementById('pais').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;
    const confirmarPassword = document.getElementById('confirmarPassword').value;

    const usuarios = await getUsuarios();

    const nuevoUsuario = {
        nombre,
        apellido,
        edad,
        genero,
        pais,
        email,
        telefono,
        password,
        rol: "user",
        foto: "../imgs/91 sin título_20260212132955.png"
    };

    const resultado = await postUsuarios(nuevoUsuario);



    // VALIDACIONES

    if (nombre.trim() === "" || apellido.trim() === "" || edad.trim() === "" || genero.trim() === "" || pais.trim() === "" || email.trim() === "" || telefono.trim() === "" || password.trim() === "" || confirmarPassword.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campos incompletos',
            text: 'Por favor, llena todos los campos obligatorios.'
        });
        return;
    }

    if (typeof nombre !== "string" || typeof apellido !== "string" || typeof genero !== "string" || typeof pais !== "string") {
        Swal.fire({
            icon: 'error',
            title: '¿Porque?',
            text: 'Estos datos no pueden ser un numero.'
        });
        return;
    }

    if (edad < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Edad invalida',
            text: 'La edad debe ser un numero positivo.'
        });
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        Swal.fire({
            icon: 'error',
            title: 'Correo invalido',
            text: 'El correo electrónico debe contener un @ y un punto.'
        });
        return;
    }

    if (telefono < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Telefono invalido',
            text: 'El telefono debe ser un numero positivo.'
        });
        return;
    }
 
    if (password !== confirmarPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Las contraseñas no coinciden.'
        });
        return;
    }

    
    if (password.length < 8) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La contraseña debe tener al menos 8 caracteres.'
        });
        return;
    }

    if (usuarios.some(u => u.email === email)) {
        Swal.fire({
            icon: 'error',
            title: 'Correo duplicado',
            text: 'Este correo electrónico ya está registrado.'
        });
        return;
    }

    // SI TODO ESTA BIEN
    if (resultado) {

        Swal.fire({
            icon: 'success',
            title: '¡Registro Exitoso!',
            text: 'Tu cuenta ha sido creada correctamente.',
            timer: 2000,
            showConfirmButton: false

        }).then(() => {
            window.location.href = '/login';
        });

    } else {
        
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al crear tu cuenta. Intenta de nuevo.'
        });
    }
});
