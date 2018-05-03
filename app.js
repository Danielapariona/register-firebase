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
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Guarda datos de usuarios.
        const name = document.getElementById('validationCustom01').value;
        const email = document.getElementById('validationCustom02').value;
        const dni = document.getElementById('validationCustom03').value;
        if (name !== "" && email !== "" && dni !== "" && form.checkValidity()) {
          writeUserData(name, email, dni);
          document.getElementById('register-js').classList.add('d-none');
          document.getElementById('message').classList.remove('d-none');
        }


        if (form.checkValidity() === false ) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();