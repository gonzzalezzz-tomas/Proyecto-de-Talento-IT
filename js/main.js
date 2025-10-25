
const alertBtn = document.getElementById('alertBtn');

if (alertBtn) {
    alertBtn.onclick = function() {
        alert('OFERTA ESPECIAL! \n\n20% OFF con código: ALICE20\n\n¡No te lo pierdas!');
    };
}

const botonesComprar = document.querySelectorAll('.btn-comprar');

botonesComprar.forEach(function(boton) {
    boton.onclick = function() {
        alert('Producto agregado al carrito!\n\nSegui comprando!');
    };
});

const tallaBtns = document.querySelectorAll('.talla');

tallaBtns.forEach(function(btn) {
    btn.onclick = function() {
        // Resetear hermanos
        const hermanos = this.parentElement.querySelectorAll('.talla');
        hermanos.forEach(function(h) {
            h.style.backgroundColor = 'white';
            h.style.borderColor = '#e5e7eb';
            h.style.color = '#333';
        });
        
        // Seleccionar actual
        this.style.backgroundColor = '#dc2626';
        this.style.borderColor = '#dc2626';
        this.style.color = 'white';
    };
});

const codigosBtns = document.querySelectorAll('.codigo');

codigosBtns.forEach(function(codigo) {
    codigo.onclick = function() {
        const texto = this.textContent;
        alert('Código copiado: ' + texto + '\n\n¡Úsalo en tu compra!');
    };
});

// validacion de formulario
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function(e) {
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !correo || !mensaje) {
            alert('Por favor completa todos los campos');
            e.preventDefault();
            return false;
        }

        if (!correo.includes('@')) {
            alert('Correo invalido');
            e.preventDefault();
            return false;
        }

        console.log('Formulario enviado:', nombre, correo);
    });
}

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

console.log(' Alice In Strings cargado correctamente');
