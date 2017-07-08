
$(document).ready(function(){

	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon/', //json que contiene al arreglo results
		type: 'GET',
		datatype: 'json',
		data: {
			'limit': '811'
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
			var name = element.name;
			var url = element.url;

			console.log(name);
		});
		/*var name = "";
		var url = "";
		data.forEach(function(element){
			gif = element.images.downsized_large.url;
			url = element.bitly_gif_url;
			$("#elementos").append(armarTemplate(gif,url));
		});*/
	}

	var armarTemplate = function(gif,url){
		var t = "<div class='elemento'><img src='" + gif + "'/><a href='" + url + "'>Ver más</a></div>";
		return t;
	}
});