const form = document.getElementById('registrationForm');

const button = form.lastElementChild;

//pilla todos menos el boton
const inputs = [...form.elements].filter( f => f !== button);

button.addEventListener('click', validation);

// function validation(event) {
//   event.preventDefault(); // Previene el envío del formulario

//   inputs.forEach(input => {
//     if (input.type === 'checkbox') {
//       const span = input.nextElementSibling;
//         span.innerHTML = ""; // Mensaje de error
//     } else {
//       const span = document.getElementById(input.id + "Error");
//       if (!input.checkValidity()) {
//         span.innerHTML = input.validationMessage; // Mensaje de error
//       } else {
//         span.innerHTML = ''; // Limpia el mensaje si es válido
//       }
//     }
//   });
// }

function validation(event) {
  event.preventDefault(); // Previene el envío del formulario
  inputs.forEach(input => {
      const span = input.nextElementSibling;
      if (!input.checkValidity()) {
        span.innerHTML = input.validationMessage; // Mensaje de error
      } else {
        span.innerHTML = ''; // Limpia el mensaje si es válido
    }
  });
}
