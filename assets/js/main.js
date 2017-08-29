$(document).ready(function() {

	var arr = []
	registro.forEach(function(e){

		$("#show").click(function(){
			
                var origen = ""
                var oporigen = `<option value="${e.origen}">${e.origen}</option>`;
                    $("#origen").append(oporigen);
            $(".m").text(arr)
            arr.push(e.rssi) 

		})
	})


});