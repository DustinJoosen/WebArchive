function overhoren(){
	var points = 0;													//sum of good answers. being used to calculate grade.
	var active = "active";
	var numberOfQuestions = 15;
//question 1 starts here//
	if(active=="active"){											//als je nog geen stop hebt getypt.
		var YourAnswer1 = prompt("#1 " + Question1);				//youw antwoord opvragen en in een variabele zetten.
		var YourAnswer1 = YourAnswer1.toLowerCase().trim();			//die variabele in lowercase zetten en spaties verwijderen.
		if(YourAnswer1==CorrectAnswer1){							//als jouw antwoord gelijk is aan het juiste antwoord.
			alert("good answer");									//geef een bericht met dat het goed is.
			points++;												//punten gaat 1 omhoog.
		}				
		if(YourAnswer1!=CorrectAnswer1){							//als jouw antwoord niet gelijk is aan het juiste antwoord.
			if(YourAnswer1=="dev"){									//als het fout is, word gecheckt of het dev is.
				points++;											//punten gaat 1 omhoog, instant good.
			}
			if(YourAnswer1=="stop"){								//als het fout is, word gecheckt of het stop is.
				active="unactive";									//als het stop is, word active op "unactive" gezet.
				numberOfQuestions = 1;								//aantal vragen om te berekenen wat je cijfer is.
				points--;
				if(active=="unactive"){								//als active op unactive staat,
					alert('stopped');								//bericht dat je bent gestopt.
				}
			}	
			if(YourAnswer1!="dev"&&YourAnswer1!="stop"){
				alert('wrong, the correct answer is ' + CorrectAnswer1);
				points=0;
			}
		}
	}
//question 2 starts here//
	if(active=="active"){
		var YourAnswer2 = prompt(Question2);
		var YourAnswer2 = YourAnswer2.toLowerCase().trim();
		if(YourAnswer2==CorrectAnswer2){
			alert("good answer");
			points++;
		}
		if(YourAnswer2!=CorrectAnswer2){
			if(YourAnswer2=="dev"){
				points++;
			}
			if(YourAnswer2=="stop"){
				active="unactive";
				numberOfQuestions = 2;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer2!="dev"&&YourAnswer2!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer2)
			}
		}
	}
//question 3 starts here//
	if(active=="active"){
		var YourAnswer3 = prompt(Question3);
		var YourAnswer3 = YourAnswer3.toLowerCase().trim();
		if(YourAnswer3==CorrectAnswer3){
			alert("good answer");
			points++;
		}
		if(YourAnswer3!=CorrectAnswer3){
			if(YourAnswer3=="dev"){
				points++;
			}
			if(YourAnswer3=="stop"){
				active="unactive";
				numberOfQuestions = 3;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer3!="dev"&&YourAnswer3!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer3);
			}
		}
	}
//question 4 starts here//
	if(active=="active"){
		var YourAnswer4 = prompt("#4 " + Question4);
		var YourAnswer4 = YourAnswer4.toLowerCase().trim();
		if(YourAnswer4==CorrectAnswer4){
			alert("good answer");
			points++;
		}
		if(YourAnswer4!=CorrectAnswer4){
			if(YourAnswer4=="dev"){
				points++;
			}
			if(YourAnswer4=="stop"){
				active="unactive";
				numberOfQuestions = 4;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer4!="dev"&&YourAnswer4!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer4);
			}
		}
	}
//question 5 starts here//
	if(active=="active"){
		var YourAnswer5 = prompt(Question5);
		var YourAnswer5 = YourAnswer5.toLowerCase().trim();
		if(YourAnswer5==CorrectAnswer5){
			alert("good answer");
			points++;
		}
		if(YourAnswer5!=CorrectAnswer5){
			if(YourAnswer5=="dev"){
				points++;
			}
			if(YourAnswer5=="stop"){
				active="unactive";
				numberOfQuestions = 5;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer5!="dev"&&YourAnswer5!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer5);
			}
		}
	}
//question 6 starts here//
	if(active=="active"){
		var YourAnswer6 = prompt(Question6);
		var YourAnswer6 = YourAnswer6.toLowerCase().trim();
		if(YourAnswer6==CorrectAnswer6){
			alert("good answer");
			points++;
		}
		if(YourAnswer6!=CorrectAnswer6){
			if(YourAnswer6=="dev"){
				points++;
			}
			if(YourAnswer6=="stop"){
				active="unactive";
				numberOfQuestions = 6;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer6!="dev"&&YourAnswer6!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer6);
			}
		}
	}
//question 7 starts here//
	if(active=="active"){
		var YourAnswer7 = prompt(Question7);
		var YourAnswer7 = YourAnswer7.toLowerCase().trim();
		if(YourAnswer7==CorrectAnswer7){
			alert("good answer");
			points++;
		}
		if(YourAnswer7!=CorrectAnswer7){
			if(YourAnswer7=="dev"){
				points++;
			}
			if(YourAnswer7=="stop"){
				active="unactive";
				numberOfQuestions = 7;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer7!="dev"&&YourAnswer7!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer7);
			}
		}
	}
//question 8 starts here//
	if(active=="active"){
		var YourAnswer8 = prompt(Question8);
		var YourAnswer8 = YourAnswer8.toLowerCase().trim();
		if(YourAnswer8==CorrectAnswer8){
			alert("good answer");
			points++;
		}
		if(YourAnswer8!=CorrectAnswer8){
			if(YourAnswer8=="dev"){
				points++;
			}
			if(YourAnswer8=="stop"){
				active="unactive";
				numberOfQuestions = 8;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer8!="dev"&&YourAnswer8!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer8);
			}
		}
	}
