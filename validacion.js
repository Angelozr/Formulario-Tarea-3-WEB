const formulario = document.getElementById('formulario');
const btnEnviar = document.getElementById('btn-enviar');
const inputs = document.querySelectorAll('#formulario input');

// Agregar evento submit al formulario
formulario.addEventListener('submit', function(evento) {
  evento.preventDefault(); // Evitar que se recargue la página
  validarFormulario();
});

// Función para validar el formulario
function validarFormulario() {
  // Variables para almacenar los resultados de validación
  let cedulaValida = false;
  let telefonoValido = false;

  // Validar número de cédula
  const cedulaInput = document.getElementById('cedula');
  const cedula = cedulaInput.value.trim();
  const cedulaRegex = /^[0-9]{10}$/; // Cédula debe tener 10 dígitos numéricos
  if (cedulaRegex.test(cedula)) {
    cedulaInput.classList.remove('error');
    cedulaValida = true;
  } else {
    cedulaInput.classList.add('error');
  }

  // Validar número de teléfono
  const telefonoInput = document.getElementById('telefono');
  const telefono = telefonoInput.value.trim();
  const telefonoRegex = /^[0-9]{10}$/; // Teléfono debe tener 10 dígitos numéricos
  if (telefonoRegex.test(telefono)) {
    telefonoInput.classList.remove('error');
    telefonoValido = true;
  } else {
    telefonoInput.classList.add('error');
  }

  // Si todos los datos son válidos, enviar formulario
  if (cedulaValida && telefonoValido) {
    enviarFormulario();
  }
}

// Función para enviar el formulario
function enviarFormulario() {
  btnEnviar.disabled = true;
  btnEnviar.textContent = 'Enviando...';
  setTimeout(function() {
    btnEnviar.textContent = 'Enviado';
    mensaje.textContent = 'Formulario enviado';
    mensaje.classList.add('enviado');
    formulario.reset();
    btnEnviar.disabled = false;
  }, 1000);
}

// Agregar evento click al botón de envío
btnEnviar.addEventListener('click', function() {
  validarFormulario();
});

// Agregar evento input a los campos de formulario
inputs.forEach(input => {
  input.addEventListener('input', function() {
    input.classList.remove('error');
  });
});
