$("#newGroupBtn").on('click', function(){

	var grpName = $('#newGrupoName').val();
	var grpCode = $('#newGrupoCode').val();

	//Validacion nombre de grupo
    if (grpName != ""){

        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

        if (!expresion.test(grpName)) {

            $(".helper-text").remove();

            $("#newGrupoName").after(

              '<span class="helper-text red-text">No se permiten caracteres especiales.</span>'

         	);

            return false;

        }

    }else{

        $(".helper-text").remove();

        $("#newGrupoName").after(

          '<span class="helper-text red-text">Este campo es obligatorio.</span>'
        );

        return false;

    }

    //Validacion codigo de grupo
    if (grpCode != ""){

        var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]*$/;

        if (!expresion.test(grpCode)) {

            $(".helper-text").remove();

            $("#newGrupoCode").after(

              '<span class="helper-text red-text">No se permiten espacios ni caracteres especiales.</span>'

         	);

            return false;

        }

    }else{

        $(".helper-text").remove();

        $("#newGrupoCode").after(

          '<span class="helper-text red-text">Este campo es obligatorio.</span>'
        );

        return false;

    }

    firebase.database().ref('grupos').push().set({

        nombGrp: grpName,
        codeGrp: grpCode

    });

    
    var uid = firebase.auth().currentUser.uid;

	firebase.database().ref('users/' + uid).update({

		statusGroup: 1

	});    

    observador();

});