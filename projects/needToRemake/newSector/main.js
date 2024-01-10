$(document).ready(function(){
	//global variables//
	var answer1;
	var answer2;
	var answer3;
	//button control//
	var question_number = 1;
	$("#prev").on("click",function(){
		question_number--;
		update_screen();
		if(question_number == 0){
			$("#prev").css("display","none");
		}
		if(question_number < 5){
			$("#next").css("display","inline");
		}
	})
	$("#next").on("click",function(){
		question_number++;
		update_screen();
		if(question_number > 0){
			$("#prev").css("display","inline")
		}
		if(question_number == 5){
			$("#next").css("display","none");
		}
	})
	//making screens//
	function make_screen(question_text, image_src, answers){
		var question = $("<h1 id='question_text'></h1>").text(question_text);
		var image = $("<img src='images/" + image_src + " '/>");
		answer1 = ("<button class='answer_button' id='answer1'>" + answers[0] + "</button>");
		answer2 = ("<button class='answer_button' id='answer2'>" + answers[1] + "</button>");
		answer3 = ("<button class='answer_button' id='answer3'>" + answers[2] + "</button>");
		$("#question_text_holder").append(question);
		$("#question_image_holder").append(image);
		$("#question_answers_holder").append(answer1).append(answer2).append(answer3);
	}
	//emptying the screen//
	function empty_screen(){
		$("#question_text_holder").empty();
		$("#question_image_holder").empty();
		$("#question_answers_holder").empty();
	}
	//making screens based on question_number//
	function update_screen(){
		var question;
		var image_src;
		var answers;

		if(question_number == 1){
			question = question1.question;
			image_src = question1.image_src;
			answers = [question1.answer1, question1.answer2, question1.answer3];

		}else if(question_number == 2){
			question = question2.question;
			image_src = question2.image_src;
			answers = [question2.answer1, question2.answer2, question2.answer3];

		}else if(question_number == 3){
			question = question3.question;
			image_src = question3.image_src;
			answers = [question3.answer1, question3.answer2, question3.answer3];

		}else if(question_number == 4){
			question = question4.question;
			image_src = question4.image_src;
			answers = [question4.answer1, question4.answer2, question4.answer3];

		}else if(question_number == 5){
			question = question5.question;
			image_src = question5.image_src;
			answers = [question5.answer1, question5.answer2, question5.answer3];
		}
		else{
			return;
		}
		empty_screen();
		var screen = make_screen(question,image_src, answers);
	}
	update_screen();

	//onclicks for the answer buttons//
	$("#answer1").on("click",function(){
		clicked(1);
 	})
	$("#answer2").on("click",function(){
		clicked(2);
	})	
	$("#answer3").on("click",function(){
		clicked(3);
	})
	//todo: when this works, try it with a for loop.//

	//returns output for when an answer button is clicked//
	function clicked(click){
		if(click == 1){		//1 is now for testing, click is currently set as 1 also//
			$("#answer" + click).css("background-color", "green");
		}else{
			$("#answer" + click).css("background-color", "red");
		}
	}
})