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
    const numberDocument = document.getElementById('validationCustom04');
    const typeDocument = document.getElementById('validationCustom03');
    numberDocument.addEventListener('input', function () {
      const numCharacterDni = 8;
      validateCharacter(numberDocument, numCharacterDni);
    });

    typeDocument.addEventListener('change', function (e) {
      const type = e.target.value;
      numberDocument.value = "";
      numberDocument.focus();
      if (type === 'c.e.') {
        console.log('c.e');
        numberDocument.addEventListener('input', function () {
          const numCharacterCE = 9;
          validateCharacter(numberDocument, numCharacterCE);
        });
      } else if (type === 'dni') {
        console.log('dni');
        numberDocument.addEventListener('input', function () {
          const numCharacterDni = 8;
          validateCharacter(numberDocument, numCharacterCE);
        });
      }
    })

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Guarda datos de usuarios.
        
        const email = document.getElementById('validationCustom02').value;


        if (name !== "" && email !== "" && numberDocument.value !== "" && form.checkValidity()) {
          writeUserData(name, email, typeDocument.value, numberDocument.value);
          document.getElementById('register-js').classList.add('d-none');
          document.getElementById('message').classList.remove('d-none');
        }

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();