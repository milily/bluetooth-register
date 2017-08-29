$(document).ready(function() {

	var arr = []
	registro.forEach(function(e){

		$("#show").click(function(){
			
				var mac = ""
				var option = '<option value="${e.fecha}">${e.fecha}</option>';
                    $("#fecha").append(option);
                var origen = ""
                var oporigen = '<option value="${e.origen}">${e.origen}</option>';
                    $("#origen").append(oporigen);
            $(".m").text(arr)
            arr.push(e.rssi) 

		})
	})


});