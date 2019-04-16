//Funcion registra el usuario al hacer click en Enviar
$("#registerBtn").on('click' , function(){
  var email = document.getElementById('newUserMail').value;
  var contrasena = document.getElementById('newUserPassword').value;
  var errormsg = document.getElementById('errormsg');

  if (email != ""){

    var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!expresion.test(email)) {

      $(".helper-text").remove();

      $("#newUserMail").after(

        '<span class="helper-text red-text">Escriba correctamente el correo.</span>'

      );

      return false;

    }

  }else{

    $(".helper-text").remove();

    $("#newUserMail").after(

      '<span class="helper-text red-text">Este campo es obligatorio.</span>'
    );

    return false;

  }

  /*
  VALIDAR CONTRASENA
  */

  if (contrasena != ""){

    var expresion = /^[a-zA-Z0-9]*$/;

    if (!expresion.test(contrasena)) {

      $(".helper-text").remove();

      $("#newUserPassword").after(

        '<span class="helper-text red-text">No se permiten caracteres especiales.</span>'

      );

      return false;

    }


  }else{

    $(".helper-text").remove();

    $("#newUserPassword").after(

      '<span class="helper-text red-text">Este campo es obligatorio.</span>'
    );

    return false;

  }

    firebase.auth().createUserWithEmailAndPassword(email, contrasena)

    .then(function(){
      verificarCorreo();
    })

    .catch(function(error) {

      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode == 'auth/weak-password') {
            errormsg.innerHTML = "";
            errormsg.innerHTML = 'Error: La contraseña es muy debil.';
      } else {
            errormsg.innerHTML = "";
            errormsg.innerHTML = errorMessage;
      }
      // ...
    });

});

$('#reenvioMsg').on('click','.reenvioEmailBtn', function(){
  verificarCorreo();
});

function verificarCorreo(){
  var user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
  // Email sent.
  console.log('Enviando correo...');
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
}

//Ejecutamos la funcion
window.onload = function(){
  observador();
}

//Funcion que verifica el estado del usuario en el sistema y puede obtener sus datos
//Cada vez que se ejecute nuestro sistema esta funcion se va a ejecutar automaticamente, ya que esta declarada al final para su ejecucion

function observador(){
  
  firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
      
      console.log('Si existe usuario activo');
      //Funcion para mostrar contenido al usuario logueado
      mostrarContenido(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;

      // ...
    } else {

      console.log('No existe usuario activo');

      $('.terminarReg').css("display", "none");
      $('.home').css("display", "none");
      $('.loginGrupos').css("display", "none");
      $('.load').css("display", "none");
      $('.verifyEmail').css("display", "none");
      $('.terminarReg').css("display", "none");
      $('.login').css("display", "block");
      // User is signed out.
      // ...
    }

  });
  
}

//Funcion que llena el div en el index solo si el usuario existe y es activado o logueado
function mostrarContenido(user){

  var usersRef = firebase.database().ref('/users/' + user.uid);

  if(!user.emailVerified){
    
      $('.modal').modal('close');
      $('.login').css("display", "none");
      $('.home').css("display", "none");
      $('.loginGrupos').css("display", "none");
      $('.load').css("display", "none");
      $('.terminarReg').css("display", "none");
      $('.verifyEmail').css("display", "block");
      reenviarCorreo();

  }else{
    
    usersRef.on('value', function(snapshot) {
      
	  if(snapshot.val() == null){
	  	var statusReg = 0;
	    var statusGroup = 0;
	  }else{
	  	var statusReg = snapshot.val().statusReg;
	    var statusGroup = snapshot.val().statusGroup;
	  }

      if(statusReg == 0){

        $('.login').css("display", "none");
        $('.home').css("display", "none");
        $('.loginGrupos').css("display", "none");
        $('.load').css("display", "none");
        $('.verifyEmail').css("display", "none");
        $('.terminarReg').css("display", "block");

      }else if(statusGroup == 0){

        $('.login').css("display", "none");
        $('.home').css("display", "none");
        $('.load').css("display", "none");
        $('.verifyEmail').css("display", "none");
        $('.terminarReg').css("display", "none");
        $('.loginGrupos').css("display", "block");

      }else{

        $('.modal').modal('close');
        $('.login').css("display", "none");
        $('.loginGrupos').css("display", "none");
        $('.load').css("display", "none");
        $('.verifyEmail').css("display", "none");
        $('.terminarReg').css("display", "none");
        $('.home').css("display", "block");

      }

    });

  }  

}

function reenviarCorreo(){

  var time = 60;

  var count = setInterval(function(){
    time -= 1;
    if(time == 0){
      observador();
      $('#reenvioMsg').html('¿No haz recibido ningun correo? <a class="reenvioEmailBtn btn-flat blue-text text-accent-2">Reenviar</a>');
      clearInterval(count);
    }
  },1000);
}
