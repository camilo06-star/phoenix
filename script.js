// Agregar evento de clic al botón de enviar
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const mensajeDedicadoDiv = document.getElementById('mensaje-dedicado');
const mensajePersonalizadoDiv = document.getElementById('mensaje-personalizado');

// Crear elemento para mostrar mensaje personalizado
const mensajePersonalizado = document.createElement('div');
mensajePersonalizado.id = 'mensaje-personalizado';
mensajePersonalizado.style.position = 'fixed';
mensajePersonalizado.style.top = '50%';
mensajePersonalizado.style.left = '50%';
mensajePersonalizado.style.transform = 'translate(-50%, -50%)';
mensajePersonalizado.style.backgroundColor = '#f2c464';
mensajePersonalizado.style.padding = '20px';
mensajePersonalizado.style.borderRadius = '10px';
mensajePersonalizado.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
mensajePersonalizado.style.zIndex = '1000';
mensajePersonalizado.style.display = 'none';

// Agregar elemento a la página
document.body.appendChild(mensajePersonalizado);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = nombreInput.value.trim();
    if (nombre) {
        // Mostrar mensaje personalizado
        mensajePersonalizado.innerHTML = `¡Feliz día de las flores amarillas, ${nombre}!Este 21 de septiembre, deja que las flores amarillas hablen por ti y llenen de luz el corazón de quien más quieres.
Las flores amarillas son el lenguaje de la amistad y la felicidad. Hoy, más que nunca, las dedico a quien ilumina tu vida.
Que las flores amarillas llenen tu día de alegría y esperanza. es como compartir un pedacito de sol con quien más amas. ¡Feliz 21 de septiembre!”.`;
        mensajePersonalizado.style.display = 'block';
        
        // Mostrar nombre de la persona en la página
        mensajeDedicadoDiv.innerHTML = `Hola, <strong>${nombre}</strong>Te regalo flores amarillas porque simbolizan la luz que trajiste a mi vida desde que te conocí.!`;
        
        // Ocultar mensaje personalizado después de 90 segundos
        setTimeout(() => {
            mensajePersonalizado.style.display = 'none';
        }, 40000);
    }
});