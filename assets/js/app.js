
$(document).ready(function(){

	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/', //json que contiene al arreglo results
		type: 'GET',
		datatype: 'json',
		data: {
			'limit': '611' //segun la info del json
		}
	})
	.done(function(response){
		console.log(response);
		pokemon(response);
	})
	.fail(function(){
		console.log("error");
	});

	var pokemon = function(data){

		//dentro de result están la url y el nombre del pokemon
		data.results.forEach(function(element){
			var namePokemon = element.name;
			var urlPokemon = element.url;

			//console.log(namePokemon);

			//realizamos otro llamado, ahora para acceder a las imagenes
			$.ajax({
				url: urlPokemon,
				type: 'GET',
				datatype: 'json'
			})
			.done(function(response){
				//console.log(response);
				imgPokemon(response);
			})
			.fail(function(){
				console.log("error");
			});

			//funcion para las imagenes
			var imgPokemon = function(miData){
				var idPokemon = miData.id;
				//console.log("id: " + idPokemon);

				//las fotos las podemos encontrar en formato http://pokeapi.co/media/img/'id'.png, por tanto
				//var photoPokemon = $('<img src="http://pokeapi.co/media/img/' + idPokemon + '.png" id="img' + i.toString() + '"></img>');

				//var large = tipoPokemon.length;
				/*for (i=1 ; i<=large ; i++){
					$(".mis-pokemon").append('<div class="profilePokemon" id="number' + i.toString() + '"></div>');
					$(".profilePokemon").append("#img" + i.toString()).append('<p class="nombre">' + namePokemon + '</p>');
				}*/

				//var photoPokemon = $('<img src="http://pokeapi.co/media/img/' + idPokemon + '.png" id="number' + idPokemon + '"></img>');
				$(".mis-pokemon").append('<div class="cajitaPokemon" id="cajita' + idPokemon.toString() + '"></div>');
				$("#cajita" + idPokemon.toString()).append('<a class="profilePokemon" id="profile' + idPokemon.toString() + '"></a>');
				$("#profile" + idPokemon.toString()).append('<img src="http://pokeapi.co/media/img/' + idPokemon + '.png" class="img-responsive" id="number' + idPokemon + '"></img>').append('<p class="nombre center-align">' + namePokemon + '</p>');

				//será los div contenedores de la imagen y nombre del pokemon donde se activara el modal
				$("#profile" + idPokemon.toString()).attr("href","#modal" + idPokemon.toString());

				//modal
				$("#cajita" + idPokemon.toString()).append('<div id="modal' + idPokemon.toString() + '" class="modal modal-fixed-footer"></div>');
				$("#modal" + idPokemon.toString()).append('<div class="modal-content" id="modal-content-' + idPokemon.toString() + '"></div>').append('<div class="modal-footer" id="modal-footer-' + idPokemon.toString() + '"></div>');
				//se divide en columnas el interior de los modales
				$("#modal-content-" + idPokemon.toString()).append('<div class="col m5" id="img-modal-' + idPokemon.toString() + '"></div>').append('<div class="col m7" id="info-modal-' + idPokemon.toString() + '"></div>');
				//se agrega imagen al modal
				$("#img-modal-" + idPokemon.toString()).append('<img src="http://pokeapi.co/media/img/' + idPokemon + '.png" class="img-responsive"></img>');
				//se agrega info (nombre, descripcion, etc)
				$("#info-modal-" + idPokemon.toString()).append('<p class="nombre center-align">' + namePokemon + '</p>');
				//se agrega el boton "cerrar" al footer del modal
				$("#modal-footer-" + idPokemon.toString()).append('<a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" id="btn-' + idPokemon.toString() + '">Cerrar</a>');

				//activacion modal
				$(".modal").modal();
			}
		});
	}

});