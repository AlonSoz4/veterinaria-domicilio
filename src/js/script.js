// Espera a que todo el HTML de la página esté cargado en el navegador
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Capturamos el formulario usando su clase CSS
    const formulario = document.querySelector('.booking-form');

    if (!formulario) return; // Resguardo de seguridad

    // 2. Escuchamos el momento exacto en que el usuario hace clic en el botón de enviar
    formulario.addEventListener('submit', function(evento) {
        
        // Evitamos que la página se recargue automáticamente
        evento.preventDefault();

        // 3. Capturamos los valores reales del index.html aplicando trim()
        const nombreTutor = document.getElementById('nombre-tutor').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const emailTutor = document.getElementById('email-tutor').value.trim(); // NUEVO
        const nombreMascota = document.getElementById('nombre-mascota').value.trim();
        const tipoMascota = document.getElementById('tipo-mascota').value;
        const servicioSelect = document.getElementById('servicio-select').value;
        const motivo = document.getElementById('motivo').value.trim();

        // 4. Limpiamos cualquier mensaje de alerta anterior
        removerAlertasAnteriores();

        // 5. SISTEMA DE VALIDACIÓN LÓGICA (RÚBRICA E8)
        let formularioValido = true;

        // Validación del Nombre del Tutor
        if (nombreTutor === "") {
            mostrarError('nombre-tutor', 'Por favor, ingresa el nombre completo del tutor.');
            formularioValido = false;
        }

        // Validación del Teléfono
        if (telefono === "") {
            mostrarError('telefono', 'El teléfono de contacto es obligatorio.');
            formularioValido = false;
        }

        // NUEVO: Validación del Email (Obligatorio y con formato correcto)
        const expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailTutor === "") {
            mostrarError('email-tutor', 'El correo electrónico es obligatorio.');
            formularioValido = false;
        } else if (!expresionEmail.test(emailTutor)) {
            mostrarError('email-tutor', 'Por favor, ingresa un correo electrónico válido (ej: nombre@correo.com).');
            formularioValido = false;
        }

        // Validación del Nombre de la Mascota
        if (nombreMascota === "") {
            mostrarError('nombre-mascota', 'Por favor, ingresa el nombre de la mascota.');
            formularioValido = false;
        }

        // Validación del Tipo de Mascota
        if (tipoMascota === "") {
            mostrarError('tipo-mascota', 'Por favor, selecciona el tipo de mascota.');
            formularioValido = false;
        }

        // Validación del Servicio Seleccionado
        if (servicioSelect === "") {
            mostrarError('servicio-select', 'Por favor, selecciona un servicio médico.');
            formularioValido = false;
        }

        // Validación del Motivo / Mensaje
        if (motivo === "") {
            mostrarError('motivo', 'Por favor, describe brevemente el motivo de la consulta.');
            formularioValido = false;
        }

        // 6. MENSAJE DE ÉXITO AL COMPLETAR CORRECTAMENTE
        if (formularioValido) {
            mostrarMensajeExito();
            formulario.reset(); // Vacía todos los casilleros automáticamente
        }
    });

    // FUNCIÓN PARA INSERTAR EL MENSAJE DE ERROR ABAJO DE CADA INPUT
    function mostrarError(idInput, textoMensaje) {
        const elementoInput = document.getElementById(idInput);
        if (!elementoInput) return;
        
        const errorContainer = document.createElement('p');
        errorContainer.className = 'error-message';
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
            <p>Nos pondremos en contacto contigo a la brevedad para confirmar la visita médica a domicilio.</p>
        `;
        formulario.appendChild(exitoContainer);
    }

    // FUNCIÓN PARA BORRAR LOS MENSAJES VIEJOS ANTES DE VOLVER A VALIDAR
    function removerAlertasAnteriores() {
        const erroresExistentes = document.querySelectorAll('.error-message');
        erroresExistentes.forEach(error => error.remove());
        
        const exitoExistente = document.querySelector('.success-message');
        if (exitoExistente) exitoExistente.remove();

        const todosLosInputs = formulario.querySelectorAll('input, select, textarea');
        todosLosInputs.forEach(input => input.style.borderColor = '#cbd5e1');
    }
});