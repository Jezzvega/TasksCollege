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
            "UMECIT": null,
            "Universidad de Panamá (UP)": null,
            "Universidad Latina de Panamá (ULAT)": null,
            "Universidad Interamericana de Panamá": null,
            "Universidad del Arte GANEXA": null,
            "Universidad Tecnológica de Panamá (UTP)": null,
            "ISAE UNIVERSIDAD": null,
            "Universidad Católica Santa María La Antigua": null,
            "Universidad de Santander Panamá": null,
            "Columbus University": null,
            "IBI Universidad Bancaria": null,
            "Universidad Especializada de las Américas": null,
            "Universidad Politécnica Internacional": null,
            "Universidad Alta Dirección UAD": null,
            "Instituto de Estudios Superiores de Administración IESA": null,
            "Quality Leadership University QLU": null,
            "Florida State University": null,
            "Universidad del Istmo Panamá": null,
            "Universidad Interamericana de Puerto Rico": null,
            "Universidad Americana (UAM)": null,
            "Universidad Cristiana de Panamá": null,
            "Universidad Internacional de Ciencia y Tecnología UNICYT": null,
            "Universidad Latinoamericana de Comercio Exterior ULACEX": null,
            "Instituto Superior de Ingeniería": null,
            "Instituto Superior Politécnico de América": null,
            "Universidad de Cartago": null,
            "Universidad Hispanoamericana de Panamá": null,
            "Universidad Marítima Internacional de Panamá": null,
            "Universidad Autónoma de Chiriquí": null,
            "Universidad Abierta y a Distancia de Panamá": null,
            "INCAE BUSINESS SCHOOL": null,
            "Universidad Especializada del Contador Público Autorizado UNESCPA": null,
            "Escuela de Arquitectura y Diseño de América Latina y el Caribe ISTHMUS": null,
            "Universidad Tecnológica Oteima": null
          },
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space