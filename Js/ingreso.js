//Funcion ingresa los usuarios que ya se han registrado
$('#loginBtn').on('click', function(){
    var emaillog = document.getElementById('emailLog').value;
    var contrasenalog =document.getElementById('contrasenaLog').value;
    var errormsg = document.getElementById('errormsgLog');

    if (emaillog != ""){

        var expresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        if (!expresion.test(emaillog)) {

            $(".helper-text").remove();
            $("#emailLog").after(
            
                '<span class="helper-text red-text">Escriba correctamente el correo.</span>'
            
            );

            return false;

        }

    }else{

        $(".helper-text").remove();
        $("#emailLog").after(
            
            '<span class="helper-text red-text">Este campo es obligatorio.</span>'
        );

        return false;

    }

    /*
    VALIDAR CONTRASENA
    */

    if (contrasenalog != ""){

        var expresion = /^[a-zA-Z0-9]*$/;

        if (!expresion.test(contrasenalog)) {

            $(".helper-text").remove();
            $("#contrasenaLog").after(
                
                '<span class="helper-text red-text">No se permiten caracteres especiales.</span>'
                
            );

            return false;

        }


    }else{

        $(".helper-text").remove();
        $("#contrasenaLog").after(
            
            '<span class="helper-text red-text">Este campo es obligatorio.</span>'
        );

        return false;

    }
    
    firebase.auth().signInWithEmailAndPassword(emaillog, contrasenalog).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    if (errorCode == 'auth/user-not-found') {
        errormsg.innerHTML = "";
        errormsg.innerHTML = 'Error: Este usuario no está registrado.';
    } else {
        errormsg.innerHTML = "";
        errormsg.innerHTML = errorMessage;
    }
    });

    return true;
});