//question 9 starts here//
	if(active=="active"){
		var YourAnswer9 = prompt("#9 " + Question9);
		var YourAnswer9 = YourAnswer9.toLowerCase().trim();
		if(YourAnswer9==CorrectAnswer9){
 			alert("good answer");
			points++;
		}
		if(YourAnswer9!=CorrectAnswer9){
			if(YourAnswer9=="dev"){
				points++;
			}
			if(YourAnswer9=="stop"){
				active="unactive";
				numberOfQuestions = 9;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer9!="dev"&&YourAnswer9!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer9);
			}
		}
	}
//question 10 starts here//
	if(active=="active"){
		var YourAnswer10 = prompt("#10 " + Question10);
		var YourAnswer10 = YourAnswer10.toLowerCase().trim();
		if(YourAnswer10==CorrectAnswer10){
			alert("good answer");
			points++;
		}
		if(YourAnswer10!=CorrectAnswer10){
			if(YourAnswer10=="dev"){
				points++;
			}
			if(YourAnswer10=="stop"){
				active="unactive";
				numberOfQuestions = 10;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer10!="dev"&&YourAnswer10!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer10);
			}
		}
	}
//question 11 starts here//
	if(active=="active"){
		var YourAnswer11 = prompt("#11 " + Question11);
		var YourAnswer11 = YourAnswer11.toLowerCase().trim();
		if(YourAnswer11==CorrectAnswer11){
			alert("good answer");
			points++;
		}
		if(YourAnswer11!=CorrectAnswer11){
			if(YourAnswer11=="dev"){
				points++;
			}
			if(YourAnswer11=="stop"){
				active="unactive";
				numberOfQuestions = 11;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer11!="dev"&&YourAnswer11!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer11);
			}
		}
	}
//question 12 starts here//
if(active=="active"){
		var YourAnswer12 = prompt("#12 " + Question12);
		var YourAnswer12 = YourAnswer12.toLowerCase().trim();
		if(YourAnswer12==CorrectAnswer12){
			alert("good answer");
			points++;
		}
		if(YourAnswer12!=CorrectAnswer12){
			if(YourAnswer12=="dev"){
				points++;
			}
			if(YourAnswer12=="stop"){
				active="unactive";
				numberOfQuestions = 12;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer12!="dev"&&YourAnswer12!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer12);
			}
		}
	}
//question 13 starts here//
if(active=="active"){
		var YourAnswer13 = prompt("#13 " + Question13);
		var YourAnswer13 = YourAnswer13.toLowerCase().trim();
		if(YourAnswer13==CorrectAnswer13){
			alert("good answer");
			points++;
		}
		if(YourAnswer13!=CorrectAnswer13){
			if(YourAnswer13=="dev"){
				points++;
			}
			if(YourAnswer13=="stop"){
				active="unactive";
				numberOfQuestions = 13;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer13!="dev"&&YourAnswer13!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer13);
			}
		}
	}
//question 14 starts here//
if(active=="active"){
		var YourAnswer14 = prompt("#14 " + Question14);
		var YourAnswer14 = YourAnswer14.toLowerCase().trim();
		if(YourAnswer14==CorrectAnswer14){
			alert("good answer");
			points++;
		}
		if(YourAnswer14!=CorrectAnswer14){
			if(YourAnswer14=="dev"){
				points++;
			}
			if(YourAnswer14=="stop"){
				active="unactive";
				numberOfQuestions = 14;
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer14!="dev"&&YourAnswer14!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer14);
			}
		}
	}
//question 15 starts here//
if(active=="active"){
		var YourAnswer15 = prompt("#15 " + Question15);
		var YourAnswer15 = YourAnswer15.toLowerCase().trim();
		if(YourAnswer15==CorrectAnswer15){
			alert("good answer");
			points++;
			numberOfQuestions = 15;
		}
		if(YourAnswer15!=CorrectAnswer15){
			numberOfQuestions = 15;
			if(YourAnswer15=="dev"){
				points++;
			}
			if(YourAnswer15=="stop"){
				active="unactive";
				numberOfQuestions = 15;
				if(confirm('you sure??? you are at the last question...')){
					alert('okay, whatever you want twinkle toes.');
				}
				else{
					alert('smart decision. P.S. dev is shorter PLUS it will be counted as a good answer');
					active = "active";
				}
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer15!="dev"&&YourAnswer15!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer15);
			}
		}
	}
	if(points==0){
		points=points+1;
	}
	document.getElementById('points').innerHTML = points + " points out of " + numberOfQuestions + ".";
	document.getElementById('grade').innerHTML = ((points/numberOfQuestions)*10);
}
//question 16 starts here//
if(active=="active"){
		var YourAnswer16 = prompt("#16 " + Question16);
		var YourAnswer16 = YourAnswer16.toLowerCase().trim();
		if(YourAnswer16==CorrectAnswer16){
			alert("good answer");
			points++;
			numberOfQuestions = 16;
		}
		if(YourAnswer16!=CorrectAnswer16){
			numberOfQuestions = 16;
			if(YourAnswer16=="dev"){
				points++;
			}
			if(YourAnswer16=="stop"){
				active="unactive";
				numberOfQuestions = 16;
				if(confirm('you sure??? you are at the last question...')){
					alert('okay, whatever you want twinkle toes.');
				}
				else{
					alert('smart decision. P.S. dev is shorter PLUS it will be counted as a good answer');
					active = "active";
				}
				if(active=="unactive"){
					alert("stopped");
				}
			}
			if(YourAnswer16!="dev"&&YourAnswer16!="stop"){
				alert("wrong. the correct answer is " + CorrectAnswer16);
			}
		}
	}
	if(points==0){
		points=points+1;
	}
	document.getElementById('points').innerHTML = points + " points out of " + numberOfQuestions + ".";
	document.getElementById('grade').innerHTML = ((points/numberOfQuestions)*10);