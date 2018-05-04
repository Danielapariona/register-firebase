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
function writeUserData(name, email, dni) {
  firebase.database().ref('users').push({
    name: name,
    email: email,
    dni: dni
  });
}

(function () {
  'use strict';
  window.addEventListener('load', function () {
    const forms = document.getElementsByClassName('needs-validation');
    const dni = document.getElementById('validationCustom03');
    dni.addEventListener('input', function () {
      const emailValid = document.getElementById('invalid-dni');
      (dni.value.length > 8) ? emailValid.classList.add('d-block') : emailValid.classList.remove('d-block');
    });

    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Guarda datos de usuarios.
        const name = document.getElementById('validationCustom01').value;
        const email = document.getElementById('validationCustom02').value;
        const dni = document.getElementById('validationCustom03');
        if (name !== "" && email !== "" && dni.value !== "" && form.checkValidity()) {
          writeUserData(name, email, dni.value);
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