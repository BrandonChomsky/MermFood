// Function to show a message or redirect to a contact form
function showContactForm() {
    alert("Gracias por tu interés. Pronto te contactaremos para comenzar tu prueba gratis.");
}

// Contact form submission simulation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Formulario enviado. Nos pondremos en contacto pronto.");
});


function openEmail() {
    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Formatear los datos para el correo
    const subject = `Consulta de ${name}`;
    const body = `Nombre: ${name}%0D%0AEmail: ${email}%0D%0AMensaje: %0D%0A${message}`;

    // Abrir el cliente de correo con "mailto:"
    window.location.href = `mailto:contacto@mermfood.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Evitar que el formulario se envíe (recargue la página)
    return false;
}

