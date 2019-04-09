(function ($) {
    $(function () {

        //BAINAS DE MATERIALIZE CSS

        $('.sidenav').sidenav();

        $('.modal').modal();

        $('.tabs').tabs();

        $('.fixed-action-btn').floatingActionButton();

        $('.dropdown-trigger').dropdown();

        $('.collapsible').collapsible({
            accordion: false
        });

        $('select').formSelect();

        $('.datepicker').datepicker({
          format: 'dd-mm-yyyy',
          selectMonths: true, // Creates a dropdown to control month
          selectYears: 15 // Creates a dropdown of 15 years to control year
        });

        $('input#input_text, textarea#detallesNewTask').characterCounter();

        $('input.autocomplete').autocomplete({
          data: {
            "Universidad Técnologica de Panamá": null,
            "Universidad de Panamá": null

            /*
             UMECIT
             Universidad de Panamá (UP)
             Universidad Latina de Panamá
             Universidad Interamericana de Panamá
             Universidad del Arte GANEXA
             Universidad Tecnológica de Panamá
             ISAE UNIVERSIDAD
             Universidad Católica Santa María La Antigua
             Universidad de Santander Panamá
             Columbus University
             IBI Universidad Bancaria
             Universidad Especializada de las Américas
             Universidad Politécnica Internacional
             Universidad Alta Dirección UAD
             Instituto de Estudios Superiores de Administración IESA
             Quality Leadership University QLU
             Florida State University
             Universidad del Istmo Panamá
             Universidad Interamericana de Puerto Rico
             Universidad Americana (UAM)
             Universidad Cristiana de Panamá
             Universidad Internacional de Ciencia y Tecnología UNICYT
             Universidad Latinoamericana de Comercio Exterior ULACEX
             Instituto Superior de Ingeniería
             Instituto Superior Politécnico de América
             Universidad de Cartago
             Universidad Hispanoamericana de Panamá
             Universidad Marítima Internacional de Panamá
             Universidad Autónoma de Chiriquí
             Universidad Abierta y a Distancia de Panamá
             INCAE BUSINESS SCHOOL
             Universidad Especializada del Contador Público Autorizado UNESCPA
             Escuela de Arquitectura y Diseño de América Latina y el Caribe ISTHMUS
             Universidad Tecnológica Oteima
            */
          },
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space