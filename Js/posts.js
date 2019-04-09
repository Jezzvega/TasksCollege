function nuevaTarea(){

	//VALIDA QUE LA MATERIA ESTÉ SELECCIONADA
	var materiaSelect =  $('#materiaSelect').children("option:selected").val();

	if(materiaSelect == ""){

		$(".helper-text").remove();

		$('#materiaSelect').after('<span class="helper-text red-text">Error: Debe seleccionar una materia.</span>');

		return false;

	}

	//VALIDA QUE EL TIPO DE ASIGNACION ESTÉ SELECCIONADO
	var tipoSelect =  $('#tipoSelect').children("option:selected").val();

	if(tipoSelect == ""){

		$(".helper-text").remove();

		$('#tipoSelect').after('<span class="helper-text red-text">Error: Debe seleccionar el tipo de asignacion.</span>');

		return false;

	}

	var fechaNewTask =  $('#fechaNewTask').val();
	var checkNewTask =  $('#checkNewTask').prop('checked');
	var detallesNewTask =  $('#detallesNewTask').val();

	console.log(
				'materia: ' + materiaSelect,
				'tipo: ' + tipoSelect,
				'fecha: ' + fechaNewTask,
				'Es importante: ' + checkNewTask,
				'Detalles: ' + detallesNewTask
				);

	return false;

}