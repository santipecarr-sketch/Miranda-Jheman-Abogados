/* ==========================================================================
   MIRANDA JHEMAN & PARTNER'S — SCRIPT PRINCIPAL DEL SITIO
   Bloques:
     1. Menú móvil (abrir/cerrar)
     2. Validación del formulario de contacto
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ------------------------------------------------------------------
     1. MENÚ MÓVIL
     Muestra/oculta la navegación principal en pantallas pequeñas.
     ------------------------------------------------------------------ */
  var navToggle = document.querySelector(".nav-toggle");
  var mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* ------------------------------------------------------------------
     2. VALIDACIÓN DEL FORMULARIO DE CONTACTO
     Validación básica en el navegador antes de enviar.
     IMPORTANTE: un sitio estático no tiene servidor propio para procesar
     el formulario. Conecta el atributo "action" del formulario (ver
     contacto.html) a un servicio como Formspree, Web3Forms o EmailJS
     para que los mensajes lleguen a tu correo.
     ------------------------------------------------------------------ */
  var form = document.getElementById("contact-form");
  var feedback = document.getElementById("form-feedback");

  if (form) {
    form.addEventListener("submit", function (event) {
      var nombre = form.querySelector("#nombre");
      var email = form.querySelector("#email");
      var mensaje = form.querySelector("#mensaje");
      var privacidad = form.querySelector("#privacidad");
      var esValido = true;

      // Validación simple de campos obligatorios
      [nombre, email, mensaje].forEach(function (campo) {
        if (campo && campo.value.trim() === "") {
          esValido = false;
          campo.style.borderColor = "#8A2A2A";
        } else if (campo) {
          campo.style.borderColor = "";
        }
      });

      // Validación de formato de correo
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email && !emailPattern.test(email.value.trim())) {
        esValido = false;
        email.style.borderColor = "#8A2A2A";
      }

      // Validación de aceptación de aviso de privacidad
      if (privacidad && !privacidad.checked) {
        esValido = false;
      }

      if (!esValido) {
        event.preventDefault();
        if (feedback) {
          feedback.textContent = "Revisa los campos marcados: falta información obligatoria o el correo no es válido.";
          feedback.className = "form-feedback is-error";
        }
        return;
      }

      // Si el formulario aún no está conectado a un servicio de envío
      // (ver comentario arriba), evitamos el envío real y solo mostramos
      // un mensaje de confirmación visual para pruebas locales.
      if (form.getAttribute("data-demo-mode") === "true") {
        event.preventDefault();
        if (feedback) {
          feedback.textContent = "Formulario validado correctamente. Conecta un servicio de envío (ver comentarios en el código) para recibir mensajes reales.";
          feedback.className = "form-feedback is-success";
        }
        form.reset();
      }
    });
  }
});
