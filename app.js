var config = {
  apiKey: "AIzaSyCJJjruki7O6i_RwHk5TjvMJwdd430TSTo",
  authDomain: "leads-interfondos.firebaseapp.com",
  databaseURL: "https://leads-interfondos.firebaseio.com",
  projectId: "leads-interfondos",
  storageBucket: "leads-interfondos.appspot.com",
  messagingSenderId: "411090660679"
};
firebase.initializeApp(config);

/* Inputs */
function writeUserData(name, email, typeDocument, numberDocument) {
  firebase.database().ref('users').push({
    name: name,
    email: email,
    typeDocument: typeDocument,
    numberDocument: numberDocument
  });
}

function validateCharacter(numberDocument, numCharacter) {
  (numberDocument.value.length > numCharacter) ? numberDocument.classList.add('is-invalid') : numberDocument.classList.remove('is-invalid');
}



(function () {
  'use strict';
  window.addEventListener('load', function () {
    const forms = document.getElementsByClassName('needs-validation');
    const name = document.getElementById('validationCustom01');
    name.focus();
    const email = document.getElementById('validationCustom02');
    const typeDocument = document.getElementById('validationCustom03');
    const numberDocument = document.getElementById('validationCustom04');
    const acceptTerms = document.getElementById('accept-terms');
    acceptTerms.addEventListener('click', function () {
      document.getElementById("validationCustom05").checked = true;
      $('#exampleModalLong').modal('hide');
    });

    numberDocument.addEventListener('input', function () {
      const numCharacterDni = 8;
      validateCharacter(numberDocument, numCharacterDni);
    });

    typeDocument.addEventListener('change', function (e) {
      const type = e.target.value;
      numberDocument.value = "";
      numberDocument.focus();
      if (type === 'c.e.') {
        numberDocument.placeholder = 'Ingrese número C.E';
        numberDocument.addEventListener('input', function () {
          const numCharacterCE = 9;
          console.log(numCharacterCE);
          validateCharacter(numberDocument, numCharacterCE);
        });
      } else if (type === 'dni') {
        numberDocument.placeholder = 'Ingrese número DNI';
        numberDocument.addEventListener('input', function () {
          const numCharacterDni = 8;
          validateCharacter(numberDocument, numCharacterDni);
        });
      }
    })

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Guarda datos de usuarios.
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        const validInputs = $('.form-control:invalid');
        const check = $('.form-check-input:invalid');
        if (validInputs.length === 0 && check.length === 0) {
          writeUserData(name.value, email.value, typeDocument.value, numberDocument.value);
          document.getElementById('register-js').classList.add('d-none');
          document.getElementById('message').classList.remove('d-none');
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();