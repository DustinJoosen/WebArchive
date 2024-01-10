//jQuery for letting the balls fal down//
$(document).ready(function(){
	var ballNumber = 0;
	$("button").on("click",function(){
		ballNumber++;
		var GV = parseInt($(this).val());
		var ball = $("<div></div>").addClass("ball").attr("id","ball"+ballNumber);
		$("#balls").append(ball);
		$("#ball"+ballNumber).animate({
			bottom:"0px"
		},GV);
		$("#NumberOfBalls").text(ballNumber + " balls have fallen");
//jQuery for getting the planet name//
		var planet = "";
		switch(GV){
			case 2595 :
				if(mercuryOrMars($(this).attr("id")) == "Mercury"){
					planet = "Mercury";
				}
				if(mercuryOrMars($(this).attr("id")) == "Mars"){
					planet = "Mars";
				}
				break;
			case 1091 : 
				planet = "Venus";
				break;
			case 980 : 
				planet = "Earth";
				break;
			case 5664 : 
				planet = "Luna";
				break;
			case 388 : 
				planet = "Jupiter";
				break;
			case 914 : 
				planet = "Saturn";
				break;
			case 1067 :
				planet = "Uranus";
				break;
			case 820 : 
				planet = "Neptune";
				break;
			case 18999 : 
				planet = "Pluto";
			}
		if(planet == "Mercury"){
			setInformation(Mercury);
		}
		if(planet == "Venus"){
			setInformation(Venus)
		}
		if(planet == "Earth"){
			setInformation(Earth)
		}
		if(planet == "Luna"){
			setInformation(Luna)
		}
		if(planet == "Mars"){
			setInformation(Mars)
		}
		if(planet == "Jupiter"){
			setInformation(Jupiter)
		}
		if(planet == "Saturn"){
			setInformation(Saturn)
		}
		if(planet == "Uranus"){
			setInformation(Uranus)
		}
		if(planet == "Neptune"){
			setInformation(Neptune)
		}
		if(planet == "Pluto"){
			setInformation(Pluto)
		}
	})
	//customisation//
	$("#customizeButton").on("click",function(){
		$("#customizeScreen").css("display","block");
	})
	//jQuery for processing the new GV//
	$("#customizeProcessing").on("click",function(){
		var val = $("#customizedGV").val();												//getting the new val, later to be converted into GV//
		var planetName = $("#planetNameInput").val();
		$("#customizedPlanetButton").text(planetName);
		alert(planetName);
		$("#ErrorMessage").css("display","none");										
		if(customizedCheck(val) == true){												//if the val isn't negative//
			var GV = parseInt(Nm2ToMs(val));											//convert the val into the new GV//
			alert("ms:"+GV);
			$("#customizeScreen").css("display","none");
			ballNumber++;
			var ball = $("<div></div>").addClass("ball").attr("id","ball"+ballNumber);	//letting the ball fall down at the new GV//
			$("#balls").append(ball);	
			$("#ball"+ballNumber).animate({
				bottom:"0px"
			},GV);
			console.log("customized: ball"+ballNumber + ". planet name: " + planetName + " .GV: " + GV);
			$("#customizedGV").val("");
		}	
		if(customizedCheck(val) == false){
			$("#ErrorMessage").css("display","block");
		}
	})
	$("#closeCustomizeScreen").on("click",function(){
		$("#customizeScreen").css("display","none");
	})
	$("#customizedPlanetButton").on("click",function(){
		if($("#customizedPlanetButton").text() == "Customized"){
			$("#customizeButton").trigger("click");	
			var ball = $("<div></div>").addClass("ball").attr("id",planetName); 
			$("#balls").append(ball);
			planetName.animate({
				bottom: "0px"
			},GV);
			$("#customizedPlanetButton").val(val);
		}
		if($("#customizedPlanetButton").text() !== "Customized"){
			ballFall(GV)
		}
	})
})
//out of the jQuery function//

var Mercury = {
	Name:"Mercury", 
	gravityValue:"3.7n/m<sup>2</sup>", 
	mass:"3.285 x 10^23 kg",
	radius:"2,439.7 km"
}
var Venus = {
	Name:"Venus", 
	gravityValue:"8.8n/m<sup>2</sup>", 
	mass:"4.867 x 10^24 kg",
	radius:"6,051.8 km"
}
var Earth = {
	Name:"Earth", 
	gravityValue:"9.8n/m<sup>2</sup>", 
	mass:"5.972 x 10^24 kg",
	radius:"6,371 km"
}
var Luna = {
	Name:"Luna", 
	gravityValue:"1.7n/m<sup>2</sup>", 
	mass:" 3.793 x 10^7kg",
	radius:"1,737.1 km"
}
var Mars = {
	Name:"Mars", 
	gravityValue:"3.7n/m<sup>2</sup>", 
	mass:"6.39 x 10^23 kg ",
	radius:"3,389.5 km"
}
var Jupiter = {
	Name:"Jupiter", 
	gravityValue:"24.7n/m<sup>2</sup>", 
	mass:"1.898 x 10^27 kg",
	radius:"69,911 km"	//muwhahaha//
}
var Saturn = {
	Name:"Saturn", 
	gravityValue:"10.5n/m<sup>2</sup>", 
	mass:"5.683 x 10^26 kg",
	radius:"58,232 km"
}
var Uranus = {
	Name:"Uranus", 
	gravityValue:"9.0n/m<sup>2</sup>", 
	mass:"8.681 x 10^25 kg",
	radius:"25,362 km"
}
var Neptune = {
	Name:"Neptune", 
	gravityValue:"11.7n/m<sup>2</sup>", 
	mass:"1.024 x 10^26 kg",
	radius:"24,622 km"
}
var Pluto = {
	Name:"Pluto", 
	gravityValue:"0.49n/m<sup>2</sup>", 
	mass:"1.30900 x 1022 kg",
	radius:"1,188.3 km"
}
//loose functions//
function customizedCheck(val){
	if(val<=0){
		return false;
	}
	if(val=>0){
		return true;
	}
}
function setInformation(place){
	var sentence = "Place: " + place.Name + "<br/> gravity value: "+ place.gravityValue + "<br/> Mass: " + place.mass + "<br/> Radius: " + place.radius; 
	$("#PlanetInformation").html(sentence);
}
//converts the N/m2 to Milliseconds//
function Nm2ToMs(val){
	return ((9.8 / val)*980)
}
function mercuryOrMars(value){
	if(value=="Mercury"){
		return "Mercury";
	}
	if(value=="Mars"){
		return "Mars";
	}
}
function ballFall(GV){
	var ball = $("<div></div>").addClass("ball").attr("id","customized_"+GV); 
	$("#balls").append(ball);
	ball.animate({
		bottom: "0px"
	},GV);
}
//copyright syter 2019//