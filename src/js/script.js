// Espera a que todo el HTML de la página esté cargado en el navegador
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Capturamos el formulario usando su clase CSS
    const formulario = document.querySelector('.booking-form');

    // 2. Escuchamos el momento exacto en que el usuario hace clic en el botón de enviar
    formulario.addEventListener('submit', function(evento) {
        
        // Evitamos que la página se recargue automáticamente (comportamiento por defecto de HTML)
        evento.preventDefault();

        // 3. Capturamos los valores que el usuario escribió en cada casillero (quitando espacios vacíos)
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value; // El select no lleva trim
        const mensaje = document.getElementById('mensaje').value.trim();

        // 4. Limpiamos cualquier mensaje de alerta anterior para no acumularlos
        removerAlertasAnteriores();

        // 5. SISTEMA DE VALIDACIÓN LOGICA
        let formularioValido = true;

        // Validación del Nombre
        if (nombre === "") {
            mostrarError('nombre', 'Por favor, ingresa tu nombre completo.');
            formularioValido = false;
        }

        // Validación del Email (Usamos una expresión regular para verificar que tenga estructura de correo)
        const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            mostrarError('email', 'El correo electrónico es obligatorio.');
            formularioValido = false;
        } else if (!expresionEmail.test(email)) {
            mostrarError('email', 'Por favor, ingresa un correo electrónico válido (ej: nombre@correo.com).');
            formularioValido = false;
        }

        // Validación del Asunto (El select por defecto viene vacío "")
        if (asunto === "") {
            mostrarError('asunto', 'Por favor, selecciona el motivo de tu consulta.');
            formularioValido = false;
        }

        // Validación del Mensaje
        if (mensaje === "") {
            mostrarError('mensaje', 'Por favor, escribe un mensaje detallando tu requerimiento.');
            formularioValido = false;
        }

        // 6. MENSAJE DE ÉXITO AL COMPLETAR CORRECTAMENTE
        if (formularioValido) {
            mostrarMensajeExito();
            formulario.reset(); // Vacía todos los casilleros del formulario automáticamente
        }
    });

    // FUNCIÓN PARA INSERTAR EL MENSAJE DE ERROR ABAJO DE CADA INPUT
    function mostrarError(idInput, textoMensaje) {
        const elementoInput = document.getElementById(idInput);
        
        // Creamos una etiqueta de texto <p> en el aire
        const errorContainer = document.createElement('p');
        errorContainer.className = 'error-message'; // Le ponemos una clase para darle estilos en el CSS
        errorContainer.innerText = textoMensaje;
        
        // Insertamos el error justo debajo del casillero correspondiente
        elementoInput.parentElement.appendChild(errorContainer);
        
        // Le ponemos un borde rojo al casillero para advertir visualmente
        elementoInput.style.borderColor = '#ef4444';
    }

    // FUNCIÓN PARA CREAR EL CUADRO DE ÉXITO AL FINAL DEL FORMULARIO
    function mostrarMensajeExito() {
        const exitoContainer = document.createElement('div');
        exitoContainer.className = 'success-message';
        exitoContainer.innerHTML = `
            <h4>¡Reserva Recibida Con Éxito! 🎉</h4>
            <p>Nos pondremos en contacto contigo a la brevedad para confirmar la visita médica de tu mascota.</p>
        `;
        
        // Insertamos el cuadro de éxito al final del formulario
        formulario.appendChild(exitoContainer);
    }

    // FUNCIÓN PARA BORRAR LOS MENSAJES VIEJOS ANTES DE VOLVER A VALIDAR
    function removerAlertasAnteriores() {
        // Borramos los textos de error
        const erroresExistentes = document.querySelectorAll('.error-message');
        erroresExistentes.forEach(error => error.remove());
        
        // Borramos el cuadro de éxito si existía uno de un envío anterior
        const exitoExistente = document.querySelector('.success-message');
        if (exitoExistente) exitoExistente.remove();

        // Devolvemos el borde normal a todos los casilleros
        const todosLosInputs = formulario.querySelectorAll('input, select, textarea');
        todosLosInputs.forEach(input => input.style.borderColor = '#cbd5e1');
    }
});