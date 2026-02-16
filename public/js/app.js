document.addEventListener('DOMContentLoaded', function() {

    // Navegación con scroll suave
    const enlaces = document.querySelectorAll('#menu-navegacion a');

    enlaces.forEach(enlace => {

        enlace.addEventListener('click', (e) => {

            const idDestino = enlace.getAttribute('href');

            // Solo aplicar scroll suave si es un enlace interno (empieza con #)

            if (idDestino.startsWith('#')) {
                e.preventDefault();
                const seccionDestino = document.querySelector(idDestino);

                if (seccionDestino) {

                    window.scrollTo({
                        top: seccionDestino.offsetTop - 80, // Ajuste para el header fijo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // Efecto de transparencia en el header al hacer scroll

    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {

        if (window.scrollY > 50) {
            header.style.padding = '10px 5%';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '25px 5%';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });


    // Animación simple de aparición para tarjetas al hacer scroll
    
    const tarjetas = document.querySelectorAll('.tarjeta-especie');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // Interacción del Mapa para móviles (Click para mostrar info)
    const puntosMapa = document.querySelectorAll('.punto-interactivo');

    puntosMapa.forEach(punto => {
        punto.addEventListener('click', (e) => {
            mostrarInfo(punto);
            e.stopPropagation();
        });
    });

    // Interacción por sectores
    const sectoresMapa = document.querySelectorAll('.sector-mapa');
    sectoresMapa.forEach(sector => {
        sector.addEventListener('click', (e) => {
            const pinId = sector.getAttribute('data-pin');
            const pin = document.getElementById(`pin-${pinId}`);
            if (pin) {
                mostrarInfo(pin);
            }
            e.stopPropagation();
        });
    });

    function mostrarInfo(punto) {
        const info = punto.querySelector('.parrafo-info');
        const estaVisible = window.getComputedStyle(info).visibility === 'visible';

        // Cerramos otros puntos abiertos
        puntosMapa.forEach(p => {
            const pInfo = p.querySelector('.parrafo-info');
            pInfo.style.opacity = '0';
            pInfo.style.visibility = 'hidden';
            pInfo.style.transform = 'translateX(-50%) scale(0.8)';
            pInfo.style.bottom = '40px';
        });

        if (!estaVisible) {
            info.style.opacity = '1';
            info.style.visibility = 'visible';
            info.style.transform = 'translateX(-50%) scale(1)';
            info.style.bottom = '50px';
        }
    }

    // Cerrar popups al hacer click fuera
    document.addEventListener('click', () => {
        puntosMapa.forEach(p => {
            const info = p.querySelector('.parrafo-info');
            info.style.opacity = '';
            info.style.visibility = '';
            info.style.transform = '';
            info.style.bottom = '';
        });
    });
    // Manejo de Sesión (Login/Logout dinámico)
    const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado'));
    const navLogin = document.getElementById('nav-login');
    const navRegistro = document.getElementById('nav-registro');
    const navUserInfo = document.getElementById('nav-user-info');
    const userGreeting = document.getElementById('user-greeting');

    if (usuarioLogueado) {
        if (navLogin) navLogin.style.display = 'none';
        if (navRegistro) navRegistro.style.display = 'none';
        if (navUserInfo) {
            navUserInfo.style.display = 'flex';
            if (userGreeting) {
                userGreeting.textContent = `¡Hola, ${usuarioLogueado.nombre.split(' ')[0]}!`;
            }
        }
    } else {
        if (navLogin) navLogin.style.display = 'block';
        if (navRegistro) navRegistro.style.display = 'block';
        if (navUserInfo) navUserInfo.style.display = 'none';
    }

    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('usuarioLogueado');
            window.location.reload();
        });
    }
});

