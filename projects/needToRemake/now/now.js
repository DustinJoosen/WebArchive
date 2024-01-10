window.onload = onload(); 
//variables:
var seconds = 0;
var STO_Timer;
var dissapearSetTimeout;
var randomseconds;
var Timer = document.getElementById('Timer');
var points = 900;
var bot1 = 900;
var bot2 = 900;
//functions for the timer
function addSeconds(){
	seconds++;
	Timer.innerHTML = seconds;
	timer();
}
function timer(){
	STO_Timer = setTimeout(addSeconds,1000);
	Timer.className = "dissapear";
	document.getElementById('StartButton').style.display = "none";
}
function stopButton(){
	if(seconds!="undefined" && randomseconds!="undefined"){
		if(seconds!=0 && randomseconds!=0){
			if(seconds===randomseconds){
				Timer.style.color="rgb(0,255,0)";
				clearTimeout(STO_Timer);
				Timer.className = "appearAgain";
				Timer.style.display="block";
				console.log('+300');
				document.getElementById('switchScreen_nb').style.display = "block";
				points = points+300;
			}
			if(seconds!=randomseconds){
				alert('wrong, ' + seconds)
				console.log('-200');
				points = points-200;
			}
			if(seconds>=(randomseconds+10)){
				alert('you missed it by 10 secs.')
				document.getElementById('switchScreen_nb').style.display = "block";
			}
			if(points<=0){
				alert("game over");
				window.reload();
			}
		}
	}
}
//functions for the game
function onload(){
	setSeconds();
}
function screenSwitch(a,b,c,x,y){
	document.getElementById('LevelScreen').style.display = x;
	document.getElementById('ScoreScreen').style.display = y;
	reset();
	if(x=="block"&&y=="none"){			//at the levelscreen//
		Timer.innerHTML = "";
		document.getElementById('body').style.backgroundColor = "rgb(100,100,255)";
		Timer.style.color = "rgb(100,100,255)";
	}
	if(x!="block"&&y!="none"){			//at the score screen//
		document.getElementById('Player1_Points').innerHTML = points + " points";
		bot1 += (((1+Math.random()*2).toFixed(0))*100);
		document.getElementById('Player2_Points').innerHTML = bot1 + "points";
		bot2 += (((1+Math.random()*2).toFixed(0))*100);
		document.getElementById('Player3_Points').innerHTML = bot2 + "points";
		alert(a + b + c)
	}
	if(x!="block"&&y!="block"||x!="none"&&y!="none"){
		alert('okay, wow. i have no idea how you fucked this up... you will only get this message when both screens are at display:none, OR when both screens display at the same time.')
		alert('please contact me and tell me how the fuck you did this.');
	}
}
function setPointsOrder(x,y){
	var points = [points, bot1, bot2];
	points.sort(function(a,b){return a - b});
	var points1 = points[0];
	var points2 = points[1];
	var points3 = points[2];
	var x = x;
	var y = y;
	screenSwitch(points1,points2,points3,x,y)	
}
//functions for resetting
function setSeconds(){
	randomseconds = (5+(Math.round(Math.random()*10)));
	document.getElementById('StopButton').innerHTML = randomseconds;
}
function reset(){
	seconds=0;
	setSeconds();
	document.getElementById('StartButton').style.display= "block";
	clearTimeout(STO_Timer);
	Timer.className = "appearAgain";
	document.getElementById('switchScreen_nb').style.display = "none";
	stopButton();
	if(document.getElementById('ScoreScreen').style.display == "block"){
		Timer.className = "dissapear"; 
	}
}