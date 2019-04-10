var database = firebase.database();

//REFERENCIAS A FIREBASE

var refUsers = firebase.database().ref('userInfo');


    $("#terminarRegBtn").on('click',function(){
      var addNewUser = refUsers.push();

      var user = firebase.auth().currentUser;
      var uid = user.uid;
      var emailUserNew = user.email;
      var nombUserNew = $("#userNameReg").val();
      var univUserNew = $("#userUniReg").val();
      var carrUserNew = $("#userCarreraReg").val();
//Validacion nombre
      if (nombUserNew != ""){

    var expresion = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;

    if (!expresion.test(nombUserNew)) {

      $(".helper-text").remove();

      $("#userNameReg").after(

        '<span class="helper-text red-text">No se permiten caracteres especiales.</span>'

      );

      return false;

    }


  }else{

    $(".helper-text").remove();

    $("#userNameReg").after(

      '<span class="helper-text red-text">Este campo es obligatorio.</span>'
    );

    return false;

  }
  //Validacion Universidad
  if (univUserNew == ""){

      $(".helper-text").remove();

      $("#userUniReg").after(

        '<span class="helper-text red-text">Este campo es obligatorio.</span>'
      );

      return false;

    }
    if (carrUserNew == ""){

        $(".helper-text").remove();

        $("#userCarreraReg").after(

          '<span class="helper-text red-text">Este campo es obligatorio.</span>'
        );

        return false;

      }
          addNewUser.set({

          	userId: uid,
          	nombUser: nombUserNew,
            emailUser: emailUserNew,
          	univUser: univUserNew,
          	carrUser: carrUserNew,
          	statusReg: 1,
            statusGroup: 0

          });


      console.log(user.email);

    });
