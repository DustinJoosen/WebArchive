$(document).ready(function(){
	//allow the sliders to toggle between active
	$("#slider1").addClass("active");

	$(".slider").on("click", function(){
		$(".slider").removeClass("active");
		$(this).addClass("active");

		if($(this).attr("id") == "slider2"){
			$("#rooster_slider_sign").css("opacity", "0");
		}
		else{
			$("#rooster_slider_sign").css("opacity", "1");
		}
	})


	//google search
	$("#googleSearchInput").on("keypress", function(e){
		if(e.which == 13){
			var search = $("#googleSearchInput").val();
			$("#googleSearchInput").val("");

			search = search.replace(/ /g, "+");
			window.open("https://www.google.com/search?q=" + search);
		}
	})

	var loading_rooster = true;
	if(loading_rooster){
		//the rooster lessons
		var url = "https://horizon-rooster.herokuapp.com/api/rooster/?dag_van_week=" + String(new Date().getDay() - 1);
		console.log(url);
		$.getJSON(url)
			.done(function(data){
				if(data.length < 1){
					$("#rooster_content").append("<p>You have no lessons today</p>");
				}

				console.log(data);

				// var lessons = [];
				// for(var i = 0; i < data.length - 1; i++){
				// 	if(data[i]["vak"] == data[i + 1]["vak"]){
				// 		if(data[i]["wanneer"]["tijd"]["eind"] == data[i + 1]["wanneer"]["tijd"]["start"]){
				// 			data[i]["wanneer"]["tijd"]["eind"] = data[i + 1]["wanneer"]["tijd"]["eind"];
				// 			lessons.push(data[i]);
				// 		}
				// 	}
				// 	else{
				// 		lessons.push(data[i]);
				// 	}
				// }

				var lessons = data;

				for(var i = 0; i < lessons.length; i++){
					var lesson = lessons[i];
					$("#rooster_content").append("<li>" +
						"Vak: " + lesson["vak"] + "<br/>Docent: " + lesson["docent"] + "<br/>Plaats: " + lesson["plaats"] + 
						"<br/>Hoelaat: " + lesson["wanneer"]["tijd"]["start"] + " - " + lesson["wanneer"]["tijd"]["eind"] + "</li>");
				}
			})
			.fail(function(){
				$("#rooster_content").append("<p>Something went wrong</p>");
			})
	}

})
