$(document).ready(function(){
	//underline//
	$("#HomepageSignUnderline").animate({	//let the underline appear at onload//
		width: "20vw"
	},1000);
	$("#HomepageSignText").on("mouseover",function(){		//let the underline dissapear at mouseover//
		$("#HomepageSignUnderline").animate({
			width: "-0px"
		},1000)
	})
	$("#HomepageSignText").on("mouseleave",function(){		//let the underline dissapear at mouseover//
		$("#HomepageSignUnderline").animate({
			width: "20vw"
		},1000)
	})
	//Googlesearch//
	$("#GoogleSearchInput").on("keypress",function(e){
		if(e.which == 13){
			var search = $("#GoogleSearchInput").val();
			replace(search)
		}
	})
	//Homework//
	$("#homeworkSign").on("click",function(){
		$("#homeworkScreen").css("display","block");
	})
	$("#homeworkScreen").on("click",function(){
		$("#homeworkScreen").hide();
	})
	//opening localhost//
	$("#localhostButton").on("click",function(){
		window.open("http:/127.0.0.1");	
	})
	getHomework();
	function addHomework(x,y){
		var i;
		for(i = 0;i<y;i++){
			var listItem = $("<li></li>").text(x[i]);
			$("#homeworkList").append(listItem);
		}
	}
	function getHomework(){
		var numberOfHomework = Object.keys(Homework).length;
		var i;
		var HomeworkArray = [];
		for(i = 0; i < numberOfHomework; i++){
			var Subject = Object.keys(Homework)[i];
			var toDo = Homework[Subject];
			var HomeworkAdded = (Subject + " - " + toDo);
			HomeworkArray.push(HomeworkAdded);
		}
		addHomework(HomeworkArray, numberOfHomework);			
	}
		
})

function replace(search){
	if(search != undefined){
		if(search != "I'm alone"){
			var search = search.replace(/ /g, "+");
			window.open("https://www.google.com/search?q=" + search);
		}
		if(search == "I'm alone"){
			if(prompt("identity:") == "bisexual bitch"){
				alert("Welcome");
				var password = "lemonbar";
				$(".passwordButton").trigger("click");
			}else{
				alert("Wrong password");
				window.close();
			}
		}
	}
}
//end of osf//
