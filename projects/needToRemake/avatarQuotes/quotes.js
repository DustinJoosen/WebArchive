var Korra = "rgb(50,204,254)";
	var Tenzin = "rgb(255,127,38)";
	var Gyatso = "#ff7f26";
	var Iroh = "rgb(250,39,28)";
	var Toph = "#996600";
	var Aang = "rgb(255,127,38)";
	var Raava = "rgb(108,227,235)";
	var Zaheer = "rgb(180,180,180)";
	var Katara = "#8080ff";
	var Guru_laghima = "#e6e6ff";
	var Guru_pathik = "rgb(255,0,0)";
	var Zuko = "rgb(255,137,1)";
	var Roku = "rgb(255,137,1)";
	var Pathik = "rgb(255,137,1)";
	var Sokka = "#8080ff";
	var Jet = "rgb(#996600)";
	var Azula = "rgb(255,137,1)";
	var Mai = "rgb(255,137,1)";
	var Smellerbee = "#dd99ff";
	var Bolin = "#996600";
	var Suki = "lightgreen";
	var Jeong_Jeong ="rgb(255,137,1)";
	var y;	
Quote();
function Quote(){
	refresh();
	//variables//
	var dayNumber = new Date().getDate();
	//dayNumber = 13;
 	var monthNumber = (new Date().getMonth()+1);
	//var monthNumber = 4;
	var QuoteOfTheDay;
	var QuoteOfTheDaySource;
	var QuoteOfTheDaySeries;
	var color;
	var QuoteHolder = document.getElementById('QuoteHolder');
	var credits = document.getElementById('credits');
	var contact = document.getElementById('contact');
	var creditsInfo = document.getElementById('creditsInfo');
	if(dayNumber!=(new Date().getDate())){											//safety net for if the date doesn't works.
		dayNumber = new Date().getDate();
		alert("there has been an error, the safety net has (we hope) deleted the problem but i'd like you to contact us so errors like this can be prevented. thank you.")	
	}
	if(monthNumber!=((new Date().getMonth()+1))){										//same here, but for the month.
		monthNumber = (new Date().getMonth()+1);
		alert("there has been an error, the safety net has (we hope) deleted the problem but i'd like you to contact us so errors like this can be prevented. thank you.")
	}
	if(monthNumber == 2){
		switch(new Date().getDate()){
			case 25:
				QuoteOfTheDay = "okay, so we don't know how the heck you came here before you are supposed to";
				QuoteOfTheDaySource = "but please report this to us, so we can help you fixing it";
				QuoteOfTheDaySeries = "and if you can code and got yourself in, we don't care. we put litterly 0 security in this project so no need to be proud." 
				break;
			case 26:
				QuoteOfTheDay = "okay, so we don't know how the heck you came here before you are supposed to";
				QuoteOfTheDaySource = "but please report this to us, so we can help you fixing it";
				QuoteOfTheDaySeries = "and if you can code and got yourself in, we don't care. we put litterly 0 security in this project so no need to be proud." 
				break;
			case 27:
				QuoteOfTheDay = "okay, so we don't know how the heck you came here before you are supposed to";
				QuoteOfTheDaySource = "but please report this to us, so we can help you fixing it";
				QuoteOfTheDaySeries = "and if you can code and got yourself in, we don't care. we put litterly 0 security in this project so no need to be proud." 
				break;
			case 28:
				QuoteOfTheDay = "okay, so we don't know how the heck you came here before you are supposed to";
				QuoteOfTheDaySource = "but please report this to us, so we can help you fixing it";
				QuoteOfTheDaySeries = "and if you can code and got yourself in, we don't care. we put litterly 0 security in this project so no need to be proud." 
				break;
			case 29:
				QuoteOfTheDay = "okay, so we don't know how the heck you came here before you are supposed to";
				QuoteOfTheDaySource = "but please report this to us, so we can help you fixing it";
				QuoteOfTheDaySeries = "and if you can code and got yourself in, we don't care. we put litterly 0 security in this project so no need to be proud." 
				break;
		}
	}	
	if(monthNumber == 3){												//in final version change into 3
		switch(dayNumber){
			case 1:
				QuoteOfTheDay = Quote1.Quote;
				QuoteOfTheDaySource = Quote1.source();
				QuoteOfTheDaySeries = Quote1.series; 
				color = Quote1.person;
				break;
			case 2:
				QuoteOfTheDay = Quote2.Quote;
				QuoteOfTheDaySource = Quote2.source();
				QuoteOfTheDaySeries = Quote2.series;
				color = Quote2.person
				break;
			case 3:
				QuoteOfTheDay = Quote3.Quote;
				QuoteOfTheDaySource = Quote3.source();
				QuoteOfTheDaySeries = Quote3.series;
				color = Quote3.person 
				break;
			case 4:
				QuoteOfTheDay = Quote4.Quote;
				QuoteOfTheDaySource = Quote4.source();
				QuoteOfTheDaySeries = Quote4.series; 
				color = Quote4.person
				break;
			case 5:
				QuoteOfTheDay = Quote5.Quote;
				QuoteOfTheDaySource = Quote5.source();
				QuoteOfTheDaySeries = Quote5.series; 
				color = Quote5.person;
				break;
			case 6 :
				QuoteOfTheDay = Quote6.Quote;
				QuoteOfTheDaySource = Quote6.source();
				QuoteOfTheDaySeries = Quote6.series;
				color = Quote6.person; 
				break;
			case 7 :
				QuoteOfTheDay = Quote7.Quote;
				QuoteOfTheDaySource = Quote7.source();
				QuoteOfTheDaySeries = Quote7.series; 
				color = Quote7.person;
				break;
			case 8 :
				QuoteOfTheDay = Quote8.Quote;
				QuoteOfTheDaySource = Quote8.source();
				QuoteOfTheDaySeries = Quote8.series; 
				color = Quote8.person;
				break;
			case 9 :
				QuoteOfTheDay = Quote9.Quote;
				QuoteOfTheDaySource = Quote9.source();
				QuoteOfTheDaySeries = Quote9.series; 
				color = Quote9.person;
				break;
			case 10 :
				QuoteOfTheDay = Quote10.Quote;
				QuoteOfTheDaySource = Quote10.source();
				QuoteOfTheDaySeries = Quote10.series;
				color = Quote10.person; 
				break;
			case 11 :
				QuoteOfTheDay = Quote11.Quote;
				QuoteOfTheDaySource = Quote11.source();
				QuoteOfTheDaySeries = Quote11.series;
				color = Quote11.person;
				break;
			case 12 :
				QuoteOfTheDay = Quote12.Quote;
				QuoteOfTheDaySeries = Quote12.series;
				QuoteOfTheDaySource = Quote12.source();
				color = Quote12.person;
				break;
			case 13 :
				QuoteOfTheDay = Quote13.Quote;
				QuoteOfTheDaySource = Quote13.source();
				QuoteOfTheDaySeries = Quote13.series;
				color = Quote13.person;
				break;
			case 14 :
				QuoteOfTheDay = Quote14.Quote;
				QuoteOfTheDaySource = Quote14.source();
				QuoteOfTheDaySeries = Quote14.series;
				color = Quote14.person;
				break;
			case 15 :
				QuoteOfTheDay = Quote15.Quote;
				QuoteOfTheDaySource = Quote15.source();
				QuoteOfTheDaySeries = Quote15.series;
				color = Quote15.person;
				break;
			case 16 :
				QuoteOfTheDay = Quote16.Quote;
				QuoteOfTheDaySource = Quote16.source();
				QuoteOfTheDaySeries = Quote16.series;
				color = Quote16.person;
				break;
			case 17 :
				QuoteOfTheDay = Quote17.Quote;
				QuoteOfTheDaySource = Quote17.source();
				QuoteOfTheDaySeries = Quote17.series;
				color = Quote17.person; 
				break;
			case 18 :
				QuoteOfTheDay = Quote18.Quote;
				QuoteOfTheDaySource = Quote18.source();
				QuoteOfTheDaySeries = Quote18.series;
				color = Quote18.person;
				break;
			case 19 :
				QuoteOfTheDay = Quote19.Quote;
				QuoteOfTheDaySource = Quote19.source();
				QuoteOfTheDaySeries = Quote19.series;
				color = Quote19.person;
				break;
			case 20 :
				QuoteOfTheDay = Quote20.Quote;
				QuoteOfTheDaySource = Quote20.source();
				QuoteOfTheDaySeries = Quote20.series;
				color = Quote20.person;
				break;
			case 21 :
				QuoteOfTheDay = Quote21.Quote;
				QuoteOfTheDaySource = Quote21.source();
				QuoteOfTheDaySeries = Quote21.series;
				color = Quote21.person;
				break;
			case 22 :
				QuoteOfTheDay = Quote22.Quote;
				QuoteOfTheDaySource = Quote22.source();
				QuoteOfTheDaySeries = Quote22.series;
				color = Quote22.person;
				break;
			case 23 :
				QuoteOfTheDay = Quote23.Quote;
				QuoteOfTheDaySource = Quote23.source();
				QuoteOfTheDaySeries = Quote23.series;
				color = Quote23.person;
				break;
			case 24 :
				QuoteOfTheDay = Quote24.Quote;
				QuoteOfTheDaySource = Quote24.source();
				QuoteOfTheDaySeries = Quote24.series;
				color = Quote24.person;
				break;
			case 25 :
				QuoteOfTheDay = Quote25.Quote;
				QuoteOfTheDaySource = Quote25.source();
				QuoteOfTheDaySeries = Quote25.series;
				color = Quote25.person;
				break;
			case 26 :
				QuoteOfTheDay = Quote26.Quote;
				QuoteOfTheDaySource = Quote26.source();
				QuoteOfTheDaySeries = Quote26.series;
				color = Quote26.person;
				break;
			case 27 :
				QuoteOfTheDay = Quote27.Quote;
				QuoteOfTheDaySource = Quote27.source();
				QuoteOfTheDaySeries = Quote27.series;
				color = Quote27.person;
				break;
			case 28 :
				QuoteOfTheDay = Quote28.Quote;
				QuoteOfTheDaySource = Quote28.source();
				QuoteOfTheDaySeries = Quote28.series;
				color = Quote28.person;
				break;
			case 29 :
				QuoteOfTheDay = Quote29.Quote;
				QuoteOfTheDaySource = Quote29.source();
				QuoteOfTheDaySeries = Quote29.series;
				color = Quote29.person;
				break;
			case 30 :
				QuoteOfTheDay = Quote30.Quote;
				QuoteOfTheDaySource = Quote30.source();
				QuoteOfTheDaySeries = Quote30.series;
				color = Quote30.person;
				break;
			case 31 :
				QuoteOfTheDay = Quote31.Quote;
				QuoteOfTheDaySource = Quote31.source();
				QuoteOfTheDaySeries = Quote31.series;
				color = Quote31.person;
				break;
			default:
				QuoteOfTheDay 		= "Oops, firelord ozai has broken the code, please contact us.";
				QuoteOfTheDaySource = "Oops, firelord ozai has broken the code, please contact us.";
				QuoteOfTheDaySeries = "Oops, firelord ozai has broken the code, please contact us.";
				break;
			}
		}
	if(monthNumber == 4){														
		switch(dayNumber){
			case 1:
				QuoteOfTheDay = Quote32.Quote;
				QuoteOfTheDaySource = Quote32.source();
				QuoteOfTheDaySeries = Quote32.series; 
				color = Quote32.person;  
				break;
			case 2:
				QuoteOfTheDay = Quote33.Quote;
				QuoteOfTheDaySource = Quote33.source();
				QuoteOfTheDaySeries = Quote33.series; 
				color = Quote33.person;  
				break;
			case 3:
				QuoteOfTheDay = Quote34.Quote;
				QuoteOfTheDaySource = Quote34.source();
				QuoteOfTheDaySeries = Quote34.series; 
				color = Quote34.person;
				break;
			case 4:
				QuoteOfTheDay = Quote35.Quote;
				QuoteOfTheDaySource = Quote35.source();
				QuoteOfTheDaySeries = Quote35.series; 
				color = Quote35.person;
				break;
			case 5:
				QuoteOfTheDay = Quote36.Quote;
				QuoteOfTheDaySource = Quote36.source();
				QuoteOfTheDaySeries = Quote36.series; 
				color = Quote36.person;
				break;
			case 6 :
				QuoteOfTheDay = Quote37.Quote;
				QuoteOfTheDaySource = Quote37.source();
				QuoteOfTheDaySeries = Quote37.series; 
				color = Quote37.person;
				break;
			case 7 :
				QuoteOfTheDay = Quote38.Quote;
				QuoteOfTheDaySource = Quote38.source();
				QuoteOfTheDaySeries = Quote38.series; 
				color = Quote38.person;
				break;
			case 8 :
				QuoteOfTheDay = Quote39.Quote;
				QuoteOfTheDaySource = Quote39.source();
				QuoteOfTheDaySeries = Quote39.series; 
				color = Quote39.person;
				break;
			case 9 :
				QuoteOfTheDay = Quote40.Quote;
				QuoteOfTheDaySource = Quote40.source();
				QuoteOfTheDaySeries = Quote40.series; 
				color = Quote40.person;
				break;
			case 10 :
				QuoteOfTheDay = Quote41.Quote;
				QuoteOfTheDaySource = Quote41.source();
				QuoteOfTheDaySeries = Quote41.series; 
				color = Quote41.person;
				break;
			case 11 :
				QuoteOfTheDay = Quote42.Quote;
				QuoteOfTheDaySource = Quote42.source();
				QuoteOfTheDaySeries = Quote42.series;
				color = Quote42.person;
				break;
			case 12 :
				QuoteOfTheDay = Quote43.Quote;
				QuoteOfTheDaySource = Quote43.source();
				QuoteOfTheDaySeries = Quote43.series;
				color = Quote43.person;
				break;
			case 13 :
				QuoteOfTheDay = Quote44.Quote;
				QuoteOfTheDaySource = Quote44.source();
				QuoteOfTheDaySeries = Quote44.series;
				color = Quote44.person;
				break;
			case 14 :
				QuoteOfTheDay = Quote45.Quote;
				QuoteOfTheDaySource = Quote45.source();
				QuoteOfTheDaySeries = Quote45.series;
				color = Quote45.person;
				break;
			case 15 :
				QuoteOfTheDay = Quote46.Quote;
				QuoteOfTheDaySource = Quote46.source();
				QuoteOfTheDaySeries = Quote46.series;
				color = Quote46.person;
				break;
			case 16 :
				QuoteOfTheDay = Quote47.Quote;
				QuoteOfTheDaySource = Quote47.source();
				QuoteOfTheDaySeries = Quote47.series;
				color = Quote47.person;
				break;
			case 17 :
				QuoteOfTheDay = Quote48.Quote;
				QuoteOfTheDaySource = Quote48.source();
				QuoteOfTheDaySeries = Quote48.series; 
				color = Quote48.person;
				break;
			case 18 :
				QuoteOfTheDay = Quote49.Quote;
				QuoteOfTheDaySource = Quote49.source();
				QuoteOfTheDaySeries = Quote49.series;
				color = Quote49.person;
				break;
			case 19 :
				QuoteOfTheDay = Quote50.Quote;
				QuoteOfTheDaySource = Quote50.source();
				QuoteOfTheDaySeries = Quote50.series;
				color = Quote50.person;
				break;
			case 20 :
				QuoteOfTheDay = Quote51.Quote;
				QuoteOfTheDaySource = Quote51.source();
				QuoteOfTheDaySeries = Quote51.series;
				color = Quote51.person;
				break;
			case 21 :
				QuoteOfTheDay = Quote52.Quote;
				QuoteOfTheDaySource = Quote52.source();
				QuoteOfTheDaySeries = Quote52.series;
				color = Quote52.person;
				break;
			case 22 :
				QuoteOfTheDay = Quote53.Quote;
				QuoteOfTheDaySource = Quote53.source();
				QuoteOfTheDaySeries = Quote53.series;
				color = Quote53.person;
				break;
			case 23 :
				QuoteOfTheDay = Quote54.Quote;
				QuoteOfTheDaySource = Quote54.source();
				QuoteOfTheDaySeries = Quote54.series;
				color = Quote54.person;
				break;
			case 24 :
				QuoteOfTheDay = Quote55.Quote;
				QuoteOfTheDaySource = Quote55.source();
				QuoteOfTheDaySeries = Quote55.series;
				color = Quote55.person;
				break;
			case 25 :
				QuoteOfTheDay = Quote56.Quote;
				QuoteOfTheDaySource = Quote56.source();
				QuoteOfTheDaySeries = Quote56.series;
				color = Quote56.person;
				break;
			case 26 :
				QuoteOfTheDay = Quote57.Quote;
				QuoteOfTheDaySource = Quote57.source();
				QuoteOfTheDaySeries = Quote57.series;
				color = Quote57.person;
				break;
			case 27 :
				QuoteOfTheDay = Quote58.Quote;
				QuoteOfTheDaySource = Quote58.source();
				QuoteOfTheDaySeries = Quote58.series;
				color = Quote58.person;
				break;
			case 28 :
				QuoteOfTheDay = Quote59.Quote;
				QuoteOfTheDaySource = Quote59.source();
				QuoteOfTheDaySeries = Quote59.series;
				color = Quote59.person;
				break;
			case 29 :
				QuoteOfTheDay = Quote60.Quote;
				QuoteOfTheDaySource = Quote60.source();
				QuoteOfTheDaySeries = Quote60.series;
				color = Quote60.person;
				break;
			case 30 :
				QuoteOfTheDay = Quote61.Quote;
				QuoteOfTheDaySource = Quote61.source();
				QuoteOfTheDaySeries = Quote61.series;
				color = Quote61.person;
				break;
			default:
				QuoteOfTheDaySource = "Oops, firelord ozai has broken the code, please contact us.";
				QuoteOfTheDaySource = "Oops, firelord ozai has broken the code, please contact us.";
				QuoteOfTheDaySeries = "Oops, firelord ozai has broken the code, please contact us.";
				break;
			}
		}
		document.getElementById('Quote').innerHTML = QuoteOfTheDay;
		document.getElementById('QuoteSource').innerHTML = QuoteOfTheDaySource;
		document.getElementById('series').innerHTML = QuoteOfTheDaySeries;
		/*if(color=="Korra"){
			credits.style.backgroundColor = Korra;
			contact.style.backgroundColor = Korra;
			creditsInfo.style.backgroundColor = Korra;
		}
		if(color=="tenzin"){
			QuoteHolder.style.backgroundColor = Tenzin;					FUCK THIS SHITTY PART!!!
			credits.style.backgroundColor = Tenzin;						I HOPE YOU BURN IN HELL LITTLE ERROR!!!
			contact.style.backgroundColor = Tenzin;
			creditsInfo.style.backgroundColor = Tenzin;
		}
		if(color=="Iroh"){
			QuoteHolder.style.backgroundColor = Iroh;
			credits.style.backgroundColor = Iroh;
			contact.style.backgroundColor = Iroh;
			creditsInfo.style.backgroundColor = Iroh;
		}
		if(color=="toph"){
			QuoteHolder.style.backgroundColor = Toph;
			credits.style.backgroundColor = Toph;
			contact.style.backgroundColor = Toph;
			creditsInfo.style.backgroundColor = Toph;
		}
		if(color=="aang"){
			QuoteHolder.style.backgroundColor = Aang;
			credits.style.backgroundColor = Aang;
			contact.style.backgroundColor = Aang;
			creditsInfo.style.backgroundColor = Aang;
		}
		if(color=="raava"){
			QuoteHolder.style.backgroundColor = Raava;
			credits.style.backgroundColor = Raava;
			contact.style.backgroundColor = Raava;
			creditsInfo.style.backgroundColor = Raava;
		}
		if(color=="zaheer"){
			QuoteHolder.style.backgroundColor = Zaheer;
			credits.style.backgroundColor = Zaheer;
			contact.style.backgroundColor = Zaheer;
			creditsInfo.style.backgroundColor = Zaheer;
		}
		if(color=="katara"){
			QuoteHolder.style.backgroundColor = Katara;
			credits.style.backgroundColor = Katara;
			contact.style.backgroundColor = Katara;
			creditsInfo.style.backgroundColor = Katara;
		}
		if(color=="guru laghima"){
			QuoteHolder.style.backgroundColor = Guru_laghima;
			credits.style.backgroundColor = Guru_laghima;
			contact.style.backgroundColor = Guru_laghima;
			creditsInfo.style.backgroundColor = Guru_laghima;
		}		
		if(color="zuko"){
			QuoteHolder.style.backgroundColor = Zuko;
			credits.style.backgroundColor = Zuko;
			contact.style.backgroundColor = Zuko;
			creditsInfo.style.backgroundColor = Zuko;
		}
		if(color="roku"){
			QuoteHolder.style.backgroundColor = Roku;
			credits.style.backgroundColor = Roku;
			contact.style.backgroundColor = Roku;
			creditsInfo.style.backgroundColor = Roku;
		}
		if(color="sokka"){
			QuoteHolder.style.backgroundColor = Sokka;
			credits.style.backgroundColor = Sokka;
			contact.style.backgroundColor = Sokka;
			creditsInfo.style.backgroundColor = Sokka;
		}
		if(color="jet"){
			QuoteHolder.style.backgroundColor = Jet;
			credits.style.backgroundColor = Jet;
			contact.style.backgroundColor = Jet;
			creditsInfo.style.backgroundColor = Jet;
		}
		if(color="azula"){
			QuoteHolder.style.backgroundColor = Azula;
			credits.style.backgroundColor = Azula;
			contact.style.backgroundColor = Azula;
			creditsInfo.style.backgroundColor = Azula;
		}
		if(color="guru pathik"){
			QuoteHolder.style.backgroundColor = Guru_pathik;
			credits.style.backgroundColor = Guru_pathik;
			contact.style.backgroundColor = Guru_pathik;
			creditsInfo.style.backgroundColor = Guru_pathik;
		}
		if(color="mai"){
			QuoteHolder.style.backgroundColor = Mai;
			credits.style.backgroundColor = Mai;
			contact.style.backgroundColor = Mai;
			creditsInfo.style.backgroundColor = Mai;
		}
		if(color="smellerbee"){
			QuoteHolder.style.backgroundColor = Smellerbee;
			credits.style.backgroundColor = Smellerbee;
			contact.style.backgroundColor = Smellerbee;
			creditsInfo.style.backgroundColor = Smellerbee;
		}
		if(color=="bolin"){
			QuoteHolder.style.backgroundColor = Bolin;
			credits.style.backgroundColor = Bolin
			contact.style.backgroundColor = Bolin;
			creditsInfo.style.backgroundColor = Bolin;
		}
		if(color=="suki"){
			QuoteHolder.style.backgroundColor = Suki;
			credits.style.backgroundColor = Suki;
			contact.style.backgroundColor = Suki;
			creditsInfo.style.backgroundColor = Suki;
		}
		if(color=="Jeong Jeong"){
			QuoteHolder.style.backgroundColor = Jeong_Jeong;
			credits.style.backgroundColor = Jeong_Jeong;
			contact.style.backgroundColor = Jeong_Jeong;
			creditsInfo.style.backgroundColor = Jeong_Jeong;
		}
		if(color=="Gyatso"){
			document.getElementById('contact').style.backgroundColor = Gyatso;
			document.getElementById('credits').style.backgroundColor = Gyatso;
			document.getElementById('QuoteHolder').style.backgroundColor = Gyatso;
			document.getELementById('creditsInfo').style.backgroundColor = Gyatso;
		}*/
}
function refresh(){
	setTimeout(Quote, 1000);
}
var CreditsHoldUp10 = 0;
function appear(){
CreditsHoldUp10++;
if(CreditsHoldUp10 == 1){
	alert('hey, i just wanna say: due to lack of time(and motivation) this part has a few problems. to hide it again you will have to reload and the styling just doesn\'t work very often. sorry for this.')
}	
document.getElementById('creditsInfo').style.display = "block";
document.getElementById('credits').style.width = "30%";
document.getElementById('credits').style.height = "90vh";
}
function dissapear(){
	document.getElementById('creditsInfo').style.width = "11%";
	document.getElementById('creditsInfo').style.height = "40px";
}
function contact(){
	alert('email: dustinjoosenDeveloper@gmail.com. instagram: @the_last_nonbender .we both are always open for questions')
}
countDown();
function countDown(){
	timer()
	var d = new Date();
	var Day = ((27)-d.getDate());
	//var Day = 0;
	var Hours = ((23)-d.getHours());
	//var Hours = 0;
	var Minutes = ((59)-d.getMinutes());
	//var Minutes = 0;
	var Seconds = ((59)-d.getSeconds());
	document.getElementById('countdownTimer').innerHTML = Day +" days, " + Hours + " hours, " + Minutes + " minutes, " + Seconds + " seconds.";
	if(Day==0){
		if(Hours==0){
			if(Minutes==0){
				if(Seconds==0){
					document.getElementById('QuotesScreen').style.display="block";
					document.getElementById('CountDownScreen').style.display="none";		//TESTEN OF DIT DAADWERKELIJK WERKT!!!
					clearTimeout(y)
				}
			}
		}
	}
}
function timer(){
		y = setTimeout(countDown,1000);
}
var timeOnTheWebsite = 0;
toLongOnTheWebsite();
function toLongOnTheWebsite(){
	OneSecondUp()
	timeOnTheWebsite++;
	if(timeOnTheWebsite==600){
		alert('what are you doing so long on this site? its been 10 minutes already XD')
	}
}
function OneSecondUp(){
	setTimeout(toLongOnTheWebsite,1000);
}